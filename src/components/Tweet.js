import React from 'react'

export const Tweet = () => {
  return(
    <article class="tweet"><header class="tweet--header">
      <img class="tweet--avatar" src="https://i.imgur.com/9pNffkj.png" />
      <h2 class="tweet--name">Adam Smith</h2>
      <small class="tweet--handle">@ASmith</small>
    </header>
      <div class="tweet--body">
        <p>What is your favourite thing about tweeter?</p>
      </div>
    <footer class="tweet--footer"> 
      <small class="footer--age">10 days ago</small>
      <span class="footer--actions">
        <a href="#"><i class="fa fa-flag"></i></a>
        <a href="#"><i class="fa fa-retweet"></i></a>
        <a href="#"><i class="fa fa-heart"></i></a>
      </span>
    </footer>
    </article>
  )
}