import React, { Component } from 'react'
import '../css/newsItem.css'
export default class NewsItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card"style={{
          backgroundColor: this.props.color==='light'?'white':'black',
          color:this.props.color==='light'?'black':'white',
          boxShadow: this.props.color!=='light'?'0 6px 10px rgb(238 234 234 / 8%), 0 0 6px rgb(255 244 244 / 5%)':'0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)'
          }}>

          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
           <span className='badge rounded-pill bg-danger' style={{ left: '82%', zIndex: '1', fontSize: '14px' }}>{source}</span>
          </div>
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
