const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements1 = document.querySelectorAll('.hidden');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    });
});
const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer3.observe(el));



// Add active class to the clicked navbar item
var navItems = document.querySelectorAll('#navbarNavDropdown li');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
    });
});


// nav bar text 
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sections = document.querySelectorAll('section');
    sections.forEach(section => {
        var top = section.offsetTop - 100;
        var bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            var id = section.getAttribute('id');
            var correspondingNavItem = document.querySelector(`#navbarNavDropdown li a[href="#${id}"]`).parentNode;
            correspondingNavItem.classList.add('active');
        }
    });
});