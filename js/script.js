var img = document.getElementById('picture');
var likeButton = document.getElementById('like-btn');
var dislikeButton = document.getElementById('dislike-btn');
var NumberOfLike = document.querySelector('h5');
var dislikeIcon = document.getElementById('dislike-icon');

const initialLikeNmbr=0;

likeButton.addEventListener('click',()=>{
    
    NumberOfLike.textContent++ ;
    dislikeIcon.style.display = "none" ;

})

img.addEventListener('dblclick',()=>{
    
    NumberOfLike.textContent++ ;
    dislikeIcon.style.display = "none" ;

})

dislikeButton.addEventListener('click',()=>{
    NumberOfLike.textContent = initialLikeNmbr;
    dislikeIcon.style.display = "Inline" ;
    
})

