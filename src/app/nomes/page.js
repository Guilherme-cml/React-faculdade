
'use client'

import Pagina from "@/app/components/Pagina"
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function Page() {



    
    const [nome, setNome] = useState('Gui')

    function Set() {
        const novoNome = nome == 'Gui' ? 'Guilherme Lima' : 'Gui'

        setNome(novoNome)

    }


    return (
        <Pagina tnav="Nomes" titulo="Nomes">
        <h1>{nome}</h1>
        <Button onClick={Set}> Mudar Nome</Button>
        </Pagina>
    )

}
