#Twitter-Bot in NodeJs
This is twitter NodeJS client to 
* Post a tweet
* Retweet a tweet
* Favorite a tweet
* Fetch recent tweets on home timeline or user timeline

To use this code first install 'twitter' an npm package
```javascript
npm install twitter
```

After this you need to create an app in twitter, to create an app click on http://apps.twitter.com 
You need to add App Name, description, website and check the agreement box, click to create app. 
Now click on Keys & Token tab and scroll down and click on request token. 
Get Consumer Key, Consumer Secret key, Access Token and Access Secret Key.

You need this 4 keys to run this program. Fill it in this values

#Usage :
---

```javascript
var client = new Twitter({
consumer_key : '',
consumer_secret : '',
access_token_key : '',
access_token_secret : ''
});
```
 
### Post A Tweet
```javascript 
node twitter_post_status.js -post type_your_post_here 
```

### Fetch recent tweets
```javascript
node twitter_recent_tweets.js 
```
