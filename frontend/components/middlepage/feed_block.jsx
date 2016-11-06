import React from 'react';


const FeedBlock = ({ feed }) => (
  <div className="feedblock">
    <h5 className="feedblock-title">{feed.name}</h5>
    <p className="feedblock-des" >{feed.description}</p>
    <img className="feedblock-img" src={feed.articles[1].image} alt={feed.articles[1].title}></img>
  </div>
);

export default FeedBlock;
