import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import languages from "../languages";

function QuoteBox(props) {
  const { newQuoteBtn } = languages[props.language];

  return (
    <div className="quote-card" id="quote-card">
      <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <span id="text">{props.quote}</span>
      </div>
      <div className="quote-author">
        <span id="author">- {props.author}</span>
      </div>
      <div className="button-container">
        <button
          className="button"
          id="new-quote"
          onClick={props.getNewQuote}
        >
            {newQuoteBtn}
        </button>
        <a
          className="button"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${props.quote} - ${props.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
          <a
            className="button"
            id="tumblr-quote"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${props.author}&content=${props.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faTumblr} />

            </a>
          <a
            className="button"
            id="facebook-quote"
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2F&quote=${props.quote} - ${props.author}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faFacebook} />
            </a>

      </div>
    </div>
  );
}

export default QuoteBox;