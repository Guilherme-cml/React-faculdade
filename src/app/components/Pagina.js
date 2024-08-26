import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props) {

    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">{props.tnav}</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Página 1</Nav.Link>
                <Nav.Link href="/fundamentos">Página 2</Nav.Link>
                <Nav.Link href="/array">Array</Nav.Link>
                <Nav.Link href="/objetos">Carros</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        
          <div className=" bg-light text-dark text-flex-start p-5">

            <h2>{props.titulo}</h2>
    
          </div>
      
          <Container>
            {props.children}
          </Container>
        </>
    )

}
