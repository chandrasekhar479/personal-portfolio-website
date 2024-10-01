
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = "#FFD700";  
    });

    item.addEventListener('mouseout', function() {
        this.style.color = "";  
    });
});
