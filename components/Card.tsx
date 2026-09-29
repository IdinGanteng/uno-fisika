'use client';
import {Card as CardType,cardLabel} from '@/lib/game';
export default function Card({card,faceDown=false,onClick}:{card?:CardType;faceDown?:boolean;onClick?:()=>void}){if(faceDown)return <button className="card" style={{background:'linear-gradient(135deg,#111827,#334155)',fontSize:16}} onClick={onClick}>4CA</button>;return <button className={`card ${card!.color}`} onClick={onClick}>{cardLabel[card!.value]}</button>}
