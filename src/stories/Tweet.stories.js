import React from 'react';
import { Tweet } from '../components/Tweet';

export default { title: "Singular Tweet" };

export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {

  const singleTweet = {
    name:"Adam Smith", 
    handle:"@ASmith",
    profile_image: "https://i.imgur.com/9pNffkj.png",
    text: "What is your favourite thing about tweeter?",
    date: "10 days ago"
  }

  // return <Tweet name={singleTweet.name} handle = {singleTweet.handle} profile_image={singleTweet.profile_image}
  // text={singleTweet.text} date={singleTweet.date} />

  // using spread operator achieves same thing as above
  return <Tweet {...singleTweet} />

}