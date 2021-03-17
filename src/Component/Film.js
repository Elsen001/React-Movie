const Film = (props) => {
    const {title,release_date,vote_average}=props.film
    return (
        <div className="col-6 col-md-4 col-sm-6 col-lg-3">
        <div className="card mt-4">
            <img src={`http://image.tmdb.org/t/p/w185${props.img}`} alt="" className="img-fluid"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5>Date:{release_date} <span class="badge badge-secondary"></span></h5>
                <h5>IMDB:{vote_average} <span class="badge badge-secondary"></span></h5>
            </div>
            <div className="link"><a href="#" onClick={()=>props.filmInfo(props.filmId)} >Film Info</a></div>

        </div>
    </div>
    )
}

export default Film
