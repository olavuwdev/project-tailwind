import { ReactNode } from 'react';
import Cabecalho from './Cabecalho';
import Menu from './Menu';
import Rodape from './Rodape';

interface PaginaProps{
    children?:ReactNode
}

export default function Pagina(props:PaginaProps){
    return(
        <div className="flex flex-col">
            <Cabecalho/>
            <div className="flex">
                <Menu/>
                <main className="flex-1 bg-red-500 ">{props.children}</main>
            </div>
            <Rodape/>
        </div>
    )
}