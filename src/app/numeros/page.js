
'use client'

import Pagina from "@/app/components/Pagina"
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Page() {

    const [count, setCount] = useState(0)


    function teste(s){

        const num = count
        let sinal = s === '+' ? 1 : -1

        setCount(num + sinal)}
// Forma mais simples
    // function Add() {
    //     const num = count + 1

    //     setCount(num)
    // }

    // function Sub() {

    //     const num = count - 1

    //     setCount(num)}
    

    return (
       

    <Pagina tnav="Números" titulo="Numeros">

    <Button onClick={()=>teste('+')}> +1 </Button>
    <h1>{count}</h1>
    <Button onClick={()=>teste() }> -1 </Button>
    </Pagina>
    )

}
