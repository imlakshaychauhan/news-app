import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  capitalise = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `All the way News - ${this.capitalise(this.props.category)}`;
  }
  async handleItems() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a868dda091b54eef936f89e86a82985d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  componentDidMount() {  
  //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a868dda091b54eef936f89e86a82985d&pageSize=${this.props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults: parsedData.totalResults,
  //   loading: false,
  // });
    this.handleItems();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a868dda091b54eef936f89e86a82985d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.handleItems();
  };
  handleNextClick = async () => {
    //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/ this.props.pageSize)))
    //   {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a868dda091b54eef936f89e86a82985d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //       page: this.state.page + 1,
    //       articles: parsedData.articles,
    //       loading: false
    //     });
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.handleItems();
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">
            <strong>All the way News - Headlines</strong>
          </h2>
          {this.state.loading && <Spinner />}
          {!this.state.loading && (
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        !element.urlToImage
                          ? "https://images.cnbctv18.com/wp-content/uploads/2021/04/IPO6-1019x573.jpg"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={!element.author ? "Unknown" : element.author}
                      time={new Date(element.publishedAt).toGMTString()}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous{" "}
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;{" "}
          </button>
        </div>
      </>
    );
  }
}

export default News;
