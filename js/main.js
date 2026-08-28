/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    const navLinks = document.querySelectorAll(".nav-link");

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    const backToTop = document.getElementById("backToTop");

    const revealElements = document.querySelectorAll(".reveal");

    const currentYear = document.getElementById("currentYear");


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");

            nav.classList.toggle("open");

            document.body.classList.toggle(
                "menu-open",
                nav.classList.contains("open")
            );

        });


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");

                nav.classList.remove("open");

                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================================
       HEADER SCROLL
    ===================================================== */

    function handleHeaderScroll() {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNavigation() {

        const scrollPosition = window.scrollY + 150;

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            projectCards.forEach(card => {

                const category = card.dataset.category;

                const shouldShow =
                    filter === "all" ||
                    category === filter;


                if (shouldShow) {

                    card.classList.remove("hidden");

                    card.style.opacity = "0";
                    card.style.transform = "translateY(15px)";


                    requestAnimationFrame(() => {

                        card.style.transition =
                            "opacity 0.35s ease, transform 0.35s ease";

                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";

                    });

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

   /* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.05
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    /* Fallback for browsers without IntersectionObserver */

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


    /* =====================================================
       CONTACT FORM VALIDATION
    ===================================================== */

    function setError(input, message) {

        const formGroup = input.closest(".form-group");

        if (!formGroup) return;

        formGroup.classList.add("error");

        const errorElement =
            formGroup.querySelector(".error-message");

        if (errorElement) {
            errorElement.textContent = message;
        }

    }


    function clearError(input) {

        const formGroup = input.closest(".form-group");

        if (!formGroup) return;

        formGroup.classList.remove("error");

        const errorElement =
            formGroup.querySelector(".error-message");

        if (errorElement) {
            errorElement.textContent = "";
        }

    }


    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }


    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const projectType =
                document.getElementById("projectType");

            const message =
                document.getElementById("message");


            let isValid = true;


            /* NAME */

            if (name.value.trim() === "") {

                setError(
                    name,
                    "Please enter your name."
                );

                isValid = false;

            } else {

                clearError(name);

            }


            /* EMAIL */

            if (email.value.trim() === "") {

                setError(
                    email,
                    "Please enter your email."
                );

                isValid = false;

            } else if (!isValidEmail(email.value.trim())) {

                setError(
                    email,
                    "Please enter a valid email."
                );

                isValid = false;

            } else {

                clearError(email);

            }


            /* PROJECT TYPE */

            if (projectType.value === "") {

                setError(
                    projectType,
                    "Please select a project type."
                );

                isValid = false;

            } else {

                clearError(projectType);

            }


            /* MESSAGE */

            if (message.value.trim() === "") {

                setError(
                    message,
                    "Please share some project details."
                );

                isValid = false;

            } else {

                clearError(message);

            }


            /* SUCCESS */

            if (isValid) {

                formSuccess.classList.add("show");

                contactForm.reset();


                setTimeout(() => {

                    formSuccess.classList.remove("show");

                }, 8000);

            }

        });


        /* REMOVE ERROR WHILE TYPING */

        const formInputs =
            contactForm.querySelectorAll(
                "input, textarea, select"
            );


        formInputs.forEach(input => {

            input.addEventListener("input", () => {

                clearError(input);

            });

            input.addEventListener("change", () => {

                clearError(input);

            });

        });

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function handleBackToTop() {

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", handleBackToTop);


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU WITH ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            nav.classList.contains("open")
        ) {

            menuToggle.classList.remove("active");

            nav.classList.remove("open");

            document.body.classList.remove("menu-open");

        }

    });


    /* =====================================================
       PREVENT EMPTY PROJECT LINKS
    ===================================================== */

    const projectLinks =
        document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {

        link.addEventListener("click", event => {

            if (link.getAttribute("href") === "#") {

                event.preventDefault();

            }

        });

    });


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.style.background = "#dce2d8";

            image.style.minHeight = "200px";

            image.removeAttribute("src");

        });

    });


    /* =====================================================
       STAGGER REVEAL ANIMATIONS
    ===================================================== */

    const groupedElements = [
        ...document.querySelectorAll(".service-card"),
        ...document.querySelectorAll(".skill-card"),
        ...document.querySelectorAll(".project-card"),
        ...document.querySelectorAll(".why-card"),
        ...document.querySelectorAll(".help-card"),
        ...document.querySelectorAll(".process-card")
    ];


    groupedElements.forEach((element, index) => {

        element.style.transitionDelay =
            `${(index % 4) * 70}ms`;

    });

});
