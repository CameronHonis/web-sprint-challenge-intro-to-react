import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character.js'
import style from 'styled-components'
import CleanUp from './DataCleanup.js'
import './App.css';

const FlexDiv = style.div`
    width: 100%;
    max-width: 100%;
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
`

const App = () => {
    const [chars,setChar] = useState([])
    const [planets,setPlanets] = useState([])
    const formatChars = () => {
        console.log('a')
        if (!chars || chars.length === 0){return}
        console.log(chars)
        let a = chars.map(v => {
            if (planets){
                v.planet = planets[Number(v.homeworld.substr(v.homeworld.length-2,1))-1].name
            }
            console.log(v)
            return v
        })
        console.log(a)
        setChar(chars.map(v => {
            if (planets){
                v.planet = planets[Number(v.homeworld.substr(v.homeworld.length-2,1))-1].name
            }
            console.log(v)
            return v
        }))
    }
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
            .then(apiChars => {
                setChar(CleanUp(apiChars.data.results))
                formatChars() //in case chars is the last api to load in
            })
            .catch(() => {
                debugger
            })
        axios.get(`https://swapi.dev/api/planets/`)
            .then(apiPlanets => {
                setPlanets(apiPlanets.data.results)
            })
            .catch(() => {
                debugger
            })
    },[])
    useEffect(() => {
        setTimeout(() => formatChars(),1000)
    },[planets])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    let charsKey = 0
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <FlexDiv className='Body'>
        {chars.map(v => <Character data={v} key={charsKey++}></Character>)}
      </FlexDiv>
    </div>
    
  );
}

export default App;
