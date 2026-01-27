'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import HLSPlayer from './hls-player'
import KeyTakeawaysList from '@/components/webinar/KeyTakeawaysList'
import LearningOutcomesList from '@/components/webinar/LearningOutcomesList'
import TranscriptSection from '@/components/webinar/TranscriptSection'
import ChaptersList from '@/components/webinar/ChaptersList'
import ResourcesList from '@/components/webinar/ResourcesList'

// This would come from your database
const webinarData = {
  'intro-ai-agents': {
    id: 'intro-ai-agents',
    title: 'Introduction to AI Agents',
    description: 'Learn how AI agents can transform your DMO operations with practical examples and implementation strategies. This comprehensive introduction covers the four types of AI agents (Operator, Researcher, Builder, and Automator), demonstrates real-world tools, and explores the future of agentic AI in destination marketing.',
    duration: '38 min',
    muxPlaybackId: '3TPl1Jgmg01b9BdEXU4WVtJbz4DSetOA7TsyHGvjxJQs',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Transcript (server-rendered as static HTML)
    transcript: `Hello and welcome to this session on Introduction to Agents. My name is Janette Roush, and I'm the Chief AI Officer for Brand USA. Today, we're going to be talking about AI agents. And AI agents are one of the hottest topics right now when it comes to how AI is evolving as a technology and what it means for work specifically.

One of the phrases that you're going to hear me say a lot during this presentation is agentic AI or agentic tools or agentic systems. Agentic is a made-up word. It sounds fancier than just agent, but it means the same exact thing. Somebody was trying to make a regular word sound fancier and so they made it into agentic, and so if you hear me say the word agentic throughout this presentation, I'm just talking about agents.

So I want to start with a definition. What is an AI agent? An AI agent is goal-oriented software that's able to plan and execute multi-step tasks in order to achieve a specific objective. So the way that I like to think about this is a chatbot that you just ask questions and it responds, that is not an agent. But the minute that that software is able to take actions, is able to make decisions without you, and is able to work through complex workflows—even if you're not there, even if you're not prompting it every single time—that is when it becomes an agent.

And so the simplest way to think about agents is that they can plan and take action without constant human input, and that is the main distinction between just a regular chatbot and an AI agent.

So what I've done is I have tried to group or categorize agents that are particularly relevant for DMOs into four main buckets. I call them the operator agents, researcher agents, builder agents, and automator agents. And as I go through each of these four different types, what you're going to see is there's going to be actual tools that you can use that fall into each of these different categories.

And so the first category is operator agents. Operator agents are agents that are essentially using the mouse for you. They're doing browser tasks. They're automating things that you would do yourself using your mouse on your computer. And so for DMOs, this might be automated lead generation, scraping a particular website to pull down information, being able to extract data from a website in order to reformat it or put it somewhere else.

And then the actual tools that are examples of operators, there's one called Browse.ai, there's another one called Manus.im. Both of these are tools that essentially are using the internet as if they were a human being, clicking through things and performing tasks for you.

And so what I want to do real quick is I'm going to show you just a demo using a different tool, which is ChatGPT, and I'm going to use it to demonstrate what an operator agent might do for a DMO.

So let me jump over to ChatGPT. This is using the 01 model, which is their reasoning model. And so I'm going to give it a really specific prompt, a really specific task, and I want to see if it can actually complete this task for me using operator agent functionality.

And so I'm saying, please go to usa.gov, which is the official website of the US government. It has a listing of all federal holidays. I want you to use your web browsing capabilities. I want you to go to that site and compile a comprehensive list of all federal holidays with detailed information, and then once you've compiled that information, output it in a CSV format so that I can download that data and then I can either import it into Excel or I can import it into a CRM or whatever tool I'm using.

And so as I hit enter on this, what ChatGPT is going to do is it's thinking first, it's reasoning through what steps it needs to take in order to answer this particular task, this particular prompt. And then once it's finished reasoning, it's going to start taking actions. And the actions that it's taking are all browser-based, meaning it's going to go to the website, it's going to read through the website, it's going to find the information, and then it's going to compile it and respond back.

And so this is what it means to be an operator agent. And while it's doing that in the background, what I'm going to do is I'm going to show you just one other example of what an operator agent could be used for. So on this particular website, I'm on Manus.im, and this is a tool that has a number of different what they call AI workers that they've already pre-trained for specific tasks.

And so you can have an AI worker who's going to generate creative ads. There is one that's going to do competitive price tracking. And so this is a really interesting one for DMOs because what it can do is you can tell it, "Here are three different competitors in my competitive set. I want you to monitor their websites and I want you to track any changes in the pricing for hotel rooms." And it will go to those websites, it will look at the pricing for different hotel rooms or different products that are being offered by those competitors, and then it will compile them in a list and will send you regular updates every time that the pricing changes.

And so for doing competitive analysis, this is a really, really powerful use case. It's being able to essentially automate the collection of data from competitive sets in order to do regular analysis and make sure that you are staying competitive with everybody else who's in your particular market or your competitive set.

And so that's the first example. That's what we mean by an operator agent.

But then if I jump back over to ChatGPT, you can see that ChatGPT has finished this task. It has gone to usa.gov, it has compiled the list of all federal holidays for 2025, and it has provided them right here in this list. And then it has also converted that into a CSV format, which is a file format that's able to be imported into other tools. And so I can download this, I can import it into Excel, I can import it into a Google Sheet, or I can import it into whatever tools I'm using in order to make sure that our marketing calendar is matching up against federal holidays, that we're not scheduling events on federal holidays, or that we are scheduling particular campaigns to launch around specific holidays.

And so that is what it means to be an operator agent. And we're going to come back to this later, but there is one really important caveat with operator agents, which is they still hallucinate.

And so I want to show you one other example. Let me just pull this up real quick.

So I asked ChatGPT, I gave it this prompt. I said, "Imagine you are a lead generation specialist for a destination marketing organization. Please use your web browsing capabilities to identify 20 corporate meeting planners who work at Fortune 500 companies in the pharmaceutical industry. For each planner, provide the name of their company, their LinkedIn URL, and a brief explanation of why their company might be interested in hosting a corporate event in a U.S. destination."

So this is essentially a task that a salesperson at a DMO would be doing. They would be researching and trying to find leads, trying to find new companies that they could be reaching out to in order to book their corporate events or their association conferences at their destination.

And so ChatGPT ran through this list, and it came back with 20 different leads. And it gave me the person's name, the company name, and their LinkedIn URL. And then it gave me a brief explanation of why their company might be interested in hosting a corporate event.

So that seems great. It seems like it accomplished the task. I could hand this to my sales team and they could start reaching out to these people. But what I did is I went through each of these, and I clicked on the LinkedIn URLs to see, does this person actually exist? And I found multiple examples where the person did not exist. There was a LinkedIn profile that ChatGPT created, but it did not match any actual LinkedIn profile.

And so this one right here, Alicia Grant, who supposedly works at Eli Lilly, when I clicked on this LinkedIn profile, it took me to a profile for somebody completely different. It was not Alicia Grant, and it was not somebody who worked at Eli Lilly. And so what ChatGPT did is it hallucinated this person. It made them up. It created a plausible-sounding name, a plausible-sounding company, and a plausible-sounding URL, and then it responded as if that person was real, even though they're not.

And so this is one of the most important things to understand, is that even though agents can do incredible, powerful, impressive things, they still have this fundamental issue of hallucination where they will make things up, and those made-up things will sound really convincing and they will look really real, and so you've got to be on guard when you're using these tools to make sure that you're not trusting them blindly, that you are actually verifying the information that they give you.

Now, the solution to this—and we're going to come back to this later, but the solution to this is to connect the agents to a source of truth, to a database that has verified, correct information. And the way that you do that is through a technology called the Model Context Protocol, or MCP, which is something that we're going to cover in another session.

But just to give you a brief overview, MCP is a way for AI to connect to authoritative databases and pull information that is verified and correct in real time. And so instead of the AI just making things up, the AI is able to query a database and get back information that is accurate. And so for things like accessible travel, where you need to make sure that the ramp that you're recommending actually exists, you can use MCP to connect to an authoritative database that has verified information about accessible travel routes. Or if you're trying to find the capacity of a venue, instead of the AI just guessing at what the capacity might be, you can use MCP to query a database that has the actual capacity listed for that particular venue.

And so MCP is the solution to this hallucination problem, and it's going to be critical as we move forward with using these agents in high-stakes scenarios where we need to make sure that the information that the agents are providing is accurate and correct.

All right, so that is operator agents. That is the first category.

The second category is researcher agents. And so researcher agents are agents that are able to perform really deep analysis and synthesis of information. And so unlike a simple search tool where you just type in a keyword and it brings back a list of links, a researcher agent is able to go through dozens or even hundreds of different sources, analyze them, synthesize the information, and then compile a report that gives you strategic insights.

And so for DMOs, this means you could have a researcher agent that analyzes all of your competitors at once, that looks at what they're doing, looks at their marketing strategies, looks at their pricing, looks at their campaigns, and then synthesizes that information into a single report that you can use for your strategic planning. Or you could use a researcher agent to do market research, to look at trends in the travel and tourism industry, to look at what travelers are saying on social media, and then compile that information into insights that you can use for your marketing.

And so researcher agents are really powerful for strategic intelligence, for understanding the market, for understanding your competition, and for making data-driven decisions.

All right, the third category is builder agents. And so builder agents are agents that can create digital products from just natural language prompts. And so instead of having to hire a developer or having to learn how to code yourself, you can just describe what you want in plain English, and the builder agent will create it for you.

And so tools like Lovable.ai, for example, are able to generate fully functional websites from just a text prompt. You can say, "I want a website that has a homepage, an about page, a contact form," and then Lovable will generate that entire website for you, with code, fully functional, ready to deploy.

Another example is Claude Artifacts, which is a feature inside of Claude, and it's able to create interactive applications, data visualizations, games, tools—all sorts of different digital products—from just a conversational prompt.

And so for tourism marketers, this means you can do rapid prototyping. You can test out ideas really quickly without needing to have a whole engineering team behind you. You can build interactive tools for your stakeholders, you can build simple applications that help with internal workflows, and you can do all of that without needing to know how to code.

Let me actually show you an example of this. So I'm going to jump over to Lovable.ai, and I'm just going to show you really quickly how this works.

So Lovable is a tool where you just describe what you want, and it builds a website for you. And so I'm going to give it a prompt. I'm going to say, "Create a simple registration website for a tourism conference. It should have a hero section with an image, an about section, a registration form that collects name, email, and company, and a footer with contact information."

And so I'm going to hit enter on this, and Lovable is going to start building this website for me. And as it's building it, what you're going to see is it's writing the code in real time, it's generating the design, and then it's going to give me a live preview of what this website looks like.

And so this is happening in real time. This is not a template. This is not something that was pre-built. This is being generated from scratch based on the prompt that I just gave it. And so within just a few seconds, I now have a fully functional website that I can deploy, that I can share with people, that I can use for an actual event.

And so that is the power of builder agents. You can create digital products incredibly quickly without needing to have technical skills.

All right, and then the fourth and final category is automator agents. And so automator agents are agents that orchestrate workflows across multiple different platforms. And so these are the agents that are connecting your CRM to your email marketing tool to your calendar to your website, and they're automating multi-step processes that would normally require a lot of manual work.

And so tools like N8N, Agent.ai, Google Gemini Gems—these are all examples of automator agents. They're able to take a workflow that you describe, and then they set up all of the connections and all of the automation so that it runs without you having to do anything.

And so for DMOs, this might mean automatically updating your CRM whenever somebody fills out a form on your website. Or it might mean automatically sending follow-up emails after a sales call. Or it might mean automatically generating reports and sending them to your stakeholders on a regular schedule.

And so automator agents are really the infrastructure layer for AI-powered operations. They're what allow you to connect all of these different tools and systems together and have them work seamlessly without you having to manually do all of that work.

Let me show you an example of Agent.ai, which is one of these automator agents.

So Agent.ai is a platform where you can build agents that perform specific tasks. And one of the examples that they have is a sales intelligence agent. And so what this agent does is you give it a LinkedIn profile URL, and then it goes out, it analyzes that LinkedIn profile, it looks at the person's work history, their connections, their posts, and then it compiles a report that gives you insights about that person that you can use for sales outreach.

And so let me just show you how this works. I'm going to give it a LinkedIn profile. I'm going to give it my own LinkedIn profile just as an example. And so I'm going to paste that in, and then I'm going to hit "run agent," and Agent.ai is going to start doing its work.

And so what it's doing is it's going to that LinkedIn profile, it's analyzing all of the information, and then it's going to compile a report for me. And this report is going to include things like what are the person's key skills, what are they interested in, what kind of content do they post about, what are some potential conversation starters that you could use if you were going to reach out to them.

And so this is incredibly useful for sales teams because instead of having to manually research every single lead, you can just give the agent a list of LinkedIn profiles, and it will do all of that research for you and give you a report that you can use to personalize your outreach.

And so that is automator agents. They're orchestrating all of these different workflows, they're connecting to different platforms, and they're doing the work for you so that you can focus on the strategic, high-value tasks.

All right, so those are the four categories: operator agents, researcher agents, builder agents, and automator agents. And understanding these four categories is really helpful because it allows you to think about, "Okay, what are the different use cases for AI agents in my organization? What are the types of tasks that I could be automating or augmenting with these different types of agents?"

Now, I want to talk a little bit about what the future looks like. And so one of the things that's happening right now is we're moving from a world where you have individual agents that do specific tasks to a world where you have swarms of agents that work together.

And so imagine a scenario where you have a DMO manager who is directing a whole team of AI agents. One agent is tracking sentiment on social media. Another agent is drafting emails to stakeholders. Another agent is generating custom economic impact reports for different audiences. And all of these agents are working together, they're coordinating, and they're accomplishing complex tasks without the human having to do all of that manual work.

And so the role of the human in this future is not to do the tasks themselves, but to be the strategic director of these agents. You're the one who's setting the goals, you're the one who's making the decisions, you're the one who's prioritizing what needs to get done, and then the agents are the ones who are doing the actual execution.

And so this is a really exciting future because it means that humans can focus on the things that humans are best at—strategy, relationships, creativity, critical thinking—and the agents can handle all of the repetitive, time-consuming tasks that take up so much of our time right now.

Now, coming back to this idea of the source of truth and MCP, this is going to be absolutely critical as we move into this future of agent swarms. Because if you have a whole swarm of agents working together and they're all hallucinating, they're all making things up, then the output is going to be completely unreliable. And so we need to make sure that these agents are connected to authoritative, verified sources of truth so that the information they're providing is accurate.

And so the Model Context Protocol is this technology that allows AI to connect to databases and query them in real time. And so for tourism, this could mean things like verifying accessible travel routes, checking venue capacities in real time, making sure that attraction operating hours are accurate—all of these things that are really critical for travel planning and where hallucinations could cause real problems for real people.

And so MCP is the solution, and it's going to be essential as we move forward with using AI agents in high-stakes scenarios.

All right, so just to wrap up, the four types of agents: operators, researchers, builders, and automators. Operators are using the mouse for you, researchers are doing deep analysis, builders are creating digital products, and automators are connecting different systems together.

All of these have really powerful use cases for DMOs, and the future is moving toward a world where we have swarms of these agents working together, coordinated by humans who are acting as strategic directors.

And then the final piece is making sure that these agents are connected to sources of truth through technologies like MCP so that the information they provide is accurate and reliable.

And so my encouragement for all of you is to start experimenting with these tools. Start small, think big. Try out one agent in one area of your organization. See how it works. Learn from it. Iterate. And then start to expand and think about how you can use agents across your entire organization to transform how you work.

At Brand USA, our mantras when it comes to AI are: start small but think big, embrace both top-down strategy and bottom-up experimentation, and remember—using AI at work is not cheating, it's evolving how we work.

So thank you so much for joining me for this session on Introduction to Agents. I'm really excited to see how all of you are going to be using agents at your destinations, and I can't wait to hear about the successes that you have. Thank you.`,
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI agents are goal-oriented software that can plan and execute multi-step tasks. They can be categorized into four main "buckets": Operators (who "use the mouse for you"), Researchers (who perform deep analysis), Builders (who create digital products from text), and Automators (who connect different apps).',
      'Practical, accessible tools already exist for non-technical users to leverage AI agents, such as using Lovable.ai to build a website from a prompt or using Agent.ai to create a workflow that analyzes LinkedIn profiles for sales intelligence.',
      'Agents still suffer from hallucinations (e.g., fabricating a business in a research task). The solution is connecting them to a "source of truth"—a verified database—using technologies like Model Context Protocol (MCP), which allows AI to pull real-time, accurate data for tasks like planning accessible travel routes or finding venue capacities.',
      'The future of work will involve employees acting as "strategic directors" of AI agent "swarms." For example, a DMO manager could deploy multiple agents to track local sentiment, draft stakeholder emails, and customize economic impact reports, freeing humans to focus on relationships and strategy.',
      'When using free AI tools, especially from foreign companies (like Manus.im), remember the adage: "If something\'s free, we are the product." Be cautious about inputting confidential or proprietary work information.'
    ],
    topics: [
      'AI Agents',
      'Agentic AI',
      'Brand USA',
      'AI in Tourism',
      'Destination Marketing Organization (DMO)',
      'Operator Agents',
      'Researcher Agents',
      'Builder Agents',
      'Automator Agents',
      'Workflow Automation',
      'AI Hallucinations',
      'Model Context Protocol (MCP)',
      'Source of Truth (for AI)',
      'Lead Generation',
      'Sales Intelligence',
      'Web Scraping',
      'No-Code AI Tools',
      'Future of Work',
      'Data Privacy',
      'Pika.art',
      'Browse.ai',
      'Lovable.ai',
      'Claude Artifacts',
      'N8N',
      'Agent.ai',
      'Google Gemini Gems',
      'Custom GPTs'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry leaders, Marketing and sales professionals (especially B2B), Business strategists and innovation officers, Non-technical professionals seeking to use AI for practical tasks',
      tertiary: 'Meeting and event planners'
    },
    learningOutcomes: [
      'Define what an AI agent is and distinguish it from a standard chatbot.',
      'Categorize the four main types of AI agents (Operator, Researcher, Builder, Automator) and their functions.',
      'Identify specific, real-world tools to perform agentic tasks like lead generation (ChatGPT), web scraping (Browse.ai), website creation (Lovable.ai), and workflow automation (Agent.ai).',
      'Understand the current limitations of AI agents, such as hallucination, and the importance of using a "source of truth" like a Model Context Protocol (MCP) database.',
      'Envision the near-future of work where employees will manage "swarms" of AI agents to automate complex tasks, shifting the human role toward strategy and oversight.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Attention-getting graphics generator', url: 'https://pika.art' },
      { name: 'Manus.im', description: 'Operator agent for creative generation', url: 'https://manus.im' },
      { name: 'Browse.ai', description: 'Operator agent for web scraping', url: 'https://browse.ai' },
      { name: 'Lovable', description: 'Builder agent for website creation', url: 'https://lovable.dev' },
      { name: 'Claude (by Anthropic)', description: 'Builder agent with Artifacts feature', url: 'https://claude.ai' },
      { name: 'N8N', description: 'Automator agent for AI-powered workflows', url: 'https://n8n.io' },
      { name: 'Agent.ai', description: 'Automator agent for building sales intelligence agents', url: 'https://agent.ai' },
      { name: 'Ethan Mollick', description: 'Expert on Claude Artifacts examples', url: 'https://www.linkedin.com/in/emollick/' },
      { name: 'HubSpot', description: 'CRM platform, origin of Agent.ai co-founder', url: 'https://www.hubspot.com' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Brand USA\'s AI Agenda' },
      { time: 46, title: 'What is an AI Agent? (Software that can understand and achieve a goal)' },
      { time: 70, title: 'The Four Buckets of AI Agents' },
      { time: 94, title: 'Bucket 1: Operator Agents' },
      { time: 118, title: 'Example: Using ChatGPT for DMO lead generation' },
      { time: 158, title: 'Warning: AI agents still hallucinate' },
      { time: 199, title: 'Example: Using Manus.im for creative generation' },
      { time: 266, title: 'Example: Using Browse.ai for web scraping' },
      { time: 337, title: 'Bucket 2: Researcher Agents' },
      { time: 365, title: 'Example: Deep research for a competitive analysis (30 NTOs)' },
      { time: 408, title: 'Bucket 3: Builder Agents' },
      { time: 416, title: 'Example: Building a registration website with Lovable' },
      { time: 464, title: 'Example: Building mini-apps with Claude Artifacts' },
      { time: 504, title: 'Bucket 4: Automator Agents' },
      { time: 511, title: 'Example: N8N for AI-powered workflows' },
      { time: 540, title: 'Demo: Building a sales intelligence agent with Agent.ai' },
      { time: 644, title: 'Example: Automating daily briefs with Google Gemini Gems' },
      { time: 707, title: 'The Future of Work: "Swarms" of Agents' },
      { time: 764, title: 'Empowering humans to do "the people part of the job"' },
      { time: 797, title: 'The Core Problem: Agents Need a "Source of Truth"' },
      { time: 811, title: 'The Core Solution: Model Context Protocol (MCP)' },
      { time: 844, title: 'MCP Application: Accessibility (Curb Cut Database)' },
      { time: 866, title: 'MCP Application: DMOs (Venue Capacity Database)' },
      { time: 910, title: 'Brand USA\'s AI Mantras for Learning' },
    ],
  },
  'ai-101': {
    id: 'ai-101',
    title: 'AI 101',
    description: 'Foundation concepts of AI for tourism professionals. This comprehensive introduction covers how Large Language Models work, practical prompting strategies, campaign strategy development, AI governance and security, and hands-on ChatGPT setup. Perfect for beginners looking to understand AI fundamentals and start using AI tools professionally.',
    duration: '45 min',
    muxPlaybackId: 'ue02eduy5uif9Do00iXI6jG02u02O600tu00FauvIOLX2Ayg8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI is a creative partner, not a fact database. Large Language Models (LLMs) are math-based algorithms that predict the next word; they are not "checking Wikipedia." This means they will "hallucinate" (make things up) and users are responsible for fact-checking.',
      'The best AI prompting is a step-by-step process. Instead of asking for a final product at once (like "write a 6-page paper"), you should break the task into components: ask for thesis statements, then an outline, and then refine each section.',
      '"Priming the prompt" is key to getting factual results. To avoid hallucinations in complex tasks like campaign strategy, you must provide your own "source of truth"—upload your own research (from Google, Perplexity, or documents) into tools like Google NotebookLM or ChatGPT for the AI to analyze.',
      'AI governance is non-negotiable for professional use. Organizations must create AI guidelines, starting with using paid accounts to turn off model training ("Improve the model for everyone"). This prevents proprietary, confidential, or PII (Personally Identifiable Information) from being absorbed into future models, which is a major security and privacy (GDPR) risk.',
      'Start using AI now, even imperfectly. The best way for non-technical users to learn is through daily, practical experimentation (a "bottom-up" approach). Don\'t wait for a "perfect use case"; use it for small tasks like rephrasing emails or writing Excel formulas to build the skills needed to tackle bigger problems.'
    ],
    topics: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'ChatGPT',
      'Prompt Engineering',
      'AI Hallucinations',
      'AI Governance',
      'Data Privacy',
      'Data Security',
      'Personally Identifiable Information (PII)',
      'GDPR',
      'AI Bias',
      'AI Sustainability',
      'Source of Truth',
      'Priming the Prompt',
      'Custom GPTs',
      'ChatGPT Projects',
      'Google NotebookLM',
      'Perplexity.ai',
      'Pika.art',
      'Destination Marketing Organization (DMO)',
      'AI in Tourism',
      'AI Use Cases'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry employees, Marketing and communications professionals, Non-technical users new to Generative AI',
      tertiary: 'Managers and leaders looking to implement AI tools and guidelines'
    },
    learningOutcomes: [
      'Define what a Large Language Model (LLM) is and how it uses context to predict the next word, rather than pulling from a database of facts.',
      'Apply a step-by-step prompting process to break down complex creative tasks, such as developing a campaign strategy or writing a paper.',
      'Utilize "sources of truth" (like Google, Perplexity, and uploaded documents in NotebookLM) to "prime the prompt" and ground AI responses in factual data.',
      'Configure a ChatGPT account for professional use, including disabling model training (data controls) and creating Custom GPTs for specific knowledge bases (like an expense policy).',
      'Identify and mitigate the core risks of AI in the workplace, including hallucinations, data security, PII/privacy violations, and baked-in bias.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Tool for creating AI-generated video clips', url: 'https://pika.art' },
      { name: 'ChatGPT (by OpenAI)', description: 'The primary LLM interface discussed', url: 'https://chat.openai.com' },
      { name: 'Google Gemini', description: 'Google\'s LLM, including NotebookLM', url: 'https://gemini.google.com' },
      { name: 'Claude (by Anthropic)', description: 'An alternative LLM', url: 'https://claude.ai' },
      { name: 'Microsoft Copilot', description: 'Microsoft\'s AI assistant', url: 'https://copilot.microsoft.com' },
      { name: 'Perplexity.ai', description: 'An AI-native search engine for research', url: 'https://www.perplexity.ai' },
      { name: 'Google NotebookLM', description: 'A Google tool for uploading and analyzing source documents', url: 'https://notebooklm.google.com' }
    ],
    chapters: [
      { time: 0, title: 'Introduction: Generative AI 101' },
      { time: 91, title: 'What is ChatGPT? (It\'s an interface for an LLM)' },
      { time: 150, title: 'How LLMs work: Predicting the next word (not facts)' },
      { time: 219, title: 'AI is not a database of facts (it hallucinates)' },
      { time: 242, title: 'Getting past the "fear of the blank prompt"' },
      { time: 285, title: 'Use Case: Working with data (Excel formulas)' },
      { time: 344, title: 'Interactive Prompt: "Minnesota\'s winter weather"' },
      { time: 450, title: '"How to cheat": Breaking down a task step-by-step (Iliad example)' },
      { time: 580, title: '"It is not cheating to use AI" at work' },
      { time: 639, title: 'Case Study: Creating a campaign strategy using AI' },
      { time: 687, title: 'Priming the prompt with a "source of truth"' },
      { time: 735, title: 'Using Google and Perplexity.ai for research' },
      { time: 797, title: 'Using Google\'s NotebookLM to analyze sources' },
      { time: 1004, title: 'The "human in the loop" (Writing the strategic positioning)' },
      { time: 1043, title: 'Watch-outs & Governance (Security, Safety, Integrity)' },
      { time: 1110, title: 'Data Security: Use paid versions & turn off model training' },
      { time: 1231, title: 'Data Privacy: Do not upload PII (GDPR / EU AI Act)' },
      { time: 1354, title: 'Risk: Hallucinations (Personal bio example)' },
      { time: 1450, title: 'Risk: Bias (Human bias in training data)' },
      { time: 1524, title: 'Risk: Sustainability (Energy and water use)' },
      { time: 1677, title: 'How-to: Setting up ChatGPT (Customize instructions)' },
      { time: 1798, title: 'How-to: Data Controls (Turn off "Improve the model for everyone")' },
      { time: 1821, title: 'How-to: Model Selector (GPT-4o vs. Reasoning models)' },
      { time: 1935, title: 'How-to: Custom GPTs (App store analogy)' },
      { time: 2027, title: 'Custom GPT Example: Travel & Expense Policy (and how it failed)' },
      { time: 2145, title: 'How-to: ChatGPT Projects (vs. Custom GPTs)' },
      { time: 2274, title: 'Next Steps: Top-down (Guidelines) & Bottom-up (Daily use)' },
      { time: 2326, title: 'Guidelines: How to handle proprietary data' },
      { time: 2450, title: 'The Bottom-up Approach: "You just have to do it"' },
    ],
    transcript: `Hello everyone and welcome. My name is Janette Roush and I'm the Chief AI Officer for Brand USA. Today we're going to be doing Generative AI 101, which is really the foundation for everything else that we're going to be talking about in this program.

So I want to start by just defining a few terms because there's a lot of jargon in the world of AI and it can get really confusing really quickly. So when we talk about ChatGPT, what we're actually talking about is an interface. ChatGPT is the website, it's the app, it's the thing that you go to. But what's running behind ChatGPT is something called a large language model, or an LLM.

And so when people say LLM, they're talking about the actual AI model that's doing the work. And there are lots of different LLMs. There's GPT-4, which is made by OpenAI. There's Claude, which is made by Anthropic. There's Gemini, which is made by Google. There's a whole bunch of different LLMs, and each of them has different strengths and weaknesses.

But the key thing to understand is that an LLM is essentially a really, really, really sophisticated autocomplete. What it does is it looks at all of the text that you've given it, all of the context, and then it predicts what the next word should be. And then it predicts the next word after that, and the next word after that, and it keeps going until it's finished the response.

And so the way that I like to think about it is, you know when you're typing on your phone and your phone suggests the next word? That's essentially what an LLM is doing, except it's doing it at a much more sophisticated level because it's been trained on an enormous corpus of text from the internet.

But the key thing to understand—and this is really important—is that it is not pulling facts from a database. It is not going to Wikipedia and checking. It is not verifying information. It is predicting what word is most likely to come next based on patterns that it learned during training.

And that means that it can and will make things up. It will hallucinate. It will give you information that sounds very confident and very convincing but is actually completely wrong. And so you as the human user are responsible for fact-checking, for verifying, for making sure that the information that the AI is giving you is actually correct.

So that's the first really important thing to understand. AI is not a database of facts. It is a prediction machine. And that has implications for how you use it.

Now, one of the things that I hear from a lot of people who are new to AI is they have what I call "fear of the blank prompt." They open up ChatGPT, they see that empty text box, and they don't know what to type. They don't know how to start. And so what I want to do is just give you a few really practical examples of how you can use AI in your day-to-day work.

So one of the simplest use cases is just asking it to help you with data. So for example, let's say you're working in Excel and you need to write a formula but you can't remember the syntax. You can just ask ChatGPT, "How do I write a formula that does X, Y, and Z?" and it will give you the formula. And then you can copy and paste that formula into Excel and it works.

Or let's say you're trying to clean up some data. You've got a spreadsheet with a bunch of messy data and you need to reformat it. You can ask ChatGPT, "How do I do this?" and it will tell you.

So those are really simple, practical use cases that don't require any special skills. You just have to know how to ask a question.

Now, let me show you a slightly more interesting example. I'm going to ask ChatGPT a question and we're going to see what happens.

So I'm going to say, "Tell me about Minnesota's winter weather. I want to know what the average temperature is, what the snowfall is like, and what activities are popular during the winter."

And so ChatGPT is going to take that prompt and it's going to generate a response. And you can see it's giving me information about average temperatures, about snowfall, about winter activities like ice fishing and snowmobiling and cross-country skiing.

Now, here's the thing: I don't know if this information is correct. It sounds plausible. It sounds like it could be right. But I would need to go verify this information before I used it in any kind of official capacity, before I put it in a marketing campaign, before I put it on a website. Because the AI could be making this up. It could be hallucinating.

And so this is where the "human in the loop" comes in. The human has to be the fact-checker. The human has to be the one who verifies the information.

Now, let me talk about a really important concept which is "how to cheat" using AI. And I put "cheat" in quotes because it's not actually cheating. But a lot of people think of it as cheating.

So let me give you an example. Let's say you're in school and you have to write a six-page paper about the Iliad. And you think, "Oh, I'll just ask ChatGPT to write the paper for me." So you type in, "Write me a six-page paper about the Iliad," and ChatGPT spits out six pages of text. And you turn it in.

Here's the problem: That paper is probably going to be mediocre at best. It's going to be generic. It's not going to have your voice. It's not going to have your insights. And it's probably going to have some factual errors because, remember, AI hallucinates.

So that's not how you should use AI. That's the lazy way to use AI.

The smart way to use AI is to break the task down into steps. So instead of asking for the final product all at once, you ask for help with each component of the task.

So for the Iliad paper, you would start by asking, "What are some potential thesis statements for a paper about the Iliad?" And ChatGPT gives you five or six options. And you look at them and you think, "Oh, that one's interesting. I like that one."

Then you ask, "Can you help me create an outline for a paper with that thesis statement?" And ChatGPT gives you an outline.

Then you say, "Okay, let's start with the introduction. Can you help me draft an introduction?" And ChatGPT drafts an introduction. And then you read it and you edit it and you make it your own.

And you keep going through each section of the paper, working with the AI as a partner, as a collaborator, rather than just asking it to do the whole thing for you.

And the result is that you end up with a much better paper. It has your voice. It has your insights. And you learned something in the process because you were engaged in the work.

And so that's what I mean by "how to cheat." It's not about being lazy. It's about being strategic. It's about using AI as a tool to help you do better work, not to do the work for you.

Now, I want to talk about a really important concept which is "it is not cheating to use AI at work." A lot of people feel guilty about using AI. They feel like they're not doing their job if they're using AI to help them. And I want to push back on that really strongly.

Using AI at work is not cheating. It's evolving. It's adapting to new tools and new technologies. It's the same as when email was invented and people started using email instead of writing letters by hand. It's the same as when calculators were invented and people started using calculators instead of doing math by hand.

AI is a tool. And if you're not using the best tools available to you, then you're putting yourself at a disadvantage. You're making your job harder than it needs to be.

And so my encouragement to all of you is: Use AI. Use it without guilt. Use it strategically. Use it to do better work, to be more productive, to free up your time for the things that really require human judgment and human creativity.

Now, let me show you a more complex example of how you can use AI for something like campaign strategy development.

So let's say you're a destination marketing organization and you want to develop a campaign to promote winter travel to your destination. And you want AI to help you with that.

Here's the problem: If you just ask ChatGPT, "Help me develop a winter travel campaign," it's going to give you generic information. It's going to hallucinate. It's not going to be based on real data about your destination.

And so what you need to do is you need to "prime the prompt" with a source of truth. You need to give the AI actual information, actual data that it can work with.

So here's how you would do that. First, you would go do some research. You would go to Google, you would go to Perplexity.ai, which is an AI-native search engine, and you would gather information about winter travel trends, about your competitors, about what travelers are looking for in a winter destination.

And then you would take all of that research and you would upload it to a tool like Google NotebookLM. NotebookLM is a Google tool that allows you to upload documents—PDFs, Google Docs, website links—and then you can ask the AI questions about those documents. And the AI will only answer based on the documents that you uploaded. It won't hallucinate. It won't make things up. It will only pull from the sources that you gave it.

And so you upload all of your research to NotebookLM, and then you ask it, "Based on these sources, what are the key trends in winter travel? What are travelers looking for? What are my competitors doing?"

And NotebookLM gives you answers based on your research. And then you can take those insights and you can use them to inform your campaign strategy.

And so that's what I mean by "priming the prompt" with a source of truth. You're giving the AI real data to work with, and that results in much better, much more accurate output.

Now, there's still a human in the loop. You still have to read the output, you still have to apply your judgment, you still have to make strategic decisions. But the AI has done a lot of the heavy lifting for you in terms of synthesizing all of that research and pulling out the key insights.

Now, I want to talk about some of the watch-outs and governance issues that you need to be aware of when you're using AI professionally.

The first big issue is data security. If you are using a free version of ChatGPT or any other AI tool, you need to understand that your data is being used to train future models. That means that anything you type into the AI—any proprietary information, any confidential information, any sensitive information—could potentially end up in the training data and could potentially be surfaced to other users in the future.

And so if you're using AI for work, you absolutely must use a paid version and you must turn off the setting that says "Improve the model for everyone." That's the setting that controls whether your data is used for training. And you need to turn that off.

The second big issue is data privacy. If you are putting Personally Identifiable Information—so people's names, email addresses, phone numbers, any kind of PII—into an AI tool, you are potentially violating privacy laws like GDPR. And more importantly, you're potentially putting people at risk.

And so the rule is: Do not put PII into AI tools. Just don't do it. If you need to work with data that includes PII, you need to anonymize it first. You need to strip out the PII before you upload it to an AI tool.

The third issue is hallucinations. I've mentioned this already, but it's worth repeating. AI will make things up. It will give you information that sounds very confident but is actually wrong. And so you need to fact-check. You need to verify. You cannot just trust the AI blindly.

And let me give you a real example. I asked ChatGPT to write my bio for a conference. And it came back with this very impressive bio that said I had won all these awards and had done all these amazing things. And I read it and I thought, "This sounds great, but I don't think I've actually done all of these things."

And so I went through and I fact-checked every single claim in the bio. And it turned out that about half of it was made up. ChatGPT had hallucinated a bunch of accomplishments that I didn't actually have.

And so if I had just used that bio without checking, I would have been claiming credit for things I didn't do. And that would have been really embarrassing and potentially damaging to my reputation.

And so the lesson is: Always fact-check. Always verify. Never trust the AI blindly.

The fourth issue is bias. AI models are trained on data from the internet. And the internet is full of human bias—racial bias, gender bias, cultural bias, all kinds of bias. And so the AI learns those biases and reproduces them in its output.

And so you need to be aware of that. You need to read the output critically. You need to ask yourself, "Is this reinforcing stereotypes? Is this making assumptions? Is this biased in some way?" And if it is, you need to push back on it. You need to edit it. You need to correct it.

The fifth issue is sustainability. AI models use an enormous amount of energy and water. Every time you use ChatGPT, every time you generate a response, there are data centers running in the background that are consuming electricity and water to cool the servers. And the environmental impact of that is significant.

And so you need to be thoughtful about how you use AI. You don't need to stop using it altogether, but you should be aware of the impact and you should use it intentionally, not frivolously.

Now, let me show you how to set up ChatGPT for professional use.

The first thing you want to do is go into the settings and customize your instructions. You can tell ChatGPT things like, "I work in destination marketing. I prefer a professional tone. I want you to ask clarifying questions before you give me an answer." And then every time you start a new chat, ChatGPT will remember those preferences and will tailor its responses accordingly.

The second thing you want to do is go into the data controls and turn off the setting that says "Improve the model for everyone." This is the setting that controls whether your data is used for training. You want to turn that off.

The third thing you want to do is familiarize yourself with the model selector. There are different models available—there's GPT-4o, which is the standard conversational model, and there are reasoning models like o1, which are better for complex problem-solving and coding. And you want to choose the right model for the task that you're doing.

The fourth thing you want to understand is Custom GPTs. Custom GPTs are like apps. They're pre-configured versions of ChatGPT that have specific instructions and specific knowledge built in.

So for example, at Brand USA, we've built a Custom GPT for our travel and expense policy. And so any employee can go to that Custom GPT and ask questions about the travel policy, and the AI will answer based on the official policy document that we uploaded.

And so Custom GPTs are a really powerful way to make AI more useful and more accurate for specific use cases.

The fifth thing you want to understand is Projects. Projects are a way to organize your chats. So if you're working on a big campaign, you can create a project for that campaign and then all of your chats related to that campaign will be organized together.

And you can also upload files to a project, and those files will be available to all of the chats within that project. So it's a way to keep your work organized and to make sure that the AI has the context it needs.

Now, let me talk about next steps.

There are two approaches to adopting AI in an organization. There's the top-down approach and there's the bottom-up approach.

The top-down approach is about creating guidelines and policies. This is where leadership says, "Here are the rules for how we use AI. Here's what you can do and what you can't do. Here's how we protect data and privacy and security."

And that's important. You need to have those guardrails in place.

But the top-down approach alone is not enough. You also need the bottom-up approach, which is about people actually using AI in their day-to-day work.

And the bottom-up approach is messy. It's experimental. It's about trying things and failing and learning and iterating. And it's about building skills and building confidence and building intuition for how to use these tools effectively.

And so my encouragement to all of you is: Don't wait for the perfect use case. Don't wait for someone to tell you exactly how to use AI. Just start using it. Use it for small things. Use it to rephrase an email. Use it to write an Excel formula. Use it to brainstorm ideas.

And as you use it, you'll start to build an intuition for what it's good at and what it's not good at. You'll start to understand how to prompt it effectively. You'll start to see opportunities where AI can help you.

And that's how you build the skills that you need to tackle the bigger, more complex use cases.

And so the bottom-up approach is really just: You just have to do it. You have to dive in. You have to experiment. You have to make mistakes and learn from them.

And that's how you become proficient with these tools.

So to wrap up: AI is a prediction machine, not a fact database. It will hallucinate, so you need to fact-check. The best way to use AI is to break tasks down into steps and to prime the prompt with sources of truth. You need to use paid tools and turn off model training for professional use. And you need to just start using it, even imperfectly, to build the skills that you need.

Thank you so much for your time today. I'm really excited to see how all of you are going to use AI in your work. And I'm looking forward to the rest of the sessions in this program. Thank you.`
  },
  'ai-tool-playground': {
    id: 'ai-tool-playground',
    title: 'AI Tool Playground',
    description: 'Hands-on exploration of AI tools specifically curated for destination marketing teams. This comprehensive tour covers the complete AI tool stack: frontier models (ChatGPT, Claude, Gemini), research tools (NotebookLM), image generation (Midjourney), video editing (Descript, Runway, Pika), no-code "vibe coding" platforms (Lovable.dev, Agent.ai, N8N), and presentation tools (Beautiful.ai, Napkin.ai).',
    duration: '44 min',
    muxPlaybackId: 'H6B01F00lAc4PGT8Ick32jTwVa7LVA8Y5yqTq8xyD6DzA',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Start with a "Frontier Model" as your base. Instead of chasing dozens of small tools, professionals should get a paid subscription to a core model like ChatGPT, Claude, or Gemini. ChatGPT is the best all-rounder, while Claude is a superior writer and "thought partner."',
      'Specialized tools excel at specific tasks. For factual, "grounded in truth" research, use Google\'s NotebookLM to upload sources and query them. For video editing, Descript allows you to edit by modifying the text transcript. For presentations, Beautiful.ai streamlines design and ensures brand consistency.',
      '"Vibe coding" tools are making everyone a developer. Tools like Lovable.dev (for front-end websites/apps) and Agent.ai (for back-end agentic workflows) allow non-technical users to build functional tools using plain-language prompts.',
      'Security is a non-negotiable for business. Always use paid AI accounts (like ChatGPT Team) to ensure you can turn off model training. Free tools use your data as their product, which is a major security risk for proprietary information.',
      'AI rewards expertise and has a learning curve. AI is not a magic wand. A non-artist will get mediocre images, and a non-coder will struggle with Lovable.dev at first. The human expert\'s role is to learn the tool and then guide, fact-check, and refine the AI\'s output.'
    ],
    topics: [
      'AI Tool Stack',
      'Frontier Models',
      'ChatGPT (OpenAI)',
      'Claude (Anthropic)',
      'Gemini (Google)',
      'Microsoft Copilot',
      'Google NotebookLM',
      'AI Image Generation',
      'Midjourney',
      'AI Video Generation',
      'AI Video Editing',
      'Descript',
      'Runway',
      'Pika Art (Pika.art)',
      'No-Code AI / "Vibe Coding"',
      'AI Agents',
      'Lovable.dev',
      'Agent.ai',
      'N8N',
      'AI Presentation Software',
      'Beautiful.ai',
      'AI Data Visualization',
      'Napkin.ai',
      'AI Governance & Security',
      'Data Privacy',
      'Model Training',
      'AI Copyright',
      'AI Agent Swarms',
      'AI Meeting Recorders (Otter.ai, Granola, Plaud)'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Tourism, travel, and hospitality industry teams, Marketing and communications professionals, Sales and business development teams, Non-technical professionals looking for a practical "AI tool stack"',
      tertiary: 'Leaders evaluating AI tools for their organization'
    },
    learningOutcomes: [
      'Differentiate between the primary frontier models (ChatGPT, Claude, Gemini) and select the best one for their needs.',
      'Identify specific, task-oriented AI tools for research (NotebookLM), image generation (Midjourney), video editing (Descript), and presentation design (Beautiful.ai).',
      'Understand the concept of "no-code" AI agent builders like Agent.ai and Lovable.dev.',
      'Explain the critical security difference between paid and free AI tools, specifically the importance of "turning off model training."',
      'Recognize the privacy implications of modern AI meeting recorders (Granola, Plaud.ai) that may not provide visible disclosure.'
    ],
    relatedResources: [
      { name: 'ChatGPT (OpenAI)', description: 'Best all-around frontier model', url: 'https://chat.openai.com' },
      { name: 'Claude (Anthropic)', description: 'Superior writer and thought partner', url: 'https://claude.ai' },
      { name: 'Gemini (Google)', description: 'Integrated option for Google Workspace', url: 'https://gemini.google.com' },
      { name: 'Microsoft Copilot', description: 'More secure option for Microsoft users', url: 'https://copilot.microsoft.com' },
      { name: 'Google NotebookLM', description: 'Research tool for grounded, factual analysis', url: 'https://notebooklm.google.com' },
      { name: 'Pika (Pika.art)', description: 'Simple animated video/GIF generation', url: 'https://pika.art' },
      { name: 'Midjourney', description: 'Advanced AI image generation', url: 'https://www.midjourney.com' },
      { name: 'Descript', description: 'Text-based video and audio editing', url: 'https://www.descript.com' },
      { name: 'Runway', description: 'AI video generation and editing', url: 'https://runwayml.com' },
      { name: 'Lovable.dev', description: 'No-code front-end website/app builder', url: 'https://lovable.dev' },
      { name: 'Agent.ai', description: 'Build AI agents with workflows', url: 'https://agent.ai' },
      { name: 'N8N', description: 'Visual workflow automation builder', url: 'https://n8n.io' },
      { name: 'Beautiful.ai', description: 'AI-powered presentation software', url: 'https://www.beautiful.ai' },
      { name: 'Napkin.ai', description: 'Context-aware data visualization', url: 'https://www.napkin.ai' },
      { name: 'Supabase', description: 'Database backend mentioned with Lovable', url: 'https://supabase.com' },
      { name: 'Jasper', description: 'AI copywriting tool mentioned in Q&A', url: 'https://www.jasper.ai' }
    ],
    chapters: [
      { time: 0, title: 'Welcome to the AI Tool Playground' },
      { time: 46, title: 'Janette\'s AI Agenda at Brand USA' },
      { time: 82, title: 'What are Frontier Models? (The "basis" of AI tools)' },
      { time: 119, title: 'ChatGPT: The best all-around tool for DMOs' },
      { time: 160, title: 'Microsoft Copilot: Less powerful, but more secure' },
      { time: 179, title: 'Claude: A "terrific thought partner" and better writer' },
      { time: 232, title: 'Gemini: A strong, integrated option for Google Workspace users' },
      { time: 277, title: 'Google NotebookLM: For "grounded in truth" research based on your uploaded sources' },
      { time: 433, title: 'AI Image Generation (DALL-E in ChatGPT)' },
      { time: 532, title: 'Midjourney: How to learn prompting by studying others' },
      { time: 567, title: 'AI Copyright (An evolving legal space)' },
      { time: 649, title: 'AI Video Editing: Descript (Edit video like a text doc)' },
      { time: 732, title: 'Use Case: Repurposing webinar content for TikTok' },
      { time: 796, title: 'AI Video Generation: Runway & Pika.art' },
      { time: 843, title: '"Vibe Coding" Tools (No-Code)' },
      { time: 850, title: 'Lovable.dev: Build a front-end app/website from a prompt' },
      { time: 936, title: 'Agent.ai: Build your own AI agents (e.g., LinkedIn sales assistant)' },
      { time: 1035, title: 'N8N: Visual workflow builder for automation' },
      { time: 1059, title: 'AI Presentation Tools: Beautiful.ai' },
      { time: 1201, title: 'AI Visualization Tools: Napkin.ai (Context-aware visualizations)' },
      { time: 1283, title: 'Key Takeaway: "It is not cheating to use AI"' },
      { time: 1324, title: 'Q&A: AI Security (Paid vs. Free) & Turning off model training' },
      { time: 1375, title: 'Q&A: PII, data contracts, and "AI in the shadows"' },
      { time: 1405, title: 'Q&A: Agent.ai is model-agnostic' },
      { time: 1423, title: 'Q&A: The future of AI Agent "Swarms"' },
      { time: 1501, title: 'Q&A: Privacy risks of meeting recorders (Granola, Plaud.ai)' },
    ],
    transcript: `My name is Janette Roush and I am the SVP of Innovation and the Chief AI Officer for Brand USA, which is the destination marketing organization for the United States.

And today I am very excited, to share with you AI tool playground. So I'm going to walk through both kind of the tech stack that we use for AI here at Brand USA -different tools that I use personally, tools, in some cases that I don't use that much personally, but I know are important for other folks.

And give you a well-rounded look at what's available for text generation, images, videos, creating presentations, and a little bit more.

And as always, I want to begin by sharing with you my AI agenda for the industry. So first this image, we will be introduced to this tool later on in the presentation, but it is from PIKA Art, and all it does is make cute little videos like this, little animated gifs that I think are really good at drawing in someone's attention.

But then looking more holistically at what is my AI agenda at Brand USA, it's to establish operational, excellence for Brand USA as a destination marketing organization. So making sure that we're taking advantage of opportunities to level up the work that we do internally.  Second is industry empowerment.

So how do we take what we are learning internally and sharing that with the broader industry to help all of you in your work? And then finally, the third part is the traveler experience enhancement. So what are we able to do in order to make the United States more discoverable and more bookable by, leisure and business travelers across the world?

So that is my goal and part of the Agents of Change webinar series is really focused on number two, industry empowerment.  So I'm going to begin this webinar by talking about frontier models.  These are the basis of our work with AI tools. So this would be all of the GPTs that are inside of ChatGPT.

So whether it is GPT-4 oh.  GPT oh three as in this example here, all of that inside of ChatGPT is considered, those are considered foundation models for ai. And so I believe the best way to learn how to use AI is to pick one of the frontier models that I'm going to show to you and just invest in a paid version of that tool and invest in the time spent becoming accustomed to what it's good at and not good at.

Thinking about this both from a text perspective, but also from a multimodal perspective, because we're going to go a little bit deeper into image generation and video generation, sections later on in this webinar.  Right now thinking about frontier models, this is really the home of where all of the power of working with these tools is going to be.

All of the other, tools I'll show you later, will be built on top of these models.  And if you are looking for one model to use at your DMO or your organization, honestly, I think ChatGPT is still the way to go. I would look obviously at a paid account, either a team account if you have fewer than, 150 employees or an enterprise account if you have 150 employees or more.

And just in terms of capabilities, I believe that ChatGPT has the widest, most broadly useful capabilities for most people and for most teams.  An ancillary to this that I did not call out separately in this presentation would be using a co-pilot from Microsoft. That tool is built largely on the open AI models.

What makes it different?  My understanding is that it's less powerful than working directly with a tool like ChatGPT. The trade-off is that it is substantially more secure, so it's going to have the same security protocols in place largely that you would have with all of your other Microsoft tools.

So all of the work that we do, for most of us that work lives in the cloud anyway, so it does make sense to use services that are already connected to our data in the cloud.  If you're a Microsoft shop, that's going to look like copilot.  The next Frontier Model tool that I really think is terrific is from a company called Anthropic, and this tool is called Claude.

What I do really like about it though is that it is a terrific thought partner and it is a better writer than ChatGPT.

So whereas ChatGPT, everything I get out of it lately, it's not only filled with M dashes, but it's filled with the sentence construction of, it's not about X, it's actually about Y. And I see this all over LinkedIn and all over the internet. I don't use AI a ton for writing anyway, but certainly if I were to, I'm going to lean a little more on Claude than on ChatGPT.

I also like Claude because if you are having a long conversation, so whether you are sorting out the best strategy for something that you're working on, trying to learn how to do something, anything that would create a really long thread  ChatGPT I find gets a little circular in that thread where after a certain number of interactions or when it's context window, which is its short-term memory, when that gets too overloaded, ChatGPT will start to just give you the same responses over and over again.

Claude I find is less likely to do that.  It's also just a good way to learn that different models will respond differently to the same.  So if you have the ability to subscribe to two paid models, I think that is a great way to learn how AI behaves differently, when it's trained differently.

And Claude is a great option for a second model.  The other option, which I think would be good for that second model is Gemini from Google. I do have a personal account that I will use for personal projects on occasion, just to keep up on how Gemini works and how useful that tool is.

I'll say if you are in the Google ecosystem, if you use Google Workspace, you very likely already have access to the paid version of Gemini. And if you are already trusting Google with all of the rest of your cloud infrastructure.  I don't think it's, a leap to then also trust Google with your AI infrastructure.

So Gemini, it has less than a of a personality, I think, than either ChatGPT or Claude. So I don't always enjoy the back and forth as much, but this new model, the 2.5 Pro model is on par, with the best models available from both Anthropic and open ai. So it's overall, it hasn't always been a great product.

I'd say today it is.  It's a great product. It just doesn't happen to be the one that I use most of the time.  And the cool thing about Google is that when you work with it, you also get access to other tools in Google's ecosystem. And one of those that I really like is called NotebookLM.

And this is great if you are doing work that needs to be very grounded in truth. When you don't want AI to hallucinate. So Notebook LM was created by Google researchers who were creating a product that would be helpful for students and for researchers. So this was really designed for an academic environment, and what it's meant to do is make it easier to learn something.

So here you can see that I'm in a notebook. The notebook's name is AI's Disruption of Travel Search and Booking. And here you can see that I can add sources to my notebook. And I have in my NotebookLM folder a number of different notebooks on different topics. So that's a great, it helps you keep your information organized.

But then when you add sources, you are now able to come over to this box, this window. And you can start typing into this window and it will answer your question. And if you click on one of the footnotes that it gives you, it's going to open up your source and it is going to highlight the portion of your source where it got that information that it is using to answer your question.

If you're writing something that has to be factual,  this allows you to fact check against your own sources in real time, which makes it a very powerful tool.  It also has a lot of capacities to help you learn things. So over here, you might remember this tool from when it became famous in October of last year because it released the opportunity to create a podcast from those documents that you uploaded.

It's called Deep Dive. It has, you see here, two hosts by default, but you can also customize that podcast and so it reads through all of your sources, and then it will create a 10 to 15 minute podcast that sounds like it was ripped from NPR in order to teach. Whatever it is that you wanted to learn from those sources.

Take your last annual report and see what that sounds like when it's two NPR podcasters having a conversation about it. You are also able now to jump in and join the podcasters in their conversation so you can actually ask questions.  And then down here you see you can also make a study guide with the materials, a briefing doc, FAQs timeline, or making a mind map.

This is an example of what the mind map looks like for this small notebook that I was putting together. So we're looking at the future of DMOs in a changing world, what are our key challenges? And here you say, oh, it's shifting consumer behavior and what is the role of the DMO? And you can double click on that and it keeps going deeper and deeper into the topics that you're interested in.

Now I'm going to take a couple of minutes to go through some image generation tools.  The first one of these is ChatGPT. And so actually I am having, for the ways that I use image generation, which honestly it's either for LinkedIn or it's to punch up a presentation or it's to make a joke in a work email, right?

At Brand USA, we don't want to use AI generated images to promote a destination. But that doesn't mean that destinations and travel companies can't find lots of ways to use AI tools. So here I'm drowning in paperclips. If you are familiar with the paperclip maximizer thought experiment about AI agents, this was meant to illustrate that point.

This is, I clicked on a tab in my ChatGPT account that's called library. And if you click on that tab yourself, it will bring up all of the images that you have used ChatGPT to make. This image right here, this sad face, was particularly interesting because I asked ChatGPT to create an image of what it felt like to have a conversation with me and that was the output.

So that it's a real feel good moment. If you want to see, what does it actually take to create an image in ChatGPT. This I have edited and sped up quite a bit, because these image generation tools are not fast. So in all of these cases, it's taking probably two to three minutes every time I'm making an image.

So here I  uploaded my own headshot and I said, please, use this to make an image of me making an image. And instead, that's not me. I wanted this person to be the one making the image. And so I am just using plain language down here to say I actually wanted to show me in the pink shirt using the computer to make an image in ChatGPT make it photo realistic because here you can see they made it an illustration and I wanted it in a horizontal aspect ratio.  And so now it doesn't give me any notes back. It just starts to work.  You can see it's made a really unsettling, creepy version of that image of me.

Another image generation tool that is very well known and popular is Midjourney. I think a great tip for using Midjourney is that when you log in, you are taken to a homepage that shows you images and videos that other people have created, and that is a good way to learn how to best prompt these tools.

A great way to learn more about working in Midjourney is just to click on one of those images and see what prompt the user used in order to create that picture. Because AI rewards, people who are subject matter experts. So when it comes to creating a campaign strategy, that's something I did before AI existed. So like I'm a super user when it comes to doing that in AI.  I could not create images before AI existed. So I am not a super user by any means of the image generation abilities of AI, but for people who are good at creating images, midjourney is particularly unique because it wants you to use the language of images and film when you are talking to it.

And because I don't really have that vocabulary, I can cheat, I can ask ChatGPT to write prompts for me in that style.  But it's not, language that comes to me naturally. So I have heard, podcasts where people talk about, they were creating a brand identity for their, solopreneur company.

You can do that by just scrolling through Midjourney and pulling out the images that really strike you as interesting. Then use those images and those prompts to learn more about, okay, what is the style that I like? How do people describe the style that I like? How do they talk about it to Midjourney to create more examples of that style.

We have a question in the chat about whether there are copyright issues. Copyright is a rapidly evolving space when it comes to the US legal landscape.

Originally what the copyright office said is that you must be a human being to have a copyright on an image. My understanding is that if AI makes it, it can't receive a copyright, which means you can't be in copyright violation supposedly by using that.

I know that this is a concern if you are using AI to write for you, AI can plagiarize without knowing it because it's just putting words in a certain order to make you happy. So if it makes up words in a certain order, but they happen to also exist written in that certain order, you would be violating somebody's copyright by using those words in that order. We have a resource here, copyright.com. Julia is sharing as a resource, so that will be good to look into. If AI made an image of an Amazon Alexa device, I don't know if it means, oh, great, you can use that without any kind of infringement because AI made it, because AI is making an image of something that is protected,  my understanding is nobody else can have a claim to it because it's the AI that generated it.

And now here we have a screen grab of me creating an image inside of Midjourney.  So here you can see you type what your prompt is into this box that says, what will you imagine?  And this is very sped up. So this whole process was probably three or four minutes for me to get to this point that you're seeing. And anytime that you generate an image, you see over here, it gives you four different options.  Then you can select one of the options and then it brings up opportunities to make edits to that particular image.

You can ask it to vary it, to upscale it, to create it in a different format.  None of these images that Midjourney is creating for me here are particularly wowing me.

But also 20 minutes later I was like, okay, I don't actually have a need for this image, and so I moved on with my life. It's an interesting example of what's actually possible with these tools.  And I've definitely used Midjourney to create a lot of the images that I share in presentations.

Moving on to the next section, video generation and editing.   This is going to walk through what editing in Descript looks like while I talk to you. Descript is an editing tool for video and for audio. I first learned about it  listening to podcasts where the podcast hosts were using Descript to edit their podcast and then talking about that on the podcast.

And it's great because you can see over here with all of this text.  This is the very first Agents of Change webinar that I did, back in June. And so you are able to work over here. This button for the AI Underlord will bring up an AI video editing assistant that I can say remove all of my, ums and ahs.

And then over here you can see where it deletes out. And then I can hit accept in order to accept those deletions, I can make an AI version of my voice. So if there's something in the webinar that I didn't say the way I wanted to say it, I can actually delete that section from the text type over it, and then it will use the AI generated version of my voice to update the recording.

And all of these recordings are available on Brand USA's website. And then the other thing you're able to do with these tools is, like I plugged this, 101 video. I am in the process of turning that into TikTok educational content.

So if you wanted to have a 101 course that you didn't want to sit down for 50 minutes and just watch it sitting at your computer, maybe you want to watch it on your phone scrolling through TikTok videos. I was able to replace myself with a yarn avatar of myself talking against the background of these slides, using my voice, the actual recording from the webinar, with the hope that it's another way of reusing content.

And I think that is a big push for live events in the near term future, is making sure that when we do a live event, we don't leave all of the great education that happened on that event on the floor, when you come home from DI you have the opportunity to expand on that content.

So you can take those webinar recordings and your AI can go through your entire transcript and then pull out what it considers to be the five most interesting segments. And so it will actually create, social media, promo videos for you.

Do you want it to be oriented for LinkedIn or for Instagram reel, or do you want it to be formatted for TikTok? So it's been a really great tool. They're making improvements to it all the time, and  it doesn't require any AI expertise if there is such a thing to use. You are just having a conversation about what you want your video to look like.

I think that's the ultimate promise of these AI tools.

This is another video tool that is called Runway and very similar to all of these tools. It's just text-based. You go into the tool and type what you are looking for. You can offer it images to use as a basis, and then it can create things like a gif, which is what you see here.  The prompt that I had given it was that I'm at IPW and I'm going back into my hotel room after a long day and I open up the closet and all of the IPW branded tote bags fall from the toilet and crush me.

So I gave it the IPW logo. As you can see, it doesn't look like that at all, and I don't exactly look like the same person emerging from the  closet as I did going in. But again, for fun, simple video editing, absolutely an option.

And then this shows you what the tool looks like when you're using it. Again, I've really sped it up  and here I've given it a copy of my headshot and I said, show this woman soaring through the New York City skyline.  I was very disappointed with the outcome because why would that be at all what I had asked for, right?

I'd accidentally had done that same prompt twice in a row. So I'm like, maybe the second one is better,  eh, not really. But again, these tools reward expertise.  Oh, and I have a question from Yolanda. I did not record myself going into the closet, so this entirely AI generated. I just uploaded my headshot and the logo for IPW and told it what I wanted.

And then this I brought up at the beginning of the webinar. There are all kinds of these, small animations that are possible inside of pika.  Now I'm going to talk a little bit about vibe coding tools.  So this one I am a big fan of. It is called Lovable, and you can find it@Lovable.dev DEV.  And in this example, you can see I asked it to create a simple app that helps social media managers create short form content.

But what Lovable is best at is as a front end tool. So making something look really beautiful. So  here I use this at IPW to create this, AI walked me through the entire process of both going to Lovable.dev building this.

I then, it told me, oh, if you want it to look a little nicer, we could have an image at the top. This is the type of image that you can create. And I then went to an image generation tool to spin, just a little header for this. this is obviously a screenshot, but you could select the different days of the week that you wanted to make an appointment.

And then when you clicked on this, it would bring up a registration form and then in the backend it connects to a database tool called Supabase, where it allowed me to see who had actually registered for each of those sessions.  And so for just making small personal use apps, Lovable is very helpful.

If you also wanted to make a small website for some reason, Lovable is going to be a great tool for that.  Sarah just asked, which of these tools are free versus requiring payment?  I believe that if you want to make images inside of ChatGPT, I don't think that is available on the free version. I think you need to have a subscription for that.

I know you need to have some kind of minimum subscription for midjourney. I think that is the case for runway as well. PIKA is they do have a free tier available. So I think it's generally, it is more difficult to find a free tier for the video and the image tools just because those are more expensive to run as a product.

But then Lovable, I did this, I still don't have a paid subscription to Lovable, so this entire process was free. and then I made sure that for the backend, which again was this database product called Subbase, I also used a free version of that. So I made sure I didn't collect any PII when I was doing signups.

Like I didn't collect email addresses because I was not fully clear on what the security was of that signup system.  agent.ai is another tool that is free to use, for certain tiers. Obviously all of these tools want to get you into a paid ecosystem, eventually. agent.ai is your gateway into creating your own AI agents.

And so this is an area I'm very interested in moving into. an agent.ai is created by one of the co-founders of HubSpot,  so this is. Based on years of his relationships. And you could see here we are making an assistant for LinkedIn to hold the profile that you give it of a business event planner and then  give you, essentially, yeah, what's the prompt?

You are the very best convention sales person in the world, and pull out all of the information from this profile. That would help me have a really great opener con of a conversation with this meeting planner.  And so here you could see where all of the output is from me testing this particular prompt.

And this is the process of creating your own AI agent. You're going into actions and then you are just setting up here. It's just five actions that you are outlining in order to create your own AI agent that pulls from LinkedIn's API the information that you're looking for. And because this is through agent.ai, isn't a fly by night operation  because it's through this person who's connected to HubSpot.

He knows the LinkedIn people, so it actually has API access to LinkedIn. So if your prospect has a closed profile, this would not work on LinkedIn. But for anybody who has an open profile, this is legitimately accessing their profile in order to enrich emails that you can send out in the future.

Then this, I is just starting to learn a little bit about this over the weekend. N8N is another kind of vibe coding agent building tool.  And so the way this works, whereas an agent.ai, you saw that you outline individual steps. This does the same thing, but it visualizes it as you can see in a different way.

this is a visualization of how you could use N8N in order to create an onboarding process for  your IT team.  let's say that somebody triggers this workflow or this automation by doing a create new user form submission. That's then going to this tools AI agent. One of the tasks that we'll do is ask, is this person a manager?

Because they're going to be automatically set up in Slack differently if they are a manager than if they aren't a manager. And so this is a good way to start picturing what should AI workflows look like for you, your department, your company over the next year, two years, as this becomes something we all need to start learning how to do.

And then we have meeting and presentation tools. I am building this presentation in beautiful ai and here this is just a screenshot, very meta of what it looked like for me to put together this presentation on AI using beautiful ai.

I just, find it, honestly, it was a terrible learning curve, and now that I am familiar with it, I would have a hard time going back to either PowerPoint or Google Slides to put together presentations. it makes it very easy to put in a grid format. What are my images and texts going to look like?

It's very easy to not only add in screenshots or videos, but to also find other slides from other presentations and add those in. And so that's something I always find to be a pain in other presentation tools. And for me, beautiful.ai has made that absolutely dead simple.

If you have beautiful.ai across multiple users, you can create templates and you can also on those templates, if you were to update your logo. What's cool is that logo will not only update in one spot, but if other users use that same template, that new logo will populate everywhere at the same time. So in terms of maintaining brand consistency over a presentation, I think this provides a lot of opportunities.

I also just, I really like how the transitions work. I like that it has this Ken Burns effect for photos where it adds just this slight movement to the photo that if I'm giving a presentation, I feel a little bit of,  an imperative as like the AI person that I'm supposed to have a slightly fancier presentation maybe than other folks.

This allows me to feel like I'm doing that without needing to, become an expert in, tools that are much more difficult to use.

And then I think this is a great sneaky little tool. Oh, I just had a question in on the last one. Can I track analytics on how people are using the presentations? Yes. you can. I don't use that functionality a lot, but every, you can make, like if you do want to track individual links, you can do that and you can see how many times.

That person with their email address has viewed the link. Or you can make, I had links made at IPW for when I was sharing different presentations at IPW. I can go to the IPW version of those links and see how many times those have been visited so I can follow over time. What does the access to the presentation look like?

And then there's a lot of stuff I haven't been using on sharing a password protective link. So whenever you share a presentation, you're actually just sharing  a beautiful.ai like web address and then you view the presentation. I believe it uses JavaScript to create a flowing website experience.

So it's a lot easier, to send that than to send, a PDF of a PowerPoint and then trying to get that to be small enough to go over email. It saves a lot of that type of issues.

And we have another question on beautiful ai. Do they create landing pages?  if you wanted to create one image and use that as a landing page, I don't think you could make it interactive though. But if you needed a single static landing page, I think beautiful AI could do that for you. I think they have a test period, but not a free tier, I believe.

what I like about napkin AI is that you can just paste in the text from a slide that you are working on, and then it will bring up all of these different ways that you can visualize it. And then once you select the way that you like. You are then able to come over and use all of these little tools to change the color, give it a transparent background to change the font here.

What I think is interesting is that these are the only words on the screen, right? But it's ai so it knows what I am talking about. So it move out of the way of this. So here is data security, protecting systems, data privacy, protecting people. I didn't tell it to write that. It knew that could add some useful context to the image it was creating for me.

So even if you don't end up using what napkin.ai gives you, I think it's really interesting to get ideas for visualizing information here. And then I will go back and I'll create it natively in beautiful AI if I don't like what Napkin created for me.

So then to sum everything up, if you were looking for one slide to take a screenshot of,  just everything in one place.

I want to remind everyone that at work it is not cheating to use AI. Please keep using AI at work.

So now I'm going to go into the Q&A and start answering some questions. And we have a question from Tony about tools or recommendations for AI copywriting models and Tony.

I'm typically doing that in a Frontier model. So I will be exploring tools like ChatGPT or Claude to help me with writing a piece of copy. but I think Jasper is another tool that is very well regarded in that space.

Now we have a question about suggestions for a certification in AI for communications, something that would provide best practice with real world examples.  I would say the AI Marketing Institute offers a variety of classes you can take and certifications. Allie k Miller also offers classes and certifications, as does Connor Grennan, and you can find all three of those folks or companies on LinkedIn.

Now we have a totally different question from Suzy, which is your information safe and secure on paid ChatGPT?  What a paid version of ChatGPT gives you is SOC 2 compliance. It's protecting your data when it's in transit to the cloud and while it's at rest in the cloud. And then it gives you the ability to turn off model training. So for any of these tools, particularly if they're offering free access, means that we are the product. The way that we are the product for an AI company is that they need more examples of words used in sentences to train the next versions of ChatGPT, and Claude and Gemini.

And they can get that from us for free by taking all of the information we feed in and keeping it and using that to train the models. But honestly, we don't want our confidential information to be used to train a model. And so by using the paid models, you can toggle off the option for training on my data.

And that also helps to keep your data more safe and secure. But I would say the safety and security is not hIPAA level, so you would not want to put in PII, personally identifiable information like email addresses, into a tool. I would not put in information where in your contract it states you may not share the information with a third party because ChatGPT would be considered a third party in that scenario.

But don't use that to be scared off of working with these AI tools. Use that to reach out to the person on the other side of that contract and say, I'd really like to take your research and upload it into ChatGPT so it can help to guide my campaign strategy. Can we make an addendum to the contract that just outlines that under these circumstances I'm allowed to do that? Because the more of us that start asking for this, the more we get AI use out of the shadows.

And then we have some questions about agent ai.  Keith asked, which AI does Agent.ai use? One of the coolest things about Agent.ai is that when you get to the steps, so the way that you build this, it's really building a workflow, right? One of the steps in your workflow for your AI agent is to take this information and put it into a language model with this prompt, and it has a little dropdown menu, and you can select pretty much any AI model out there.

Their vision for the platform is that if you wanted to build an AI agent and it was beyond your capabilities, you could find the person to help you at Agent.ai in their ecosystem. But also you could just use the agent that someone else made.

And every time you use someone else's agent, it uses credits and at a certain point you have to replenish those credits with your credit card. So that's ultimately how they monetize the machine.

But right now, if you are just playing with it as a builder, it's largely free to do that, you can use any AI model you want, which is really cool.

Once you start making those agents, does it allow those agents to be turned into swarms?  The idea of an AI agent Swarm is that right now, maybe you can have one AI agent, or maybe you can string together a chain of AI agents. So AI agent that looks at information from a website and then maybe a second AI agent takes that information and transforms it into another use and hands it off to a third AI agent, which inserts it into Salesforce or Simpleview.

So in the future, some people are working on building a swarm system where one kind of supervisor agent could oversee hundreds or thousands of just single use agents that all do individual small tasks underneath the oversight of this oversight agent.  So it is all a little beyond my capabilities at the moment, but I am learning about that stuff as fast as I can.

We're probably a little ways away from that being something that's easily applicable to our industry, but over the next couple of years, it's going to become not only more common to hear this talked about, but more common for  regular people like us to be able to build this stuff because that's what's happening in AI is the need for technical expertise to achieve things, that need for that technical expertise is diminishing.  And swarms are definitely one of those things.

We then have a question about an example of showing Agent.ai to enrich your email. The LinkedIn example would be a good way of doing that. If you just wanted to enrich an email with more information about who a prospect is, you can build an agent on Agent.ai that will pull from LinkedIn the exact information you would need to do that personalization and then write it for you to put into your email.

And there's other between n8N and Agent.ai, I don't think we're very far from, "okay, great. Now open up the email now send out the email on my behalf". But once we get into that piece, that raises a lot more security questions, then just having Agent.ai do something inside of its own ecosystem. So then that becomes, bring your IT team on board, bring your legal team on board.

I would have to do a great deal of research before allowing  an LLM to have any access into our own email and calendar tools, right? Because that's where it can start to get a little dangerous when it comes to privacy.

We have a question about whether Lovable and agent AI can integrate, and I was listening to a podcast that talked about integrating all of these systems actually yesterday. So the idea that we could use Agent.ai to create backends, and then a tool like Lovable dev, which creates these really beautiful front ends and to combine those.

For the IPW project that I did a little bit of the coding, I couldn't get Lovable to just prompt its way to what I was looking for. So I actually mirrored the code base, in a code repo. ChatGPT told me what to do.

Say, all right, you're going to start by this and you're going to mirror it here, and this is how you make an account. You're going to look for this string of text and then you're going to type this over it in order to make the color different. The ability just to use plain language and not coding to do a lot of this work is very impressive and it's just getting easier.

Oh, we have a question about the Plaud note taker.  Plaud is an actual little pin that you wear, or you can set it down, at a table during a meeting and it records absolutely everything you say and do during the meeting, which is great or unnerving. And I think for a lot of people that's unnerving.  And I'll also warn you that during meetings, there are now a number of meeting note taking tools that do not visibly join a meeting.

So ChatGPT has a record feature that is not apparent to anyone else at the meeting. There's also a note taking tool called Granola that does not alert meeting attendees that it has been turned on.  Communication's changing, and  expectations around privacy in communication is changing.

So be cognizant of that as you use these tools, because I do think they're very helpful for meetings. I think it's very useful to be able to go back to a transcript and then to pull just the information you need out of that transcript to update a CRM.  That's not even just the future, that's today, but we need to, take advantage of these tools in a way that's responsible and sensitive.

Thank you so much for everybody who, joined today and I'll get the rest of the questions sent to me so that we can address them in future webinars.

I really appreciate you joining. Thanks so much.`
  },
  'ai-dmo-leadership': {
    id: 'ai-dmo-leadership',
    title: 'AI for DMO Leadership',
    description: 'Strategic guidance for tourism leaders on AI adoption, governance, and organizational transformation. This comprehensive leadership guide covers scaling AI by department, creating AI governance frameworks, managing three critical risk areas (Data Security, Data Privacy, Content Integrity), developing organizational AI guidelines, handling vendor partnerships, and implementing both top-down and bottom-up adoption strategies.',
    duration: '41 min',
    muxPlaybackId: 'NQACe9aTXRuntXd4r7eHWsXVDFVhaUUwyotE8RF5SQE',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Transcript (server-rendered as static HTML)
    transcript: `Thank you so much for logging in. My name is Janette Roush. I am the SVP of Innovation and Chief AI Officer for brand USA. If you're not familiar with us, we are the destination marketing organization for the United States. And we focus on driving international inbound visitation to the US.

So first of all, I want to assuage any fears that you have that this might be dry or not useful. I'm including the image that you see of the Play-Doh version of Janette getting squished because I have seen a lot of AI presentations, and I know a lot of them are just a list of all the little tricks and tips that you can do, but you don't actually see anything useful that you can then take back to your office and actually use for work. So while I think the fun stuff is fun, and if you wanna make one of these on your own, it is free at pika.art. But for the rest of the presentation, going to be more on practical use cases.

I like to start off my webinars with the funny image of my face getting squeezed like Play-Doh, which you can make yourself. It's at PIKA dot art. I share these in my webinars to reassure everyone that I know a lot of AI presentations focus on all the funny tricks you can do with AI, but don't always bring it back to how you can work with AI in your job. This will be the only funny trick you see today. I'm going to spend most of my time focusing on how we are using AI at work and how you can you set up your organization to be ready to work with AI.

And as an FYI, my agenda for working with AI in the tourism industry for the United States focuses on three branches. The first is operational excellence. How are we using AI at Brand USA to be more efficient at our jobs or do those jobs better.

The second piece is industry empowerment. How can Brand USA serve as a catalyst to drive AI adoption across the United States tourism industry? And finally, the traveler experience and enhancement. What are we doing to make the United States more searchable, more discoverable, and more bookable by our international B2C and B2B audiences? That's what I'm focusing on in my role at Brand USA.

I want to start by talking about how are you able to scale your work at your DMO. This is for the DMOs that maybe you've been working with AI for a little while. You have individuals who are using AI to different levels of success across your organization.

How do you as a DMO leader move from just a bunch of people doing random work using AI into creating AI workflows that everybody in your organization benefits from? It's as simple as going to your org chart, looking at your various departments, then double-click on one of those departments.

In this example, I'm looking at human resources and what are all of the responsibilities that fall to your human resources team? Performance management, talent acquisition, employee engagement, all of these different areas.

All of their work is laddering up to these broad buckets. If you want to move from individuals working with AI to individuals working together as a team with AI, sit down and identify use cases for each area of focus. If you're looking at performance management, when it comes time to do employee performance reviews, some of the employees are using AI to write those reviews. And then on the flip side, some of the managers are now using AI to write their side of the performance review. If you are at an organization where that is starting to happen, maybe the solution is instead of ignoring AI and pretending like it's not part of the process, to actually incorporate AI into your process, create some custom prompts that will help both the managers and the individual contributors answer the right questions in the most thoughtful way to get to the goal, which is employees having clear goals to work towards and managers being in line with those goals. That's one example of things that you could look at for these different areas of HR. That's a really important process because it's allowing us to find some quick wins for each of those HR pillars. It also helps people across a department all use AI in the same way. Another way to help make that happen is to make sure that specific team is meeting regularly on their own to talk about AI adoption. So in this example, if we are creating custom GPTs for the folks that are part of HR to help them write a job description. Let's say you want to have weekly or biweekly meetings just for the people in that department to say, oh, I'm not quite sure how this worked, or, I got a response that I couldn't quite figure out and use that as a learning opportunity so that there's not one person responsible for fixing a prompt if it stops working as well as it used to.

That's something that can happen because the underlying models that these prompts are using change, and when they change, you have to update the prompts that you're giving.

Weekly meetings, regular trainings, help people stay on top of that.

The final reason why we want to do this work is that it helps you collect SOPs, the standard operating procedures for how your company gets things done. Think about what your new hire SOP looks like and how you need to start requisition in new roles, what people need to be notified who needs to write the job description and post it, and all of the different steps for hiring and onboarding that new employee. Once you have those written out, that allows you to do the process of what parts in this process can AI assist with?

What parts in this process can AI do without assistance one day? Because when agentic AI becomes more accessible to those of us who aren't coders or developers, six months from now, it's going to be very plug and play to work with AI agents. But you're going to want to know the steps in a process because not every step an agent will be able to help with. And so writing it out, that's how you can plug in down the line.

This will be the bulk of what I wanted to talk about today, and that is AI governance, because we know your staff wants to use AI ethically. This study, it's a little bit older. It's from 2023. The name of the study ended up being AI Anxiety and Business, because that was all of the outcomes of this study was how nervous employees are to experiment with using AI. A lot of that nervousness comes from not knowing what is okay to put into an AI system. It is our jobs as DMO leaders to make that very clear what it's okay and not okay to use AI to do, but that's not as easy as it sounds, right? Because we don't always know what's okay and not okay for AI to do.

How do you create this framework? I want us to start by thinking about these three common risk areas for AI. The first is data security and how we are protecting our systems. The second is data privacy and how are we protecting the privacy of people? And the third is content integrity and how are we safeguarding the information that we're putting into AI systems?

So first, for data security. I want you to provide paid AI tools for your staff. Even if there's plenty of free tools available. If your staff is already bringing their own paid AI tools to work. So what do these tools look like? ChatGPT Team, Claude Team, Gemini for Google Workspace, Microsoft Copilot.

Those are the predominant safe ways that you can use AI tools. If you are an enterprise-sized organization, at least 150 employees, you can be on an enterprise account. Team is a light version of enterprise, but for between two and 149 employees, there's a lot of benefits to having those secure tools.

We want to use them because they're going to provide SOC 2 compliance. That means that when you put data into a tool, the data, whether it is traveling to the cloud or at rest in the cloud, is less likely to be hacked by bad actors. So that is a safer way for us to use AI.

Also, when we use paid tools, we are able to turn off training on your data.

So that is, if you are on a free account or your own personal paid account, that's a toggle switch that's hidden in settings. The toggle says "help improve the model for everyone." What that means, is OpenAI and these other companies are taking all the data you put in and then they are using that information to train the next version of ChatGPT or Claude or Gemini.

And I don't think you want your data to be used in that way. So get the paid account, turn off training.

Now I want to look at the second risk area for DMO, and that's data privacy. How are we making sure that we protect people when we are using large language models? The easiest shortcut here is don't put PII - personally identifiable information - into a large language model.

If we are looking specifically at the EU AI Act, we do not own someone else's information. You can never own the name Janette Roush. I am always going to own my name and my email address. I can lend it to you for the purposes of joining your email database or what have you, but I can always take back because I'm the one who owns it, not you. With a large language model, an email address is put into the model and used to train that underlying model. It means that all of that information is turned into huge numbers called tokens, and then those tokens are training the model.

Once that happens, you cannot extract information out of the model again. It's there permanently, and because of that permanent nature, it is against the EU AI Act, and it is a violation of GDPR to put somebody's information into a language model if they're an EU citizen. For best practices, using the EU as the strictest use case, it just makes sense to not put other people's information in a language model, even if you have training turned off, meaning that somebody's email address would never go into the underlying model data. Part of that is the EU AI Act states that before you put someone's information into a model, they have to explicitly give you permission. The safest way forward: don't put that stuff into a language model.

And then the third piece is content integrity. How are we protecting intellectual property by knowing what we can and can't put into a model?

I've done a lot of reading and studying around this and talking to our own general counsel and doing coursework for a certification called "AI Governance Principles", which is managed by the International Association for Privacy Professionals.

It's a really interesting area of study, and I am not a lawyer and can't give legal advice, but I have approached this very seriously to understand what is acceptable and not acceptable use of intellectual property and a language model so that I am giving good advice.

The advice that I am seeing is that it's not a yes or no issue, right? It's not black or white. It's not, you either can or cannot put something into a language model. It's more about how are you using the output, or why are you putting something into a large language model?

I am thinking of things like research reports. Many of us at DMOs are working with incredible research on Tourism Economics or any number of companies that have put together these great research reports we want to make sure we're using.

And for me, a great use case for research is to create a Project inside of ChatGPT or Claude. Upload relevant research to what I am working on and then saying, "great, now I have a source of truth in my language model". So if I am putting together audiences who might be interested in traveling for America250, I have all of this research loaded in with information about heritage tourism and who might be coming to the United States in 2026, so that when I am working on a strategy with AI, I'm not just guessing, it's actually giving me useful responses that are based on science. The trick with this is that not all research can be uploaded into a language model.

First, make sure you are in a paid tool and that you have training turned off. Tourism Economics might not want their data to be part of the underlying data of a future training model, so it's unfair to take their information and upload it to a model where training is turned on.

You really need to have that training turned off. And then the next piece is, are you using proprietary research that your company paid for, that your company has a license to use, or is this a syndicated report that the research company is hoping to sell to many destinations? Because we are already working with research in this way.

We already have to separate the research on our own servers from that which is okay to share with our members or partners, and that which needs to be walled off because it's only for internal use. So the question with ChatGPT is it is technically considered a third party. And if this is a syndicated piece of research that says it may not be shared with a third party, that's when you can go back to the research company and say, "I want to add an addendum to my contract saying I am allowed to use your research with this third party when I am working with a paid version of one of these AI tools". If it doesn't say anything about your research being tied to your internal use, then the question of what can you do with it in AI comes down to: how are you using it?

If you are putting research in to help you with future strategic planning, that is a lower risk use case. Honestly, that's the reason research companies are making research is that they want us to use them to inform our campaigns and inform our ideas. They don't want us to put them into a large language model and then create a new version of them that we then sell ourselves.

That's the whole point of IP law, that we don't get to profit off of someone else's work. And so there are lots of ways to use IP in AI where you would not be profiting off of someone else's work. This is also just a good sign that we have got to get AI use out of the shadows. We have got to stop pretending that this hasn't happened to our industry, let's start putting AI mentions into our contracts so that we aren't guessing, "oh, I'm pretty sure the vendor wouldn't want me to do this". Let's find out what the vendors do and do not want us using with their research, with their sales reports. Right? Let's talk about BYO AI a little bit. It's also called shadow AI, bringing your own AI to work. Why might that be an issue?

It falls again into three tranches. So the first one's security. We don't have any way to control what people are putting into a language model if it's not procured through your IT department and ran through your company.

So it means there could be a data breach that happens with that company. And because your IT director isn't aware that company information is in that tool, you can't do anything to mitigate that data breach. Privacy risks as I outlined earlier concerning GDPR.

I think this is an important one. When we allow employees to use their own AI tools at work, they retain everything they put into that AI tool once they separate from the company. We don't typically allow employees to keep access to their email accounts when they change jobs. We don't allow them to keep their log in to your server.

So on the same path, you wouldn't want your employees to retain access to your AI tools once they leave the company. Even if it's the employee's own AI tools, if they are using AI a lot, they're putting a lot of information into those tools you may not want them to access once they leave. That's a strong argument for getting a Team account for one of these programs.

There's also operational risks with BYO AI. If somebody is using a tool that's not all that great, you don't have the opportunity to say, those outputs aren't good, because you're using a wonky version of AI, or somebody's knockoff version. Maybe you are using DeepSeek, which is owned by a Chinese company. You wouldn't want your private information to be uploaded to a company located in a jurisdiction we don't have access to. The lack of oversight if we don't know which AI model the person is using, means we can't know if that is a good AI model or not.

And then reputational risks. Your organization needs to be able to stand behind the information you are putting out into the universe and control any reputational risks from bad information, the legal fallout from a visitor being told something that was incorrect. You want to have jurisdiction internally over the tools that are being used by your company. Let this be your motivation to move to a $30 per person per month plan through Microsoft, Google, OpenAI, or Anthropic.

And of course, just banning AI or doing nothing at all also creates risk because there will still be a segment of your staff who will continue to use AI. You just won't know who it is and what they're doing with it, and you're not able to gain the benefits of working with AI because this person is keeping it a secret. They are deciding how they will spend the time they are reclaiming through AI use.

Let's talk about AI guidelines, what they need to include and how you can get started writing them.

First, there's going to be three operational layers for working with AI at your DMO. Internal guidelines will be the most important of those.

Here I give credit to Roxanne Steinhoff and Kara Franker, who's now the head of the Florida Keys DMO, as part of the AI Opener for Destinations program created by Group NAO and Miles Partnership.

Roxanne Steinhoff created a framework for how can destinations think through what should be in their AI guidelines. It is not my IP, so I cannot share it, but you can find Roxanne Steinhoff on LinkedIn or reach out to her through the AI Opener for Destinations program.

It's really about walking through these six elements. You need to think about your vision for AI. Do you have a high risk or low risk approach? Are you "move fast and break things" or very conservative with how you approach AI?

And I'll share, the Brand USA AI guidelines on slides following this slide. You will see how we've made these decisions. But you can't just copy our AI guidelines because you probably will have a more conservative approach to working with AI than we do. I want us to be very AI forward, and that could be a different approach from you.

Ethical principles. You need to determine as a group, as a DMO, how transparent you want to be about your use of AI.

Are you going to include language in your privacy policy? Are you going to include a note by every single piece of content that had an AI component? As an organization, you need to come to an agreement on what you think is right. How are you keeping a human in the loop?

Because AI is not yet at the point where we can trust it to do whatever we want without supervision, confidentiality and safety. How is your organization going to protect PII? How are we making sure that we aren't putting licensed material into these large language models permanently?

Governance and accountability. How are you going to monitor compliance with your company's AI policy? Do you have somebody overseeing staff training or AI use? And then finally offering some practical tips so people know what tools are allowed and if there are new tools they want to use, how could they go about using them?

Now I'm going to share what the Brand USA guidelines look like. We start with our vision, and our vision is to set the global standard for responsible, innovative AI tourism promotion. Again, that might be a little more aggressive than your organization, so that's a question that you have to answer for yourself.

Then when we get to transparency, we want to share when AI has been used to substantially assist with a task or a piece of content. We want to disclose internally every time that we use AI, because for internal use, I see this as part of education. People won't know how to recognize, AI ideas or input until you start spelling it out for them. This is an opportunity to shine a light on the cool stuff that AI can do. I like to say lead with wonder. These tools are not dry and boring. They are a lot of fun, so lean into the fun side of this as well. I like here "we embrace a culture of responsible experimentation". We want to show when we are experimenting and using AI in new ways, because that's going to kick off ideas for what other people can do using AI.

And for responsibility, we always want to keep a human in the loop. Nothing that we're doing here has automated the human out in any way. This example about autocorrect comes from the city of Boston. In May of 2023. The City of Boston released generative AI guidelines where they said keeping the human in the loop is, think about it like writing an email where you have autocorrect and if autocorrect changes a word in your email and you hit send, it's still your email. Those are still your thoughts. You have still represented that this is coming from you. It doesn't matter if autocorrect changed a word you don't get to blame something on, "oh, well, that came from AI, so I thought it would be correct". It is your job to be the human in the loop and to fact check every single thing that's part of that AI output and to make sure that it is representative of your brand, your destination.

You also don't get to tell AI, "would you fact check this for me"? Because it is incapable of doing that. Large language models have no relationship to truth. They are just putting words in a particular order to try to make you happy. That means if you ask it to fact check it, it's going to give you whatever answer it thinks will make you happy in that moment.

Responsibilities: Brand USA, we have a responsibility to keep our staff trained on using AI. Part of our role in providing these tools to the staff is making sure everyone knows how to use them. Then confidentiality and safety. I walked through why that was important already, as well as governance and accountability. So you need to have processes in place because that's going to assist in the future should something go wrong, you need to prove that you have a long history of doing the right thing of checking things.

This could be the case for those of you who have AI chatbots on your website, you may want to set up a regular cadence of red teaming or trying to trick your chatbot into saying something that it shouldn't say. The reason to do that is because the underlying models change and we have to stay on top of training these models. We can't assume it's one and done and "great that worked last week, so that means therefore it will work perfectly forever". You have to keep your hands in it all the time, and so part of that is going to be the constant red teaming because you don't want to find out through a newspaper article three months from now that your AI model said things that it shouldn't.

Part of why you do a regular red teaming schedule and that you have a process for it and that you write down when you do it, and then you annotate whether you saw any errors as part of this process is if in three months or three years, something does go off the rails, you have a track record. You want to point back at your governance documents and say, "it is unfortunate that this happened. However, we are staying on top of red teaming this AI and this is the proof that we did," so it's something to think about if you have a chatbot on your website.

So then to go back to the operational layers of working with AI, we had the internal guidelines. Now you need to think about external partnerships and working with vendors. We want to make sure that all of our vendors understand how they are using AI in their work, particularly if we are buttoned up with our own AI policy.

You wouldn't want to find out that your media agency has completely different guidelines and levels of transparency when it comes to working with AI. It's important for DMOs to have those conversations with your agency partners as new contracts come in. Take a moment to see how AI is addressed. It may be time to start inserting your own clauses saying, we want to analyze the results of this campaign using AI, and ensure that is upfront in this contract, so we're not wondering down the line.

These are the kinds of things to include on a checklist. Is your own IP going to be put into a model? Is the training turned on or off? Who owns those outputs? How will third parties your agency works with be using AI?

Is there an incident reporting process if something goes wrong with your AI materials? Is your agency providing human review at the same level that your company would? It's just making sure that your agencies and partners are aligned on AI use.

And then finally, tool vetting. How do we know any of these AI tools we're using, if we ought to be using them or not? Laura Haaber Ihle gave this wonderful presentation last summer in an AI opener for Destinations Bootcamp. She put this as, remember, you are buying risky tools from strangers, so have some kind of procurement process set up in advance so that you are not just handing away your IP and your data to every company that comes along.

This is my own personal process. You would want to bring your technology team and your legal team into this process. I start by getting the terms of use and the privacy policy, and uploading that to ChatGPT or your favorite tool, then asking what my DMO should be worried about regarding these terms.

You may want to have SSO as part of your security policy. Does that SaaS tool provide single sign-on? Are they using your content to improve their services? Do we own the output of what these third party tools make?

These are all going to be shades of gray. But you want to understand the answers to those questions before you bring the tool to legal and IT and say, do we think that this makes sense at this price point for our organization?

I want to talk through our AI mantras at Brand USA.

First I want to remind you as leadership to stay focused on your mission, that AI is a tool, but not the solution for questions like "what problems are we solving for our stakeholders? And can generative AI help us solve those problems either better or faster?" The mission doesn't change because of AI, but the way we achieve that mission might look a little different.

I encourage us to start small, to think big, that means the tiniest little use cases - for many people it is still "fancy Google", or it's the machine that rewrites my emails for me. Those are completely fine use cases for AI. It gets you into the programs and starting to use them. Ideally, you get invested with AI and start to use it for more interesting, meatier use cases. And then ultimately what we will all be able to do is AI can help us create websites and write apps and software tools that will solve bigger problems for us.

AI today can help you write tools and create software that solves problems, but you're not going to get to those bigger use cases for AI unless you start by treating it like it's fancy Google, unless you start with the teeny, tiny ideas that don't seem like a big deal. So it's fine if that's where you are, that's great because you gotta go through all of the steps to get to the really exciting use cases. Don't be afraid about starting small to ultimately achieve those bigger ideas.

AI adoption at our organizations requires both a top down and a bottom up approach. This entire webinar is about all of the things that ideally you will put into place to make your staff feel supported in their adoption of AI. We need to provide the paid tools. We need to provide those guidelines.

You need the individual staff members to find ways that AI makes sense for their own jobs and to start to build and stack those use cases on each other.

That turns into meeting with the department and talking through what are the ideas that everybody should be using.

Lead with wonder because you are not going to get your staff on board by chastising them about AI use. It's going to happen through everyone's natural excitement about how cool this stuff is. It's okay for it to be fun. AI doesn't have to steal from us the parts of our job that we think are fun. I don't use AI really for writing unless the thing I am writing is super corporate boilerplate copy, because I don't like writing that anyway. And that's the type of writing that AI happens to be very good at.

But in terms of ideation and coming up with problem solving opportunities, I'm using AI every single day for those types of use cases.

If you are curious how you can level up your own AI use, just keep it open on your computer screen on a second monitor if you have one. Every day try to think of something that you are doing that just throw it into AI and see if it can help you or not. I like that approach because the opposite approach is something that I think Gen X is being accused of doing, which is, "oh, I love ai. I am totally in support of AI and I'm gonna use it next week because I have this use case that I read was a really good use case, so I'm saving my AI for that."

Don't do that. Just throw something in there and see how it works. Don't wait for that perfect use case because it's never going to come. Open AI does not have a list of perfect use cases for DMOs. They are worrying about inventing artificial super intelligence, right?

They are onto the next thing. So it is on us to share our ideas for how we're using AI because that's what's going to help the entire US tourism industry remain competitive.

My final note is that it is not cheating when we use AI at work, and I say the term cheating very specifically because Harvard Business Review put out a meta study recently of AI adoption across different regions of the world. In over 200 studies, they found that women's use of AI lagged behind the use of men by 20 points, no matter what subset of people they were studying. One reason for that is that there's something in the back of our heads telling us, this is a bad shortcut to take, this is cheating.

And then you read everything about students cheating and what a maelstrom this has created for education. You could be forgiven for thinking it would be cheating to work with AI. But at work, particularly for DMOs, we are stewards of public funding. It's on us to make sure we are spending public funds responsibly.

And I think that means taking seven minutes on the job that used to take you seven hours, because if that's what AI can help us to do, I think it's incumbent upon us to run with it. So that is my encouragement for you.

We have a couple of questions.

How many of these tools should you have at your organization? I would say it would be really, honestly, one. The best possible use case would be, get the paid team account for ChatGPT. That is my number one resource.

I'd like to have two different language models because I think that shows people they do different things. It shows our staff that AI isn't a monolith. We use Claude and ChatGPT internally, and I like Claude because if you work with OpenAI and with ChatGPT a lot, I find that all of the writing at a certain point gives you the same answer over and over and you can't get out of that log jam.

I find that that happens less in Claude. I will get more creative original ideas there and the writing's a little better, but if I were to only use one for me, it would be ChatGPT.

What are my favorite resources, outlets, and thought leaders for keeping up with AI development?

In terms of podcasts, I listen regularly to the Hard Fork Podcast from the New York Times and to the Marketing AI Institute. They have their own standalone podcast with Paul Roetzer and Mike Kaput.

I really like Ethan Mollick. He is a professor at the Wharton School of Business and writes very prolifically about AI and the science of change management and working with AI. He has a lot of interesting insights.

Connor Grennan, who is the Head of AI at NYU also does a lot of work with change management and posts about that online. Both Ethan and Connor have email newsletters that I find really helpful.

Then we have some requests for use cases for ChatGPT. I like to say there is no prompt pack to download, right? I would start with just trying to teach it like it's an intern. These things, they are the smartest intern that you have ever had, but they don't know who you are. They don't know what you do.

Just like how you have to overexplain stuff to an intern, overexplain what you are doing to the AI. That's giving it more context, that will help it give you better answers.

Now we have a question from Beth about where in the organization have we seen ownership of AI usage and policies? Ideally it should be a blend of people.

I could see that living with your COO and I have had conversations with COOs who are putting together their own policies.

Outside of that role, I think it's a partnership between IT and legal, but really for rollout then to happen successfully, you want leadership from all across your organization. You want HR to be involved in that. You want to have the operations team involved and then you want to make sure that leadership of the other teams are a champion as well. Because if your CEO is a champion, but your CMO isn't, you're not going to have the same AI education flow and acceptance throughout the organization as you might want.

All right. When using a team account, do I give each of my vendors a seat or is this where legal agreements are needed? And you want your vendors to have your own, their own team or paid accounts? For a team account, it's tied to your email address. So your vendors can't be on your team account unless they have an email through your company.

So that's where you will want to have stricter control set up where they make you comfortable that they have their own team or enterprise accounts. For the most part, it will be hard for them to be on your account.

Do I have recommendations for the best industry AI training or certification?

I think of this webinar series as an extended course in AI. And I am working with a tool called Descript, which is an AI video editing tool, to edit these webinars into bite-sized content on TikTok.

Will I have an official certification as part of that? Stay tuned and we'll see how it rolls out. And that's the thing, any certification right now is only going to be as official as you decide it is. There is no official governing body of AI handing out official certifications.

I think there's a lot of really useful, classes on LinkedIn learning. Find the people that you think are interesting, and most of them are creating educational and video content around the work that they're doing. So I'll say Allie K. Miller is one of those people with an AI course that ends with a certification.

So is Connor Grennan. So if you want the certification, I think that's possible, but there is no industry wide cert yet.

If I had had more time or more of a legal background, I am very interested in the AIGP certification from IAPP, the International Association of Privacy Professionals. They have a certification called the Artificial Intelligence Governance Principles, and even going through the coursework for that is an education. I have learned a lot about AI in the process of learning about AI governance.

This will be our last question: are there any AI tools for the DMO websites specifically and for the website users that you recommend? If that's a question about chat bots for websites, there's a number of different companies. We just launched our own AI itinerary builder tool. Please go to America the beautiful.com. We have a partnership with a company called Mindtrip that you will find on that website. It includes buttons all across the website that allow you to engage with this AI trip planner tool. We are learning all kinds of stuff about working with chatbots and itinerary planners through that process.

There's a number of other great companies doing that work, and I could see that being a fun topic for a future webinar.`,
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Scale AI by Department: Move from ad-hoc individual use to organizational workflows by focusing on specific departments (like HR), identifying use cases for their core responsibilities (like performance reviews), and creating department-specific AI tools (like Custom GPTs).',
      'Governance is Non-Negotiable: Leaders must address "AI anxiety" by creating clear AI guidelines. This presentation focuses on three core risk areas: Data Security (systems), Data Privacy (people), and Content Integrity (IP).',
      'Use Paid Tools & Turn Off Training: The most critical step for Data Security is providing paid, enterprise-grade tools (like ChatGPT Team or Microsoft Copilot). These tools offer SOC 2 compliance and, most importantly, allow you to turn off model training, which prevents your proprietary data from being absorbed by the AI model.',
      'NEVER Put PII in an LLM: For Data Privacy, the simplest rule is to never input Personally Identifiable Information (PII) into a large language model. Doing so, especially for EU citizens, violates the EU AI Act and GDPR because the data can never be permanently deleted from the model.',
      '"Human in the Loop" is Non-Negotiable: AI is a tool, not a final authority. Organizations are responsible for all AI-generated output. This requires a "human in the loop" to fact-check, edit, and ensure all content aligns with brand standards and truthfulness, as AI models "have no relationship to truth."'
    ],
    topics: [
      'AI Governance',
      'AI Guidelines',
      'AI Risk Management',
      'Data Security',
      'Data Privacy',
      'Content Integrity',
      'Intellectual Property (IP)',
      'Personally Identifiable Information (PII)',
      'GDPR / EU AI Act',
      'Model Training (turning it off)',
      'SOC 2 Compliance',
      'Shadow AI / BYO AI',
      'AI Adoption',
      'AI Workflows',
      'Standard Operating Procedures (SOPs)',
      'AI Use Cases',
      'Destination Marketing Organization (DMO)',
      'AI for HR',
      'Custom GPTs',
      'ChatGPT Team',
      'AI Agents',
      'Red Teaming (AI)',
      'Vendor Management',
      'AI Mantras',
      'Human in the Loop'
    ],
    targetAudience: {
      primary: 'DMO (Destination Marketing Organization) leaders, executives, and managers',
      secondary: 'HR, IT, and Legal professionals, Innovation and AI officers, Tourism and hospitality industry leaders',
      tertiary: 'Anyone responsible for creating or implementing an organizational AI policy'
    },
    learningOutcomes: [
      'Develop a strategy for scaling AI use across their organization by department.',
      'Identify the three primary risk areas of AI governance: Data Security, Data Privacy, and Content Integrity.',
      'Understand the critical importance of using paid, secure AI tools (like ChatGPT Team) to turn off model training and protect company data.',
      'Explain why inputting PII into an LLM is a major legal and privacy violation (GDPR / EU AI Act).',
      'Create a framework for their own AI guidelines, covering vision, ethics, confidentiality, and vendor management.',
      'Recognize the risks of "Shadow AI" (BYO AI) and the counter-risks of banning AI entirely.'
    ],
    relatedResources: [
      { name: 'Pika (Pika.art)', description: 'Tool for creating animated images', url: 'https://pika.art' },
      { name: 'ChatGPT Team (OpenAI)', description: 'Paid/secure enterprise AI tool', url: 'https://openai.com/chatgpt/team' },
      { name: 'Claude Team (Anthropic)', description: 'Paid/secure enterprise AI tool', url: 'https://www.anthropic.com/claude' },
      { name: 'Gemini for Google Workspace', description: 'Google\'s enterprise AI tool', url: 'https://workspace.google.com/solutions/ai/' },
      { name: 'Microsoft Copilot', description: 'Microsoft\'s enterprise AI tool', url: 'https://copilot.microsoft.com' },
      { name: 'AI Opener for Destinations', description: 'Program by Group NAO and Miles Partnership', url: 'https://www.aiopenerfordestinations.com' },
      { name: 'Roxanne Steinhoff', description: 'AI governance framework creator', url: 'https://www.linkedin.com/search/results/all/?keywords=roxanne%20steinhoff' },
      { name: 'IAPP', description: 'International Association of Privacy Professionals (AIGP Certification)', url: 'https://iapp.org' },
      { name: 'Hard Fork Podcast', description: 'New York Times AI podcast', url: 'https://www.nytimes.com/column/hard-fork' },
      { name: 'Marketing AI Institute', description: 'Podcast and AI marketing resources', url: 'https://www.marketingaiinstitute.com' },
      { name: 'Ethan Mollick', description: 'Wharton Professor and AI thought leader', url: 'https://www.linkedin.com/in/emollick/' },
      { name: 'Connor Grennan', description: 'NYU AI leader and thought leader', url: 'https://www.linkedin.com/in/connorgrennan/' },
      { name: 'Allie K. Miller', description: 'AI courses and thought leader', url: 'https://www.linkedin.com/in/alliekmiller/' },
      { name: 'Descript', description: 'AI video editing tool', url: 'https://www.descript.com' },
      { name: 'Mindtrip', description: 'AI itinerary builder used by Brand USA', url: 'https://www.mindtrip.com' },
      { name: 'Brand USA AI Policy', description: 'Public AI guidelines document', url: 'https://thebrandusa.app.box.com/s/bbsg85jl4w1rbgolcyg2kwjzy7he9g64' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Welcome' },
      { time: 56, title: 'AI in the Tourism Industry: Three Focus Areas' },
      { time: 103, title: 'How to scale AI work at your DMO (by department/org chart)' },
      { time: 202, title: 'Create regular, department-specific AI meetings' },
      { time: 242, title: 'Collect SOPs (Standard Operating Procedures) to prepare for agentic AI' },
      { time: 270, title: 'Introduction to AI Governance & employee "AI Anxiety"' },
      { time: 300, title: 'The 3 Risk Areas: Data Security, Data Privacy, Content Integrity' },
      { time: 314, title: 'Risk 1: Data Security (Provide paid tools: ChatGPT Team, Copilot, etc.)' },
      { time: 365, title: 'Crucial Step: Turn off "training on your data"' },
      { time: 393, title: 'Risk 2: Data Privacy (Do NOT put PII into an LLM)' },
      { time: 473, title: 'Risk 3: Content Integrity (Protecting Intellectual Property)' },
      { time: 513, title: 'Use Case: Uploading research as a "source of truth"' },
      { time: 570, title: 'Contracts: Get addendums from vendors for AI use' },
      { time: 604, title: 'The problem of "BYO AI" (Shadow AI)' },
      { time: 619, title: 'Risks of BYO AI: Security, Privacy, Operational, Reputational' },
      { time: 711, title: 'Banning AI creates its own risks (use goes underground)' },
      { time: 723, title: 'How to create AI Guidelines (Roxanne Steinhoff framework)' },
      { time: 808, title: 'Brand USA\'s AI Guidelines: Vision & Transparency' },
      { time: 838, title: 'Brand USA\'s Guidelines: "Human in the loop" (Boston "autocorrect" example)' },
      { time: 880, title: 'AI cannot "fact check" itself' },
      { time: 902, title: 'Red Teaming: The need to constantly check your chatbots' },
      { time: 963, title: 'Governance Layer 2: External Partnerships (Vendors/Agencies)' },
      { time: 1021, title: 'Governance Layer 3: Tool Vetting (Procurement process)' },
      { time: 1074, title: 'AI Mantras (Start small, think big; top-down & bottom-up)' },
      { time: 1274, title: '"It is not cheating" to use AI at work' },
      { time: 1340, title: 'Q&A: How many tools? (Start with one paid tool, like ChatGPT)' },
      { time: 1378, title: 'Q&A: Favorite resources (Hard Fork, Marketing AI Institute, Ethan Mollick)' },
      { time: 1445, title: 'Q&A: Who owns AI policy? (It\'s a blend: COO, IT, Legal, HR)' },
      { time: 1512, title: 'Q&A: AI Certifications (IAPP, Allie K. Miller, Connor Grennan)' },
      { time: 1552, title: 'Q&A: AI for DMO websites (Mindtrip)' },
    ],
  },
  'custom-gpts': {
    id: 'custom-gpts',
    title: 'Custom GPTs: Your New AI Colleague!',
    description: 'Discover how to create and deploy custom GPT assistants that revolutionize your tourism marketing workflows. This comprehensive guide covers building Custom GPTs from scratch, troubleshooting hallucinations, practical use cases for DMOs (expense policies, press releases, meeting follow-up, coaching), and the critical differences between Custom GPTs and Projects.',
    duration: '34 min',
    muxPlaybackId: 'aYcGzhmJnP8jdz2o92EPP00JgmRWd2jLNcChaUgytgG8',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'A Custom GPT is a reusable prompt that bundles specific instructions, "Knowledge" (like uploaded PDF files), and capabilities (like web browsing) to create a specialized AI assistant that can be used repeatedly.',
      'AI models are non-deterministic and can hallucinate even when given specific files. To get factual results, you must write very strict instructions (e.g., "never rely on outside knowledge") and upload your own "source of truth" documents for the AI to query.',
      'Custom GPTs are ideal for organizational quality control and consistency. They can be built by Subject Matter Experts (SMEs) to perform specific, repeatable tasks like drafting press releases in a company style or acting as a "coach" to give feedback on sales call transcripts.',
      'Paid AI accounts are essential for business use. Free accounts use your data to train future models, which is a major security risk. Paid accounts (like ChatGPT Team) allow you to turn off model training and access crucial features like Custom GPTs.',
      'The primary practical difference between a Custom GPT and a ChatGPT Project is sharing. Custom GPTs can be shared across an organization, while Projects are for personal organization and cannot be shared.'
    ],
    topics: [
      'Custom GPTs',
      'ChatGPT',
      'Prompt Engineering',
      'AI Hallucinations',
      'AI Governance',
      'Knowledge Base (AI)',
      'AI Use Cases',
      'Data Privacy',
      'Model Training',
      'Source of Truth',
      'AI in Tourism',
      'Destination Marketing Organization (DMO)',
      'Sales Enablement',
      'AI Meeting Notetakers',
      'ChatGPT Projects',
      'GPT-5 / GPT-4o',
      'Edge Cases (AI)',
      'Simpleview',
      'Pika.art'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) professionals',
      secondary: 'Travel and tourism industry teams, Marketing and communications managers, Sales and business development teams, Operations and HR professionals',
      tertiary: 'Professionals seeking practical, repeatable AI workflows'
    },
    learningOutcomes: [
      'Define what a Custom GPT is and identify its core components (Instructions, Knowledge, Capabilities).',
      'Build a new Custom GPT from scratch, including uploading knowledge files and writing instructions to control its behavior.',
      'Understand why AI models hallucinate (they are "non-deterministic") and apply troubleshooting techniques (like writing stricter prompts) to ensure factual accuracy.',
      'Identify multiple high-value business use cases for Custom GPTs, such as querying internal policies, drafting press releases, summarizing meeting transcripts, and coaching staff.',
      'Differentiate between a shareable Custom GPT (for team use) and a personal ChatGPT Project (for organizing chats).',
      'Recognize the critical security and privacy reasons for using paid AI accounts and turning off model training.'
    ],
    relatedResources: [
      { name: 'Pika.art', description: 'Tool for creating AI-generated video clips', url: 'https://pika.art' },
      { name: 'ChatGPT (by OpenAI)', description: 'The primary LLM interface discussed', url: 'https://chat.openai.com' },
      { name: 'Otter.ai', description: 'Meeting notetaker and transcription tool', url: 'https://otter.ai' },
      { name: 'Fireflies.ai', description: 'Meeting notetaker and transcription tool', url: 'https://fireflies.ai' },
      { name: 'Simpleview', description: 'CRM platform mentioned for DMO use', url: 'https://www.simpleviewinc.com' },
      { name: 'ChatGPT Team', description: 'Business plan with Custom GPT sharing capabilities', url: 'https://openai.com/chatgpt/team' }
    ],
    chapters: [
      { time: 10, title: 'What is a Custom GPT?' },
      { time: 24, title: 'Use Case 1: Brand USA Travel & Expense Policy' },
      { time: 98, title: 'Key Feature: Conversational follow-up' },
      { time: 120, title: 'Why use Custom GPTs? (Save time, ensure consistency, control quality)' },
      { time: 160, title: 'How to edit a Custom GPT' },
      { time: 171, title: 'Backend Part 1: Instructions (The main prompt)' },
      { time: 191, title: 'Backend Part 2: Knowledge (Uploading files as a "source of truth")' },
      { time: 209, title: 'Critical Risk: AI Hallucinations (Non-deterministic)' },
      { time: 235, title: 'Example of failure: The "Chicago" per diem edge case' },
      { time: 265, title: 'The fix: Writing a stricter, more robust prompt' },
      { time: 310, title: 'Backend Part 3: Model Selection (GPT-5 vs. 4o)' },
      { time: 341, title: 'Backend Part 4: Capabilities (Web browsing, DALL-E, etc.)' },
      { time: 373, title: 'How to create a new Custom GPT from scratch' },
      { time: 389, title: 'The "GPT Store"' },
      { time: 431, title: 'Use Case 2: Press Release Drafter' },
      { time: 458, title: 'Pro-tip: Use ChatGPT to help write your instructions' },
      { time: 531, title: 'Key Insight: Subject Matter Experts (SMEs) must build and validate GPTs' },
      { time: 555, title: 'How to build: Sharing Options (Team, Public, etc.)' },
      { time: 585, title: 'Use Case 3: Meeting Notetakers & Sales Workflows' },
      { time: 611, title: 'Warning: Get consent before recording meetings' },
      { time: 655, title: 'Idea: "CRM" GPT (for Simpleview)' },
      { time: 688, title: 'Idea: "Coach" GPT (for junior staff)' },
      { time: 752, title: 'More ideas: Policy Summarizer, Content Repurposer, Crisis Simulator, Onboarding' },
      { time: 794, title: 'Q&A: Recording meetings at trade shows (Otter, Fireflies)' },
      { time: 844, title: 'Crucial Info: Paid accounts are required to turn off model training' },
      { time: 871, title: 'Custom GPT vs. ChatGPT Project (Sharing is the key difference)' },
    ],
    transcript: `Hello, this is Janette Roush, and welcome to another one of our Brand USA Agents of Change sessions. This particular session is on Custom GPTs. A year ago, November 2023, on DevDay, OpenAI announced that with a paid OpenAI account, you could now create these things called Custom GPTs, and they introduced a GPT store where you could have these GPTs published for the wider world to access and use. And for many of us, it wasn't clear what those were, what should they be used for.

The power of a Custom GPT is that it allows you to make instructions and knowledge a reusable prompt so that you can go back to the same exact set of instructions over and over again instead of having to paste instructions into a new chat every single time that you want to do a different task. And so the way I like to think about a Custom GPT is it's a very narrow, specific, single-use prompt. But because it's saved as a Custom GPT, you can come back to it every time that you need to do that single-use task.

So this would be a single task like helping you interpret the specific guidelines that your accounting department has published. Or maybe it's the specific ways that your communication team wants to do press releases. These are both individual tasks, each of which would get its own Custom GPT, and then you can use those Custom GPTs over and over and over again.

Here's one that we made here at Brand USA. It's our travel and expense policy. If you're not familiar with that particular corporate policy, what it is, is when you're traveling as part of your job, or you're incurring expenses that your company is going to pay you back for, you can ask questions of this Custom GPT in order to understand, "Can my company pay for this? Or, is this per diem? What is the per diem rate for the particular city that I'm going to?"

And so what we've done is we've uploaded the most up-to-date version of Brand USA's travel and expense policy, and then any new hires or anyone who has a question, instead of having to read through 40 pages of this particular policy, they can just ask the Custom GPT.

So let me show you an example. Let's say that I'm about to book a flight to Orlando to meet some clients and do sales meetings at Destination International, so I'm going to stay for three nights. And so I might ask the Custom GPT, I'm traveling to Orlando for business. I'm going to be there for three nights. What is the per diem rate, and can you break that down for me by lodging, meals and incidentals? And as soon as I hit enter, this Custom GPT is going to look at the instructions that have been given to it—instructions that are not visible in this chat window—and it will also look into the knowledge file, which is the PDF that we uploaded, and it's going to give us a very specific answer.

So here it goes. The per diem rate for Orlando is $179 per day, and then it gives us that breakdown. $112 for lodging, $59 for meals and incidentals, and $8 for incidental expenses. And the reason that this is useful is not because you couldn't just Google it—you could—but because it allows you to follow up with any other questions that you might have that are specific to Brand USA's corporate policies, not just the per diem.

So one of the requirements in order to get to expense your trip is that you've got to be traveling at least 51 miles away from your primary work site. And so you could ask, what is that minimum distance? And it's going to be able to provide that for you. Or you could say, "I have a question about alcohol. Can I put alcohol on my company credit card?" And the Custom GPT can give you a response that is specific to Brand USA's policy around alcohol and whether or not that can be expensed or whether it should be paid for by the employee and not submitted for reimbursement.

So this is just one example of where a Custom GPT can be really, really useful. Now when you go into a Custom GPT, you can edit it. So for this particular Custom GPT, I built this one. If you are the person who built it, or if someone shares the edit link with you, then you can go in and make changes to it. So if I hit edit, it's going to pop open this little flyout window that shows all of the settings that have been configured for this Custom GPT. And there are really two main sections to a Custom GPT.

One is the "Configure" section, where you can set up the name, the description. You can upload a picture or generate a picture. And then down here is the "instructions" section. The instructions are the prompt. This is the set of rules that ChatGPT is going to follow every single time you ask the Custom GPT a question. And then there's a section here called "Knowledge," and the knowledge section is where you are uploading the source of truth.

So in this case, the knowledge that has been provided is the PDF of the Brand USA travel and expense policy, and this right here, this is the internal source of truth. This is the document that was created by our finance team, and so whenever I ask a question of this Custom GPT, it is going to look to that PDF as its source of truth and respond based on this PDF, not based on generally what it thinks that a travel expense policy might look like.

Now one of the really important things to understand is that these models are non-deterministic. They can give you a correct answer for the very first time, and then if you ask the same question three months later, it gives you a wrong answer, because something in the model shifted, something in the way that the prompt was written was slightly different.

And so because these are not like databases where you would ask a query and you're always going to get back the same exact return—because these are non-deterministic models, you've got to write really, really solid prompts for your Custom GPTs and you've got to test them out yourself and have other people beta test them as well. So I'll give you an example. This Custom GPT was one that I created over a year ago, and I actually used it. I traveled to Chicago, I asked this Custom GPT what the per diem rate was for Chicago, I put it on my expense report, and then my expense report came back and said, "This is wrong, this is not the correct rate."

And so then I went back into the Custom GPT, and I asked it the question, why did you give me the wrong per diem rate for Chicago? And I found out that the per diem rate that you'll use is dependent on the county. And so Chicago, the city of Chicago, is in Cook County. And depending on what county you're in, you're going to have a different per diem rate. But the city limits of Chicago extend into DuPage County, and so if you're staying in a hotel that happens to be in DuPage County, you have a different per diem rate. And what this Custom GPT was doing is it was defaulting to the DuPage County rate, not the Cook County rate for the city of Chicago.

So I had to go back to the instructions and I had to rewrite the instructions so that they were really clear. You're going to be given a city. When you are given that city, find the county for that city. Look at the PDF and find the rate that corresponds to that county. And so then once I fixed the instructions, which is this right here—the instructions are the prompt, and so if you've gotten really good at prompting ChatGPT, that exact same skill set is what you use in order to create better Custom GPTs. Now when I ask it what's the per diem rate for Chicago, it returns the correct county and the correct per diem rate.

And so that's one of the things that's really important to understand is that the quality of your Custom GPT is determined by two things: the quality of the knowledge that you upload and the quality of the instructions that you write, which is the quality of the prompting. And both of those things, human beings are responsible for. You've got to upload good sources of truth, and you've got to write really good prompts.

And then the very last part of the Custom GPT configuration is there's a couple of different models that you can choose from. You can decide which is the model that's being used in the back end. So right now it's defaulted to a newer model that came out just in the last month called O1-preview. O1-preview is a reasoning model, which means that it spends a lot more time thinking through the problem, and that's really helpful for writing code or solving complex math problems. But for more conversational, general, faster use cases, I often will default back to GPT-4o, which is their older—I say old, but it's not that old—but it's their more conversational model versus the reasoning model.

And then you can toggle on or off different capabilities. Does this Custom GPT have the ability to search the web in order to help respond to questions? Does it have the ability to generate images using DALL-E? Or does it have the ability to run code, Python code, in order to analyze data that you give it? In this case, we've turned those off because we're really only going to be asking it questions about per diem policy. We don't need it to search the web, we don't need it to generate images, and we don't need it to write code. But in other Custom GPTs, you might turn those different abilities on.

Now I want to show you how you would build a Custom GPT from scratch, so we're going to start over. You close out of that one. And when you're in ChatGPT and you've got a paid account, on the left-hand side, there's going to be a section that says "Explore GPTs," and when you select that, it's going to take you to what they call the GPT store. And inside the GPT store, you can find Custom GPTs that other people have published that do all kinds of different things.

You can select from some of the top GPTs or the trending ones. For example, there's one called Canva that helps you create graphics and presentations using Canva. There's one called Consensus that searches through 200 million academic papers in order to help you do research. And then there is this great one. This is a really fun one called DALL-E, which is just a user-friendly interface for generating images. So you click into any of these in order to actually use them. And then to see all of them, you can select "view all" in order to see what other Custom GPTs people have published.

Now, when you're going to create your own Custom GPT—so let's say that we're in communications or we're on a PR team, and we want to make sure that any time we're writing a press release, we're doing it according to the communications department's guidelines and best practices. Then the way that you would do that is inside the Explore GPTs page, there's a button up here that says "create a GPT," and you select that in order to build your own Custom GPT.

And so here we go. Now the GPT builder is going to pop open. This is using ChatGPT to help you build this Custom GPT. So you're going to have a conversation with ChatGPT, and it's going to ask you, "What would you like to make?" Now you can either tell it what you want to make in the most simple terms or you can give it a lot of detail, kind of like you would in a really good prompt. And so I'm going to tell it, "I'm building a tool to help Brand USA employees draft press releases. It should follow AP style and Brand USA communication style guide. Ask me what the press release is about, and then interview me in order to gather the relevant details for that press release."

So I hit enter. And what ChatGPT is going to do is it's going to take what I've given it, and it's going to draft a better, more detailed version of what I've asked for. So it says, "Got it. I'll create a press release assistant. Here's a preview of the GPT's name and profile. We can always adjust these details." And so it's given it a name called "Brand USA Press Release Assistant." I might change that and just call it "Press Release Drafter." And then it's given it a profile picture. I don't love this profile picture. I might change that so that it was the Brand USA logo or something like that. But for right now, we're just going to leave those.

And then it's given it really detailed instructions, which is the prompt. And so this is the exact same process that I would use to help me write the instructions. I would ask ChatGPT to help me write the instructions instead of having to just make them up on my own. It's good at prompting, so I want to leverage ChatGPT to help me write better prompts.

And so this is what it came back with. It says, "You are a press release assistant for Brand USA employees. Your primary goal is to help draft press releases that follow AP style and Brand USA's communication style guide. Start every conversation by asking the user about the topic of the press release. Then, conduct an interview to gather relevant details, such as key messages, quotes, target audience, event details, and any supporting information." And it goes on. It's got about 300 words' worth of instructions for this Custom GPT. I'm going to give it a thumbs up because I like these instructions.

And now I could test out this Custom GPT before I fully publish it or share it with anyone. So I'm going to ask it, "I want to write a press release." So I'm already testing it out. And it says, "Great! Let's get started. What is the topic or subject of your press release?" So already it's interviewing me. "I want to announce the Agents of Change program." And so then it says, "Perfect! Agents of Change sounds like an impactful initiative. To help craft an engaging press release, I'd like to gather a bit more detail. Could you share the following?" And then it asks me a number of questions. What are the key messages? Who's the target audience?

Now if I wanted to, I could respond to all of these questions conversationally, and it would draft a press release for me. But what I really want to do is I want to upload the communications style guide so that it's not just following AP style—which it already knows, because its training data includes AP style—but now it's also following Brand USA's communications style.

So in order to do that, I need to jump over into the "Configure" tab, and I'm going to scroll all the way down, and I'm going to upload a file. So when I select "upload files," I'm going to find Brand USA's communication style guide, which is a PDF. And I'm going to upload that file. And once I've uploaded the file, that's been added as the knowledge, and then I'm going to go back in and continue on that preview.

And so now that I've added in that communication style guide, I can test this again. So I'm going to ask it, "I want to write a press release." "Great! Let's get started. What is the topic or subject of your press release?" "I want to announce the Agents of Change program." Perfect! Now, when it gives me this draft, it's going to look at that uploaded communication style guide and compare it to what I've given it and make sure that the press release that it drafts for me uses the specific rules and requirements for a Brand USA press release.

So I'm going to paste in a bunch of text. This is a description of what the Agents of Change program is. I'm going to paste that in. And I'm just going to tell it, "Please go ahead and draft the press release using this information." So now it's going to take a minute. It's looking at the instructions. It's looking at the knowledge file. And it's going to draft a press release for me. And then once it gives me that press release, I can read through the press release and either ask it to make changes or I can decide that it's good to go, I'm going to copy it, and then I can paste it wherever I need to use it.

And the benefit of having this as a Custom GPT is that this is a reusable prompt. I can come back to this same set of instructions and this same uploaded file over and over again, every single time that I need to write a press release, instead of having to upload the communications guide every single time and having to re-paste my instructions every single time I need to write a press release.

Now, once you're comfortable with the Custom GPT, the very last step is that you're going to save it and you're going to select who has access to it. So if I hit the "create" button up here at the top right, this is going to finalize the Custom GPT and allow me to select who can access it. You can choose "only me," which means that only you have access to it. You can choose "anyone with a link," which means that as long as somebody has a ChatGPT account, they can use this Custom GPT if you share the link with them. And then the one that I use the most often, which is "workspace," and what this means is that everyone who has a ChatGPT Team account on Brand USA's team, they're going to be able to see this Custom GPT and use it themselves.

So I'm going to select the "workspace" option because I want everyone at Brand USA who's writing press releases to follow the same communications guide. And then I'm going to hit "save," and now I've added it to the GPT store—not the public GPT store, but my internal, just Brand USA GPT store. And anytime anyone asks me, "Hey, I need to write a press release," I could just say, "Go to the Explore GPTs page inside of ChatGPT. Click on the Brand USA press release drafter, and it will walk you through all of the questions that you need to answer and draft the press release for you."

Now I want to just quickly go through a number of other examples where building Custom GPTs can be really useful for a wide variety of different departments. The one that we've been using at Brand USA is one for our meetings team. And so every time they go to a sales meeting or a tradeshow, they're coming back with handwritten notes or transcripts from that meeting, and they need to put those transcripts or those notes into the CRM—the database that the sales team uses. And before AI, what would happen is they would come back from the tradeshow, they'd have all of these handwritten notes, and then they would have to basically spend hours copying those notes into the CRM.

Now what they've been able to do is build a Custom GPT that takes the handwritten notes or the transcripts from the meetings, reformats it in a way that's specific to the fields that are inside the CRM, and it makes it really easy for them to take those notes and put them into the CRM database.

One of the things that you've got to be really careful about is that in order to do this, if you're using a transcription tool like Otter.ai or Fireflies, these tools can join a Zoom call for you or join a Google Meet for you, and they will take the notes and produce a transcript. And you can upload that transcript to a Custom GPT in order to have it reformat it for you.

But you've got to get consent from the other people on the meeting. Especially if you're at a tradeshow, and you're recording a meeting, and the people on the other side of that meeting are your clients and you have not gotten consent from them to record, you cannot record that meeting. You've got to make sure that you're getting consent either through the tools that are part of Zoom that will say, "This call is being recorded," or you've got to verbally ask people, "I would like to record this meeting so that I can take notes afterwards. Do I have your permission?" And if they say yes, then you record, and if they say no, then you can't. So just make sure that you're getting consent and you're not recording people without their permission.

But once you do have their permission and you do have those notes, you can upload those notes as a file to a Custom GPT or you can paste them in as text, and the Custom GPT can reformat them for you. So that's a really great use case for sales teams—for reformatting their notes to be uploaded into a CRM.

Another really great use case is let's say you're the manager of a team of sales professionals, and you want to give them coaching and mentorship on the different sales calls that they're participating in. Maybe you've got junior employees and you want to help give them feedback, but you don't have time to sit in on all of their calls. If those calls are being recorded with consent, then you could upload the transcripts from those calls to a Custom GPT and ask the Custom GPT to act as a coach.

So it would say, "Listen to this sales call. Here are the best practices for sales calls. Compare this transcript to the best practices and give me three pieces of feedback for how I can improve as a sales professional." And then you hand that feedback to your employee and they can learn from the feedback that the Custom GPT has given them. And so it can act as a coach for your team.

Now these are just a couple of examples. There's a wide range of other Custom GPTs that you could be building for your DMO. So let me just quickly throw out a couple. You could have a policy summarizer where you upload new policies, new guidelines, and the Custom GPT summarizes them for your employees so that they can get the high-level understanding of a policy without having to read through 50 pages.

You could have a content repurposing tool where you upload a long-form piece of content, like a case study or a white paper, and then the Custom GPT repurposes it for social media, into a blog post, into a video script, into an email—whatever you need, it can take one source of truth, one primary piece of content, and help you repurpose it for all the various formats that you might need.

You could build a crisis communication simulator where you're training your employees on what to do in case of a PR crisis. The Custom GPT can be loaded with the crisis communication playbook, and then it can generate realistic scenarios and train employees on how to respond in the moment. So it can act as a really great training tool.

You could also build an onboarding assistant where new employees are able to ask questions about the company, about their role, about HR policies, benefits—all of that information can be loaded into one Custom GPT that's specifically for onboarding new employees.

Now, one question that I've been asked at almost every webinar that I've given is, "Can I record a conversation at a tradeshow when I'm just walking the tradeshow floor?" And the answer is yes, you can, as long as you're getting consent from the people you're talking to. So if you're at a tradeshow, you're walking around, and you want to just have your phone in your pocket recording your conversations, you've got to make it clear to the people that you're talking to that you're recording the conversation. The way that I do it is I'll just pull out my phone, I'll hold it, and I'll say, "Hey, I'm taking a recording of this so I can take notes later." And if they're okay with it, then I keep recording. If they're not, then I stop recording.

But as long as you're getting consent, you can use tools like Otter.ai, you can use Apple's voice memo app, you can use Fireflies—any of these tools will produce a transcript for you that you can then upload to a Custom GPT. And so it's a really great way to make sure that after a tradeshow, you don't lose all of the great conversations that you had. You've now got transcripts from all of those conversations that you can put into your CRM.

Now, one of the most important things that you need to understand about Custom GPTs is that in order to use them, you've got to have a paid ChatGPT account. If you have a free ChatGPT account, you cannot build Custom GPTs, and you also cannot use Custom GPTs, even if someone shares a link with you. So you have to upgrade to a paid account. And the reason that this is so important is that if you're using a free ChatGPT account for business use, you are putting your company's proprietary information into a tool that is going to use that information to train future models.

And so the way that you opt out of having your data used to train future models is that you upgrade to a paid account, and then inside of the settings, you turn off the toggle that says, "Improve the model for everyone." When you turn that toggle off, now your data is not being used to train future models, and you have much better security and privacy.

So if you are using ChatGPT for business use, if you're putting any proprietary information into it, you absolutely must have a paid account and you must turn off model training. This is one of the most important settings that you can configure inside of ChatGPT.

Now, the very last thing I want to touch on—because I've been asked this question a lot—is what's the difference between a Custom GPT and a project? Projects are a feature that was released by OpenAI maybe six months ago, and a project allows you to organize your different chats. So let's say that you're working on a big campaign, you can create a project for that campaign and then all of the chats related to that campaign will get organized into the project.

You can also upload files to a project, and those files will be available to all of the chats inside that project. So projects are really helpful for organizing your work. The key difference between a Custom GPT and a project is that a Custom GPT can be shared with your team, and a project cannot. A project is only for you. It's for your own personal organization. A Custom GPT is something that you can share with your entire team, and everyone can use the same instructions and the same knowledge files.

So if you're building something that's just for you, that you want to organize your work, you would use a project. If you're building something that you want your team to use, you would use a Custom GPT. And that's the key difference between the two.

All right, so that is a really quick overview of Custom GPTs. I hope that gives you some ideas for how you can start building Custom GPTs for your team and for your organization. Thank you so much for joining me, and I'll see you at the next one.`
  },
  'ai-convention-sales': {
    id: 'ai-convention-sales',
    title: 'AI for Convention Sales',
    description: 'Master Custom GPTs for meeting follow-up and lead research, then discover vibe coding to build AI-powered tools for business events.',
    duration: '42 min',
    muxPlaybackId: '5xZnY5oJP5nlS5wQsEGv00U00gsf201r00aF00Y902ug26K9o',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Transcript (server-rendered as static HTML)
    transcript: `My name is Janette Roush. I am the SVP of Innovation and Chief AI Officer for Brand USA, and today we are going to talk about AI for convention sales.

So as a quick reminder of my role here at Brand USA, I am looking at how we can transform the promotion of business events across the United States using AI through three tranches of work. The first is operational excellence and how can we upskill what we are doing internally with the assistance of AI. The second piece, that's what this webinar is right now, industry empowerment. How are we able to increase the capacity of the US tourism industry to do this work? And then the third piece is planner and delegate experience enhancement. How can we use AI to improve the discoverability and bookability of the United States?

Later in the presentation, I'm going to be joined by Gabe from Visit Orlando's technology team and he is going to walk through an app that he has vibe coded for Visit Orlando's team. So I'm excited to see that as well.

One of the most useful tools when it comes to convention sales teams and how you can adopt AI not just for individual use cases, but across your department, is by building custom GPTs for your team. A custom GPT is a reusable prompt inside of ChatGPT. It's one set of instructions with a set of files that have already been saved, and it allows you to use that prompt over and over again.

So this is an example of a custom GPT that we use here at Brand USA, and it is for our travel and expense policy. Here in the back end, I have uploaded our 40 plus page PDF file with our expense policy in it. And then you are able to log in and ask questions like, "What is my per diem in Tokyo?" I have instructed it to look at sources in order to answer the question, what is the per diem in Tokyo? And here we see that we have the hotel, the meal, and the incidental per diem spelled out. And then what makes custom GPTs particularly useful and interesting is that you can continue to have a conversation, so you can clarify things that you don't understand about the answer. So here now I can dive in a little deeper and ask about booking the business class seats from New York City to Tokyo.

So why would we want to use the same prompt more than one time? There's three uses for that. The first is that it saves time. You don't have to retype the prompt every single time. I don't have to upload that PDF file every single time I want to ask a question of it. It's already uploaded, it's already saved, and all of the custom GPTs are stored in one place on your ChatGPT account. So you don't have to do a search for that old chat that you would had going if that's the way you're currently doing this work. The second piece is that this ensures consistency, particularly across a team. It makes sure that everybody is getting the same answers in the same format. And because of that, it can help to control quality. Again, there's going to be one consistent prompt that everybody is using, which creates one consistent output.

Let's look what it would take to create a new custom GPT for a convention sales team. Start by navigating to "Explore GPTs". So you will want to have a paid version of ChatGPT to really dig into using these tools. I believe there's some limited access in the free accounts, but in order to create and share them across a department, you want to have a paid "Team" or "Enterprise" account. And you'll see here on the left rail, there's the "Explore GPTs" button. Then when you open that up, you're going to get... you can see what looks like the GPT store, which is OpenAI's version of the Apple's App Store essentially. And you'll see on the top right hand corner there is a button that allows you to create a new GPT. And then when you click on it, you get this screen.

To get started, you are going to type in something for the "Name" and the "Description". Now, that information doesn't change how the GPT works. That is just for your own reference to find the GPT again. The most important component is here in the middle. It is the "Instructions". And the instructions are just another name for a prompt. And so it is something that every time you use this custom GPT, it is going to refer back to this prompt in order to find out what it should do with your request.

Now, a great way to use this is actually have ChatGPT write that prompt for you. So the example that I am going to show is making a workflow for taking notes, a transcript of a sales call that you have, and then from that sales call pulling out all of the bullet points that you would then need to paste into your CRM tool, whether that is Simpleview, Salesforce, or another tool. Here, I'm explaining to ChatGPT what I want to have. And then it's responding by giving me a prompt. And you'll see the prompt is written in a code called JSON. When a prompt is written in JSON, it makes it easier for ChatGPT to provide a consistent response because it is following the code. Even if you don't read code, you can tell these are all of the things that it is looking for in the transcript of your conversation in order to pull out a bullet list for you of that important information.

So you just copy that from ChatGPT, go back into the custom GPT that you're building and you paste the instructions into the "Instructions" field. You then have the opportunity to upload knowledge. So in the case of Brand USA's GPT for our travel and expense policy, I've uploaded our travel and expense policy. So you may not need to upload any files for something like a CRM notetaker, but you might want to, if you have examples of good output, what you consider a positive output to look like, you could upload that. If you were creating a reusable prompt in order to look at research, you could then upload that research here and it could review that every time you asked a question about a particular market segment where you have research about that market uploaded into a custom GPT.

And then as you're getting closer to finishing the custom GPT, you can do things like add a logo or image in order to make it easier for you to find that tool inside of your toolbar. There will just be a plus sign, and you can select that plus sign in order to upload an image or have ChatGPT create that image for you.

Then, inside of that page, you have the opportunity to preview the custom GPT to see how it works. So here, I actually had ChatGPT make a fake transcript of a phone call, and then I uploaded it to this custom GPT to see what the output looks like. And what I particularly liked about this custom GPT is that I'm doing a completion check at the end, and it's telling me that some of the data is missing. And then you are able to look up and for the question, "What prior destinations has this event been in?" We see that it says "unknown". So we know that the next time that we have a call with this person, we may want to clarify whether or not they've held this event in previous destinations and what those destinations were.

And then you're going to hit the "Create" button. It's then going to give you options for whether or not you would like to share this GPT. So here, I can keep it so that it's just for my own personal use. I can make it "Invite only", and I can get a link where I can share that with other people. I can type in the names of people in the Brand USA workspace and select names from a list in order to share it across with specific people in my company. Or I can make it so that anybody at Brand USA can see this. And in that way, when they go to their version of the GPT store, there's a section at the top with all of the GPTs that are available to the entire company. And then finally, you have the option to share it outside of your organization. So if I wanted to create a GPT on how to make custom GPT, I could share that link or that QR code here in the webinar, and then anybody who has that link would be able to use it. Or we can make it public, and then it goes into that public GPT exchange.

And then the final product, when you open it up inside of your ChatGPT account, this is what it's going to look like.

So what are other examples of custom GPT that you could make? If we wanted to focus just on follow-up from meetings, let's imagine you are recording your meetings at IMEX by downloading a transcription or a meeting notetaker tool onto your phone. You would want to get permission for recording that meeting, right? Getting consent, whether it is for a recording over Zoom, Microsoft Teams, or in person, there are many meeting notetaking tools, some of which you will see join your meeting as a participant. But there are other meeting notetaking tools that do not join your meeting visibly, but still may be recording your meeting and making a transcription. So it is important to know, while you understand, you could be recorded at any time, don't be that person doing that, and get consent before you record the call.

Once you do, make sure that during the call, you are asking the same key questions that you always would during that initial sales call. So whether it is in person, whether it is over Zoom, if you need to know the number of room nights on peak and prior destinations for the meeting has been held, just make sure that you go through all of the questions that you would need to ask. And then you have the opportunity to export that transcript and then put it into a custom GPT.

So we already walked through the idea of making a custom GPT that would work with your CRM tool. So to take all of the information that you might have scribbled on a note, or you might have... you might need to read the entire transcript in order to find all of those individual details. Now it can pull it out for you in one spot. You could use that same transcript, but create a different custom GPT that is a sales coach. So in my time at New York City Tourism and Conventions, we had a five-borough mandate. If a member of the team was talking about New York City as a meeting destination, ideally they aren't just talking about Manhattan, they're talking about the four other boroughs in New York City as well. If you wanted to spend more time training up junior staff, but you don't always have the bandwidth to listen in on every one of their calls, you could create a custom GPT where the prompt is "review this sales call and then give helpful suggestions on what the salesperson could do differently on their next call." That might be a more comfortable way for somebody to do training where they don't feel like it's another person watching over them. And then you could program into the prompt, make sure that the person on the call is abiding by the five-borough mandate and is offering at least one borough in addition to the borough of Manhattan for the meeting destination.

And then finally, of course, it's the email follow-up. And we know that emails can get a little rote. So the idea isn't to have ChatGPT completely do your email follow-up for you, but it's very rare if you're coming back from a conference that you're going to sit down with a blank email every single time that you have to write that follow-up. You're typically starting from some kind of template, and then you are adjusting that template. So you can take a little pressure off of yourself. Have ChatGPT, it understands what you consider a good sales follow-up to be. Give examples of those good emails to ChatGPT, and then say, "Please write some guidance so that a future large language model can replicate this style when it's shown a transcript of a call." And then that will get you faster to the first draft, so that then all you need to do is worry about editing that draft.

So how would that process work specifically? I'd say start by choosing five strong post-call emails. The more examples you have, the better. You're then going to go to ChatGPT and create a custom GPT, and then you're filling in the name and instructions. Typically, when I am naming a custom GPT, I like to give it a name that describes the task that it does. So you are "Convention Sales Follow-up Assistant", and that is its job. The only thing it does is assist you in following up on sales conversations. So say, "You're a follow-up assistant for a DMO. You help write post-call follow-up emails based on a transcript, match the sales rep's tone and writing style from the examples provided. Focus on being professional, warm, concise, and helpful. Emphasize next steps and destination benefits relevant to the planner's needs." A really great, straightforward, clear prompt, just telling ChatGPT, what do you want it to do every single time somebody pastes in a call transcript? You can then upload your email samples to files. You can paste them all into one Word document if you'd like. Test it with a call transcript to make sure that you are getting the output you are hoping for. And then you can publish that custom GPT.

Now I'd like to talk about how you can use any of the AI tools, which could include Anthropic's Claude or Google's Gemini with a product that they call "deep research". It is embedded in all three of the frontier language models, and deep research is like giving an assistant 30 minutes to go out and just deeply query a question that you have, and then to take all of this information that the assistant finds on the internet and write a McKinsey-style report for you about that information. I think that this is particularly powerful when it comes to creating a competitive analysis.

I wanted to understand what is Brand USA's place amongst 30 national tourism organizations when it comes to the global business event market. So I want to understand for places like Business Events Australia, what is their unique selling proposition and their brand promise? Do they have a tagline? Can we uncover somewhere hidden in files on the internet information about how much they spend a year on meetings and advertising to that market segment? Do they offer any incentives to planners who book events in their destination? So this is something that if I were to do it across 30 different organizations, it would take me days. Here, it will do something similar in about 30 minutes. You have to know that they hallucinate, they will make things up. But in that report, you'll be given links so that you can actually click through to the sources and read those sources yourself to see if you agree with the outcome that ChatGPT gave you in this research report. If you're looking to see what your competitive set is doing, it is a very powerful tool. It would also be excellent for doing things like researching more deeply on a particular market segment that you are looking to attract to your destination, or to learn about trends in the meeting space. If you were looking more at incentives from a particular market, you could get up-to-date, really in-depth, detailed information by giving a powerful prompt to one of these deep research tools.

Now I'm going to walk through a slightly more complex example, which is using agents for lead research. And the example that I'm going to show you today is completely free to access. It is from a website that is called agent.ai, and it was created by one of the co-founders of HubSpot. If you use HubSpot, they have a lot of integrations between agent.ai and the HubSpot ecosystem. And one of the really helpful things they have is access to the API for LinkedIn. So it means you can query LinkedIn. And if the people you are querying have open profiles on LinkedIn, you can learn things about them without needing to be inside of LinkedIn and navigating to their profile page.

So I went to agent.ai to make an agent that provides insights on business event planners for DMOs. And here, I've written a description of exactly what I want it to do. I want it to deliver actionable sales intelligence based on identifying the key selling points, decision-making patterns, and how I could personalize an approach to reach out to this planner based on their professional history. And it's going to do that by reading the LinkedIn posts that were made by the planner, and then taking those posts and putting them inside a prompt so that a large language model is analyzing the posts and then coming up with an output.

The deep research example that I just showed you, that is also an example of agentic AI. You don't have to move your computer mouse to click on all of the websites that it's researching. You give it a task and it goes out and completes the task on your behalf. So this is a slightly different type of agent where I've spelled out a workflow, and then AI helps the steps in the workflow to move forward.

When you log in and you say, "I want to create a new agent," this is what the first landing page will look like. You begin by giving a description that's public of how you say this agent will work. Then here is where you spell out the steps. This agent is very simple. It only has five steps. And then over here on the right side, this is where you can test the agent to see if it works the way that you want it to.

And so the five steps are that you want to get input from the user. So that's this section right here. If I'm the user, this needs input, in this case, the URL of the planner on LinkedIn, in order to move to the second step. The second step is that it's going to go to that URL's LinkedIn profile and save it. It's then going to get the last 25 posts on LinkedIn for that URL, and it is going to save it in a file called "LinkedIn posts". So then, we're going to invoke GPT-4.5 in this example, and it's going to review all of that data from LinkedIn. And then it is going to provide a summary. And then it's going to show us that summary in markdown format so it's easy to read.

So what does this look like? This is creating step number one, getting user input. The input type is "Text". You're going to... this is what we're asking for, the LinkedIn URL of the business event planner. You can provide examples so that the user of the agent can see what they're meant to do. And then you give that variable, that output, a name. Here, "LinkedIn_url".

And then let's move forward to the piece where we are using generative AI in this tool. This is just a prompt. "I'm providing you with a LinkedIn profile and posts of a business event planner. Please provide a detailed summary of what interests them, what destinations they write about, if any, what a good sales approach could be for them. And then give me a bulleted list that would include key selling points, decision-making patterns, and personalized approaches based on that planner's professional history." "Conclude the output with one surprising insight about the planner." And then here, I'm telling it what to look at. I want it to look at the data from this person's profile and the post output, the list of their last 25 posts. And then it's going to return that as "out_summary" or "output_summary".

Then this is the output summary rendered in markdown format. You could see this is six and seven of many different insights that we got from this business event planner. But we now understand some of their key selling points, things that would be interesting to this person as you were conducting, you know, a sales pitch with them. And we understand, like, the surprising insight that this person isn't just a business event planner, he's also a thought leader and an advisor. He's really on the forefront of this work. All of this, if you are in the midst of the pitching process to host a special meeting in your destination or in your venue, this is very helpful information to have. And it's something you could get by yourself from LinkedIn, but it would take a long time. They don't make it easy in LinkedIn to find the last 25, 50, or 100 LinkedIn posts that someone wrote. So this makes it much simpler to do that work. And then if you wanted to make this even more agentic, you could set it up on the back end so that it's connected to your Outlook calendar, so it knows who you have meetings with, and then it could run this script automatically and send you an email every morning with this information. That's a little more complicated to pull off, but it's something that's entirely possible using today's technology.

And so now, this is my opportunity to turn it over to Gabe because I am very excited to hear what he has been vibe coding with Visit Orlando. Gabe, do you want to jump on?

Sure. Thanks, Janette. Hello everyone. My name is Gabriel Rajahy. I am the manager of Enterprise Applications at Visit Orlando. I've been here a little bit over 10 years now, and I primarily see all of our CMS and CRM integrations. We are Simpleview clients. But today I'm going to be talking a little bit about vibe coding and what the next evolution is in my opinion with AI.

Vibe coding lets you turn some ideas, some brainstorming into quick applications. And I'm going to be demoing something I built for our convention sales team. It's still a prototype. I'm going to be doing a live demo of something we're doing with our convention maps. I did a quick deck for vibe coding, just to give an overview of what it is, and then we'll head over to the demo.

Vibe coding essentially is turning plain English into code. So similar to ChatGPT and Copilot, you can type something in an idea, and vibe coding turns that into a real application, a website, a platform, a database, a backend, whatever you want, just chatting into a prompt-based system. Here on the right-hand side, you'll see what that workflow looks like. So number one, you're going to describe what you want. In this example, "I need a login form." The AI then generates what you put in and spits out, again, a real application that can be used real time. Number three talks about refinement. So this is where you go back and forth with vibe coding, changing colors, changing workflows, changing things you don't like, adding things to a form in this example. And then finally, when all that is done, you can implement it and turn something live through the use of vibe coding and some of these platforms, which I'll show you in a second.

It allows for rapid prototyping. Something that could have taken weeks, months, years to build, can now take hours or days. The fun part is, again, I am on the tech team, but I'm not a developer. Everyone can contribute. Designers can contribute. Business leaders can contribute. CMS users, CRM users, they can go in and build a prototype using vibe coding. And this has caused a big shift with developers. Developers obviously still code, but now they're leveraging and using vibe coding to start their process. And now they're looking at QA and security of the code that's output.

And just to highlight what we just talked about on the previous slide, the collaboration is big. It allows people from different departments to participate directly. You're seeing vibe coding and all of these development tools including GitHub, Copilot, GPTs, and other integrated development environments. And back to the developer roles, it's starting to shift from sitting down and writing code all day to reviewing what the AI has produced.

The big key with vibe coding is the prompt. The prompt is key, is probably the most important thing that you need when vibe coding. Good prompts are clear, specific, and outcome-oriented. Bad prompts can lead to messy results. Here's a very basic example of a vague prompt, "Make me a website." That's not really useful. A clear one would be, "Code a one-page site that includes a header and more specifics." And the example I'm going to show you, our prompt was like four pages long, and we spent probably more time in the prompt than in the vibe coding tool itself.

Here's some examples of vibe coding in action. We are in the middle of implementing an AI tool on our website, and I wanted to create a quick Gantt chart to highlight the timeline. And I went into vibe code. We're using a tool called Replit. I told them what we needed. I need a Gantt chart where I can modify the dates, puts out the dates, and the nice timeline, and something I can quickly share. We also created a convention map tool.

What we've learned in the vibe coding process over the last few months, the benefits are great for proofs of concept, internal tools, and fast iteration. It helps bridge those visual, those ideas, and allows business leaders to visualize something, whether it's a prototype, mockups, a quick app, you can build something quick to show your leaders or stakeholders. And it allows to increase collaboration.

Now, it's not always perfect. Sometimes you can get caught in this vibe coding loop and end up spending more time than if you were to just go buy a product or have a developer work on it. We've experienced that in the past with a few other ideas our team tried to implement. You also don't want to reinvent the wheel if there's a tool out there. Then use that tool. They probably spent a lot of time perfecting that tool, and there's no need to recreate something that already exists. And you still do need some expertise. Now, if you're building a simple one-page website by vibe coding, anyone can do it. If you're building something more complex with a back end, with databases, integration with different platforms, you're still going to need that technical expertise, whether it's a developer, a technical project manager, or a tech leader. So things to keep in mind with vibe coding.

All right. Now, I'm going to show you what we built. As part of our convention sales team, we work with meeting planners to bring conferences and conventions to Orlando. One of the tools we offer, it's something in Simpleview CMS, it's our map publishing tool. And whenever we have a convention, we let them know, "Hey, we have this tool, and we can highlight hotels around the convention center, attractions around the convention center, restaurants, whatever you like. We can create a map, we can create a shareable URL, and you can send out to your attendees."

And this is an example of a convention map that I created last week, just showcasing you what it looks like using the map publishing tool from Simpleview. It's easy to use. It pulls live listings from our CRM, and we use this probably 80% of the time with our clients. Everyone's happy, and it even generates a downloadable PDF that our meeting planners like to add to a brochure or directly in an email.

Now, every now and then, we want to highlight our International Drive district. So if you're unfamiliar with Orlando, our I-Drive district is our tourist district, right? Outside of Disney, Universal, and SeaWorld, I-Drive is where all the action happens. We've developed a custom map, and this is outdated. We're actually working on a new one now of our I-Drive district. Sometimes meeting planners want to use this custom map and then plot hotels on this map. Directly, we can do that, but this is a manual process. So every time a special request comes in, our creative services team will get all of the hotels needed to plot on the map, and they'll manually, I think using Photoshop, they'll manually plot these points and manually add all of these hotels. We don't do it often, maybe less than 50 a year, but every time we need to do it, it's a very time-consuming process. Again, this one alone has 18 points of interest. I've seen maps that have over 40, over 50. I think we calculated it takes about an hour and a half to make one of these manually. So again, one and a half hours times 50 a year, it starts to add up.

So my team and I, we were really looking into vibe coding. We're like, "Where's... what's a solution? Where's the problem that we can actually solve using vibe coding?" And then this came up and we said, "All right, let's figure it out. Let's solve it." And we built a, we call it MapCon, a convention mapping tool using vibe coding.

Now I'll quickly create a map so you can see what it does. Okay, so here I'm going to create a new map. And then again, this is where you'll put your conference information. You'll put in the dates. My conference will be next year. The location, all the information we collect already. An event logo. I created a logo earlier. And now here's where you're going to select the base map. So this is a concept we're testing with. The one I'm going to use is the I-Drive sample map, which is what you saw in our example here. But we're going to be able to add multiple base maps. So in the future, if we build more than one I-Drive district map, or a Disney map, or SeaWorld map, we can select it from this "Select Basemap" option.

Now, once you select your base map, again, I'm going to use the I-Drive sample, I'm going to create sections. Sections are these areas here that were created using the map publishing tool. So the first section, I'll call "Hotels near West Concourse". And then I'll add the points of interest that are there. Let me see here. Hyatt. Rosen. All right. And then I see we also have another section, "SeaWorld and I-Drive". So I'll go up here, add a new section, "SeaWorld and I-Drive". I'll add a point of interest under it and DoubleTree. And then I'll add our last section. For this one, I won't put everything. So "I-Drive and Convention Center". And Castle Hotel. I'll just add one.

So now I've picked my points, and you'll see my new map has been generated, grabbing those points of interest and plotting them on the map. Again, this is still in prototype phase. We have some design issues to get through, and we're going to use a new map over here in the next few weeks. But what took an hour and a half before, just took me maybe less than 5 minutes, maybe 10 minutes tops, and I just generated a new map.

Now, from here, I'll click "Create Map" to officially create it. And you'll see it here. Now in the back end, I've created a new map. I can create a public URL that I can share. It looks like this. And there is also a way to download the PDF, and it creates this. So we went from... where's the other one? From here... to here in about 5 minutes. And that was the goal: to make our creative services team more efficient, more effective. So probably by January, they're going to be using this tool primarily to handle those one-off requests.

Now, you might be asking, "How did this tool know to plot those points for those specific areas?" That's all done in the back end, in the admin console. So here's your front end. If I click on "Admin", this is where the magic happens. Under "Basemaps", you can upload any new map, any document that you want to plot points against. Again, here are our four examples. Now, this is the interesting part, and this is where we do some manual work, but it's just a one-time thing. And let me show you what that looks like.

For every point of interest, we have to manually plot it, just one time. 'Cause without that, there's no way of the system knowing how to apply a plot to a map because it's not to scale, so you can't really use the lat and long that's provided by our CRM or by Google. So what I'm going to do now is input a POI, and "Janette's Ice Cream Shop". We added categories, and this is a "Restaurant". And we create the POI. Now that POI is set up, it's in the back end here. You can search for it. I actually used Janette for a few other examples here. There's "Janette's Ice Cream Shop".

Now, once you set up a POI, you have to go back into your basemap and plot that POI to the map. So here, I'm going to get the ice cream shop and plot it somewhere on the map. So let's put it right by Universal. That way it's easy to see. Again, this was a one-time thing. Moving forward, the system's always going to know that the ice cream shop for this space map gets plotted next to Universal. I'm going to go ahead and save changes. Okay, now I'm going to go back to the map I created, and I'm going to add it here. Now, I might have to refresh a few times. So, making sure it's saved here. There it is. I'll go ahead and save it. And now you'll see up here the ice cream shop was applied.

If you have hundreds of POIs, that initial setup could take some time. But you saw that after that initial setup, creating maps, again, we're talking minutes, not hours or days. And all of this was done using a tool called Replit. And this is what it looks like in the back end. So Replit, you have a normal ChatGPT-style prompt on the left-hand side. As you prompt it, it generates an app on the right-hand side. And I will do a quick demo of what that looks like.

So again, this is Replit. There's some other ones out there. Lovable is a popular one. There's some... Claude has one. But I really liked and enjoyed using Replit. I am going to grab that example from the deck here. So essentially, you just come in here, put in your idea, and then you start the chat, and it builds it for you. Unfortunately, I might not be able to show you 'cause it does take five to eight minutes, but essentially, you just put that in here, and Replit and vibe coding will do its thing. And then, again, from there, you just... it's a lot of back and forth trying to fix things and get things right.

Replit is a cool tool because it allows you to deploy apps without any other back-end configuration. Oh, you'll see here it tells you how long some of these things take. Replit lets you deploy websites and apps using the Replit tool itself. So you don't have to go to GitHub, to Azure, to host your platform. You could do it all within the app, which is what you're seeing here with my MapCon app. It's all hosted by the Replit app.

So Janette, I think I covered a lot there. I wanted to showcase everything we've been doing to help the convention sales team and our creative services team using AI to make their jobs, their day-to-days a little bit more efficient.

I am so blown away by this tool. I think that this is a terrific example of how AI, it's not here to replace jobs. I see this as an opportunity to expand what we can do, because how many additional maps are you going to be able to make now a year compared to what you did before? Probably 10x at least. Yeah. So there, I'm sure a number of conventions that felt like they weren't important enough, or somebody didn't scream loudly enough to get the design team to make the map, right? And now every single meeting can have their own custom map.

Yeah. I brought up the developer piece a few times on purpose because there's been articles out there now saying that vibe coding can't do it all. We still need the developers, and there's been organizations that are bringing developers back to basically QA and analyze vibe coding. So, yeah, it's not replacing anybody, but it's here to stay, and we just have to leverage it and use it correctly.

Yeah, I absolutely agree. I'm going to quickly share an app that I vibe coded. And again, it's like to your point about developers, I'm not trying to sell a SaaS subscription to this, but this is a website that I vibe coded for this webinar series because I wanted to have a space where you could watch all of the video content. And so you could see it was password protected. You're able to click onto the video content. I haven't done this yet, but when it was vibe coding, it said, "You should probably have downloadable resources." So once I create the PDF files, they'll be downloadable.

I uploaded all of these videos and we'll post this video onto this landing page once we're done editing it after the webinar. I uploaded them into Google's Gemini, which is able to watch and understand videos, and I said, "Create chapter headings for me." So it found the timestamps and chapter headings. And then when you click on it, something else I think is very useful... it jumps ahead to that point in the webinar. And I didn't tell it to do that initially. Like it just started doing it because it knew that is something that is very useful inside of a content learning system. The ability of AI to make SaaS products available to us and to be perfectly customizable to us...

I really appreciate you coming on. And now I am going to use the last 10 minutes here to talk about incorporating AI into your workflow at your convention sales team. The way that I like to think about the workflow piece as opposed to the individual contributor piece, is look at the department, and then double click on all of the roles that happen inside of that department. And it could be separate jobs, separate positions, but it could be one person is managing sales operations and lead generation and market intelligence.

But let's say we wanted to focus on just one of those roles to start, and we want to focus on sales operations because that's the piece that's not out talking to people, right? It's the back end. It's the part that you want to get out of the way so that we can do the real part of the job, which is communicating with the buyers. You could take the sales operations role and break it down into all of these individual touch points. So what does that involve? CRM administration, forecasting, reporting...

Go through then and determine what is one way that you can use AI for each element of this process. If you have your sales process written out, ask AI to suggest ways to simplify that workflow. We already talked about for your CRM transforming transcripts into notes for forecasting. Look at historical data and try to understand patterns in that data. That's something that AI is really good at. So knowing what are the little details that you may not have noticed, but ChatGPT or the AI tool of your choice sees that actually contributes to a closed deal.

Again, reporting, having the opportunity to put a report into ChatGPT and say, "Break this down into the things I need to know from this report," or on the other side, "to take information and turn it into a report" to make your reporting process simpler, so you're not wasting so much time describing what it is that you're doing. I really like tools like ChatGPT for a gap analysis. So, what am I not thinking about that I should be thinking about? Or give me three ways to improve this proposal. And then we talked about competitive intelligence using deep research tools as well.

To conclude today's webinar, I want to remind everyone that at work, it is not cheating to use AI. You want to make sure that you're using it responsibly, that you are using paid, secure tools for that work. But please don't think that by taking a shortcut that you aren't still doing your job. Remember, like when it comes to RFPs, your job isn't to write RFPs or to respond to RFPs. It's to do the work that the RFP is about. And that's communicating with the people and developing those relationships, and actually getting the meeting to be held in the United States and in your destination. AI gives us more capacity to make that happen.

I want to thank Gabe so much again. Thank you, Visit Orlando, for sharing Gabe with us for today. I learned a lot from that, and I hope you did as well.`,
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'AI Enhances Sales Capacity, Not Replaces Jobs: AI tools act as "assistants" to automate repetitive tasks, freeing up sales teams to focus on relationship building and strategy',
      'Custom GPTs Enable Team-Wide Consistency & Quality: Create reusable prompts with specific instructions for consistent, high-quality output across your team',
      '"Vibe Coding" Rapidly Turns Ideas into Prototypes: Use plain English to generate functional applications, like Visit Orlando\'s "MapCon" tool',
      'AI Agents Automate Complex Research: Use AI agents for sophisticated lead and competitive research, saving days of manual work',
      'Workflow Mapping is Key to AI Integration: Identify specific pain points in your existing workflow where AI can add immediate value'
    ],
    topics: [
      'AI for Sales',
      'Convention Sales',
      'Business Events',
      'Destination Marketing Organizations (DMOs)',
      'Custom GPTs',
      'AI Workflow Automation',
      'Prompt Engineering',
      'Vibe Coding',
      'Rapid Prototyping',
      'Low-Code/No-Code',
      'AI Agents',
      'Lead Research',
      'Competitive Analysis',
      'CRM Integration',
      'Meeting Follow-up',
      'Sales Operations',
      'AI Implementation Strategy',
      'Agent.ai',
      'Replit',
      'MapCon Tool'
    ],
    targetAudience: {
      primary: 'Sales and marketing professionals at Destination Marketing Organizations (DMOs), Convention and Visitors Bureaus (CVBs), and other convention sales teams',
      secondary: 'Sales operations managers, marketing technologists, and business leaders in the tourism and hospitality industry looking for practical AI use cases',
      tertiary: 'Anyone interested in building simple, practical AI tools (Custom GPTs, Vibe Coding) for team-specific workflows'
    },
    learningOutcomes: [
      'Identify at least three key areas in a convention sales workflow where AI can be integrated (e.g., CRM administration, reporting, meeting follow-up)',
      'Define what a Custom GPT is and list its main benefits for a team (saves time, ensures consistency, controls quality)',
      'Describe the basic steps to create a Custom GPT, including writing instructions (the prompt) and uploading knowledge files',
      'Explain the concept of "Vibe Coding" and how it enables non-developers to build functional application prototypes',
      'Recognize how AI agents can be used to automate complex lead generation and competitive analysis tasks'
    ],
    relatedResources: [
      { name: 'ChatGPT', description: 'Platform for creating and using Custom GPTs', url: 'https://chat.openai.com' },
      { name: 'Agent.ai', description: 'Platform for building AI agents for lead research', url: 'https://agent.ai' },
      { name: 'Replit', description: 'Vibe Coding platform for building applications', url: 'https://replit.com' }
    ],
    chapters: [
      { time: 13, title: 'The Role of AI in US Promotion of Business Events' },
      { time: 72, title: 'What is a Custom GPT?' },
      { time: 104, title: 'Example: Custom GPT for Travel & Expense Policy' },
      { time: 161, title: 'Why Use Custom GPTs? (Saves Time, Ensures Consistency, Controls Quality)' },
      { time: 218, title: 'How to Create a New Custom GPT (Builder Interface)' },
      { time: 313, title: 'Using ChatGPT to Write the "Instructions" (Prompt) for Your Custom GPT' },
      { time: 395, title: 'Adding "Knowledge" (Files) to a Custom GPT' },
      { time: 469, title: 'Previewing and Testing Your Custom GPT' },
      { time: 521, title: 'Sharing Options for Custom GPTs (Private, Link, Team)' },
      { time: 598, title: 'Example Workflow: Custom GPTs for Meeting Follow-up' },
      { time: 941, title: 'Using AI for Competitive Analysis ("Deep Research")' },
      { time: 1089, title: 'Using AI Agents for Lead Research' },
      { time: 1106, title: 'Demo: Using Agent.ai to Research a LinkedIn Profile' },
      { time: 1477, title: 'Planner/Delegate Experience Enhancement' },
      { time: 1494, title: 'Introduction to Vibe Coding' },
      { time: 1537, title: 'What is Vibe Coding? (Concept & Workflow)' },
      { time: 1658, title: 'The Importance of the Prompt in Vibe Coding' },
      { time: 1695, title: 'Vibe Coding in Action: The Manual "MapCon" Problem' },
      { time: 1808, title: 'Vibe Coding Demo: Building the "MapCon" Tool Prototype' },
      { time: 2368, title: 'Vibe Coding Backend Tool (Replit Demo)' },
      { time: 2478, title: 'AI is an Opportunity to Expand Capacity, Not Replace Jobs' },
      { time: 2635, title: 'Incorporating AI into Your Sales Workflow (Identifying Use Cases)' },
    ],
  },
  'crit-framework': {
    id: 'crit-framework',
    title: 'AI Prompting Using the CRIT Framework',
    description: 'This video introduces the CRIT (Context, Role, Interview, Task) framework for creating effective AI prompts, emphasizing that providing detailed, spoken context leads to much better results than simple typed commands. It then provides two in-depth demonstrations: first, using the CRIT method to plan a detailed one-hour workshop, and second, brainstorming a low-budget marketing activation by uploading a PDF for the AI to use as a source of truth.',
    duration: '12 min',
    muxPlaybackId: 'OC72C8icortMHMBjS87615i9PRYu3C2dGt7XA22JlWU',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'The CRIT framework (Context, Role, Interview, Task) is a structured method for providing comprehensive details to an AI, which leads to significantly more useful and interesting responses',
      'Context is key: The quality of an AI\'s output is directly proportional to the quality and quantity of the background information, constraints, and "source of truth" (like a PDF) you provide',
      'Use voice-to-text to "talk" to the AI: Dictation tools allow you to provide much richer, more natural, and detailed context than you would normally type',
      'Instructing the AI to "interview" you by asking clarifying questions is a powerful technique to ensure it gathers all the necessary details before generating a solution',
      'Generative AI is a powerful brainstorming and workflow partner that can be used for complex, practical tasks like planning an entire workshop or developing a multi-part marketing activation'
    ],
    topics: [
      'AI Prompting',
      'Prompt Engineering',
      'CRIT Framework',
      'Generative AI',
      'AI for Business',
      'AI for Marketing',
      'Contextual AI',
      'AI Brainstorming',
      'AI Productivity',
      'Workshop Planning',
      'Marketing Activation',
      'Voice-to-Text',
      'AI Dictation',
      'ChatGPT',
      'Claude',
      'Monologue',
      'Wispr Flow'
    ],
    targetAudience: {
      primary: 'Professionals, marketers, and corporate trainers who want to move beyond basic AI queries and learn a structured system for getting practical, high-quality, and creative results from generative AI tools for complex business tasks',
      secondary: 'Business professionals seeking to improve their AI prompting skills',
      tertiary: 'Anyone interested in advanced AI communication techniques'
    },
    learningOutcomes: [
      'Understand and apply the four parts of the CRIT framework (Context, Role, Interview, Task) to their own prompts',
      'Articulate why providing deep context and a "source of truth" (like a PDF) is essential for high-quality AI output',
      'Use voice dictation as a tool to create more detailed and effective AI prompts quickly',
      'Structure a prompt that encourages the AI to ask clarifying questions to refine its understanding',
      'Brainstorm and plan complex, multi-step projects (like a workshop or marketing campaign) in collaboration with an AI'
    ],
    relatedResources: [
      { name: 'ChatGPT', description: 'AI model used for demonstrations', url: 'https://chat.openai.com' },
      { name: 'Claude', description: 'AI model mentioned in examples', url: 'https://claude.ai' },
      { name: 'Monologue', description: 'Local voice-to-text transcription software', url: 'https://monologue.app' },
      { name: 'Wispr Flow', description: 'Voice-to-text dictation tool', url: 'https://www.wispr.ai' },
      { name: 'Zapier', description: 'Integration tool mentioned in workflow example', url: 'https://zapier.com' },
      { name: 'MindTrip', description: 'Itinerary planning tool mentioned', url: 'https://www.mindtrip.com' }
    ],
    chapters: [
      { time: 3, title: 'Introduction to the CRIT (Context, Role, Interview, Task) Framework' },
      { time: 26, title: 'The benefit of using voice-to-text for detailed prompting' },
      { time: 62, title: 'The core principle: "We should talk to AI" to provide rich context' },
      { time: 119, title: 'Example 1 - Context: Describing the setup for a one-hour workshop' },
      { time: 222, title: 'Example 1 - Role: Assigning the AI the expert role of "Chief AI Officer"' },
      { time: 237, title: 'Example 1 - Interview: Prompting the AI to ask clarifying questions' },
      { time: 274, title: 'Example 1 - Task: Defining the specific goal (create a workshop outline)' },
      { time: 338, title: 'The AI begins its "interview" process, asking the first question' },
      { time: 490, title: 'Example 2 - Context: Uploading a PDF as a "source of truth" for brainstorming' },
      { time: 556, title: 'Example 2 - Role: Assigning the AI the role of "Marketing Director"' },
      { time: 615, title: 'The AI generates ideas grounded in the provided PDF' },
      { time: 779, title: 'Final summary: "Brainstorming with AI: Context is Key"' },
    ],
  },
  'crit-framework-workshop': {
    id: 'crit-framework-workshop',
    title: 'CRIT Prompting Framework Workshop',
    description: 'A comprehensive hands-on workshop on the CRIT (Context, Role, Interview, Task) prompting framework. Janette demonstrates live prompting across ChatGPT, Gemini, and Claude with five real-world use cases: getting AI starter ideas, planning educational strategy, handling difficult board conversations, creating partnership pitches, and strategic business planning. Learn how voice dictation tools like Monologue can dramatically improve your prompting.',
    duration: '42 min',
    muxPlaybackId: 'aKLdc9rK00v6pXvaCk01x02FBzfWOsUFodgvtn6sla5jks',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    transcript: `My name is Janette Roush. I am the SVP of Innovation and Chief AI Officer for Brand USA. And cross your fingers because there's going to be some live demoing. Today we are doing a prompting workshop, learning the CRIT framework for prompting. So if you are accustomed to using tools like ChatGPT, either as fancy Google, or as the thing that makes my emails sound nicer than I really am, this is what's going to help you move from that level of prompting into actually using AI as your thought partner.

What do when I say prompting framework? It sounds fancy and hard and like a lot of work.

A framework is just a tool that helps us to organize information. So when you were a kid in school and you learned about the five Ws, the who, what, where, when, why, when you were putting together a news article in third grade, that's a framework. A SWOT analysis, looking at the strengths, weaknesses, opportunities and threats to an organization, that's a framework. So a prompt framework is just meant to be a way to make it easier for us to remember what kind of information is helpful to include in a prompt when we're working with Claude, with Gemini or with ChatGPT.

And then you might also hear the phrase prompt engineering thrown around. I roll my eye at that. I don't love stuff that makes working with AI more difficult than what it actually is. But prompt engineering, it's just the process of developing and using a prompt framework that is designed to fit a particular need that you have in that moment.

This framework, I'm giving all credit to Geoff Woods who wrote a book called the AI Driven Leader. He has a website where he spells out this prompting framework. You can see there ai leadership.com. He's actually built a custom GPT that allows you to work within that framework on his website. And you can see that if you go to ai leadership.com/thought partner. So the book, I bought it over the break, actually, I, most of the way through it.

I was introduced to his work through a conference called MAICON, the Marketing AI Institute conference which I spoke at back in October, and he was one of the lead keynotes for the event. If you are looking for AI keynote speakers, he did an absolutely fantastic job. Energetic speaker, and he does something that I don't do a lot, and that is live demonstration on stage using voice instead of typing to the AI. I've read this all over the place, voice is becoming the main way that in the future we will be engaging with AI systems because it takes too long to type.

What I'll be doing during this live demonstration is using my voice to give inputs to the prompt so that you give as much context to the model as you possibly can. Just total word dump everything you are thinking of into a prompt, but you don't turn the model onto voice mode. Voice mode is you talk to the model and it talks to you back and it can be pretty slow to work with. What many people are moving towards is actually talk to the model and then read the results back. And you use a voice dictation tool to make that work.

The CRIT framework is context, role, interview and task.

So context, it's just providing background information, all of the details you possibly can, so the AI understands what it's working with.

Role. This is you tell the AI what role it is playing when it is answering your question so it understands what level of expertise it has and it helps guide its output by telling it what perspective to take.

Now interview. This is really the key part of what makes this prompting framework work so well, is that you tell the AI to ask you questions so that it can create a better response for you. And if you work with AI a little bit, you know that sometimes it will just ask you infinite questions to keep the conversation going. The way that I'll be using it here is telling the AI the context of my situation. This is the role I want you to play. In order to get more context, I want you to ask me no more than three questions, one at a time. This is going to help the AI draw more information out of you.

And then finally, the task. What do you want that output to look like? Are you looking for an outline? Are you looking for a bulleted list? Are you looking for a paragraph? And that will, again, help shape what AI gives you so that it's actually usable for you.

CRIT is not the only example of a prompting framework. Here on the screen are a number of different frameworks that are good for uses in different ways. I don't personally get overly hung up on using a framework. For me, what works best with working with AI is just using it reflexively. Every time I have a task I'm trying to do, I am going to AI and just piecemeal back and forth.

Giving information, receiving information, I treat it like a conversation rather than some kind of big official prompt that I need to give it. But I think the CRIT framework is different specifically because it forces you to slow down and be interviewed by ChatGPT or whatever your preferred language model is. That's what separates it from the other frameworks that exist.

Throughout this, remember that you are the thought leader. The AI is the thought partner. It is here to help you. You do not just blindly follow and do whatever AI tells you to do. We are still in the driver's seat. Humans are still the boss.

And part of what makes this work so well is, and of course you can do this, typing it out, but dictation tools if you can get comfortable with them. And you'll see today I am still struggling to force myself to be comfortable with dictating. Part of it is, if you've met me in real life, I'm really loud and I'm self-conscious, even when I'm at home, I'm like, I know I'm bothering my husband in the next room if I'm just talking to my computer all day. So I just hate thinking aloud, but doing that is going to give you a better output.

I'll use two of these tools today, one of which will be on my Mac, using the dictation tool that is built into your Mac. And if you're on Windows, the same thing exists on Windows. But there's also two other dictation tools that you can use. I have heard fantastic things about Wispr Flow. So Wispr Flow is really considered the gold standard when it comes to third party dictation services. And I personally use Monologue because it is tied to a subscription that I have with a really great AI media company called Every.to.

If you're looking to read more about AI in your free time, I recommend Every.to as a subscription, but Monologue operates locally on your machine, so it's not taking information and sending it anywhere. It takes your verbal garbage and it turns it into sentences that make sense without changing what you are saying. Whereas a dictation tool, it doesn't necessarily put in punctuation unless you say the word period or question mark. I'll start off by using the MAC setting so you can see what that looks like. And then I'm going to move to Monologue so that we actually get better results moving forward.

And these are the five examples that I am going to walk through. We're going to do a live version of how does the CRIT framework work for prompting with each of these use cases.

You'll also see here that I am using ChatGPT Thinking. So if you're somewhat new to AI, you may not be familiar with the different models that exist inside of each of the main large language models. Unless you are looking for a fast answer, like an ingredient substitution for a recipe when you are cooking, if you're using AI for work, you want to have it set on Thinking mode. You're not going to get anything insightful from using the instant mode. That's just going to give you the quicker answer.

All right, so ChatGPT. I would like to use the CRIT framework for prompting to work with you on a project. CRIT stands for context, role interrogate and Task. The context for my project is that I am brand new to using AI and I'm trying to get some ideas for I think I see that's the trick with using this stuff and a, you can also see how this is just a run on sentence, and if you click any other button on your screen, then it stops the dictation tool.

And I am looking for ideas for integrating AI into the work that I do. So I just need some quick, easy use cases for AI that would relate to like my real life job, and I need some inspiration, so I'm hoping you can help me with that. The role that I want you to play is as an educator who has all kinds of deep knowledge and experience about AI period.

You are a patient teacher and you are very well versed in all of the ways that people might use AI at work, period. For the task, I want you to give me three terrific, easy use cases for incorporating AI into my daily work as the Chief AI Officer for Brand USA, which is the destination marketing organization for the United States.

I want to start this project by you asking me three questions, one at a time in order to get all the context you need in order to gimme the best possible answer. Before you start answering this question period, please start with your first question.

Okay. Quite, and you'll see I was very clear and specific when I was giving this thread, and part of that was I was doing this project. I was, I like to have my bases covered. And so I actually made screen recordings of me doing this exact same thing earlier today.

Also to force myself to practice using the transcription tools. And if you take any shortcut at all, ChatGPT, one time I did it. It was perfect. The second time that I did it, it starts giving me a huge, long answer to the question before it even started asking me questions. So when you are very clear about what you want, you're going to be more clear in the output that you get.

And that is true with AI across the board. So let's look at this question.

I spend let's see. In a typical week, I, let's say I am reviewing performance of our Mindtrip Chat bot. I am drafting emails and I am preparing for speeches or podcast appearances.

Well done means clear storytelling, tight insights, it sounds like me. Tone, consistency accuracy.

The reason that I'm going to move to Monologue in a second, you can see here all of my ums and ahs the text transcription tool all picks up literally, whereas Monologue understands maybe I don't need that actually to be used here. And then the most common inputs I have available for these tasks

for Mindtrip, I have transcripts of the conversations and a dashboard giving me higher level information about Mindtrip. I have all of my prior speeches. In a few cases it will be the actual text of the speech, but typically it's just going to be the beautiful AI deck that I presented.

I don't use PowerPoint. I do have brand voice guidelines that I probably should be using them more. And in terms of tools, I have ChatGPT. I have Gemini, I have Claude. We do not put customer data in ai, but none of these projects involve customer data. I also have access to tools like Descript or video and audio editing.

So this is already, all of this we've been doing, for five, eight minutes. Now. This is just giving the prompt to ChatGPT. And here we have three high impact AI use cases for my week. So Mindtrip, weekly intelligence brief. So I have lots of conversational data and a higher level dashboard, but the insights are scattered.

So yeah, getting a one page brief I could drop into an exec update would be cool.

And then here we get the workflow of what this would look like and a prompt that I could use with ChatGPT. So if I'd never used AI before to understand, oh, this is a way you can work with AI to analyze all of this text-based input and get something useful out of it, like that's a great way to use ai.

I would go the next level if I were not. The entry level person asking, for easy ways to get started using ai. And I'd say, great, let's turn this into an agentic workflow, right? What are the steps that can be automated using tools like Zapier? Here are the second idea voice plus structure co-pilot for emails.

So we want to have emails that sound like me, follow my brand voice and land the point fast. And this is good advice, right? AI will follow, like it's looking for a model of what you consider to be good. So if you have emails you think are good emails, that's something you want to share with AI so it understands how to, keep producing something that you already like.

And then again, down here we have a reusable prompt. And let's see, this one, a speech or podcast narrative builder. So we want to have a tight spoken narrative with a talk track that's structured on brand and optimized for delivery. So you paste in your deck or the goals of the talk text from a prior speech that you liked the audience and what they care about.

So this is interest. I would actually try this out, right? Like I am very much, this is how I work with AI on building presentations already. And if you are looking for more ways to use AI with presentations I'll be working with their head of research Chelsea Benitez. We are delivering next month's Agents of Change webinar on using AI for your presentations.

But this idea of creating that three act structure like that is a way that I will work with AI's. What is a framework that helps take all of this information and helps it to make sense as opposed to, oh, it's just a bunch of scattered thoughts coming outta my head. And here we get the the prompt to reuse and the fastest win for the week.

I'd say this is well worth the time that we invested in prompting AI like deeply and with a lot of clarity.

We are looking at Google Gemini, and now I am going to try to use a Monologue for this, which is the tool from Every that does speech transcription. So I put start by making sure that my cursor is inside the prompt window, because otherwise there is nowhere for the text to go when it's done.

All right. Hi, Gemini. I would like to work with you on a project that is going to use the CRIT framework for prompting. The C stands for context. The R stands for role, the I stands for interrogate, and the T stands for task. And the project is planning an educational strategy for Brand USA and the US tourism industry, so that everybody across the industry in the United States is excited to use AI.

The role that I want you to play is as a business consultant. So pretend that you're a consultant for McKinsey or Boston Consulting Group, and I want you to think really deeply about what is the best strategy we could put forward to get the entire industry. Ready, AI enabled the ultimate task.

I would like you to give me an outline of what this educational strategy could look like. And for the interrogation, I want you to ask me three questions, one at a time to get more context to, fully answer my prompt.

Yes. Oh, I, my heart stopped beating because this thing, it doesn't let you know that it's working the same way that the other tool does. You can see here, like this reads more like I had typed it. I don't think it's super important for AI to get a perfect prompt. If you are changing, correcting typos when you're writing a prompt, which I do as well, you don't have to.

AI knows what you mean, but it is still to provide something cleaner versus less clean, I think is useful. So we're going to submit this. You will see over here, Gemini exactly like with ChatGPT has different models available, so you can click here and you are able to use pro mode thinking mode or fast.

And of course they make it sound confusing, but it's just good, better, best. You want to use the best tools available for the most part when you're doing work. All right, so now it's blowing smoke. It's being sycophantic the way AI likes to do. Oh, it's a fascinating challenge.

All right, so this is a large scale change management and digital transformation initiative. All right, so we need to define the scope. We're moving into the interrogate phase, and here is my first question. Who is the primary client or governing body driving this initiative? Good question. The strategy will be led by Brand USA.

I am the Chief AI Officer for Brand USA, and we are the destination marketing organization for the United States. So it is being led by a national nonprofit.

And what are the reasons people say talk to AI is you're giving it much more information because you can just rattle it off than you would if you have to type it out so you're not constrained by your typing speed.

All right? Oh, yes. I'm sitting at the nexus of public-private partnership. All right. We cannot mandate AI adoption, and I'd have to say, I think anybody would have a hard time mandating AI adoption. Like you have to encourage people to come with you, right? You can't force anybody on this journey. So yes, we must rely on incentives, value creation, and competitive advantage to bring people along.

People need to want to adopt it. Second question. Ooh,

this is a great question. I am focusing on option C for this. I think all of these options are incredibly important, but Brand USA doesn't necessarily have all of the direct relationships with small and medium enterprises the way that we have the relationships with local and state dmo whereas those local and state DMO do have those downstream relationships.

So one of my ideas was creating almost a Train the Trainer program where the DMO become educated and empowered in order to bring training to their SMEs. But I don't think Brand USA necessarily is providing that training directly.

All right, now it's thinking about it.

Oh, a cascading capability model. Yes. This is exactly what I was thinking. Only it sounds fancier. My third and final interrogation question, .AI is a massive umbrella. All right, so the primary scope of the applications we are teaching pure marketing and content. I think I am starting with option A to begin with because honestly, I don't have the expertise to be an educator about predictive analytics. Also, predictive analytics don't necessarily live inside of generative ai, and that's really where my focus is. So machine learning and other forms of ai, I am not diving into that necessarily.

I want to live specifically in the generative AI space.

All right, so we're hitting submit. Those are our three questions.

In the meantime yet, I'm going to answer Q and A. Do I need Gemini Pro to get the same results or can I just use the good, better, best options? Also this person was just in France, and yes, Europe has different access to AI models than we have in the United States because there's just much less regulation of AI in the US.

Typically all of these companies make all of the versions of their models available widely, but they limit how much you can use the better versions of their models. In terms of testing out and playing with it, you can absolutely do that for free.

I know for ChatGPT you can, but if you let the model picker select which model you get, it's always going to select the cheap model. So you have to actually choose the model you're looking for, and then it'll just tell you, we have to move you to a cheaper model when it does that.

All right, so now we have an outline for this actual project I have. Creating an educational strategy, to uplevel everyone across the United States who touches tourism to make us AI ready.

Moving the from fear of replacement to joy of creation, and how AI is a creative force multiplier, a center of excellence by creating our own playbook.

This is great strategic partnerships. I love that. Train the trainer academy. So using some of the information I already gave it to expand upon that AI ambassador certification, I think that's interesting in a box toolkit. Oh, I love that. This is, these are some really interesting ideas, I think.

Yes. And a small business enablement, a downstream activation, gamify the adoption, prompt library. I don't like to get hung up on prompts, so I'm never going to make a prompt library. Like a prompt framework is almost more structured than I like in my prompting. You just have to get used to giving AI information and for telling it to ask you for more from you when you need it.

You don't need a prompt library. Yeah, spelling out A curriculum. APIs, yes, obsolescence, anything you make today could be obsolete tomorrow. But I think if you start with the broad theories, obsolescence is less of a risk. If you go very detailed, three years ago, prompt libraries were a big deal because AI was less powerful.

Now they're meaningless. So I think as long as you focus on kind of the big picture, I'm not so worried about that. So this was this, for me, this was a really useful response and some things I'm already thinking about is in there. I wouldn't take it and say, okay, great, I'm all done with putting this together.

But now I can continue the conversation to build out the ideas that I think are excellent and move them into my own strategy for AI adoption in the industry.

And here: I am working on a project that I am using the CRIT prompting framework to develop an answer to. So the C is for context, the R is for role, the I is for interrogate, and the T is for task. The context is that I have a board meeting tomorrow and I have a board member who is angry that their referral traffic from my website is declining, and I know they're going to make a whole big public thing about it.

And I am nervous going into this board meeting. And I need some talking points to help me sound like I know what I am talking about when they are mad that website traffic from our website is down. The role I want you to play is an expert in SEO and generative search optimization. Because let's say I just don't understand everything about those tools, and so I want a little help guiding me through it.

And to interrogate me, I want you to ask me three questions, one at a time to get more context in order to help me manage my angry board member.

Great. And again, you'll see here this is best. The good, better, best. A Haiku is a small poem and an opus is a really long poem. Claude is a real jerk about rate limits. So it will frequently, even if you are working with the paid model, which I am, it will run outta the credits and tell you to wait.

But I'll say Opus 4.5 is an excellent reasoning engine. And it's also, I think, a little better at this kind of emotional work, which is why I am using it for this example. I also, in case you were wondering, yes, it's completely an imaginary example. We don't have a board meeting tomorrow.

What is the nature of this board member's relationship to the referral traffic? All right. And I'm doing this as a role play imagining that I am at a city DMO who would have these kinds of board meetings where board members might want to grandstand a little bit about what it is they think the DMO should be doing.

The, oh, I don't think I, the board member is an attraction who is accustomed to receiving referral traffic from our website.

Now, what could be tricky here is I'm thinking, I'm acting like a city DMO partner, but Claude has persistent memory, so it actually knows who I am. It knows that I am Janette Roush, the Chief AI Officer for Brand USA.

All right, referral traffic is down. Honestly, it's a result of how everybody's referral traffic has been down, or everybody's site. Traffic in general has been down as a result of, Google instituting AI overviews which are resulting in zero click searches, as well as people going directly to generative AI with the types of queries they might have come to A DMO website in the past to answer.

All right. To adapt to this shift. Yes, I am a, we are exploring MCP server work to make destination data available to AI systems. So all of the things that it put in here, and this is all based on past conversations that I've had with Claude about exploring different ways that Brand USA can help guide the industry to not be so reliant on traffic, organic traffic to our website, so that type of referral traffic, but to really lead the industry and, all right, this is the next thing.

How can A DMO be the source of truth about events for a destination or providing content about a destination? So yes, all of everything that you included here I think is important to include in this answer back to the board member.

This is, as a side note, this is why the persistent context is so cool with AI. It really makes it easier to stop working with AI like it's an intern and treat it like it's a thought partner who already understands your business.

And now it's giving me the talking points that I can go back to this imaginary board member with to help them understand the issue with the referral traffic.

Oh, and that's nice. Make them a collaborator instead of a critic. I learned that in my agency days. You don't want to be butting heads, right? You want to be fighting the problem together. You want to join forces. So again, I think that's a really useful output.

We're going to start a new chat: I am using the CRIT prompting framework to solve a problem with you. The C is for context. The R is for role. The I is for interrogate, and the T is for task. And the context for my query is, I want to know what is the business that will put DMOs out of business and how can we build it first?

I am very concerned with the rapid rise of generative ai, and its use in business that as we see traffic declining to our websites, that we have to find new ways to provide value to our stakeholders, which would include the communities we serve, local, state, federal government, the actual travelers and businesses in our destinations that benefit from tourism. So what? What business is going to put us out of business and how can we pivot so that we beat them to the punch?

There we go.

Now, Gemini doesn't have the same persistent memory, so it may come back and say, I'm sorry, I don't know what a DMO is. Or, oh, what did I remember to tell it?

See, this is now I forgot to say, I'm going to ask you the questions one at a time. So what I can do is hit stop. Then I could actually go in here and change the prompt. I'm going to put my cursor back there. The role I want you to play is as a business management consultant and as one who works with startups and people who move very quickly to raise money and to move fast and break things. The task is to come up with three ideas of what the business is that could put us out of business and how DMOs could start to build that business first.

And for the interrogate part of the prompt I want you to ask me three questions, one at a time, in order to gain more context from me before you start to answer this question.

All right now.

Oh. We accept the engagement. They're locked and loaded. Question number one.

Ooh,

that's interesting. DMOs are not necessarily exposed to information like real-time hotel inventory but things like permit approvals, like working with local government, that is something where DMOs typically can, they're very plugged into that kind of schema. So I would say that's probably the unfair advantage.

Typically, we're finding out about event schedules as the same time as anyone else, and if we learn about it earlier, it's probably embargoed until it's released. So I would say our proprietary play here is the relationships that DMOs frequently have with local or state government.

I also want to be clear that, because I did all of these exercises earlier today in case the live bit didn't work, and everything that you are seeing is completely different than when I did it earlier today. This has been really interesting. All right. We have a gatekeeper advantage. I have to look at how money changes hands.

DMOs rely on attribution.

To be honest, I have no idea what that product would be because that's antithetical to how DMO have worked in the past. Some DMOs will sell things like advertising on their website in order to change funds. Some DMOs will have affiliate links on their websites to sell hotel inventory or tickets and receive payment that way.

But honestly, most DMOs don't do that because we are concerned about disrupting either our relationships with third party travel suppliers in the B2B space, or those affiliate relationships typically are through third parties that take a cut of the ultimate revenue that goes to the member or the local business.

Coming up with something that is bypassing public funding or public tax funding, which are two separate things. Not all DMO are funded specifically through a tax.

I, I would like some ideas from you on this. I don't have a great answer for it.

All right we'll see what it comes back with and hopefully that didn't distract it. It will come up with one final question to ask me. And again, I didn't have to come up with a perfect answer there, right? That's, that was a honest and spitballing answer.

Final question.

The answer to that question is going to be different for every single destination. Like in New York City, that could be securing space for a large convention at the Javits Center. For many business events, it could be getting funding to offset the costs of hosting a large convention or meeting in a specific destination.

Film production doesn't necessarily always live with the DMO, so that's not always our concern. So I'm going to need you to provide some input on this question as well.

All right. And with just a couple of minutes left, and I didn't give it full and complete answers, did I? So let's see what it comes back with.

Oh, a clear picture of my vulnerability and latent power. Geez. All right. Political capital relationships and regulatory access we're hesitant to monetize directly. So we are dependent on our declining traffic models. And yes, high value pain points are securing funding and navigating bureaucracy. All right.

The marketing era of the DMO is over. If you don't pivot to management and orchestration, you will be replaced by software that does it faster and cheaper. Here are the three DMO killers: BidCity, the FinTech disruption. So it's a startup for meeting planners, update, upload their event specs. The AI calculates the economic impact of that event and then invites destinations to bid on it in real time.

Interesting. But we could build the instant grant machine that assumes that you have money with which to provide grants, but that is interesting. Permit AI. Oh, interesting. The startup automates the bureaucracy of hosting an event in your city. I'm not worried about that either because permitting is as much about if it were only about following the letter of the law, that would be great, but it's not, is it?

And you could create a city as a service platform, monetize the friction. Interesting. And then the Trust Oracle, a global AI company, decides that UGC is too noisy. They need a source of truth. Also. 1000000000%. Like I want this, they start paying a private company to physically verify local businesses.

This is something I absolutely want to do at Brand USA, the official verification, API, where we are certifying, I'm less concerned about businesses. I think Google owns that, but certifying that events are real. Yes. I think in an age where we do not know what truth is, that's going to be very important.

All of these ideas move us from being a publisher to a platform. We provide the tools to operate within the city.

I couldn't agree more with that.

Alright, great. Thank you all so much and I hope you have a wonderful rest of your week.`,
    keyTakeaways: [
      'The CRIT framework (Context, Role, Interview, Task) transforms AI from a simple Q&A tool into a strategic thought partner by structuring how you provide information and receive outputs',
      'Voice dictation tools like Monologue and Wispr Flow enable richer prompts by removing typing constraints, allowing you to provide more context naturally through speech',
      'The "Interview" component is the secret sauce—instructing AI to ask you clarifying questions (e.g., "ask me three questions, one at a time") draws out information you might not think to include',
      'Different AI models have different strengths: ChatGPT for general tasks, Gemini for strategic planning, and Claude for emotional intelligence and nuanced conversations',
      'AI with persistent memory (like Claude) becomes exponentially more useful over time as it learns your context, transforming from an intern into a true thought partner'
    ],
    topics: [
      'CRIT Framework',
      'AI Prompting',
      'Prompt Engineering',
      'Voice Dictation',
      'ChatGPT',
      'Google Gemini',
      'Claude',
      'Monologue',
      'Wispr Flow',
      'AI for DMOs',
      'Educational Strategy',
      'Board Communications',
      'SEO and Generative Search',
      'Strategic Planning',
      'AI Thought Partnership',
      'Tourism Industry AI',
      'Brand USA',
      'Train the Trainer',
      'MCP Servers',
      'AI Model Selection'
    ],
    targetAudience: {
      primary: 'Tourism and destination marketing professionals seeking to move beyond basic AI usage to strategic thought partnership',
      secondary: 'Business professionals who want practical, hands-on training in advanced prompting techniques across multiple AI platforms',
      tertiary: 'Anyone interested in using voice dictation and structured frameworks to get better results from AI tools'
    },
    learningOutcomes: [
      'Apply the CRIT framework (Context, Role, Interview, Task) to structure prompts that produce actionable, high-quality AI outputs',
      'Use voice dictation tools to provide richer context and overcome typing limitations when working with AI',
      'Instruct AI to interview you with clarifying questions, drawing out information that improves response quality',
      'Select the appropriate AI model (ChatGPT, Gemini, Claude) based on the type of task and desired output',
      'Transform AI interactions from simple queries into strategic planning sessions across use cases like educational strategy, stakeholder communications, and business planning'
    ],
    relatedResources: [
      { name: 'The AI Driven Leader by Geoff Woods', description: 'Book introducing the CRIT framework', url: 'https://aileadership.com' },
      { name: 'AI Leadership Thought Partner GPT', description: 'Custom GPT for CRIT framework prompting', url: 'https://aileadership.com/thought-partner' },
      { name: 'ChatGPT', description: 'OpenAI model used for demonstrations', url: 'https://chat.openai.com' },
      { name: 'Google Gemini', description: 'Google AI model for strategic planning', url: 'https://gemini.google.com' },
      { name: 'Claude', description: 'Anthropic AI model with persistent memory', url: 'https://claude.ai' },
      { name: 'Monologue', description: 'Local voice-to-text tool from Every.to', url: 'https://monologue.app' },
      { name: 'Wispr Flow', description: 'Gold standard voice dictation service', url: 'https://www.wispr.ai' },
      { name: 'Every.to', description: 'AI media company and Monologue provider', url: 'https://every.to' },
      { name: 'MAICON Conference', description: 'Marketing AI Institute Conference', url: 'https://www.marketingaiinstitute.com/maicon' }
    ],
    chapters: [
      { time: 0, title: 'Introduction to the CRIT Prompting Framework' },
      { time: 60, title: 'What is a Framework? (Five Ws, SWOT Analysis examples)' },
      { time: 120, title: 'Credit to Geoff Woods and The AI Driven Leader' },
      { time: 180, title: 'Why Voice Dictation Matters for Prompting' },
      { time: 240, title: 'Breaking Down CRIT: Context, Role, Interview, Task' },
      { time: 360, title: 'The Interview Component: The Key Differentiator' },
      { time: 420, title: 'Voice Dictation Tools: Mac Dictation, Wispr Flow, Monologue' },
      { time: 540, title: 'Example 1: Getting AI Starter Ideas with ChatGPT' },
      { time: 720, title: 'ChatGPT Response: Three High-Impact AI Use Cases' },
      { time: 900, title: 'Example 2: Educational Strategy Planning with Gemini' },
      { time: 1080, title: 'Gemini Response: Train the Trainer and Cascading Capability Model' },
      { time: 1260, title: 'Example 3: Board Meeting Prep with Claude' },
      { time: 1440, title: 'Claude Response: SEO Talking Points and Stakeholder Management' },
      { time: 1620, title: 'Example 4: Partnership Pitch Development' },
      { time: 1800, title: 'Example 5: Strategic Business Planning - What Could Disrupt DMOs?' },
      { time: 2100, title: 'Gemini Response: Three DMO Killers and Platform Thinking' },
      { time: 2400, title: 'Wrap-up and Key Takeaways' },
    ],
  },
  'clueless-packing-app': {
    id: 'clueless-packing-app',
    title: 'Building a "Clueless"-Inspired AI Packing App Using Claude Artifacts',
    description: 'Using Anthropic\'s Claude, the team used the "artifacts" feature—described as a reusable prompt similar to a custom GPT—to build a "Business Trip Packing Assistant." The app\'s design was inspired by the iconic virtual closet from the movie Clueless. Learn how the tool was developed entirely with natural language prompts (like "make it more sparkly"), resulting in a "sparkly, interactive app" that any employee can now use to plan their clothing for business trips.',
    duration: '1 min',
    muxPlaybackId: 'O7pzzrithO55xsLb6p02GCgtmGyXTO1C7rSztJDl0002Bo',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    isShortForm: true, // Flag for vertical player layout
    chapters: [], // No chapters for short-form content
  },
  'model-context-protocol': {
    id: 'model-context-protocol',
    title: 'Model Context Protocol',
    description: 'This presentation introduces the Model Context Protocol (MCP) as a technical breakthrough designed to solve AI\'s trustworthiness problem in travel planning by acting as a "source of truth." Janette explains how this technology allows personal AIs to reliably connect with real-time data, demonstrates practical applications for tourism, and outlines the strategic shift for destination marketing organizations.',
    duration: '27 min',
    muxPlaybackId: 'V1DanWAF02sOwwIFov4BXNaTzwT3Kn41TnUWdcyNZfZk',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Travelers are increasingly using AI for planning (62% have tried it), but low trust is a major barrier, with only 6% "fully trusting" AI solutions due to hallucinations and outdated data',
      'Model Context Protocol (MCP) is a new "AI-native" technology that acts as a "source of truth," allowing personal AIs (like ChatGPT) to plug into verified, real-time data from trusted sources',
      'MCP functions like a universal connector or "app store" for AI, enabling it to use external tools and databases (e.g., Booking.com, venue finders, accessibility data) without complex, custom-coded APIs',
      'This technology represents a fundamental strategic shift for Destination Marketing Organizations (DMOs), moving their role from primarily managing websites to becoming "stewards of data" that publish their content as trusted MCP servers',
      'DMOs have a critical, time-sensitive opportunity to lead an "Open Ecosystem" of verified tourism data, rather than ceding control to "Closed Ecosystems" run by third-party platforms that will charge for access'
    ],
    topics: [
      'Model Context Protocol (MCP)',
      'AI in Travel & Tourism',
      'Generative AI',
      'Large Language Models (LLMs)',
      'AI Trust & Hallucinations',
      'Destination Marketing Organization (DMO)',
      'Data Stewardship',
      'APIs vs. MCPs',
      'Apps in ChatGPT',
      'Claude',
      'Anthropic',
      'Open Ecosystem (Data)',
      'Closed Ecosystem (Data)',
      'AI Agents',
      'Travel Planning',
      'B2B Marketing'
    ],
    targetAudience: {
      primary: 'Destination Marketing Organization (DMO) executives and strategists',
      secondary: 'Travel and tourism industry leaders, marketing and technology professionals in the hospitality sector',
      tertiary: 'B2B event and meeting planners, developers interested in AI and travel technology'
    },
    learningOutcomes: [
      'Define Model Context Protocol (MCP) and explain its function as a "source of truth" for AI',
      'Understand the key differences between a traditional API and an "AI-native" MCP',
      'Identify the limitations of using standard LLMs for travel planning and how MCPs solve for trust and accuracy',
      'Analyze the strategic implications of MCPs for the tourism industry, particularly for DMOs',
      'Recognize real-world applications of MCP, such as ChatGPT "Apps" (Expedia, Booking.com) and B2B data tools'
    ],
    relatedResources: [
      { name: 'Booking.com Travel Predictions', description: 'Global AI Sentiment Report and travel trend insights', url: 'https://www.booking.com' },
      { name: 'Anthropic', description: 'Creators of Claude and Model Context Protocol', url: 'https://www.anthropic.com' },
      { name: 'Claude', description: 'AI chatbot with MCP server capabilities', url: 'https://claude.ai' },
      { name: 'Wrike', description: 'Project management software used in demo', url: 'https://www.wrike.com' },
      { name: 'Morten Rand-Hendriksen', description: 'LinkedIn tutorials on MCP technology', url: 'https://www.linkedin.com/learning/instructors/morten-rand-hendriksen' }
    ],
    chapters: [
      { time: 8, title: 'The central problem: 91% excited by AI, only 6% trust it' },
      { time: 39, title: 'The need for a "source of truth" beyond the base LLM' },
      { time: 103, title: 'The solution: Model Context Protocol (MCP) is introduced' },
      { time: 128, title: 'Definition of "Context": Resources (data) and Tools (actions)' },
      { time: 154, title: 'Diagram: "Before MCP" vs "After MCP" (unified protocol)' },
      { time: 180, title: 'Analogy: MCP as a "USB-C connector" for AI' },
      { time: 235, title: 'Technical comparison: APIs vs. MCPs (AI-Native and self-describing)' },
      { time: 398, title: '"Apps in ChatGPT" - First mainstream example of MCPs' },
      { time: 478, title: 'Tourism-specific Apps: Expedia and Booking.com' },
      { time: 588, title: 'Application Example: Accessibility (wheelchair-accessible routes)' },
      { time: 672, title: 'Application Example: B2B (trusted database of meeting venues)' },
      { time: 758, title: 'Application Example: Consumer (best-value Broadway tickets)' },
      { time: 905, title: 'Strategic Implications: How MCP redefines the DMO\'s role' },
      { time: 1004, title: 'The new role for DMOs: "Stewards of data and stewards of stories"' },
      { time: 1062, title: 'Two futures: "Open Ecosystem (Led by DMOs)" vs "Closed Ecosystem (Led by Platforms)"' },
      { time: 1154, title: 'Actionable next steps for DMOs and partners' },
      { time: 1250, title: 'How to access/create MCP servers (technical demo with Claude & Wrike)' },
    ],
    transcript: `Hello, and welcome to today's presentation on the Model Context Protocol. My name is Janette Roush. I'm the Chief AI Officer for Brand USA, and today we're going to be talking about something that I think is going to fundamentally change not just how destination marketing organizations operate, but how all of travel and tourism operates in the next 5 to 10 years.

So let me start by giving you a little bit of context. There was a report that came out from Booking.com where they surveyed travelers from around the world, and they asked them about their use of AI for travel planning. And what they found is that 91% of travelers are excited about the idea of using AI to help them plan their trips. So there's a huge appetite, huge excitement around this technology.

But then they asked a follow-up question, which is: How much do you trust AI to plan your trips? And only 6% of respondents said that they fully trust AI to plan their travel. So you've got this massive gap between the excitement and the actual trust. And the reason for that gap is because large language models—so tools like ChatGPT, Claude, Gemini—all of these tools have a fundamental problem, which is that they hallucinate. They make things up. They sound very confident when they're giving you information, but that information is often wrong, often outdated, and that creates a trust problem.

And so what I want to talk about today is a technology that is designed to solve that trust problem. And that technology is called the Model Context Protocol, or MCP.

So let me give you a little bit of background. When you're using a large language model like ChatGPT, what you're doing is you're interacting with a model that was trained on a massive corpus of text from the internet. And that training happened at a specific point in time. So for example, ChatGPT's knowledge cutoff is April 2023. That means that anything that happened after April 2023, ChatGPT doesn't know about it because it wasn't part of the training data.

And so if you ask ChatGPT a question about something that happened recently, it's going to have to either tell you "I don't know" or it's going to make something up. And oftentimes, it makes something up because it's designed to be helpful and to give you an answer even when it doesn't actually have the information.

And so the solution to this problem is to give the large language model access to a source of truth—a database, a real-time feed of information that it can query in order to give you accurate, up-to-date answers. And that's what the Model Context Protocol does.

So let me define what MCP is. The Model Context Protocol is a new open standard for connecting AI systems to the data and tools they need to produce accurate, relevant outputs. It's essentially a way for an AI to say, "I don't know the answer to this question, but I know where to find the answer. Let me go query this database, let me go check this API, and then I'll come back and give you the correct information."

And so MCP is what we call AI-native, meaning it was designed specifically for AI systems to use, unlike traditional APIs which were designed for software developers to use. And the key difference is that MCP is self-describing. The AI can look at an MCP server and understand what data is available, what tools are available, and how to use them without a human having to write custom code to integrate that API.

So let me show you a diagram that I think really helps to explain this. Before MCP, if you wanted to connect ChatGPT to a bunch of different data sources—so let's say you wanted it to be able to access your calendar, your email, your CRM, a hotel booking system, a flight booking system—you would have to build custom integrations for each one of those systems. And that's a lot of work. It requires software developers. It requires ongoing maintenance. And it's just not scalable.

After MCP, what you have is a single protocol that all of these different systems can implement. And then the AI can connect to any MCP server and automatically understand how to use it. So it's like a universal connector. It's like USB-C for AI. Instead of having to have a different cable for every device, you just have one cable that works with everything.

And so that's the power of MCP. It dramatically reduces the amount of work that's required to connect AI systems to the data and tools that they need.

Now, I want to make a really important distinction between an API and an MCP because they sound similar, but they're actually quite different. An API—Application Programming Interface—is a set of rules for how one piece of software can talk to another piece of software. And APIs have been around for decades. They're the backbone of the internet. Every time you use a website or an app, there are APIs running in the background making that possible.

But APIs were designed for software developers. They require you to read documentation, write custom code, and build integrations. And that's fine if you're a software developer, but it's not something that an AI can do on its own.

MCP, on the other hand, is AI-native. It's self-describing, which means that the AI can look at an MCP server and automatically understand what data is available, what actions it can take, and how to use those tools. So it's much more flexible, much more scalable, and it's designed specifically for AI systems.

Now, the first mainstream implementation of MCP that most people are familiar with is something called Apps in ChatGPT. So if you have a paid ChatGPT account, you can go into the settings and you can enable different apps. And these apps are essentially MCP servers that ChatGPT can connect to in order to access external data and tools.

So for example, there's an Expedia app, there's a Booking.com app, there's apps for all sorts of different services. And what these apps do is they allow ChatGPT to go out to those services, query their databases, and bring back real-time, accurate information.

So let me show you an example. If I go to ChatGPT and I enable the Booking.com app, I can now ask ChatGPT a question like, "I'm planning a trip to Paris next month. Can you help me find a hotel that's in the city center, has good reviews, and costs less than $200 a night?" And ChatGPT can go out to Booking.com, query their database, and come back with actual hotel listings that meet those criteria. It's not making anything up. It's pulling real data from Booking.com.

And so that's the power of MCP. It allows AI to be much more useful, much more accurate, and much more trustworthy because it's pulling from verified sources of truth rather than just relying on its training data.

Now, I want to talk about some specific applications for the tourism industry because I think this is where it gets really exciting.

The first application is around accessibility. So one of the big challenges with AI and travel planning is that if you ask an AI, "What's the best wheelchair-accessible route from my hotel to this museum?" the AI might make something up. It might tell you that there's a ramp at a certain intersection when in fact there's no ramp there. And that's a real problem for people who are relying on that information.

But if you connect the AI to an MCP server that has verified, up-to-date accessibility data—so data about where the ramps are, where the elevators are, where the accessible entrances are—then the AI can give you accurate, reliable information. And that's incredibly valuable for travelers who have accessibility needs.

The second application is around B2B, so business-to-business. Let's say you're a meeting planner and you're trying to find a venue for a conference. You might ask the AI, "I need a venue that can hold 500 people, has A/V equipment, is available in June, and is within budget." And the AI can query an MCP server that has a trusted database of meeting venues with all of those details, and it can come back with a list of venues that actually meet your criteria.

And so instead of the AI just guessing or making something up, it's pulling from a verified source of truth. And that makes it much more useful for professionals who are making high-stakes decisions.

The third application is around consumer bookings. So for example, if you're trying to find the best value Broadway tickets, you can ask an AI, "What are the best deals on Broadway tickets this week?" And if the AI is connected to an MCP server that has real-time pricing data from all the different ticketing platforms, it can give you accurate information about what the best deals are right now.

And so those are just three examples, but there are dozens, hundreds of potential applications for MCP in the tourism industry. Anywhere where you need accurate, real-time data, MCP is the solution.

Now, I want to talk about the strategic implications of this for destination marketing organizations. Because I think this is a fundamental shift in how DMOs need to think about their role.

Traditionally, DMOs have been in the business of creating content—creating websites, creating brochures, creating videos—and hoping that travelers will find that content and engage with it. But in a world where travelers are using AI to plan their trips, the content that you're creating on your website might never be seen by a human. Instead, the AI is going to be querying your data, pulling the information it needs, and then presenting it to the traveler in a conversational interface.

And so the role of the DMO is shifting from being a creator of content to being a steward of data. You need to make sure that your data is accurate, up-to-date, well-structured, and accessible to AI systems. Because if your data isn't accessible, then the AI is going to pull from some other source, and you're going to lose control over the narrative about your destination.

And so this is why I think MCP is so important for DMOs. It gives you a way to publish your data in a format that AI systems can easily access and use. And it gives you control over the story that's being told about your destination.

Now, I want to talk about two possible futures for the tourism industry. The first future is what I call the Open Ecosystem. In the Open Ecosystem, DMOs and other tourism organizations lead the way in publishing their data as MCP servers. They make their data freely available to AI systems. And they maintain control over the story that's being told about their destinations.

In this future, travelers benefit because they have access to accurate, trustworthy information from official sources. And DMOs benefit because they maintain their role as the authoritative source of information about their destinations.

The second future is what I call the Closed Ecosystem. In the Closed Ecosystem, third-party platforms like Expedia, Booking.com, TripAdvisor—these platforms become the dominant MCP servers for travel data. And they charge DMOs and other tourism organizations for access to travelers. In this future, DMOs lose control over their data and over the story that's being told about their destinations. And they end up paying for access to their own customers.

And so the choice that DMOs need to make right now is: Which future do we want? Do we want to lead the way in publishing our data and maintaining control? Or do we want to cede that control to third-party platforms?

And my strong recommendation is that DMOs need to move quickly to establish themselves as trusted MCP servers. Because the window of opportunity is closing. The companies that move first are going to be the ones that define the standards, that set the expectations, and that maintain control over their data.

So what are the next steps? If you're a DMO or you're working in the tourism industry, here are some things that you can start doing right now:

First, audit your data. Take a look at the data that you have about your destination. Is it accurate? Is it up-to-date? Is it well-structured? If not, you need to clean it up because AI systems are very literal. If your data says that a museum is open on Mondays and it's actually closed on Mondays, the AI is going to give travelers wrong information and they're going to have a bad experience.

Second, think about what data you want to make available. What are the most valuable pieces of information that travelers are looking for? What are the things that only you know as the official destination marketing organization? Those are the things that you should be publishing as MCP servers.

Third, start experimenting with MCP. If you have access to Claude, you can already start building MCP servers and testing them out. There are tutorials available online. Morten Rand-Hendriksen has some great LinkedIn Learning courses on this. And Anthropic has published documentation about how to build MCP servers.

And then finally, start thinking strategically about your role in this new ecosystem. How do you want to position your organization? What data do you want to control? What partnerships do you want to form? These are big strategic questions that leadership needs to be thinking about now.

So just to wrap up: The Model Context Protocol is a fundamental technological breakthrough that solves the trust problem with AI. It allows AI systems to connect to verified sources of truth so that they can give travelers accurate, reliable information. And it represents a major shift in the role of destination marketing organizations from content creators to data stewards.

The organizations that move quickly to adopt MCP are going to be the ones that maintain control over their data, over their narrative, and over their relationships with travelers. And the organizations that wait are going to find themselves paying for access to their own customers.

So my encouragement to all of you is: Start learning about MCP now. Start experimenting with it. Start thinking strategically about how your organization is going to adapt to this new world. Because this is not a "someday" technology. This is happening right now. And the decisions that you make in the next 6 to 12 months are going to have a huge impact on your organization's future.

Thank you so much for your time today. I hope this was helpful. And I'm excited to see how all of you are going to use MCP to transform your destinations. Thank you.`
  },
  'ai-policy-governance': {
    id: 'ai-policy-governance',
    title: 'AI Policy & Governance for Organizations',
    description: 'Comprehensive guide to building effective AI policies for your organization. Learn the three key questions every AI policy must answer: What are we protecting? What are we providing? What are we expecting? This session covers data security, privacy considerations, content integrity, vendor management, and practical implementation strategies with real-world examples including Brand USA\'s AI policy.',
    duration: '40 min',
    muxPlaybackId: 'MIs97m4ZKNZZJwNPP35c02VDqDqIgkZKgmnWhUtzi1s4',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    // Transcript (server-rendered as static HTML)
    transcript: `Today we are going to talk about creating an AI policy for your tourism organization.

For me, this has been a long process of learning, reading and taking coursework. When I started talking and writing about AI three years ago, the one question that keeps coming up is what is okay to put in a large language model? What is safe for me to upload or use as context to help the language models give us better responses?

I didn't want to give a surface answer to that question. I have done a ton of reading and created a lot of resources around who is actually talking and writing about AI governance. I first dove into this educational journey summer a year ago. Did coursework for a certification called the AI Governance Professional, the AIGP certification from IAPP, which is the International Association of Privacy Professionals.

Part of studying for this, it's a two hour proctored exam. I did not actually formally do the test and get the certification. But it is something that people in the legal community are endeavoring to undertake. I did coursework from Dr. David Privacy, whose website is shown here. He has a course on Coursera that was about 12 hours of video content that I watched probably five times through taking notes, really trying to figure out and understand what are the pieces of this information that applies in tourism or that applies specifically to a DMO versus healthcare or creating your own language model.

That study and coursework is reflected in what I'll talk through today. There's also resources I follow on LinkedIn or through their substack newsletters for ongoing education about AI governance. That includes Louisa's newsletter, that includes Oliver Patel has a great substack and my very first introduction and deep dive into all of this work was conducted by Kara Franker, now the CEO of Visit Florida Keys and Roxanne Steinhoff, who was the head of Steinhoff Law. She came to that through her work at Choose Chicago and ended up getting her law degree, starting her own law firm and just a month ago she announced that she was joining Miles' Partnership as their general counsel. Kara and Roxanne have written white papers around the intersection of legal questions and responsibility and the work of DMOs, and all of their work has been really well researched and is absolutely worth looking up.

AI governance is our plan for using AI ethically, strategically, and safely. This is important because this is something our employees want from us. Employees are anxious about using AI, particularly if there's not a policy in place, because they don't know what they are or are not supposed to do with AI.

As leaders of our organizations, we need to provide those instructions to them, and your AI policy needs to address three questions for your staff: What are we protecting? What are we providing and what are we expecting? Throughout, this webinar, I'm going to cover each of these three points.

Starting with the first one, what are we protecting? That's going to come down to three different things. The first being data security and how are we protecting systems?

The first thing is having the ability to turn model training off. There's fear around the idea that if you upload company information into ChatGPT, that someone else would somehow be able to get that information back out, that a competitor could see your advertising plan if you had shared that with the tool.

That's not how language models work because if they do take your information and use it to train future versions of the model, it's a drop in the bucket of the overall information that is used to train a language model. But that said, we still don't want to do it.

We don't want to give up that information. You will see on this image, a screenshot of the setting screen from ChatGPT. They have hidden under data controls "improve the model for everyone". Because of course, don't we want to be generous, right? And improve the model for everybody who uses it by uploading all of the information that you give it into the next training round for that language model.

And the answer is no. We don't want to improve the model for everyone. So when you are using an AI tool, you want to have the ability to turn model training off. We want to know that data is encrypted. We want to be able to see in the Terms of Service of the AI tools that we're using, that the data we enter is encrypted, both when it is traveling to the cloud and while it is at rest in the cloud.

The third thing we want to look at are data retention policies. How long do these tools have the right to keep your data in the cloud that they own? The fourth piece is admin controls. Ideally, any AI tools that you use at your organization have the ability to have an enterprise account or an admin setup because if somebody leaves your organization, they shouldn't get to keep access to the AI tool and have their own login once they have exited your organization.

Just like people don't get to retain access to their emails or file server, they shouldn't retain access to AI tools.

Sub processor transparency. If you're not looking at a contract with a tool like ChatGPT or Claude, but a tool that uses those tools for processing, I'll use an example.

We have a partnership with Mindtrip on our America the Beautiful website. Mindtrip is not in itself a language model. They have sub-processors that they work with to provide the AI pieces of their tools. We need our vendors to be transparent about who those subprocessors are, so we understand the terms of use with those processors as well.

And then finally, SOC two compliance. This is making sure that your data is secure, safe from being stolen both at rest in the cloud and in transit to the cloud.

Your policy needs to protect people through data privacy. How do we do that? We do not put PII, personally identifiable information, into a language model.

To be more specific, and that's something that I was interested in when I was taking this AIGP course is, it's one thing to say, don't do it, but to understand why, it comes down to the EU AI Act. As part of the EU AI Act, they say that you have to get consent from someone to take their information and enter it into a language model.

So unless your check boxes, when somebody is giving their information to you, specifically says that their information is going to be entered into an LLM, you do not have consent to do that with somebody from the EU. If you take somebody's information, their email address, their phone number, and it gets uploaded into a language model, meaning the training isn't turned off, they're allowed to take your information and use it to train a future version of the model.

When they do that training, they convert all of the words that you have given it into numbers, and then those numbers are entered into an algorithm. When that happens, you can't undo it. There is no way to extract that information again. You have now permanently given away somebody's email address or phone number, and that is a violation of GDPR, which says that people own their data.

We can rent it to you, we can allow you to use it, but at any time I am able to get that information back from you. If it goes into a language model and it is used as part of the training of a model, you can never extract it again. That is the reason why we shouldn't put PII into language models.

Then the third piece that we're protecting is the integrity of content, so protecting brand and community. This comes to the questions of, well, what if I want to upload a research report into ChatGPT? Is it safe to take our board minutes and upload those into copilot or into Gemini? The reason we have concerns around this comes into these three risks of putting external information into the language model.

The first one is permanence. Once those inputs are in the training data, you cannot extract them. This is applicable to tools that are training on your inputs, if you don't provide paid tools to your staff and people are allowed to use their own personal free tools. Most likely that information has been put permanently into a language model because it's been used to train future models.

The second risk is regurgitation. Language models don't work like Wikipedia, I don't upload my business plan and then Australia can say, give me Brand USA's business plan. It's not a retrieval tool in that way. But it is predicting text based on all of the words that are part of the training data, and it makes it possible for a language model to reproduce your content in some form in someone else's response. We protect ourselves from that risk by turning off training and using paid tools. And then the third piece is violation of IP rights if you are sharing information with a language model that you don't have permission to share with the third party.

That's going to come down to looking at the contract of the information that you want to share. Thinking of licensed content specifically, that could be a research report that you are paying for, a syndicated report that many people are using. It could be different if this is research that was commissioned specifically for your organization, but if it is research that is, you know, multiple copies of it are being sold, it probably says in the contract that you are not allowed to share that with a third party. Now that doesn't mean you can't do it ever. I would say that's an opportunity to have a conversation with the vendor and ask if you can put an amendment in the contract: I have training turned off, can we make an exception for uploading the research report in that instance? Other places where you need to be concerned about rights violations is other people's information like partner data. This is of huge concern to business event planners. They typically never have the rights to take information about the partners they are working with and uploading that into a language model. For them, the solution is to host on premise, a language model, which means it's living on your own computer or on your own server, and then the data you upload never leaves the confines of your business.

If you're looking at whether it would be okay to share information with a service provider, the service provider being ChatGPT, if you're looking at your own drafts, notes, ideas, that's going to be okay.

It's the same thing with public information. If it is already available on the internet, I feel okay uploading it to a language model because it is already in the language model if it is on the internet.

Internal strategy documents, look at your organization's cloud policy, but typically that's going to be okay.

Now we get a little deeper. You look at those licensed research reports, check the license first, ask if you can have a carve out for using it inside your language model. Confidential information, you want to get people's permission to do that.

PII. Again, you're going to have to get consent first.

Employee HR data or your internal banking information, that's not ever going to be appropriate in a language model. If your HR team is looking at use cases where this is essential, there's opportunities to anonymize information and then do something with a locally hosted language model. The coursework I took on the AIGP Act went into great detail on what that entails.

Probably it is going to be overkill for your DMO.

When you're looking at this question of what is safe or okay to upload, it's a little less about what is safe and it's a little more about why are you doing it.

So this comes down to specifically to IP and making sure that you don't get slapped with an IP infringement lawsuit. There's two different areas of risk for that. One is going to be on the output side, one is on the input side. So looking at the output, you want to make sure that you are looking at lower risk use cases.

If you have a research report, the reason you got the research was to do internal strategic planning. AI can be a tool for making that happen. You want to use it for non-commercial educational purposes for doing market and policy research. So all of these use cases, because it is in the spirit of why you have the IP to begin with, you're not using AI output to devalue that.

If you put in a research report, you can't use AI to do something else with the research and then sell it to people because that still belongs to the original rights holders. To use this for non-public, non-commercial uses, assuming that you have training turned off, that you are not giving away this information to train a future model, that's going to be okay for internal research use.

From a legal perspective, you are going to win this proverbial lawsuit, but you want to look at whether your use of the IP is going to qualify as fair use under US law. Are you making a transformative use of this? Are you using this information internally without distributing it to the public?

That's why there's a distinction between using an AI tool to make images of Mickey Mouse doing things that Disney would not allow versus doing something for purely internal, educational, use that does not affect the market value of the product.

If you want to truly reduce your risk in the outputs of these AI models, you want to make sure that you are always providing attribution and transparency. If you are using something as a resource for information that you are creating, you want to say, not only did this happen inside of ChatGPT, and this is the prompt that I put in to use it, but these were the resources that I used in order to generate this output. That is the first piece that needs to be covered in your AI policy. What are we protecting?

Now we move on to the second piece of what are we providing, secure tools, clear guidance, and a person to ask with questions at your organization.

To look first at those secure tools, you want to provide secure paid tools for your staff. That could look like ChatGPT Team, Claude Team, Gemini for Google Workspace or Microsoft Co-Pilot. Providing those secure tools allows you to remove the risks that come with shadow AI or BYOAI.

The first area is security risks, because if there's a data breach, your IT team has no knowledge or control over what happened to the data that your employee uploaded to the language model.

It'd be privacy risks like we discussed around personally identifiable information. If somebody leaves your organization, they get to retain everything that they uploaded into their personal AI tool. There's also operational risks where everybody in the company is working from a different set of tools.

There's no way for anybody who's overseeing this work to understand the accuracy of what somebody is producing. These models hallucinate as a matter of course.

If somebody is creating information about your destination, whether visual assets or written copy, and they are keeping their AI use a secret and something is wrong, that can create a violation of visitor trust. If there is a data breach with personally identifiable information uploaded into a free AI tool, those things could have legal fallout.

Regulators, if there is a situation with your organization, are going to have questions and you won't have an AI policy or a suite of paid AI tools to point to as a way that you were securing the organization.

The second component of what you need to provide for your staff is clear guidance on what people can and can't do, and a person to come to with their questions.

And that can be an AI committee, that could be the head of IT or the head of HR. If you are looking for a person or a team who should own AI in your AI policy, I think that sits squarely in the operations role because that's part of making sure everybody in your organization has the operational knowledge and tools to do their best possible work at your organization.

And so now we come to the third question that your AI policy needs to answer, and that is what are we expecting from our staff? That comes down to three things. The first one is transparency. Your AI policy should ask that your team be very transparent with how they are using AI, and that should be internally, with external partners, and on your website or in your Instagram posts, wherever you are sharing things that have been made partially or completely with artificial intelligence. The second piece is verification. These tools are hallucination machines. It is a feature, not a bug. If they didn't hallucinate, then it would be regular machine learning where there would be one pre-written answer for every question that you give it.

And that is not how language models work. You need to make sure that people understand both how they work, so they understand that hallucinations are going to happen, and that they have an obligation to check their materials, to make sure that they are accurate and reflect the point of view of your organization.

Very early in the days of AI, May, 2023, the City of Boston came out with an AI policy for their city workers. They posted it on their website and emailed it to every single city employee. They said, we encourage AI use. This is going to change the world.

You should become accustomed with how these tools work and can benefit your work. But it is just like autocorrect in an email. Autocorrect changes a word in that email and that changes the meaning of the email, it is not auto correct's fault. It is your fault. That is exactly true with AI, we have the responsibility to verify everything that is part of an output because that is our work.

It is not AI's work. AI may have assisted with it, but we have to be responsible at the end of the day and your policy needs to make that clear. And then the third piece is human accountability. You cannot pass the blame on AI that the output belongs with the person.

Now let's look at what AI guidelines can look at for your organization.

This is the structure that we use to build the AI policy here at Brand USA. This comes from the excellent work that Kara Franker and Roxanne Steinhof on behalf of the AI Opener for Destinations Program, I've served as an expert advisor for the last two years on that program.

That's run through Group NAO, who created the program, and then the North American cohort is run through Miles Partnership. They have the full suite of these materials available on the website of the AI Opener for Destinations Program, but I believe you need to be a participant and have a login to see that full suite of materials.

I'm going to just walk you through the outline of what they suggest, and I'm going to show you our exact policy so you can see how we put this into life. First, you want to look at the vision that your organization has for AI because I imagine the vision that Brand USA has is going to be very different than your organization's vision.

We want to be at the forefront of AI use at a DMO. Your DMO may not share that exact same opinion, which is completely fine. If you are just looking to safely explore, that is a perfectly respectable point of view for AI adoption. The second piece you want to look at are your ethical principles, and this may ultimately be the most important conversations that your destination has because this comes down to transparency.

How are you going to let people know that you used AI? And in what ways will it be okay to use AI at your organization? Can you use AI to make images of your destination and post those on Instagram? Some of those questions feel like it'd be very easy to answer, right? Like, no, of course we wouldn't want artificial images of our destinations, but none of these things are black and white necessarily. You think back 25 years ago to when Photoshop was new, there was a lot of hand wringing around whether it was okay to use Photoshop to make the the sky of the photo that's on your brochure a little more blue. And then of course, we can't imagine not making it more blue.

If you did that change with AI instead of with Photoshop, would your organization think that's okay? There's no laws governing this, so this is an organization by organization decision. Even that answer might be fairly simple, but in the future there will be questions like, say there is a child who is in a video of your destination in the background and you didn't get a video release signed for that child.

Is it okay to use AI to remove that person from the video before you post it? Again, there's no right or wrong or yes or no. It's just what you collectively agree is the responsible choice, and then put into the policy and let people know whether it's posting the policy on your website, putting it as part of your privacy policy, et cetera, making sure that we are transparent about it.

The third piece is responsibility. Spelling out how do you keep the human in the loop? Because again, these AI guidelines, it's for your staff to know what's okay and not okay to do. It's important for them to see in black and white. They have to be involved in the process.

The fourth piece is confidentiality and safety. How is your organization going to protect personally identifiable information, confidential records, information that you are licensing but do not own? What tools are you going to be providing for your staff to use?

Governance and accountability, how will you ensure compliance with your AI policy? Who is the internal lead for oversight on AI use and how are you going to train staff?

Your team really wants education on AI. They really want regular, consistent messaging from leadership on what's okay and not okay to do. Providing that to your organization, along with secure paid tools is really important. And then provide some practical tips.

What tools can you use? What are examples or ideas of permissible ways to use AI? Let's walk through what this looks like for Brand USA. This was, created, oh my goodness, it's about to celebrate its first birthday, and it's good to be walking through all of this right now because we need to go back and add specific information about image generators into this policy.

This was written initially not to be super specific, looking at every single conceivable use case and providing some kind of verdict on it. It was meant to be much higher level and philosophical about how we approach AI and how the team should approach AI. That starts with our vision, which is we want to set the global standard for responsible and innovative AI powered tourism promotion.

We are actively looking for opportunities to use AI to do our work better or to make the United States more bookable and discoverable. We know that education is a central component of that, which is why we do regular AI trainings with the staff. We have a Slack channel, dedicated to AI news and tricks.

And we have this monthly webinar series for the industry. Second piece here is transparency, and we want to be very transparent about our use of AI. When I send emails that involve AI use, I will write in my email, and this will be even for internal emails where I did a little research or thinking through an idea with AI, I will say, oh, so I worked with Claude and I used this prompt, and this is how I came up with this answer that I am now giving you. Sometimes I will even put the answer from the AI tool in red, and then put my notes beside it in a different color, in part because I want to be transparent, but honestly, because I want to show people by example how you can use AI tools as a thought partner, to be interwoven into your work.

We want to actively engage people in those conversations, in these AI guidelines, which are posted on our website. It does say the phrase, these AI guidelines were generated with support from ChatGPT-4 and edited by me. I spell out that we're embracing a culture of responsible experimentation, which might not be the case at your DMO, and that's okay.

What people want to see is what exactly is the approach that you are comfortable with. Then we want to spell out responsibility. Keeping the human in the loop, explaining that generative AI is a tool, but we're still responsible for the outcomes, how we need to fact check and review all content created by AI, particularly if it is used in public communication.

Also, it's good to let teams know that AI cannot fact check itself. It will hallucinate and say everything was correct, so you as the human still have to go through and confirm that everything that it said is okay. And then in terms of responsibilities, on the side of Brand USA, we're responsible in providing the AI tools themselves and ongoing training. Confidentiality and safety, this is where we spell out that we may not enter personally identifiable information into a prompt, spelling out exactly what that includes and explaining why it is that we have this spelled out. You may not enter trade secrets, confidential information, information received to us that is protected by a license.

Our general counsel and I will have conversations with partners about changing contracts to carve out an amendment that says in these particular cases, using this type of tool, it is okay if it is something that we truly want to work with inside of AI. We then spell out BYO AI and why we don't want people to bring their own tools to work, but we will vet tools if there's something that a person would like to use, and then make it available if it meets our standards.

Then governance and accountability. We want to make sure that everyone knows they can reach out to our general counsel, to me, their manager, or to HR to discuss any questions or problems they have regarding AI or AI governance and accountability within the destination. It'll be reviewed annually or as needed.

Right now we are at annually, so I will be reaching out to Jake to make sure that this is up to date. Again, philosophically, all of this could apply to words or to images, but there's been a great deal of development in AI image generators over the past 12 months between when this was written and today, and we want to be very clear so that there's no confusion with our team about how we perceive AI use when it comes to images specifically. That's something we'll definitely be adding here. To help you in the creation of your own AI policy, I asked Google Gemini to write a prompt that you can access through this QR code as a custom GPT inside of ChatGPT.

You might need to have a paid account and ChatGPT to be able to use this. At a minimum, you have to at least be logged into ChatGPT. This should be able to coach you through those same questions that I was just walking you through on those three imperatives for your AI policy and then breaking down each component separately.

I'm not a lawyer, so that is not legal advice. It is meant to get you out of your own heads. I think it can be very difficult to get these policies on paper sometimes because we let the perfect be the enemy of the good, or we feel like, oh, we have to find money for counsel to draft this.

But think of it as a philosophical point of view that your destination has, and that's something you want the team on the ground to write. You don't want to outsource the writing of your philosophical point of view about how will you approach the use of AI.

There's other uses of AI that we need to be concerned with, and that is with our vendors and third parties. When you are working with vendors, make sure that you are reviewing contracts carefully to understand data ownership, access privacy in your partner agreements, particularly with any agencies that you work with.

Make sure you understand how that vendor or partner is using visitor data, and understand if they are putting PII into language models. Have conversations about this with your vendors. Ideally, they already have their own AI guidelines in place, but if not, you want to make sure that your AI guidelines are aligned with their use of AI.

You wouldn't want to completely forbid any use of AI in creating destination images, only to find out that your agency doesn't have that same rule in place.

This is an example of a checklist that you could use with vendors to make sure they are identifying to you when they are using AI and how they use AI in their own internal processes. And this isn't to say that they shouldn't be using AI. I certainly hope they all are using AI. I think agencies and particularly advertising agencies should be very deeply exploring the capabilities of AI, but we should know as the client how and where AI is being used. You need to understand if they are using AI to write content on your behalf. You may not be able to get a copyright on that content.

I don't think the courts have been very clear yet about whether human beings can own the rights to content that was not created by human beings. That's something you want to be very clear about. The same thing about third party IP usage and what your vendors are uploading into language models to create your outputs.

Incident reporting. If they have any kind of AI related problem, are they obligated to let you know about it? Data security and privacy. You want their policies to mirror your own and for their own AI output, are they committing to human review of that the same way that you are?

When you are procuring AI products and trying to decide if it's okay to work with this vendor or to subscribe to a product or not, this is advice that I took from an AI Opener event in Europe last year. An AI ethicist said, you need to know what to ask and who to ask when buying risky tools from strangers.

Use AI to help with this. Let's say you're looking at an AI notetaker, find their terms of use and their privacy policy. Upload that to the AI tool of your choice and ask, what should concern my DMO regarding the terms of use in the privacy policy?

Include your own policies once you have that written, so it knows what your point of view is on these things. Find out from a security perspective, do they offer single sign on? Is their data encrypted? Are you able to have an enterprise license for the product and find out from a privacy perspective, are you able to turn training off?

Are they using your content to make their service better? Does your DMO own the outputs from using that service? With note taking tools, many of them are free and that's the reason they're free. They want to get that data and use it to train their own tools or to sell it back to language models.

So it's very important from a privacy perspective to go through this checklist when you or a team member is looking at an AI tool to use. This is an AI generated picture as were all of the images in the presentation today. They were all made with the new nano banana model from Gemini, which is incredible. If you're looking at which AI tool to make available to your staff, typically I have said to go with Open AI and ChatGPT. There's no wrong answer because they all leapfrog each other in terms of capabilities, but if you're a Google Workspace user, the new Gemini model and nano banana inside of Gemini is phenomenal.

Leadership to-do list. Please empower your staff to use these tools, but make sure they understand where their limits are. This will encourage AI use at your organization because people drive the car faster when they know how to use the brake pedal. You want to approve and communicate guidelines to your team.

You want to oversee risks to both your vendor and your tech stack and ultimately you want to set the tone. I've read studies that say employees are much more likely to use AI if they know their immediate boss is using AI.

The only way that we're going to encourage AI adoption at our organizations is by everybody from the top down leaning in and moving through that initial discomfort to ask the question, I wonder if it can help me with this. And then really seeing what it can do.

If you are new to using AI, it does take some time to understand what to do to get the best out of these systems. Very few of them work great when you just put in one prompt and then walk away. It requires iteration. It is like working with a brilliant but ignorant intern, right?

You have to have the patience to give it the context it needs in order to really get the best results out of it. It will rise or fall to your expectations. If you assume AI can't do anything, you're not going to put your best effort into prompting it and it won't be able to do anything for you.

Whereas if you assume that it's going to be able to do amazing things, that will encourage you to keep working with it until it does, in fact give you amazing outputs. That's the tone that I hope you can set at your organization.

To wrap up, this is the QR code for today's presentation if you would like to download a copy. Thank you so much for joining the webinar today.`,
    // Enhanced metadata for AI discoverability
    keyTakeaways: [
      'Effective AI policy is built on three foundational questions: What are we protecting (data security, privacy, IP), what are we providing (secure tools, clear guidance), and what are we expecting (transparency, verification, accountability)',
      'Data security requires protecting three layers: model training (use enterprise tools with training opt-out), encryption (SOC2 compliance), and data retention policies with clear admin controls and sub-processor transparency',
      'Data privacy means never putting Personally Identifiable Information (PII) into AI systems, understanding GDPR and EU AI Act compliance requirements, and always obtaining consent before using employee or customer data',
      'Content integrity requires safeguarding intellectual property rights, understanding the risks of uploading confidential information to AI tools, and reviewing contracts to ensure your organization owns AI-generated work',
      'Successful AI adoption requires both providing employees with secure, approved tools (to prevent "shadow AI") and establishing clear points of contact through an AI committee, IT support, and HR guidance for policy questions'
    ],
    topics: [
      'AI Policy',
      'AI Governance',
      'Data Security',
      'Data Privacy',
      'Content Integrity',
      'Intellectual Property (IP)',
      'Personally Identifiable Information (PII)',
      'GDPR Compliance',
      'EU AI Act',
      'SOC2 Compliance',
      'Model Training',
      'Data Encryption',
      'Data Retention',
      'Sub-processors',
      'AI Committee',
      'Shadow AI',
      'BYOAI (Bring Your Own AI)',
      'Vendor Management',
      'AI Implementation',
      'Change Management',
      'Employee Training',
      'AI Transparency',
      'Human Accountability',
      'Boston AI Policy',
      'Brand USA AI Policy'
    ],
    targetAudience: {
      primary: 'Organizational leaders, executives, and managers responsible for AI policy development',
      secondary: 'IT security professionals, HR managers, legal and compliance teams, risk management professionals',
      tertiary: 'Destination Marketing Organizations (DMOs), tourism professionals, and anyone implementing AI governance frameworks'
    },
    learningOutcomes: [
      'Articulate the three core questions that form the foundation of effective AI policy: protection, provision, and expectations',
      'Identify critical data security requirements including SOC2 compliance, encryption standards, model training controls, and sub-processor transparency',
      'Explain why PII must never be entered into AI systems and understand GDPR and EU AI Act compliance obligations',
      'Evaluate vendor contracts for AI usage rights, data ownership, privacy protections, and incident reporting requirements',
      'Design an AI governance structure that balances employee empowerment with organizational risk management',
      'Create a practical AI policy framework covering vision, ethical principles, transparency, responsibility, confidentiality, and governance'
    ],
    relatedResources: [
      { name: 'Brand USA AI Policy', description: 'Public example of organizational AI policy', url: 'https://thebrandusa.app.box.com/s/bbsg85jl4w1rbgolcyg2kwjzy7he9g64' },
      { name: 'City of Boston AI Policy', description: 'Municipal AI policy example with guidelines for using generative AI', url: 'https://www.boston.gov/sites/default/files/file/2023/05/Guidelines-for-Using-Generative-AI-2023.pdf' },
      { name: 'IAPP (International Association of Privacy Professionals)', description: 'Leading resource for AI governance and privacy certification', url: 'https://iapp.org' },
      { name: 'Dr. David Privacy', description: 'Privacy and AI governance expertise', url: 'https://drdavidprivacy.com' },
      { name: 'Luiza\'s Newsletter', description: 'AI policy and governance insights', url: 'https://luizasnewsletter.com' },
      { name: 'Oliver Patel\'s Newsletter', description: 'AI governance and policy analysis', url: 'https://oliverpatel.substack.com' },
      { name: 'ChatGPT Enterprise', description: 'Enterprise AI platform with security controls', url: 'https://openai.com/chatgpt/enterprise' },
      { name: 'Claude for Enterprise', description: 'Anthropic\'s enterprise AI solution', url: 'https://www.anthropic.com/claude' },
      { name: 'Microsoft Copilot', description: 'Enterprise AI assistant', url: 'https://copilot.microsoft.com' },
      { name: 'SOC 2 Compliance', description: 'Security and compliance framework', url: 'https://www.aicpa.org/soc' }
    ],
    chapters: [
      { time: 0, title: 'Introduction & Personal Journey' },
      { time: 210, title: 'Foundations of AI Governance' },
      { time: 360, title: 'Why AI Policy Matters for Employees' },
      { time: 420, title: 'Three Key Questions for AI Policy' },
      { time: 480, title: 'What Are We Protecting? (Data Security, Privacy, Content Integrity)' },
      { time: 960, title: 'What Are We Providing? (Secure Tools, Clear Guidance, Points of Contact)' },
      { time: 1140, title: 'What Are We Expecting? (Transparency, Verification, Human Accountability)' },
      { time: 1320, title: 'Building an AI Policy: Structure & Guidelines' },
      { time: 1680, title: 'Brand USA\'s AI Policy Example' },
      { time: 1920, title: 'Working with Vendors & Third Parties' },
      { time: 2160, title: 'Leadership & AI Adoption' },
      { time: 2280, title: 'Getting the Most from AI' },
      { time: 2370, title: 'Conclusion & Resources' },
    ],
  },
  'minnesota-ai-tourism': {
    id: 'minnesota-ai-tourism',
    title: 'Generative AI and Tourism: Practical Applications for Minnesota\'s Global Future',
    description: 'Conference presentation exploring how generative AI is transforming destination marketing and tourism, with practical applications and strategies for leveraging AI in the travel industry. Recorded at a Minnesota tourism conference.',
    duration: '45 min',
    muxPlaybackId: 'xGN0100YGsU5iwW1No4uPfcBDPhxSgz4r2AN5jRH13oK00',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    isConferenceTalk: true,
    chapters: [],
  },
  'ai-ideas-exchange': {
    id: 'ai-ideas-exchange',
    title: 'AI Ideas Exchange',
    description: 'Interactive conference session sharing innovative AI ideas and strategies for the tourism and destination marketing industry. A collaborative exchange of practical AI applications and emerging trends.',
    duration: '30 min',
    muxPlaybackId: 'gmEb026oFyIlXVv9jeB5jnXBD5dgjXpdJRrMX2TxzMJY',
    instructor: 'Janette Roush',
    instructorTitle: 'Chief AI Officer, Brand USA',
    isConferenceTalk: true,
    chapters: [],
  },
}

