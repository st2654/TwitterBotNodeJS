/***Twitter client to post a tweet using command line 
Usage : node twitter_post_status.js -post <type your post here>
**/
var Twitter = require('twitter');

//Check if the post is sent properly or not using commmand line
if(process.argv[2] != '-post'){ 
	console.log("Wrong Usage");
	console.log("Usage : node twitter_post_status.js -post <type your post here>" );
	process.exit(1);
} 
var post = "";
//Build the post
process.argv.forEach(function(val,index,array){
	if(index>=3) post = post.concat(val).concat(" ");
});

console.log(post);

var client = new Twitter({
consumer_key : '',
consumer_secret : '',
access_token_key : '',
access_token_secret : ''
});


client.post('statuses/update' ,{status: post},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});

console.log("Done");

