import '../styles/preview.css'

export function PreviewComponent({person}) {
  return (
    <section className="preview-content">
      <h1 >{person.fullName}</h1>
    </section>
  )
}