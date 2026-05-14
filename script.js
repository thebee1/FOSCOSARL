/**
 * FOSCO SARL - Scripts principaux
 * Version vérifiée et optimisée
 */

(function() {
    'use strict';

    // ============================================================
    // MENU MOBILE
    // ============================================================
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = navLinks.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isExpanded.toString());
        });

        // Fermer le menu après avoir cliqué sur un lien
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================================
    // SMOOTH SCROLL
    // ============================================================
    
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Éviter les liens vides
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================================
    // FORMULAIRE DE CONTACT
    // ============================================================
    
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    function showFormStatus(message, isError) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.style.color = isError ? '#d23f57' : '#0f6f8f';
        } else {
            alert(message);
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';
            
            // Validation simple
            if (!name) {
                showFormStatus('❌ Veuillez entrer votre nom', true);
                nameInput.focus();
                return;
            }
            
            if (!email) {
                showFormStatus('❌ Veuillez entrer votre email', true);
                emailInput.focus();
                return;
            }
            
            // Validation email basique
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus('❌ Veuillez entrer un email valide', true);
                emailInput.focus();
                return;
            }
            
            if (!message) {
                showFormStatus('❌ Veuillez entrer votre message', true);
                messageInput.focus();
                return;
            }
            
            // Affichage du message de confirmation
            showFormStatus('✅ Merci ! Votre message a été envoyé. Notre équipe vous répond sous 24h.', false);
            
            // Réinitialisation du formulaire
            contactForm.reset();
        });
    }

    // ============================================================
    // EFFET NAVBAR AU SCROLL
    // ============================================================
    
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        const updateNavbarStyle = function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255,255,255,0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            } else {
                navbar.style.background = 'rgba(255,255,255,0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        };

        window.addEventListener('scroll', updateNavbarStyle);
        updateNavbarStyle();
    }

    // ============================================================
    // CARROUSEL HERO
    // ============================================================

    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const sliderContainer = document.querySelector('.slider-container');
    let currentSlide = 0;
    let slideWidth = 0;
    let autoPlayTimer = null;
    let resizeTimeout = null;
    let isTouching = false;

    function updateSliderDimensions() {
        if (!slides.length || !sliderTrack) return;
        const slide = slides[0];
        const slideStyle = window.getComputedStyle(slide);
        const marginRight = parseFloat(slideStyle.marginRight) || 0;
        const rect = slide.getBoundingClientRect();
        slideWidth = rect.width + marginRight;
        
        // Repositionner au slide actuel avec les nouvelles dimensions
        if (sliderTrack) {
            sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }
    }

    function updateSliderPosition() {
        if (!sliderTrack || !slideWidth) return;
        sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function showNextSlide() {
        if (!slides.length) return;
        currentSlide = (currentSlide + 1) % slides.length;
        updateSliderPosition();
    }

    function showPrevSlide() {
        if (!slides.length) return;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSliderPosition();
    }

    function getAutoPlayDelay() {
        return window.innerWidth < 768 ? 5000 : 7000;
    }

    function resetAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
        }
        autoPlayTimer = setInterval(showNextSlide, getAutoPlayDelay());
    }

    // Debounced resize handler pour mobile
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateSliderDimensions, 150);
    }

    // Touch support pour mobile
    if (sliderContainer) {
        let touchStartX = 0;
        let touchCurrentX = 0;
        let isSwiping = false;

        sliderContainer.addEventListener('touchstart', function(e) {
            if (e.touches.length > 1) return;
            isSwiping = true;
            isTouching = true;
            touchStartX = e.touches[0].screenX;
            touchCurrentX = touchStartX;
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
            }
        }, { passive: true });

        sliderContainer.addEventListener('touchmove', function(e) {
            if (!isSwiping || e.touches.length > 1) return;
            touchCurrentX = e.touches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', function() {
            if (!isSwiping) return;
            const diff = touchStartX - touchCurrentX;

            if (Math.abs(diff) > 40) {
                if (diff > 0) {
                    showNextSlide();
                } else {
                    showPrevSlide();
                }
            }

            resetAutoPlay();
            isSwiping = false;
            isTouching = false;
        }, false);

        sliderContainer.addEventListener('touchcancel', function() {
            isSwiping = false;
            isTouching = false;
            resetAutoPlay();
        }, false);

        sliderContainer.addEventListener('mouseleave', function() {
            if (!isTouching) {
                resetAutoPlay();
            }
        });
    }

    if (prevButton && nextButton && slides.length && sliderTrack) {
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPrevSlide();
            resetAutoPlay();
        });

        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            showNextSlide();
            resetAutoPlay();
        });

        window.addEventListener('resize', handleResize);
        updateSliderDimensions();
        resetAutoPlay();
    }

})();
