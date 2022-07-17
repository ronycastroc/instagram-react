import Stories from "./Stories"
import React from "react"

function Post(props) {
    
    const [cor, setCor] = React.useState('iconheart')
    const [name, setName] = React.useState('heart-outline')

    function like() {        
        setCor('red md hydrated')
        setName('heart')
        
        if(name === 'heart') {
            setCor('iconheart md hydrated')
            setName('heart-outline')
        }
    }




    return (
        <div class='post'>
            <div class="perfilpost">
                <img class="imgperfilpost" src={props.imgperfil} alt=""/>
                <p>{props.nameperfil}</p>
                <ion-icon class="ellipsis" name="ellipsis-horizontal"></ion-icon>
            </div>
            
            <img class="imgpost" src={props.img} alt="" onClick={like}/>

            <div class="iconspost">
                <ion-icon class={cor} name={name} onClick={like}></ion-icon>
                <ion-icon class="iconchat" name="chatbubble-outline" ></ion-icon>
                <ion-icon class="iconplane" name="paper-plane-outline"></ion-icon>
                <ion-icon class="iconmark" name="bookmark-outline"></ion-icon>
            </div>

            <div class="curtidas"> 
                <img class="imgcurtida" src={props.imgcurtida} alt=""/>
                <p>Curtido por</p><p class="bold">{props.txtcurtida}</p><p>e</p><p class="bold">{props.qtdcurtida}</p>
            </div>
        </div>
    )
}

const post = [
    {
        imgperfil: "./img/barked.png",
        nameperfil: 'barked',
        img: "./img/dog.png",
        imgcurtida: "./img/adorableanimals.png",
        txtcurtida: 'adorable_animals',
        qtdcurtida: 'outras 99.159 pessoas'
        
    },

    {
        imgperfil: "./img/meowed 1.png",
        nameperfil: 'meowed',
        img: "./img/gato-telefone1.png",
        imgcurtida: "./img/respondeai.png",
        txtcurtida: 'respondeai',
        qtdcurtida: 'outras 101.523 pessoas'
        
    },

    {
        imgperfil: "./img/barked.png",
        nameperfil: 'barked',
        img: "./img/gatoband.jpg",
        imgcurtida: "./img/chibirdart.png",
        txtcurtida: 'chibirdart',
        qtdcurtida: 'outras 458.058 pessoa'
        
    }
]

export default function CaixaVertical() {
    
    return (
        <div class='caixavertical'>
            
            <Stories />
            
            {post.map(value => (
                <Post imgperfil={value.imgperfil} nameperfil={value.nameperfil} img={value.img} imgcurtida={value.imgcurtida}
                txtcurtida={value.txtcurtida} qtdcurtida={value.qtdcurtida}/>
            ))}

        </div>
    )
}

