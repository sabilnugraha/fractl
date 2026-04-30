export default function Home() {
  return (
    <main style={{minHeight:'100vh',padding:40,fontFamily:'sans-serif',background:'#0d1117',color:'#e6edf3'}}>
      <p style={{letterSpacing:2,textTransform:'uppercase',opacity:.7}}>Fractl Next.js Active</p>
      <h1 style={{fontSize:56,margin:'20px 0 10px'}}>Build Living Systems</h1>
      <p style={{fontSize:20,opacity:.75}}>Not just software. A composable intelligence system.</p>
      <div style={{marginTop:32,padding:24,borderRadius:24,background:'#161b22',boxShadow:'8px 8px 18px #080b10,-8px -8px 18px #242b34',display:'inline-block'}}>
        If you can see this card, the Next.js root is running.
      </div>
    </main>
  )
}
