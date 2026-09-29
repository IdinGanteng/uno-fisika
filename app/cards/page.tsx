import Card from '@/components/Card';import {createDeck} from '@/lib/game';
export default function Cards(){return <main className="container"><h1>Cards</h1><p className="muted">Reconstructed 108-card UNO-style deck.</p><div className="hand" style={{marginTop:20}}>{createDeck().map(c=><Card key={c.id} card={c}/>)}</div></main>}
