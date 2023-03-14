import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'contain',
    height: '80vh'
}

const spanStyle = {
    padding: '20px',
    background: '#efefef81',
    color: '#000000',
    textAlign: 'center'
}

const Slider = React.memo((props) => {
    return (
        <div>
            <Slide duration={3000}>
                {props.slideImgs.map((slideImage, index)=> (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${slideImage.img})` }}>
                            <h1 style={spanStyle}>{slideImage.text}</h1>
                        </div>
                    </div>
                ))} 
            </Slide>
        </div>
    )
})

export default Slider


