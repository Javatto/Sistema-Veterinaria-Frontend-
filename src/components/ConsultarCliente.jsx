import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import imgUser from '../images/usuario.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const ConsultarCliente = (props) => {
    return (  
        <Card border="primary">
                        <Card.Header> {props.cliente[0].correo}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg="3">
                                    <Image src={imgUser}></Image>
                                </Col>
                                <Col >
                                    <Card.Text>Nombre: {props.cliente[0].nombre}</Card.Text>
                                    <Card.Text>Apellidos: {props.cliente[0].apellidos}</Card.Text>
                                    <Card.Text>Telefono: {props.cliente[0].telefono}</Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Macotas:
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Especie</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
    );
}
 
export default ConsultarCliente;