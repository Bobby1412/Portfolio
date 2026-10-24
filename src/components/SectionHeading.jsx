function SectionHeading({ number, title, description, id }) {
  return (
    <div className="section-heading reveal">
      <span className="section-number">{number}</span>
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default SectionHeading
