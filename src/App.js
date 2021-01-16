import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'

const tweetsData = [
  {
    name:"Adam Smith", 
    handle:"@ASmith",
    profile_image: "https://i.imgur.com/9pNffkj.png",
    text: "What is your favourite thing about tweeter?",
    date: "10 days ago"
  },
  {
    name:"Jane Doe", 
    handle:"@JDoe",
    profile_image: "https://i.imgur.com/9pNffkj.png",
    text: "What is your favourite place to hike",
    date: "15 days ago"
  }
]

function App() {
  const tweets = tweetsData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle={tweetData.handle} profile_image={tweetData.profile_image} text={tweetData.text} date={tweetData.date}/>
  })

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
      <TweetForm />
      <section className="tweets">
        {tweets}
      </section>
      </main>
    </div>
  );
}

export default App;
