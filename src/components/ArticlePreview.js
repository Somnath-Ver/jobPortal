import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import {ARTICLE_FAVORITED, ARTICLE_UNFAVORITED, REGISTER} from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapStateToProps = state => ({
    ...state.home,
    token: state.common.token
});
const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;
  const favoriteButtonClass = article.applied ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
      const payload = agent.Apply.apply(props.token, article.jobcode);
      //dispatch({ type: REGISTER, payload })
  };

  return (
    <div className="article-preview">
      <div className="article-meta">


        <div className="info">

            {article.jobtitle}
            <span className="date">
            {article.skill}
          </span>
            <span className="date">
            {article.desc}
          </span>
            <span className="date">
            {article.location}
          </span>
            <span className="date">
            {article.expe}
          </span>

          <span className="date">
            {new Date(article.createdat).toDateString()}
          </span>

        </div>

        <div className="pull-xs-right">
          {/*<button className={favoriteButtonClass} onClick={handleClick}>
            {article.skill}
          </button>*/}

                <button className={favoriteButtonClass} onClick={handleClick}>
                    {"Apply Now"}
                </button>



        </div>
      </div>

      {/*<Link to={`/article/${article.location}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>

      </Link>*/}
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePreview);
//export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
