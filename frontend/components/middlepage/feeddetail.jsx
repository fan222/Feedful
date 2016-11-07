import React from 'react';
import { withRouter } from 'react-router';
import ArticleBlock from './article_block';
import Modal from 'react-modal';
import ArticleDetail from './article_detail';

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
    zIndex                      : '2'
  }
};

class FeedDetail extends React.Component {
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
    if (!(this.props.feed)) {
      return <h3>Loading</h3>;
    } else {
      return (
        <div className="feeddetail">
          <div className="feeddetail-title">{this.props.feed.name}</div>
          <div className="feeddetail-main">
            <ul className="feeddetail-ul">
              {Object.keys(this.props.feed.articles).map( articleId =>
                <li className="feeddetail-li" key={articleId}>
                  <ArticleBlock article={this.props.feed.articles[articleId]} onClick={this.openModal.bind(this, this.props.feed.articles[articleId])}/>
                </li>
                )
              }
            </ul>
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              onAfterOpen={this.onModalOpen}
              style={customStyles} >
              <ArticleDetail article={this.state.article}/>
            </Modal>
          </div>
        </div>
        );
    }
  }
}

export default withRouter(FeedDetail);
