'use client'

import Pagina from "../components/Pagina"

export default function Objetos() {

   const carros = [
    {marca:'Gm', modelo:'corsa', cor:'azul'},
    {marca:'Ford', modelo:'fusion', cor:'branco'},
    {modelo:'Renault', modelo:'clio', cor:'vermelho'},
    {modelo:'Fiat', modelo:'uno', cor:'cinza'},
    {modelo:'Chevrolet', modelo:'onix', cor:'preto'},
   ]
return( <>


<Pagina titulo="Objetos">

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