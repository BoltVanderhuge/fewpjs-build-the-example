// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const body = document.querySelector("body")

body.addEventListener("click", function(e){
  const likeBox = e.target.closest("article.media-post")
  if (e.target.className === 'like-glyph') {
    const likeGlyph = likeBox.querySelector("span.like-glyph")
    const likeLine = likeBox.querySelector("li")
    mimicServerCall("bogusUrl")
    .then(function(serverMessage){
      if (likeGlyph.innerText != FULL_HEART){
        likeGlyph.innerText = FULL_HEART
        // likeLine.style.color = "red"
        likeLine.className = "activated-heart"
      } else {
        likeGlyph.innerText = EMPTY_HEART
        // likeLine.style.color = "#AAB8C2"
        likeLine.className = "like"
      }
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
      setTimeout(function(){ 
        document.getElementById("modal").className = "hidden";
      }, 5000);
    });
  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
