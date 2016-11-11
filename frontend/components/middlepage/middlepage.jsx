import React from 'react';
import {withRouter} from 'react-router';
import Github from 'react-icons/lib/go/mark-github';


class MiddlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    if (!this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  componentWillUpdate(){
    if (this.props.loggedIn){
      this.props.fetchAllCollections();
      this.props.fetchAllArticles();
    }
  }


  render() {
    return (
      <div className="middlepage">
        <div className="clearfix">
          <a target="_blank" href="https://github.com/fan222/feedful" className="github">
            <Github />
          </a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(MiddlePage);
