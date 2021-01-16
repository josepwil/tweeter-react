import React from 'react'

export const TweetForm = () => {
  return(
    <section className="newTweet">
      <section className="error-container"><i className="fas fa-exclamation-triangle"></i><h4></h4><i className="fas fa-exclamation-triangle"></i></section>

      <form method="post" action="/tweets" className="newtweet_form">
        <textarea className="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  )
}