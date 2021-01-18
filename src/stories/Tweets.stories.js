import React from 'react';
import { Tweets } from '../components/Tweets';

export default { title: "Tweet Container" };

export const emptyTweet = () => <Tweets />

export const populatedTweet = () => {

  const tweets = [
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

  return <Tweets tweetData={tweets} />

}