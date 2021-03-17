import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Films from './Component/Films'
import Navbar from './Component/Navbar'
import Search from './Component/Search'
import FilmDetails from './Component/FilmDetails'
import Pagination from './Component/Pagination'



export class App extends Component {
    constructor() {
        super()
        this.state = {
            films: [],
            keyword: "",
            loading: false,
            film: null,
            totalResults:0,
            currentPage:1


        }
    }
    componentDidMount() {

        fetch(`
            https://api.themoviedb.org/3/search/movie?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&query=a&page=5&include_adult=false`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ films: data.results })
            })

    }



    SearchSubmit = (e) => {
        this.setState({ loading: true })
        e.preventDefault()
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&query=${this.state.keyword}&page=1&include_adult=false`)
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                    this.setState({ films: data.results, loading: false,totalResults:data.total_results })
                })
        }, 2000);

    }


    SearchChange = (e) => {
        this.setState({ keyword: e.target.value })
    }

    nextpage=(pagenumb)=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb8628b4f17cb2868849e117a446d83a&language=en-US&query=${this.state.keyword}&page=${pagenumb}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ films: data.results, currentPage:pagenumb })
        })
    }



    filmInfo = (id) => {

        const filterfilm = this.state.films.filter(film => film.id == id)
        const newcur = filterfilm.length>0?filterfilm[0]:null

        this.setState({ film: newcur })
    }
    backInfo = () => {
        this.setState({ film: null })
    }




    render() {
        const numberPages= Math.floor(this.state.totalResults/20)

        return (
            <div>
                <BrowserRouter>
                <Navbar title="Home" icon="fas fa-film fa-2x" />

                 
                {this.state.film == null ?
                        <div>
                            <Search SearchSubmit={this.SearchSubmit} SearchChange={this.SearchChange} />
                            {this.state.totalResults>20? <Pagination pages={numberPages} nextpage={this.nextpage} currentPage={this.state.currentPage} />:"" }
                            <Films filmInfo={this.filmInfo} loading={this.state.loading}
                             films={this.state.films} />
                        </div>:<FilmDetails film={this.state.film}  backInfo={this.backInfo} />
     
                    }
                
                
                </BrowserRouter>
                
                    

            </div>
                
               
                    
                   
        )
    }
}

export default App
