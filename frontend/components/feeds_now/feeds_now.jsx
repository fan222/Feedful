import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import ArticleBlock from '../middlepage/article_block';
import ArticleDetail from '../middlepage/article_detail';

const customStyles = {
  overlay : {
    backgroundColor             : 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    boxShadow                   : "8px 10px 34px rgba(0, 0, 0, .5)",
    position                    : 'fixed',
    bottom                      : '0',
    minHeight                   : '10rem',
    right                       : '-100%',
    top                         : '0',
    left                        : '80%',
    transition                  : '.5s',
    zIndex                      : '2',
    padding                     : '0'
  }
};

class FeedsNow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modalOpen: false, article: {}};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  openModal(article) {
  this.setState({modalOpen: true, article: article});
  }

  onModalOpen() {

    customStyles.content.left = 'auto';
    customStyles.content.right = '0';
  }

  closeModal() {
    customStyles.content.left = '100%';
    customStyles.content.right = '-100%';
    this.setState({modalOpen: false});
  }

  render() {
    if (Object.keys(this.props.feeds).length === 1) {
      return  <div className="laoding">
                <h1 className="loading-desc">Thank you for waiting.</h1>
                <div className="sk-cube-grid">
                  <div className="sk-cube sk-cube1"></div>
                  <div className="sk-cube sk-cube2"></div>
                  <div className="sk-cube sk-cube3"></div>
                  <div className="sk-cube sk-cube4"></div>
                  <div className="sk-cube sk-cube5"></div>
                  <div className="sk-cube sk-cube6"></div>
                  <div className="sk-cube sk-cube7"></div>
                  <div className="sk-cube sk-cube8"></div>
                  <div className="sk-cube sk-cube9"></div>
                </div>
              </div>;
    } else {
      return (
        <div className="feedsnow">
          <div className="feedsnow-title">Now</div>
          <div className="feedsnow-subtitle">The most recent articles in your feedful</div>
            <div className="feedsnow-main">
              <ul className="feedsnow-ul">
                {Object.keys(this.props.feeds).map( feedId =>
                  <li className="feedsnow-li" key={feedId}>
                    <div className="feedsnow-feed-name">from {this.props.feeds[feedId].name}</div>
                    <ArticleBlock article={this.props.feeds[feedId].articles[1]}
                                  onClick={this.openModal.bind(this, this.props.feeds[feedId].articles[1])}/>
                  </li>
                  )
                }
              </ul>
              <Modal
                isOpen={this.state.modalOpen}
                onRequestClose={this.closeModal}
                onAfterOpen={this.onModalOpen}
                style={customStyles} >
                <ArticleDetail  article={this.state.article}
                                articles={this.props.articles}
                                createArticle={this.props.createArticle}
                                deleteArticle={this.props.deleteArticle}/>
              </Modal>
            </div>
        </div>
      );
    }
  }
}

export default withRouter(FeedsNow);