export default function WebinarPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const webinar = webinarData[id as keyof typeof webinarData]

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Webinar not found</p>
      </div>
    )
  }

  // Map of AI tools mentioned in each webinar for schema.org mentions property
  const webinarMentions: Record<string, any[]> = {
    'intro-ai-agents': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Browse.ai', applicationCategory: 'Web Scraping', url: 'https://browse.ai' },
      { '@type': 'SoftwareApplication', name: 'Manus.im', applicationCategory: 'AI Agent', url: 'https://manus.im' },
      { '@type': 'SoftwareApplication', name: 'Lovable.ai', applicationCategory: 'Website Builder', url: 'https://lovable.ai' },
      { '@type': 'SoftwareApplication', name: 'Claude Artifacts', applicationCategory: 'AI Builder', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'N8N', applicationCategory: 'Workflow Automation', url: 'https://n8n.io' },
      { '@type': 'SoftwareApplication', name: 'Agent.ai', applicationCategory: 'AI Agent Builder', url: 'https://agent.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'custom-gpts': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Custom GPTs', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
    ],
    'ai-convention-sales': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Custom GPTs', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude Artifacts', applicationCategory: 'AI Builder', url: 'https://claude.ai' },
    ],
    'crit-framework': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
    'crit-framework-workshop': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Monologue', applicationCategory: 'Voice Dictation', url: 'https://monologue.app' },
      { '@type': 'SoftwareApplication', name: 'Wispr Flow', applicationCategory: 'Voice Dictation', url: 'https://www.wispr.ai' },
    ],
    'model-context-protocol': [
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Model Context Protocol', applicationCategory: 'AI Protocol', url: 'https://modelcontextprotocol.io' },
    ],
    'ai-101': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'ai-tool-playground': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
      { '@type': 'SoftwareApplication', name: 'Lovable.ai', applicationCategory: 'Website Builder', url: 'https://lovable.ai' },
    ],
    'ai-dmo-leadership': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
    'ai-policy-governance': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT Enterprise', applicationCategory: 'AI Assistant', url: 'https://openai.com/chatgpt/enterprise' },
      { '@type': 'SoftwareApplication', name: 'Claude for Enterprise', applicationCategory: 'AI Assistant', url: 'https://www.anthropic.com/claude' },
      { '@type': 'SoftwareApplication', name: 'Microsoft Copilot', applicationCategory: 'AI Assistant', url: 'https://copilot.microsoft.com' },
    ],
    'minnesota-ai-tourism': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
      { '@type': 'SoftwareApplication', name: 'Google Gemini', applicationCategory: 'AI Assistant', url: 'https://gemini.google.com' },
    ],
    'ai-ideas-exchange': [
      { '@type': 'SoftwareApplication', name: 'ChatGPT', applicationCategory: 'AI Assistant', url: 'https://chatgpt.com' },
      { '@type': 'SoftwareApplication', name: 'Claude', applicationCategory: 'AI Assistant', url: 'https://claude.ai' },
    ],
  }

  // Generate enhanced JSON-LD schema for AI discoverability
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: webinar.title,
    description: webinar.description,
    duration: webinar.duration,
    thumbnailUrl: `https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`,
    contentUrl: `https://stream.mux.com/${webinar.muxPlaybackId}.m3u8`,
    uploadDate: '2024-01-01',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    creator: {
      '@type': 'Person',
      name: webinar.instructor,
      jobTitle: webinar.instructorTitle,
    },
    author: {
      '@type': 'Person',
      name: 'Janette Roush',
      jobTitle: 'Chief AI Officer, SVP Innovation',
      affiliation: {
        '@type': 'Organization',
        name: 'Brand USA'
      },
      knowsAbout: [
        'AI for tourism marketing',
        'Destination marketing AI strategy',
        'Model Context Protocol (MCP)',
        'AI agents for DMOs',
        'Custom GPTs for tourism',
        'CRIT framework for AI prompts',
        'Agentic AI in destination marketing',
        'AI governance in tourism industry',
        'Claude Artifacts for DMO operations',
        'Tourism industry automation'
      ]
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brand USA Agents of Change',
      url: 'https://www.janetteroush.com'
    },
    isPartOf: {
      '@type': 'Course',
      name: 'AI for Destination Marketing Organizations',
      provider: {
        '@type': 'Organization',
        name: 'Brand USA Agents of Change'
      }
    },
    educationalLevel: (webinar as any).level || 'Professional',
    keywords: (webinar as any).topics?.join(', ') || '',
    about: (webinar as any).topics?.map((topic: string) => ({
      '@type': 'Thing',
      name: topic
    })) || [],
    ...(webinar as any).keyTakeaways && {
      teaches: (webinar as any).keyTakeaways
    },
    ...(webinar as any).learningOutcomes && {
      educationalUse: (webinar as any).learningOutcomes
    },
    ...(webinar as any).targetAudience && {
      audience: {
        '@type': 'Audience',
        audienceType: (webinar as any).targetAudience.primary
      }
    },
    ...(webinarMentions[id] && {
      mentions: webinarMentions[id]
    })
  }

  // BreadcrumbList schema for navigation hierarchy
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.janetteroush.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Webinars',
        item: 'https://www.janetteroush.com/#webinars'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: webinar.title,
        item: `https://www.janetteroush.com/webinar/${id}`
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for AI Discoverability - Server-Rendered OUTSIDE client components */}
      <script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      ></script>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      ></script>

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <Image
                src="/brandusa-logo.png"
                alt="Brand USA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              {/* Header actions can go here */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(webinar as any).isShortForm ? (
          // TikTok-style vertical layout for short-form videos
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              {/* Vertical Video Player */}
              <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '9/16' }}>
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>

              {/* Video Info Below Player */}
              <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-brand-navy mb-2">
                  {webinar.title}
                </h1>
                <p className="text-gray-600 mb-4">{webinar.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {webinar.duration}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                      {webinar.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{webinar.instructor}</div>
                      <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources - only show if resources exist */}
              {(webinar as any).resources && (webinar as any).resources.length > 0 && (
                <div className="w-full max-w-md">
                  <ResourcesList resources={(webinar as any).resources} />
                </div>
              )}
            </div>
          </div>
        ) : (
          // Standard horizontal layout for webinars
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                <HLSPlayer
                  playbackId={webinar.muxPlaybackId}
                  poster={`https://image.mux.com/${webinar.muxPlaybackId}/thumbnail.png`}
                />
              </div>


            {/* Video Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-2xl font-bold text-brand-navy mb-2">
                {webinar.title}
              </h1>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {webinar.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {webinar.chapters.length} chapters
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg">
                    {webinar.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">{webinar.instructor}</div>
                    <div className="text-sm text-gray-500">{webinar.instructorTitle}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <ChaptersList chapters={webinar.chapters} />

            {/* Key Takeaways - only show if exists */}
            {(webinar as any).keyTakeaways && (webinar as any).keyTakeaways.length > 0 && (
              <KeyTakeawaysList takeaways={(webinar as any).keyTakeaways} />
            )}

            {/* Learning Outcomes - only show if exists */}
            {(webinar as any).learningOutcomes && (webinar as any).learningOutcomes.length > 0 && (
              <LearningOutcomesList outcomes={(webinar as any).learningOutcomes} />
            )}

            {/* Transcript - Server-rendered HTML for SEO/GEO crawlability */}
            {(webinar as any).transcript && (
              <TranscriptSection transcript={(webinar as any).transcript} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resources - only show if resources exist */}
            {(webinar as any).resources && (webinar as any).resources.length > 0 && (
              <ResourcesList resources={(webinar as any).resources} />
            )}

            {/* Related Resources/Tools - only show if exists */}
            {(webinar as any).relatedResources && (webinar as any).relatedResources.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-brand-navy mb-4">Tools Mentioned</h2>
                <div className="space-y-3">
                  {(webinar as any).relatedResources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="font-medium text-brand-navy mb-1">{resource.name}</div>
                      <div className="text-xs text-gray-600">{resource.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </>
  )
}