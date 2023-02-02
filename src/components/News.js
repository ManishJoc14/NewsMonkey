import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const capitaliseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&category=${props.category}&apiKey=4e8ed26d53d94f6983b06e2677daefa5&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setHasMore(parsedData.articles.length==0?false:true);
    props.setProgress(50);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    document.title = `NewsMonkey-${capitaliseFirst(props.category)}`
  }, [])
  
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&category=${props.category}&apiKey=4e8ed26d53d94f6983b06e2677daefa5&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page + 1 );
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setHasMore(parsedData.articles.length==0?false:true);
  }
    return (
      <>
        <h2 className='text-center my-lg-5 my-4 pt-5'id='heading'style={{color:props.mode==='light'?'black':'white'}}>NewsMonkey - Top {capitaliseFirst(props.category)} headlines</h2>
        {loading && <Loading color={props.mode}/>}
        <InfiniteScroll
          dataLength={articles.length} 
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading color={props.mode}/>}>
          <div className="container">
            <div className="row">
              {articles.map((e) => {
                return <div className="col-md-4 col-sm-10 my-2" key={e.url}>
                  <NewsItem color={props.mode} title={e.title ? e.title.slice(0, 49) : ""} description={e.description ? e.description.slice(0, 80) : ""} imageUrl={e.urlToImage ? e.urlToImage : "https://static.ffx.io/images/$zoom_1.5267%2C$multiply_1%2C$ratio_1.777778%2C$width_1059%2C$x_473%2C$y_62/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_analysis_no_age_social_wm/74c30a9e45acf419c463a55d9063a6845cefa770"} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}
News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News;