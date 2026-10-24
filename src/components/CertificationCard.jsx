import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react'

function CertificationCard({ certification, index }) {
  return (
    <article className="cert-card reveal" style={{ '--reveal-delay': `${index * 75}ms` }}>
      <div className="cert-icon"><Award size={19} strokeWidth={1.5} /></div>
      <span className="cert-type">{certification.type}</span>
      <h3>{certification.name}</h3>
      <p className="cert-issuer">{certification.issuer}</p>
      <div className="cert-dates"><span>Issued {certification.issued}</span>{certification.expires && <span>Expires {certification.expires}</span>}</div>
      {certification.verification && (
        <a className="cert-verify" href={certification.verification} target="_blank" rel="noreferrer">
          <BadgeCheck size={15} /> Verify credential <ArrowUpRight size={14} />
        </a>
      )}
    </article>
  )
}

export default CertificationCard
