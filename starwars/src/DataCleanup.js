function CleanUp(data){
    data = data.map(v => {
       v.skin_color = null
       v.birth_year = null
       v.films = null
       v.species = null
       v.vehicles = null
       v.starships = null
       v.created = null
       v.edited = null
       v.url = null
       return v 
    })
    return data
}

export default CleanUp