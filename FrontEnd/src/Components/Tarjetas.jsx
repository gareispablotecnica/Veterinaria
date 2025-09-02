// ---> rfec

function Tarjetas({props}) {
  return (
    <div>
        <section className="contenedor">
            <div className="tarjeta">
                <h1>Maldonado </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium iure sapiente culpa aperiam! Iste voluptate placeat impedit, magni nemo natus aliquid libero omnis, fuga dolore doloremque vero maiores id!</p>
                <button onClick={props}>Agregar al Carrito</button>
            </div>
            <div className="tarjeta">
                <h1>Veltri </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium iure sapiente culpa aperiam! Iste voluptate placeat impedit, magni nemo natus aliquid libero omnis, fuga dolore doloremque vero maiores id!</p>
                <button>Agregar al Carrito</button>
            </div>
        </section>
    </div>
  )}

export default Tarjetas