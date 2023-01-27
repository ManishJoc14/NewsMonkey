import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: '82%', zIndex: '1', fontSize: '14px' }}>{source}</span>
          <img src={imageUrl} style={{ height: '220px' }} alt="" />
          <div className="card-body">
            <h5 className='card-title'>{title}...</h5>
            <p className='card-text'>{description}...</p>
            <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).getUTCDate()}/{(new Date(date).getMonth() + 1) < 10 ? '0' + (new Date(date).getMonth() + 1) : (new Date(date).getMonth() + 1)}/{new Date(date).getFullYear()} </small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className='btn btn-secondary'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
