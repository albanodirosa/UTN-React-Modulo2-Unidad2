function Producto({nombre,precio,categoria}){
  
    return (
      <div>
        <h1>{nombre}</h1>
        <p>{precio}</p>
        <p>{categoria}</p>
      </div>
    );
  }
  
  export default Producto;
  