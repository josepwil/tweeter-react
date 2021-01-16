import './App.css';
import { Navigation } from './Navigation'


const Profile = () => {
  return(
    <aside>
      <div class="profile">
        <img class="profile__image" src="/images/profile-hex.png" />
      </div>
      <br />
      <div class="profile__name">
        <h2><span class="profile--bold">Amy</span> Mansell</h2>
      </div>
    </aside>
  )
}
 
const TweetForm = () => {
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

const Tweet = () => {
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

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetForm />
      <Tweet />
    </div>
  );
}

export default App;
