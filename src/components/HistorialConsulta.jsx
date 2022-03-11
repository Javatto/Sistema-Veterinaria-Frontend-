import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';

const Formulario = styled.form`
     gap: 40px;
`;

const ContenedorBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
`;

const HistorialConsulta= () => {
    return (
        <main>
        <Formulario action="">
            <Row>
                <Col className='BuscarCliente'>
                    <Row>
                        <Col lg="8">
                            <Form.Group className="mb-3">
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control placeholder="Escribir nombre del cliente"  />
                            </Form.Group>
                        </Col>
                        <Col lg="3" className='btnBuscarcliente'>
                            <Button>
                                Buscar
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Mascota</th>
                                    </tr>
                                </thead>
                            </Table>
                        </Col>
                    </Row>
                </Col>
                <ContenedorBoton>
                <Button type="submit">Buscar dato</Button>
                </ContenedorBoton>

                <Col lg="5" className='ConsultarCliente'>
                    <Card border="primary" className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Formulario>
        </main>
     );
}


export default HistorialConsulta;