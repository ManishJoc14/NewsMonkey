import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
      loading: true,
      page: 1,
      totalResults: 0,
      hasMore : true
    }
    document.title = `NewsMonkey-${this.capitaliseFirst(this.props.category)}`
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&category=${this.props.category}&apiKey=4e8ed26d53d94f6983b06e2677daefa5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      hasMore : parsedData.articles.length==0?false:true 
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&category=${this.props.category}&apiKey=4e8ed26d53d94f6983b06e2677daefa5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      hasMore : parsedData.articles.length==0?false:true 
    });
  }
  render() {
    return (
      <>
        <h2 className='text-center my-3'id='heading'style={{color:this.props.mode==='light'?'black':'white'}}>NewsMonkey - Top {this.capitaliseFirst(this.props.category)} headlines</h2>
        {this.state.loading && <Loading color={this.props.mode}/>}
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Loading color={this.props.mode}/>}>
          <div className="container">
            <div className="row"  >
              {this.state.articles.map((e) => {
                return <div className="col-md-4 col-sm-10 my-2" key={e.url}>
                  <NewsItem color={this.props.mode} title={e.title ? e.title.slice(0, 49) : ""} description={e.description ? e.description.slice(0, 80) : ""} imageUrl={e.urlToImage ? e.urlToImage : "https://static.ffx.io/images/$zoom_1.5267%2C$multiply_1%2C$ratio_1.777778%2C$width_1059%2C$x_473%2C$y_62/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_analysis_no_age_social_wm/74c30a9e45acf419c463a55d9063a6845cefa770"} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
