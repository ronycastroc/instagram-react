import Sugestoes from './Sugestoes'

function PerfilSide(props) {
    return (
        <div class="perfilside">
                <img class="imguser" src={props.img} alt=""/>

                <div class="user">    
                    <p class="user1">{props.user1}</p>
                    <p class="user2">{props.user2}</p>
                </div>    
            </div>
    )
}

const perfil = [
    {
        img: "./img/catanacomics.png",
        user1: 'catanacomics',
        user2: 'Catana',
    }
]



export default function Sidebar1() {
    return (
        <div class='sidebar1'>
            
            {perfil.map(value => (
                <PerfilSide img={value.img} user1={value.user1} user2={value.user2} />
            ))}            

            <div class="sugestoes">
                <p class="spv">Sugestões para você</p> 
            </div>

            <Sugestoes />

            <div class="sideinfo">
                <div class="infos">
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags • 
                        Idioma</p>
                    
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div> 
                   
        </div>
    )
}