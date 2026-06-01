import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ display:'flex', minHeight:'100vh', alignItems:'center', justifyContent:'center', background:'var(--off-white)', padding:'1rem' }}>
      <div style={{ maxWidth:'28rem', textAlign:'center' }}>
        <h1 style={{ fontSize:'4.5rem', fontFamily:'"DM Serif Display",serif', color:'var(--navy)' }}>404</h1>
        <h2 style={{ marginTop:'1rem', fontSize:'1.25rem', fontWeight:600, color:'var(--navy)' }}>Page not found</h2>
        <p style={{ marginTop:'0.5rem', fontSize:'0.875rem', color:'rgba(0,0,0,.6)' }}>The page you're looking for doesn't exist or has been moved.</p>
        <div style={{ marginTop:'1.5rem' }}>
          <Link to="/" className="btn-amber">Go home</Link>
        </div>
      </div>
    </div>
  )
}
