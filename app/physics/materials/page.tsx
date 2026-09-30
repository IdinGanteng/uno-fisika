export default function Materials() {
  return (
    <main className="container">
      <h1>Physics Materials</h1>
      <div className="grid cards">
        <article className="panel">
          <h2>GLB</h2>
          <p>s = v × t</p>
        </article>
        <article className="panel">
          <h2>GLBB</h2>
          <p>v = v₀ + at</p>
          <p>s = v₀t + ½at²</p>
        </article>
        <article className="panel">
          <h2>Newton</h2>
          <p>F = ma</p>
        </article>
        <article className="panel">
          <h2>Energi Kinetik</h2>
          <p>Ek = ½mv²</p>
        </article>
      </div>
    </main>
  );
}
