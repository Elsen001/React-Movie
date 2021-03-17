import React from 'react'

const FilmDetails = (props) => {

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={`http://image.tmdb.org/t/p/w185${props.film.poster_path}`} className="img" alt="" />
                    <div class="card-body">
                        <h4 class="card-title">{props.film.title}</h4>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3>{props.film.overview}</h3><br /><br />
                    <h4>Popularity:{props.film.popularity} <span class="badge badge-secondary"></span></h4>
                    <h4>IMDB:{props.film.vote_average} <span class="badge badge-secondary">v</span></h4>
                    <h4>Date:{props.film.release_date} <span class="badge badge-secondary">v</span></h4>
                </div>
            </div>

            <div className="row arrow">
                <i onClick={props.backInfo} className="fas fa-arrow-left fa-2x">Back</i>
            </div>
        </div>
    )
}

export default FilmDetails
