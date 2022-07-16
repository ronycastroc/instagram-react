function Story(props) {
    return (
        <div class="story">
            <img class="imgborder" src={props.src} alt=""/>
            <img class="imgstory" src={props.img} alt=""/>
            <p>{props.text}</p>
        </div>
    )
}

const stories = [
    {
        src: "./img/stories_background.jpg",
        img: "./img/9gag.jpg",
        text: '9gag'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/meowed 1.png",
        text: 'meowed'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/barked.png",
        text: 'barked'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/nathanwpylestrangeplanet.png",
        text: 'nathanwpyle...'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/wawawiwacomicsa.png",
        text: 'wawawiwac...'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/respondeai.png",
        text: 'respondeai'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/filomoderna.png",
        text: 'filomoderna'
    },

    {
        src: "./img/stories_background.jpg",
        img: "./img/memeriagourmet.png",
        text: 'memeriago.'
    }
]

export default function Stories() {
    
    
    return (
        <div class='stories'>
            {stories.map(value => (
                <Story src={value.src} img={value.img} text={value.text}/>
            ))}
            <ion-icon class="seta" name="chevron-forward-circle"></ion-icon>
        </div>
    )
}