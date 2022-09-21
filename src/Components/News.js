import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  
  static deaultProps = {
    country: "in",
    category: "general"
  }
  static Props = {
    country:PropTypes.string,
    category:PropTypes.string,
  }

 capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  articles = []
  constructor() {
    super()
    
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98e77bb36cb44856b0c4648d52ec98dd&pageSize=10`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
   
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })


    
        document.title =` Daily News - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  handlePrevClick = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98e77bb36cb44856b0c4648d52ec98dd&page=${this.state.page - 1}&pageSize=10`;
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })

  }
  handleNextClick = async () => {
  
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98e77bb36cb44856b0c4648d52ec98dd&page=${this.state.page + 1}&pageSize=10`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false

      })

    }
  }
  render() {
    return (
      <div className='container my-4 ' >
        <h1 className='container' style=  {{ margin: '35px 0 px' , marginTop : '90 px'}} ><b>Today's Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</b></h1>
        {this.state.loading && <Spinner />} 
        <div className='row' >
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 my-3' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 110) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author ={element.author} date={element.publishedAt} /> </div>

          })}
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
