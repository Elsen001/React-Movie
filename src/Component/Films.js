import React from 'react'
import Film from './Film'
import Loading from './Loading'

const Films = (props) => {
    if(props.loading) {
        return <Loading />
    }   
    return (
        
        <div className="container">
            <div className="row">
            {
              props.films.map(film=>(
                 <Film key={film.id} filmInfo={props.filmInfo} filmId={film.id}  img={film.poster_path} film={film}/> 
              ))
            }
            </div>
           
        </div>
    )
}

export default Films
