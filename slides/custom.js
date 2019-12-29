function resetSlideScrolling(slide) {
    slide.classList.add('scrollable-slide');
}

function handleSlideScrolling(slide) {
    if (slide.scrollHeight >= 650) {
        slide.classList.add('scrollable-slide');
    }
}

Reveal.addEventListener('ready', function (event) {
    handleSlideScrolling(event.currentSlide);
});

Reveal.addEventListener('slidechanged', function (event) {
    if (event.previousSlide) {
        resetSlideScrolling(event.previousSlide);
    }
    handleSlideScrolling(event.currentSlide);
});
