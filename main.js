const images = document.querySelectorAll('img');

// create an intersection observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // if the target element scrolls into view, add the active class
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
        // if the target element is out of view, remove the active class
        } else {
            entry.target.classList.remove('active');
        }
    });
});

// loop through each image and attach the intersection observer
images.forEach(image => {
    observer.observe(image);
});
