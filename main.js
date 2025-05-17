let animationStart = document.getElementById("education");
window.addEventListener("scroll", function () {
    var winScrollTop = document.documentElement.scrollTop;
    // console.log("top:" + winScrollTop);
    if (winScrollTop >= 1887) {
        animationStart.style.display = "block";
    } else {
        animationStart.style.display = "none";
    }
});

// script.js 
document.addEventListener("DOMContentLoaded", function () {
    const progressListItems =
        document.querySelectorAll("#progressbar li");
    // console.log("itme  " + progressListItems.length);
    const progressBar =
        document.querySelector(".progress-bar");
    let currentStep = 0;
    // console.log("cuu  " + currentStep);
    function updateProgress() {
        const percent =
            (currentStep / (progressListItems.length - 1)) * 100;
        progressBar.style.width = percent + "%";
        // console.log("p " + percent);

        progressListItems.forEach((item, index) => {
            if (index === currentStep) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    function showStep(stepIndex) {
        const steps =
            document.querySelectorAll(".step-container fieldset");
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.style.display = "block";
            } else {
                step.style.display = "none";
            }
        });
    }

    function nextStep() {
        if (currentStep < progressListItems.length - 1) {
            currentStep++;
            showStep(currentStep);
            updateProgress();
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
            updateProgress();
        }
    }

    const nextStepButtons =
        document.querySelectorAll(".next-step");
    const prevStepButtons =
        document.querySelectorAll(".previous-step");

    nextStepButtons.forEach((button) => {
        button.addEventListener("click", nextStep);
    });

    prevStepButtons.forEach((button) => {
        button.addEventListener("click", prevStep);
    });
});


// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// Menu 
const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});