import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl,author, date } = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageUrl ? "https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-danger'>By {!author?"Unknow":author} on  {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-primary bg-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
