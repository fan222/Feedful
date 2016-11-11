import React from 'react';
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

class Favorites extends React.Component {
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
    if (Object.keys(this.props.articles).length === 1) {
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
          <div className="favorites">
            <div className="favorites-title">Favorite Articles</div>
            <div className="favorites-main">
              <ul className="favorites-ul">
                {Object.keys(this.props.articles).map( articleId =>
                  <li className="favorites-li" key={articleId}>
                    <ArticleBlock article={this.props.articles[articleId]} onClick={this.openModal.bind(this, this.props.articles[articleId])}/>
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
        </div>
      );
    }
  }
}

export default Favorites;
