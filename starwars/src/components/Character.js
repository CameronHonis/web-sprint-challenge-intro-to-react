import React,{useEffect} from 'react'
import style from 'styled-components'
import gsap from 'gsap'

const CharDiv = style.div`
    width: 16vw;
    height: 35vh;
    margin-bottom: 3%;
    margin-right: 2%;
    padding: 3% 0;
    background: rgba(255,255,255,.7);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0 0 15px -5px;

    div{
        width: 80%;
        height: 2px;
        background: rgba(0,0,0,1);
    }
    p{
        font-family: Arial;
    }
`

const Character = (props) => {
    let charDiv;
    useEffect(() => {
        gsap.from(charDiv,{y: -50, delay: props.key*50})
    },[])
    return(
        <CharDiv ref={div => charDiv = div}>
            {/*<h2>{() => props.data.name.length > 12 ? props.data.name.strsub(0,12)+'...' : props.data.name}</h2>*/}
            <h2>{props.data.name}</h2>
            <div></div>
            <p>height: {props.data.height}</p>
            <p>mass: {props.data.mass}</p>
            <p>hair color: {props.data.hair_color}</p>
            <p>eye color: {props.data.eye_color}</p>
            <p>gender: {props.data.gender}</p>
            <p>planet: {props.data.planet || 'n/a'}</p>
        </CharDiv>
    )
}

export default Character

//padding not working on char divs
//best way to create a horiz line
//name arrow function not working
//formatChar function on App.js not working
//charsKey not working