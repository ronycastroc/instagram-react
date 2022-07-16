function PerfilSugestoes(props) {
    return (
        <div class="imgsugestoes">
            <img class="imgusersuges" src={props.img} alt=""/>
        
            <div class="usersuges">
                <div class="usersugesflex">
                    <p class="usersugesp">{props.user}</p> 
                </div>    
                <p class="seguevc">Segue você</p>
            </div>

        </div>
    )
}

const perfil = [
    {
        img: "./img/badvibesmemes.png",
        user: 'bad.vibes.meme'
    },

    {
        img: "./img/chibirdart.png",
        user: 'chibirdart'
    },

    {
        img: "./img/razoesparaacreditar.png",
        user: 'razoesparaacreditar'
    },

    {
        img: "./img/adorableanimals.png",
        user: 'adorable_animals'
    },

    {
        img: "./img/smallcutecats.png",
        user: 'smallcutecats'
    },
]

export default function Sugestoes() {
    return (
        
        <div>
            {perfil.map(value => (
            <PerfilSugestoes img={value.img} user={value.user}/>
        ))}
        </div>
        
    )
} 