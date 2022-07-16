import CaixaVertical from "./CaixaVertical"
import Sidebar1 from './Sidebar1'

export default function Conteudo() {
    return (
        <div class='conteudo'>
            <CaixaVertical />
            <Sidebar1 />

            <div class="sidebar2">
                <p class="vt">Ver tudo</p>
                <p class="seguir">Seguir</p>
                <p class="seguir">Seguir</p>
                <p class="seguir">Seguir</p>
                <p class="seguir">Seguir</p>
                <p class="seguir">Seguir</p>
            </div>
        </div>
    )
}