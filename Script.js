document.getElementById('heart-btn').addEventListener('click', function() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '&#10084;';
    heartContainer.appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, 2000);
});

document.getElementById('surprise-btn').addEventListener('click', function() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';
    const video = document.getElementById('surprise-video');
    video.play();
});

document.getElementById('more-surprises-btn').addEventListener('click', function() {
    const moreSurprisesContainer = document.getElementById('more-surprises-container');
    moreSurprisesContainer.style.display = 'block';
});

// Show the next slide after opening of second slide
setTimeout(function() {
    document.getElementById('next-slide').style.display = 'block';
}, 5000);
// Show the third slide with transition effect
function showThirdSlide() {
    const thirdSlide = document.getElementById('third-slide');
    thirdSlide.classList.add('slide-transition');
    thirdSlide.style.display = 'block';
}

// Show the third slide after a opening of second slide
setTimeout(function() {
    showThirdSlide();
}, 8000);



