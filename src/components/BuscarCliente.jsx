import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ConsultarCliente from './ConsultarCliente';
import { useState } from 'react';


const BuscarCliente = () => {

    const [clientes, setClientes] = useState([]);
    const [correo, setCorreo] = useState("");
    
    const BuscarClientes = () => {
        fetch(`http://localhost:9000/api/cliente/${correo}`)
            .then(res => 
                res.json()
            )
            .then(res => 
                setClientes(res)
            )
            
    }

    return (
        <Container>
            <Row>
                <Col className='BuscarCliente'>
                    <Row>
                        <Col lg="8">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Escirbir el correo del cliente" onChange={(e) => {setCorreo(e.target.value)}}/>
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
                    {
                        (clientes.length !== 0) ? (<ConsultarCliente  cliente={clientes}></ConsultarCliente>) : (<div>Hola</div>)  
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default BuscarCliente;