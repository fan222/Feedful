import React from 'react';
import Clear from 'react-icons/lib/md/clear';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(id) {
    return e => {
      e.preventDefault();
      this.props.deleteArticle(id);
    };
  }

  render() {
    if (Object.keys(this.props.feeds).length === 1) {
      return <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>;
    } else {
    return (
        <div className="favorites">
          <div className="favorites-title">Favorite Articles</div>
          <div className="favorites-main">
            <ul className="favorites-ul clearfix">
              {Object.keys(this.props.articles).map( articleId =>
                <li className="favorites-li" key={articleId}>
                  <div className="clearfix">
                    <div className="favorites-li-delete" onClick={this.handleClick(articleId)}>Unlike<Clear /></div>
                    <div className="favorites-li-title">{this.props.articles[articleId].title}</div>
                  </div>
                  <div className="clearfix">
                    <div className="favorites-li-author">{this.props.articles[articleId].author}</div>
                    <div className="favorites-li-published">{this.props.articles[articleId].published.slice(0,10)}</div>
                  </div>
                  <img className="favorites-li-image" src={this.props.articles[articleId].image}></img>
                  <a className="favorites-li-url" target="_blank" href={this.props.articles[articleId].url}>Visit Website</a>
                </li>
                )
              }
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Favorites;
