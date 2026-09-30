import Link from "next/link";
export default function Physics() {
  return (
    <main className="container">
      <h1>Physics Arena</h1>
      <p className="muted">Belajar fisika sambil bermain kartu.</p>
      <div className="grid cards" style={{ marginTop: 20 }}>
        <Link className="panel" href="/physics/play">
          <h2>Play</h2>
          <p>Quiz + card ranking.</p>
        </Link>
        <Link className="panel" href="/physics/materials">
          <h2>Materials</h2>
          <p>GLB, GLBB, Newton & Energi Kinetik.</p>
        </Link>
        <Link className="panel" href="/physics/logs">
          <h2>Score Logs</h2>
          <p>Lihat dan export skor.</p>
        </Link>
        <Link className="panel" href="/physics/admin">
          <h2>Admin</h2>
          <p>Kelola data quiz lokal.</p>
        </Link>
      </div>
    </main>
  );
}
