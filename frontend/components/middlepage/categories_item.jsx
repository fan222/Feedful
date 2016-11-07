import React from 'react';
import { withRouter } from 'react-router';

import FeedBlock from './feed_block';

class CategoriesItem extends React.Component {
  constructor(props) {
    super(props);
  }


  otherCat(categories, categoriesId) {
    let otherCatNames = [];
    Object.keys(categories).forEach(id => {
      if (id !== categoriesId) {
        otherCatNames.push({name: categories[id].name, id: id});
      }
    });
    return otherCatNames;
  }

  handleclick(ele){
    return (e) => {
      this.props.router.push(`/home/categories/${ele.id}`);
    };
  }

  handleLi(id) {
    return (e) => {
      this.props.router.push(`/home/feeds/${id}`);
    };
  }


  render() {
    if (Object.keys(this.props.feeds) === [0]) {
      return <h3>Loading</h3>;
    } else {
      let otherNames = this.otherCat(this.props.categories,
                                      this.props.categoriesId);
      return (
        <div className="categories-item">
          <h3 className="current-cat">#Best {this.props.categories[this.props.categoriesId].name} feeds</h3>
          <ul className="othercat-ul clearfix">
            {otherNames.map( (ele) => <li  onClick={this.handleclick(ele)} key={ele.name} className="othercat">#{ele.name}</li>)}
          </ul>
          <div className="feedblock-container">
            <ul className="feedblock-ul clearfix">
              {this.props.categories[this.props.categoriesId].feeds_ids.map( id =>
                <li key={id} onClick={this.handleLi(id)} className="feedblock-li">
                  <FeedBlock feed={ this.props.feeds[id]} />
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

export default withRouter(CategoriesItem);
