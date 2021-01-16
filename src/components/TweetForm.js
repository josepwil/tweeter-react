import React from 'react'

export const TweetForm = () => {
  return(
    <section class="newTweet">
      <section class="error-container"><i class="fas fa-exclamation-triangle"></i><h4></h4><i class="fas fa-exclamation-triangle"></i></section>

      <form method="post" action="/tweets" class="newtweet_form">
        <textarea class="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
        <input type="submit" value="Tweet" class="form__input" />
        <span class="form__counter">140</span>
      </form>
    </section>
  )
}