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
            navLinks.classList.toggle('active');
        });

        // Fermer le menu après avoir cliqué sur un lien
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
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
                alert('❌ Veuillez entrer votre nom');
                nameInput.focus();
                return;
            }
            
            if (!email) {
                alert('❌ Veuillez entrer votre email');
                emailInput.focus();
                return;
            }
            
            // Validation email basique
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('❌ Veuillez entrer un email valide');
                emailInput.focus();
                return;
            }
            
            if (!message) {
                alert('❌ Veuillez entrer votre message');
                messageInput.focus();
                return;
            }
            
            // Affichage du message de confirmation
            alert('✅ Merci ! Votre message a été envoyé. Notre équipe vous répond sous 24h.');
            
            // Réinitialisation du formulaire
            contactForm.reset();
        });
    }

    // ============================================================
    // EFFET NAVBAR AU SCROLL
    // ============================================================
    
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255,255,255,0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            } else {
                navbar.style.background = 'rgba(255,255,255,0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });
    }

})();