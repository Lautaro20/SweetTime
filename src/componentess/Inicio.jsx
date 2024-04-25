import React from 'react'
import imagen1 from "../recursos/imagenes/Pngs/pngs sin fondos/803560020f0f772bb12862e1eb2f50c0.png"
import imagen2 from "../recursos/imagenes/Pngs/pngs sin fondos/tortita.png"
import imagen3 from "../recursos/imagenes/Pngs/pngs sin fondos/c455d37f945d3a038a9f6b716b57b2f7.png"

export default function () {
  return (
    <>
       <main>
         <div className='ContPresentacion'>
             <div className='presentaciontext'>
             <h2 className='text1'>¿Quienes somos?</h2>
              <p className='text2'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consectetur excepturi beatae aperiam sequi doloribus eius ullam quia quas harum ipsam laboriosam, rerum fuga     adipisci nulla, eum quam mollitia deserunt.
              </p>
              </div>
              <div className='presentacionimagen'>
                <div className='circulo'></div>
                <img src={imagen1} alt="torta" className='tortaspre' />
                <img src={imagen2} alt="tortit" className='tortitapre'/>
                <img src={imagen3} alt="licuado" className='licuado'/>
              </div>
          </div>
       </main>
       <section className='Historia'>
          <div className='contenedorhistoria'>
            <h3 className='h3historia1'>Nuestra</h3>
            <h3 className='h3historia2'>Historia</h3>
          </div>

          <div className="continfo">
            <p className="info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ad aliquid aspernatur esse libero voluptatem explicabo consequuntur ullam vero, odio commodi laborum ab repellendus adipisci assumenda cupiditate hic fugit optioLorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ad aliquid aspernatur esse libero voluptatem explicabo consequuntur ullam vero, odio commodi laborum ab repellendus adipisci assumenda cupiditate hic fugit optio
            </p>
            <p className="info 2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ad aliquid aspernatur esse libero voluptatem explicabo consequuntur ullam vero, odio commodi laborum ab repellendus adipisci assumenda cupiditate hic fugit optio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ad aliquid aspernatur esse libero voluptatem explicabo consequuntur ullam vero, odio commodi laborum ab repellendus adipisci assumenda cupiditate hic fugit optio
            </p>
            <p className="info 3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ad aliquid aspernatur esse libero voluptatem explicabo consequuntur ullam vero, odio commodi laborum ab repellendus adipisci assumenda cupiditate hic fugit optio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ad aliquid aspernatur esse libero voluptatem explicabo consequuntur ullam vero, odio commodi laborum ab repellendus adipisci assumenda cupiditate hic fugit optio
            </p>
          </div>
       </section>
    </>
  )
}
