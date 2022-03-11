import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const colores={
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#29bb30"
}

const Formulario = styled.form`
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 40px;

     @media (max-width: 800px){
        grid-template-columns: 1fr;
     }
`;

const Label = styled.label`
     display: block;
     front-weight: 700;
     padding: 10px;
     min-height: 40px;
     cursor: pointer;
`;

const Error = styled.p`
front-size: 12px;
margin-bottom: 0;
color: ${colores.error};
display: none;
`;

const ContenedorPago = styled.div`
    grid-column: span 2;

    input{
        margin-right: 10px;
        
    }
`;

const ContenedorBoton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
    display: none;
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error};
    padding: 0px 15px;
    border-radius: 3px;
    cursor: pointer;
    grid-column: span 2;

    p{
        margin: 0;
    }
    b{
        margin-left: 10px;
    }
`;


const RegistrarConsulta= () => {
    return (
       <main>
           <Formulario action="">
               <div>
                    <Label htmlFor="">Nombre del Cliente: </Label>
                    <body>
                      <input type="text"/>
                    </body>
                </div>
                <div>
                    <Label htmlFor="">Nombre de la Mascota: </Label>
                    <body>
                      <input type="text"/>
                    </body>
                </div>
                <div>
                    <Label htmlFor="">Nombre del Veterinario </Label>
                    <body>
                      <input type="text"/>
                    </body>
                </div>
                <div id="cronometro">
                     <Label htmlFor="">Tiempo de Consulta:</Label>
                     <h3><time>00:00:00</time></h3>
                     <Button id="strt">Iniciar</Button>
                     <Button id="stp">Detener</Button>
                     <Button id="rst">Reiniciar</Button>
                 </div>
            </Formulario>
            <div>
                    <Label htmlFor="">Resolución: </Label>
                    <body>
                         <form action="">
                         <textarea rows="4" cols="65"></textarea>
                         </form>
                    </body> 
                </div>
                <div>
                    <Label htmlFor="">Receta: </Label>
                    <body>
                         <form action="">
                         <textarea rows="4" cols="65"></textarea>
                         </form>
                    </body> 
                </div>
                <div>
                    <Label htmlFor="">Importe Total: </Label>
                    <label>
                      <input type="text"/>
                    </label>
                </div>
            <ContenedorPago>
                <Label>
                    <input type="checkbox" name="pago" id="pago"/>
                    Pagado
                </Label>
            </ContenedorPago>
            {false &&<MensajeError>
                <p><b>Error:</b>Rellenar todos los campos obligatorios.</p>
            </MensajeError>}
            <ContenedorBoton>
                <Button type="submit">Registrar</Button>
                <MensajeExito>Se registró correctamente la consulta.</MensajeExito>
            </ContenedorBoton>
       </main>
    );
}


export default RegistrarConsulta;