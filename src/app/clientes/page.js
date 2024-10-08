'use client'
import { Table } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Pagina from "../components/Pagina";




export default function Clientes() {


    return(
        <Pagina>
        <br/>
        <Cabecalho titulo="Clientes" sub="Pagina de Clientes usando o cabeçalho"/>

        <Link href="/" className="btn btn-success" >Página Principal</Link>{' '}
      <Link className="btn btn-secondary" href='/fundamentos'> Página de Fundamentos</Link>{' '}
      <br/><br/>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
       </Pagina>
    )
}