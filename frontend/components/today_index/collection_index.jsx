import React from 'react';
import { withRouter } from 'react-router';
import ArticleBlock from '../middlepage/article_block';
import Modal from 'react-modal';
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

class CollectionIndex extends React.Component {
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

  sortArticles(collection, feeds) {
    let articles = [];
    let date = new Date();
    let dateTod = date.toISOString().slice(0,10);
    date.setDate(date.getDate() - 1);
    let dateYes = date.toISOString().slice(0,10);
    date.setDate(date.getDate() - 1);
    let dateBefYes = date.toISOString().slice(0,10);
    [dateTod, dateYes, dateBefYes].forEach(d => {
      collection.feeds_ids.forEach(feedId => {
        let innerArticles = feeds[feedId].articles;
        Object.keys(innerArticles).forEach(aId => {
          if (innerArticles[aId].published.slice(0,10) === d){
            articles.push(innerArticles[aId]);
          }
          }
        );
      });
    });
    return articles;
  }

  render() {
    if (Object.keys(this.props.feeds).length === 1) {
      return <h3>Loading</h3>;
    } else {
      let articles = this.sortArticles(this.props.collection, this.props.feeds);
      return (
        <div className="collection-index">
          <div className="collection-index-title">{this.props.collection.name}</div>
          <div className="collection-index-count">{articles.length} unread articles</div>
          <div className="collection-index-main">
            <ul className="collection-index-ul">
              {
                articles.map((article, idx) => (
                  <li className="collection-index-li" key={idx}>
                    <ArticleBlock article={article} onClick={this.openModal.bind(this, article)}/>
                  </li>
                ))
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

export default withRouter(CollectionIndex);
