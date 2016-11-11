import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import FeedBlock from './feed_block';
import SidebarAddfeed from '../sidebar/sidebar_addfeed';

const customStyles = {
  overlay : {
    backgroundColor             : 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    boxShadow                   : "8px 10px 34px rgba(0, 0, 0, .5)",
    position                    : 'fixed',
    bottom                      : '0',
    minHeight                   : '10rem',
    left                        : '-100%',
    top                         : '0',
    right                        : '80%',
    zIndex                      : '2',
    padding                     : '0'
  }
};

class CategoriesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false, feed: {}};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  openModal(feed) {
  this.setState({modalOpen: true, feed: feed});
  }

  onModalOpen() {

    customStyles.content.right = 'auto';
    customStyles.content.left = '0';
  }

  closeModal() {
    customStyles.content.right = '100%';
    customStyles.content.left = '-100%';
    this.setState({modalOpen: false});
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
                <li key={id}  className="feedblock-li">
                  <FeedBlock  feed={ this.props.feeds[id]} collections={this.props.collections} onClick={this.openModal.bind(this, this.props.feeds[id])}/>
                </li>
                )
              }
            </ul>
          </div>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            onAfterOpen={this.onModalOpen}
            style={customStyles} >
            <SidebarAddfeed feed={this.state.feed} collections={this.props.collections}
                            createCollection={this.props.createCollection}
                            updateCollection={this.props.updateCollection}/>
          </Modal>
        </div>
        );
    }
  }
}

export default withRouter(CategoriesItem);
