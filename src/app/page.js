'use client'
import { Button, Tab, Tabs } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";


export default function Home() {
  return (
    <Pagina>
      <br/>
    <Cabecalho titulo="Home" sub="Projeto Aula"/>
    
      <Link href="/clientes" className="btn btn-success" >Clientes</Link>{' '}
      <Link className="btn btn-secondary" href='/fundamentos'> Página de Fundamentos</Link>
     </Pagina>
    
  );
}
