import React from 'react';
import { withRouter } from 'react-router';
import ArrowRight from 'react-icons/lib/fa/arrow-right';
import ArrowDown from 'react-icons/lib/fa/arrow-down';


class SidebarCollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show1: "arrow-hide arrow-float",
                  show2: "arrow-show arrow-float" };
  }

  handleColUl(id) {
    return (e) => {
      e.preventDefault();
      this.props.router.push(`/home/collections/${id}`);
    };
  }

  handleColLi(id) {
    return (e) => {
      e.preventDefault();
      this.props.router.push(`/home/feeds/${id}`);
    };
  }

  handleClick1() {
    return (e) => {
      e.preventDefault();
      if (this.state.show1 === "arrow-show arrow-float") {
        this.setState({show1: "arrow-hide arrow-float",
                       show2: "arrow-show arrow-float"});
      }
    };
  }
  handleClick2() {
    return (e) => {
      e.preventDefault();
      if (this.state.show2 === "arrow-show arrow-float") {
        this.setState({show1: "arrow-show arrow-float",
                       show2: "arrow-hide arrow-float"});
      }
    };
  }

  render() {
    return (
      <div className="sidebar-collection-item clearfix">
        <div className="clearfix sidebar-collection-item-header">
          <div className={this.state.show1+" arrowD"} onClick={this.handleClick1()}>
            <ArrowDown />
          </div>
          <div className={this.state.show2+" arrowR"} onClick={this.handleClick2()}>
            <ArrowRight />
          </div>
          <div className="sidebar-collection-item-name"
            onClick={this.handleColUl(this.props.collection.id)}>
            {this.props.collection.name}
          </div>
        </div>
        <ul className={this.state.show1}>
          {
            this.props.collection.feeds_ids.map( feedsId => (
              <li key={feedsId} className="sidebar-collection-item-li"
                onClick={this.handleColLi(feedsId)}>
                {this.props.feeds[feedsId].name}
              </li>
            )
            )
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(SidebarCollectionItem);
