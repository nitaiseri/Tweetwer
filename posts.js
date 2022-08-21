const Tweeter = function () {
  // Private variables
  let _postIdCounter = 0;
  let _commentIdCounter = 0;
  const _posts = [];

  // Private functions

  function findRelevantPost(postId) {
    for (let i = 0; i < _posts.length; i++) {
      if (_posts[i].id === postId) {
        return i;
      }
    }
    return null;
  }

  function findRelevantComment(postIndex, commentId) {
    const post = _posts[postIndex];
    for (let i = 0; i < post.comments.length; i++) {
      if (post.comments[i].id === commentId) {
        return i;
      }
    }
    return null;
  }

  // functions
  function getPosts() {
    return _posts;
  }

  function addPost(post) {
    _postIdCounter += 1;
    const postId = "p" + _postIdCounter;
    _posts.push({
      text: post,
      id: postId,
      comments: [],
    });
    return postId;
  }

  function removePost(postId) {
    const indexToRemove = findRelevantPost(postId);
    if (indexToRemove === null) return;
    _posts.splice(indexToRemove, 1);
    // Should annonce if didn't find one?
  }

  function addComment(postId, comment) {
    const postIndex = findRelevantPost(postId);
    if (postIndex === null) return;
    _commentIdCounter += 1;
    const commentId =  "c" + _commentIdCounter;
    _posts[postIndex].comments.push({
      id: commentId,
      text: comment,
    });
    return commentId
    // Should annonce if didn't find one?
  }

  function removeComment(postId, commentId) {
    const postIndex = findRelevantPost(postId);
    if (postIndex === null) return;
    const commentIndex = findRelevantComment(postIndex, commentId);
    if (commentIndex === null) return;
    _posts[postIndex].comments.splice(commentIndex, 1);
    // Should annonce if didn't find one?
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};

