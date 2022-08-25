const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())



$("body").on('mouseleave',".comment",  function() {
    $(this).find(".delete-comment").css("display", "none");
})

$("body").on('mouseenter', ".comment",  function() {
    $(this).find(".delete-comment").css("display", "inline-block");
})


$("body").on('mouseleave',".post",  function() {
    $(this).find(".delete").css("display", "none");
})

$("body").on('mouseenter', ".post",  function() {
    $(this).find(".delete").css("display", "inline-block");
})


function post() {
    const newPost = $("#input").val();
    if (newPost === ""){
        return;
    }
    tweeter.addPost(newPost);
    $("#input").val("");
    renderer.renderPosts(tweeter.getPosts());
};

$("body").on('click',".comment-btn", function(){
    const postId = $(this).closest(".post-container").attr("id");
    const newComment = $(`#${postId}`).find(".comment-input").val();
    if (newComment === ""){
        return;
    }
    tweeter.addComment(postId, newComment);
    $(`#${postId}`).find(".comment-input").val("");
    renderer.renderPosts(tweeter.getPosts());
})

$("body").on('click', ".delete-comment", function(){
    const commentId = $(this).closest(".comment").attr("id");
    const postId = $(this).closest(".post-container").attr("id");
    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
})

$("body").on('click', ".delete", function(){
    const postId = $(this).closest(".post-container").attr("id");
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
})
