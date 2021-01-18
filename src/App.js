import React, { useState } from 'react'
import './App.css';
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'
import { Tweets } from './components/Tweets'

const initialTweetData = [
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
    text: "What is your favourite place to hike?",
    date: "15 days ago"
  }
]

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const addNewTweet = (text) => {
    const newTweet = {
      name:"Adam Smith", 
      handle:"@ASmith",
      profile_image: "https://i.imgur.com/9pNffkj.png",
      text,
      date: "5 days ago"
    }
    setTweetData([newTweet, ...tweetData]);
  }

  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className="container">
      <TweetForm addNewTweet={addNewTweet}/>
      <Tweets tweetData={tweetData} />
      </main>
    </div>
  );
}

export default App;
