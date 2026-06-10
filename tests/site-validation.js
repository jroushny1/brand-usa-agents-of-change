#!/usr/bin/env node

/**
 * Site Validation Test Suite
 * Tests for schema markup, layout issues, links, and content freshness
 *
 * Requires a running server (not wired to npm test for that reason):
 *   npm run build && npm run start   # in one terminal
 *   node tests/site-validation.js http://localhost:3000 [report.md]
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class SiteValidator {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.errors = [];
    this.warnings = [];
    this.passes = [];
  }

  async validateAll() {
    console.log(`\n🔍 Running validation against: ${this.baseUrl}\n`);

    await this.validateJSONLD();
    await this.validateNavLayout();
    await this.validateLinks();
    await this.validateFreshnessIndicators();
    await this.validatePodcastSchema();

    return this.generateReport();
  }

  async validateJSONLD() {
    console.log('📋 Checking JSON-LD schema markup...');

    try {
      // Fetch pages and check for JSON-LD
      const pages = [
        '/',
        '/about',
        '/library',
        '/podcast/fandom-unpacked-ai-live-entertainment',
        '/webinar/ai-101'
      ];

      for (const page of pages) {
        const url = `${this.baseUrl}${page}`;
        const html = await this.fetchHTML(url);

        // Extract JSON-LD scripts
        const jsonLdMatches = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/gs);

        if (!jsonLdMatches || jsonLdMatches.length === 0) {
          this.errors.push(`Missing JSON-LD schema on ${page}`);
          continue;
        }

        // Validate each JSON-LD block
        for (const match of jsonLdMatches) {
          const jsonStr = match.replace(/<script type="application\/ld\+json">|<\/script>/g, '');
          try {
            const jsonLd = JSON.parse(jsonStr);

            // Check for required @context and @type
            if (!jsonLd['@context']) {
              this.errors.push(`JSON-LD missing @context on ${page}`);
            }
            if (!jsonLd['@type']) {
              this.errors.push(`JSON-LD missing @type on ${page}`);
            }

            this.passes.push(`Valid JSON-LD schema on ${page}`);
          } catch (e) {
            this.errors.push(`Invalid JSON-LD on ${page}: ${e.message}`);
          }
        }
      }
    } catch (error) {
      this.errors.push(`JSON-LD validation failed: ${error.message}`);
    }
  }

  async validateNavLayout() {
    console.log('🧭 Checking nav/header layout...');

    try {
      const html = await this.fetchHTML(this.baseUrl);

      // Check for common overlapping issues
      // This is a basic check - in production you'd use Playwright for actual rendering checks
      const hasFixedNav = html.includes('fixed') && html.includes('nav');
      const hasProperZIndex = html.includes('z-10') || html.includes('z-50');

      if (hasFixedNav && !hasProperZIndex) {
        this.warnings.push('Fixed navigation detected without z-index - check for overlapping');
      } else {
        this.passes.push('Nav/header layout appears correct');
      }
    } catch (error) {
      this.errors.push(`Nav layout validation failed: ${error.message}`);
    }
  }

  async validateLinks() {
    console.log('🔗 Checking internal links...');

    try {
      const html = await this.fetchHTML(this.baseUrl);

      // Extract internal links
      const linkMatches = html.match(/href="([^"]+)"/g);
      if (!linkMatches) {
        this.warnings.push('No links found to validate');
        return;
      }

      const internalLinks = linkMatches
        .map(m => m.match(/href="([^"]+)"/)[1])
        .filter(href =>
          href.startsWith('/') &&
          !href.startsWith('//') &&
          !href.includes('#')
        );

      const uniqueLinks = [...new Set(internalLinks)];
      console.log(`  Found ${uniqueLinks.length} unique internal links to check`);

      let checkedCount = 0;
      for (const link of uniqueLinks.slice(0, 10)) { // Check first 10 to avoid rate limits
        const url = `${this.baseUrl}${link}`;
        try {
          const response = await fetch(url);
          if (response.status === 200) {
            checkedCount++;
          } else {
            this.errors.push(`Link returns ${response.status}: ${link}`);
          }
        } catch (e) {
          this.errors.push(`Link failed to load: ${link}`);
        }
      }

      this.passes.push(`Validated ${checkedCount} internal links`);
    } catch (error) {
      this.errors.push(`Link validation failed: ${error.message}`);
    }
  }

  async validateFreshnessIndicators() {
    console.log('📅 Checking freshness indicators...');

    try {
      const html = await this.fetchHTML(this.baseUrl);

      // Look for common date patterns
      const dateMatches = html.match(/\d{4}-\d{2}-\d{2}/g);

      if (!dateMatches || dateMatches.length === 0) {
        this.warnings.push('No date indicators found on homepage');
        return;
      }

      // Check if dates are reasonable (not in the future, not too old)
      const today = new Date();
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

      for (const dateStr of dateMatches) {
        const date = new Date(dateStr);
        if (date > today) {
          this.errors.push(`Future date found: ${dateStr}`);
        } else if (date < oneYearAgo) {
          this.warnings.push(`Old date found: ${dateStr} (check if content is stale)`);
        }
      }

      this.passes.push('Freshness indicators present and reasonable');
    } catch (error) {
      this.errors.push(`Freshness validation failed: ${error.message}`);
    }
  }

  async validatePodcastSchema() {
    console.log('🎙️ Checking podcast schema...');

    try {
      // Check a sample podcast page
      const html = await this.fetchHTML(`${this.baseUrl}/podcast/fandom-unpacked-ai-live-entertainment`);

      // Look for PodcastEpisode schema
      const hasPodcastSchema = html.includes('PodcastEpisode') || html.includes('Podcast');

      if (!hasPodcastSchema) {
        this.errors.push('Podcast pages missing PodcastEpisode schema');
        return;
      }

      // Check for Apple Podcasts and Spotify metadata
      const hasAppleMetadata = html.includes('apple-podcasts') || html.includes('itunes') || html.includes('podcasts.apple');
      const hasSpotifyMetadata = html.includes('spotify');

      if (!hasAppleMetadata) {
        this.warnings.push('Podcast pages missing Apple Podcasts metadata');
      }
      if (!hasSpotifyMetadata) {
        this.warnings.push('Podcast pages missing Spotify metadata');
      }

      if (hasPodcastSchema && hasAppleMetadata && hasSpotifyMetadata) {
        this.passes.push('Podcast schema includes Apple and Spotify metadata');
      }
    } catch (error) {
      this.errors.push(`Podcast schema validation failed: ${error.message}`);
    }
  }

  async fetchHTML(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    return await response.text();
  }

  generateReport() {
    const totalIssues = this.errors.length + this.warnings.length;
    const passed = this.errors.length === 0;

    console.log('\n' + '='.repeat(60));
    console.log('📊 VALIDATION REPORT');
    console.log('='.repeat(60));

    if (this.passes.length > 0) {
      console.log('\n✅ PASSED:');
      this.passes.forEach(p => console.log(`  • ${p}`));
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.warnings.forEach(w => console.log(`  • ${w}`));
    }

    if (this.errors.length > 0) {
      console.log('\n❌ ERRORS:');
      this.errors.forEach(e => console.log(`  • ${e}`));
    }

    console.log('\n' + '='.repeat(60));
    console.log(`Total Issues: ${totalIssues} (${this.errors.length} errors, ${this.warnings.length} warnings)`);
    console.log(`Status: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
    console.log('='.repeat(60) + '\n');

    return {
      passed,
      errors: this.errors,
      warnings: this.warnings,
      passes: this.passes
    };
  }

  generateMarkdownReport() {
    const report = [];
    report.push('# Site Validation Report');
    report.push(`\nGenerated: ${new Date().toISOString()}`);
    report.push(`\nTarget: ${this.baseUrl}\n`);

    if (this.passes.length > 0) {
      report.push('## ✅ Passed Checks\n');
      this.passes.forEach(p => report.push(`- ${p}`));
      report.push('');
    }

    if (this.warnings.length > 0) {
      report.push('## ⚠️ Warnings\n');
      this.warnings.forEach(w => report.push(`- ${w}`));
      report.push('');
    }

    if (this.errors.length > 0) {
      report.push('## ❌ Errors\n');
      this.errors.forEach(e => report.push(`- ${e}`));
      report.push('\n### Suggested Fixes\n');

      this.errors.forEach(error => {
        if (error.includes('Missing JSON-LD')) {
          report.push('- Add JSON-LD schema to page metadata');
        } else if (error.includes('Link returns')) {
          report.push('- Check and fix broken internal links');
        } else if (error.includes('Future date')) {
          report.push('- Correct date values to valid ranges');
        }
      });
      report.push('');
    }

    const totalIssues = this.errors.length + this.warnings.length;
    report.push(`\n## Summary\n`);
    report.push(`- Total Issues: ${totalIssues}`);
    report.push(`- Errors: ${this.errors.length}`);
    report.push(`- Warnings: ${this.warnings.length}`);
    report.push(`- Status: ${this.errors.length === 0 ? '✅ PASSED' : '❌ FAILED'}`);

    return report.join('\n');
  }
}

// CLI Usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const baseUrl = args[0] || 'http://localhost:3000';
  const outputFile = args[1];

  const validator = new SiteValidator(baseUrl);

  validator.validateAll().then(result => {
    if (outputFile) {
      const markdown = validator.generateMarkdownReport();
      fs.writeFileSync(outputFile, markdown);
      console.log(`\n📄 Report saved to: ${outputFile}`);
    }

    process.exit(result.passed ? 0 : 1);
  }).catch(error => {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  });
}

module.exports = SiteValidator;
