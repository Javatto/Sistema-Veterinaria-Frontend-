import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import imgUser from '../images/usuario.png';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const BuscarCliente = () => {

    const [clientes, setClientes] = useState([]);
    const [correo, setCorreo] = useState("");

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //

    const BuscarClientes = () => {
        fetch(`http://localhost:9000/api/cliente/${correo}`)
            .then(res => {
                res.json();
                //if(Object.keys(res).length === 0)
                //    setShow(true);
                //else
                //    setClientes(res);
            })
            .then(res => {
                console.log(res);
            })
            
    }

    return (
        <Container className='FormBuscarCliente'>
            <Row>
                <Col className='BuscarCliente'>
                    <Row>
                        <Col lg="8">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Escirbir el correo del cliente" onChange={(e) => { setCorreo(e.target.value) }} />
                            </Form.Group>
                        </Col>
                        <Col lg="3" className='btnBuscarcliente'>
                            <Button variant="primary" onClick={BuscarClientes}>
                                Buscar
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>         </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map((cliente) => (
                                        <tr key={cliente.correo}>
                                            <td>{cliente.nombre}</td>
                                            <td>{cliente.apellidos}</td>
                                            <td><Button>Hola</Button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
                <Col lg="5" className='ConsultarCliente'>
                    <Card border="primary">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg="3">
                                    <Image src={imgUser}></Image>
                                </Col>
                                <Col >
                                    <Card.Text>Nombre: {correo}</Card.Text>
                                    <Card.Text>Apellidos: {correo}</Card.Text>
                                    <Card.Text>Telefono: {correo}</Card.Text>
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
                                            {clientes.map((cliente) => (
                                                <tr key={cliente.correo}>
                                                    <td>{cliente.nombre}</td>
                                                    <td>{cliente.apellidos}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>El usuario que busca no esta registrado</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    );
}

export default BuscarCliente;