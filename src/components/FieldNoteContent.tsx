// Renders field-note content: paragraphs split on \n\n, **bold** converted to
// <strong>, inline HTML (<a> tags) passed through. Used by /notes and /notes/[slug].
export default function FieldNoteContent({ content }: { content: string }) {
  return (
    <div className="note-content prose prose-lg max-w-none">
      {content.split('\n\n').map((paragraph, idx) => {
        const html = paragraph.replace(
          /\*\*(.+?)\*\*/g,
          '<strong class="text-brand-navy font-semibold">$1</strong>'
        )
        return (
          <p
            key={idx}
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )
      })}
    </div>
  )
}
