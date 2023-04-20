import React, { useState, useEffect } from 'react';
import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';
import facebookIcon from '../fb.svg';


const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (

     <section id='quotes'>
     <div style={{paddingTop:'10vh'}}>
     <div id="quote-box">
        <h1><u>Random Quotes Generator</u></h1>
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="https://twitter.com/deeplifequotes" id="twet-quote">
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a href="https://instagram.com/poetsandquotes_?igshid=ODM2MWFjZDg=" id="tumlr-quote">
            <span><img src={tumblrIcon} alt="" /></span>
          </a>
          <a href="https://www.facebook.com/only.englishquotes?mibextid=ZbWKwL" id="facebook-quote">
            <span><img src={facebookIcon} alt=""/></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
    </div>
     </section>
  
  )
}

export default Quotes;