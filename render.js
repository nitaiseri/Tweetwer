const Renderer = function () {

  function getPostElement(text, id) {
    const postContainer = $(`<div class="post-container" id="${id}"></div>`)
    const postElement = $(`<div class="post"></div>`);
    postElement.append(`<div class="post-text">${text}</div>`);
    postElement.append(`<span class="material-icons delete md-18">delete</span>`);
    postContainer.append(postElement)
    postContainer.append(`<div class="comments"></div>`)
    postContainer.append(`<input type="text" placeholder="Write your comment..." class="comment-input">`)
    postContainer.append(`<div class="comment-btn" onclick="post()">Send</div>`)
    return postContainer;
  }

  function getCommentElement(comment) {
    const newComment = $(`<div class="comment" id="${comment.id}"></div>`);
    newComment.append(`<span class="material-icons delete-comment md-18">delete</span>`);
    newComment.append(`<div class="comment-text">${comment.text}</div>`);
    return newComment;
  }

  function getCommentsElements(comments) {
    const commentsElements = [];
    for (const comment of comments) {
      commentsElements.push(getCommentElement(comment));
    }
    return commentsElements;
  }

  function createPost(post) {
    const postElement = getPostElement(post.text, post.id);
    const commentsElement = postElement.find(".comments");
    const comments = getCommentsElements(post.comments);
    for (const comment of comments) {
      commentsElement.append(comment);
    }
    return postElement;
  }

  function renderPost(postElement) {
    $("#posts").append(postElement);
  }

  function renderPosts(posts) {
    $("#posts").empty();
    for (const post of posts) {
      let newPost = createPost(post);
      renderPost(newPost);
    }
  }

  return {
    renderPosts,
  };
};
