import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {

console.log(props.tnav)
const prop = props.tnav ? props.tnav: 'Projeto Aula'
// let prop = props.tnav
// if(prop === ''){
//   prop = 'Projeto Aula'}
    return (
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
              <Container>
              <Navbar.Brand href="#">{prop}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                <Nav.Link href="/array">Array</Nav.Link>
                <Nav.Link href="/objetos">Carros</Nav.Link>
                <Nav.Link href="/nomes">Nomes</Nav.Link>
                <Nav.Link href="/numeros">Números</Nav.Link>
              </Nav>
          </Container>
          </Navbar>
        
          <div  className=" bg-dark bg-opacity-25 text-dark text-center p-5">

            <h2 className="container">{props.titulo}</h2>
    
          </div >
      
          <Container className="m-5">
            {props.children}
          </Container>
        </>
    )

}
