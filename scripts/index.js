document.getElementById('lime').onclick = function() {
    let el = document.getElementById('lime');
    el.classList.contains("logo-zindex") ? el.classList.remove("logo-zindex") : el.classList.add("logo-zindex");
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.8] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}