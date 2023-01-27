import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
//rcc
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitaliseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NewsMonkey-${this.capitaliseFirst(this.props.category)}`
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&category=${this.props.category}&apiKey=a6f71be84847495d8329488c0a3eff8f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center my-3'>NewsMonkey - Top {this.capitaliseFirst(this.props.category)} headlines</h2>
        {this.state.loading && <Loading />}
        <div className="row"  >
          {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-md-4 col-sm-10 my-2" key={e.url}>
              <NewsItem title={e.title ? e.title.slice(0, 49) : ""} description={e.description ? e.description.slice(0, 80) : ""} imageUrl={e.urlToImage ? e.urlToImage : "https://static.ffx.io/images/$zoom_1.5267%2C$multiply_1%2C$ratio_1.777778%2C$width_1059%2C$x_473%2C$y_62/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_analysis_no_age_social_wm/74c30a9e45acf419c463a55d9063a6845cefa770"} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
            </div>
          })}
        </div>
        {!this.state.loading && <div className="container d-flex justify-content-end">
          <button disabled={this.state.page <= 1} className="btn btn-lg btn-success mx-2" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button className="btn btn-lg btn-success mx-2">{this.state.page}</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-lg btn-success mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        }
      </div>
    )
  }
}
