
function testAddAndRemovePosts() {
    const tweeter = Tweeter();
  
    // Adding
    const firstPostId = tweeter.addPost("first post!!!");
    if (tweeter.getPosts().length !== 1) {
      console.log("Problem with adding post");
    }
  
    const secondPostId = tweeter.addPost("second post!!!");
    let posts = tweeter.getPosts();
    if (posts.length !== 2) {
      console.log("Problem with adding post");
    }
    if (posts[1].text !== "second post!!!") {
      console.log("Problem with adding post");
    }
    if (posts[0].id === posts[1].id) {
      console.log("Problem with posts Ids");
    }
  
    // Remove
  
    tweeter.removePost(firstPostId);
    if (tweeter.getPosts().length !== 1) {
      console.log("Problem with removeing post");
    }
    posts = tweeter.getPosts();
    if (posts[0].text !== "second post!!!") {
      console.log("Problem with removing post");
    }
  
    console.log("TEST testAddAndRemovePosts - PAST!");
  }
  
  function testAddAndRemoveComments() {
    const tweeter = Tweeter();
    // Add posts
    const firstPostId = tweeter.addPost("first post!!!");
    const secondPostId = tweeter.addPost("second post!!!");
  
    // Add comments
    const comment1 = tweeter.addComment(
      firstPostId,
      "first comment of first post"
    );
    const comment2 = tweeter.addComment(
      firstPostId,
      "second comment of first post"
    );
    const comment3 = tweeter.addComment(
      secondPostId,
      "first comment of second post"
    );
    const comment4 = tweeter.addComment(
      secondPostId,
      "second comment of second post"
    );
  
    let posts = tweeter.getPosts();
    if (posts[0].comments.length !== 2) {
      console.log("Problem with adding comments");
    }
    if (posts[1].comments[1].text !== "second comment of second post") {
      console.log("Problem with adding comments");
    }
    const mySet1 = new Set();
  
    mySet1.add(comment1);
    mySet1.add(comment2);
    mySet1.add(comment3);
    mySet1.add(comment4);
  
    if (mySet1.size !== 4){
      console.log("Problem with comments Ids");
    }
  
    tweeter.removeComment(firstPostId, comment2);
    tweeter.removeComment(secondPostId, comment3);
  
    posts = tweeter.getPosts();
    if (posts[0].comments.length !== 1) {
      console.log("Problem with removing comments");
    }
    if (posts[1].comments[0].text !== "second comment of second post") {
      console.log("Problem with removing comments");
    }
  
    console.log("TEST testAddAndRemoveComments - PAST!");
  }
  
  testAddAndRemovePosts();
  testAddAndRemoveComments();
  