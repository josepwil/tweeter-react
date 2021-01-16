import React, { useState } from 'react'

export const TweetForm = (props) => {
  const { addNewTweet } = props
  const [tweetText, setTweetText] = useState("")
  const tweetRemainingLength = 140 - tweetText.length
  const spanStyle = {color: tweetRemainingLength >= 0 ? "black" : "red"}

  const submitTweet = (event) => {
    event.preventDefault();
    if(tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText("");
    }
  }

  return(
    <section className="newTweet">
      <section className="error-container"><i className="fas fa-exclamation-triangle"></i><h4></h4><i className="fas fa-exclamation-triangle"></i></section>

      <form onSubmit={submitTweet} method="post" action="/tweets" className="newtweet_form">
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} className="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span style={spanStyle} className="form__counter">{140 - tweetText.length}</span>
      </form>
    </section>
  )
}