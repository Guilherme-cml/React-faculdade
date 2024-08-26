'use client'

import Pagina from "../components/Pagina"

export default function Array() {
   const carros = ['corsa', 'celta', 'ferrari', 'porsche']
   const pessoas = ['Pedro', 'Maria', 'Joaquim', 'João', 'Jonas']
return( <>


<Pagina titulo="pagina de Array">

    {pessoas.map(item =>(
          <p>{item}</p>
      ))}
    
    {carros.map(item =>(
          <p>{item}</p>
      ))}
    <ul>
    {carros.map(item =>(
        <li>{item}</li>
    ))
    }</ul>

</Pagina>

</>
)
  
}