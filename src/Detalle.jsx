import { useState } from "react";

function Detalle() {
    const [aviso, setAviso] = useState("")
    const handleClick = ()=>{
        setAviso("Gracias por su compra"); 
    }
    return (
        <div>
            <h1>Focusrite Scarlett 2i2</h1>
            <p>Placas de Audio</p>
            <p>24 Bit / 192 kHz
               2 preamplificadores de micrófono Scarlett
               Alimentación Phantom de +48 V
               Interfaz de audio USB 2.0 de 2 canales con conexión USB-C 24 Bit / 192 kHz, 2 preamplificadores de micrófono Scarlett, Alimentación Phantom de +48 V, Función Air conmutable, 2 entradas Mic/Line: XLR/Jack de 6,3 mm combinadas simétricas, 2…</p>
            <p>$107000</p>
            <p>SKU: K16183155076316BHCQ</p>
            <p>Cant. Disponible: 3</p>
            <button onClick={handleClick}>Comprar</button>
            <p>{aviso}</p>
        </div>
    );
}

export default Detalle;