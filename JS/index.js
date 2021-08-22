window.onscroll = () => {
    const nav = document.querySelector('#nav');
    if(this.scrollY <= 10) {
        nav.classList.remove('colored-nav');
    } else {
        nav.classList.add('colored-nav');
    }
};

document.querySelector('#toggle').addEventListener('click', function () {
    document.querySelector('#list').classList.toggle('active-list');
});

var index = 1;
showSlides(index);

function showDesigner(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;
    var details = document.getElementsByClassName("details");
    var names = document.getElementsByClassName("name");
    if (n > details.length) {index = 1}
    if (n < 1) {index = details.length}
    for (i = 0; i < details.length; i++) {
        details[i].style.display = "none";
    }
    for (i = 0; i < names.length; i++) {
        names[i].className = names[i].className.replace(" active", "");
    }
    details[index-1].style.display = "block";
    names[index-1].className += " active";
}