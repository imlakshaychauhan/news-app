import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time, source} = this.props;
    return (
      <div>
        <div className="card my-2">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1", placeholder:"hi"}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read full article
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {time}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
