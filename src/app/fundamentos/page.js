import { Alert, Container } from "react-bootstrap"
import Cabecalho from "../components/Cabecalho"
import Link from "next/link"
export default function Fundamentos() {


    return (
        <>
            <br/>
            <Container>
                <h1>Fundamentos</h1>
                <Alert>This is an alert</Alert>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet molestie dolor, non pretium elit finibus non. Vestibulum diam dolor, scelerisque fringilla pellentesque porta, suscipit ut ex. Fusce finibus felis sed odio commodo faucibus. Nam mollis urna at ullamcorper facilisis. Duis suscipit, massa vel varius aliquam, ante augue lobortis ligula, id fringilla ipsum turpis sit amet metus. Integer vitae commodo dui. Pellentesque dapibus consectetur nisl. Suspendisse vel ornare massa. Ut faucibus a risus et bibendum. Phasellus quis gravida arcu. Pellentesque luctus convallis enim, sed hendrerit lacus tincidunt eu. Sed dignissim aliquet sollicitudin.
                </p>
                <Link className="btn btn-success" href="/">Página Principal</Link>
            </Container>
            
        </>
        
    )

}