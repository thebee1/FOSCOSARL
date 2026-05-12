/* ============================================================
   RESET & VARIABLES
   ============================================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #0f2a4f;
    --primary-dark: #071a2f;
    --secondary: #2381be;
    --secondary-dark: #165f8c;
    --dark: #091622;
    --light: #f4f7fb;
    --gray: #7a8ca4;
    --white: #ffffff;
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
    --shadow-md: 0 5px 20px rgba(0,0,0,0.08);
    --shadow-lg: 0 10px 30px rgba(0,0,0,0.12);
    --transition: all 0.3s ease;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: var(--dark);
    background: var(--white);
    overflow-x: hidden;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-padding {
    padding: 60px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h2 {
    font-size: 1.8rem;
    color: var(--primary);
}

.highlight {
    color: var(--secondary);
}

/* ============================================================
   BOUTONS
   ============================================================ */

.btn-primary,
.btn-outline {
    display: inline-block;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    border: none;
}

.btn-primary {
    background: var(--secondary);
    color: var(--white);
}

.btn-primary:hover {
    background: var(--secondary-dark);
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--white);
    color: var(--white);
}

.btn-outline:hover {
    background: var(--white);
    color: var(--primary);
}

/* ============================================================
   NAVIGATION
   ============================================================ */

.navbar {
    background: rgba(255,255,255,0.98);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 12px 0;
    box-shadow: var(--shadow-sm);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 14px;
}

.logo-image,
.hero-logo {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
}

.logo-image {
    width: 46px;
    border-radius: 8px;
    box-shadow: var(--shadow-sm);
}

.hero-logo {
    width: 60px;
    border-radius: 12px;
}

.logo h1 {
    font-size: 1.3rem;
    color: var(--primary);
}

.logo h1 span {
    color: var(--secondary);
}

.logo p {
    font-size: 0.6rem;
    color: var(--gray);
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    background: none;
    border: none;
    color: var(--primary);
}

.nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--secondary);
}

/* ============================================================
   HERO SECTION
   ============================================================ */

.hero {
    position: relative;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    padding: 120px 0 60px;
    margin-top: 60px;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
    z-index: 0;
    pointer-events: none;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(30,60,114,0.85), rgba(15,42,74,0.9));
    z-index: 1;
}

.hero .container {
    position: relative;
    z-index: 2;
}

.hero-content {
    display: flex;
    align-items: center;
    gap: 48px;
}

.hero-text {
    flex: 1;
}

.hero-brand {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
    padding: 12px 18px;
    border-radius: 999px;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.25);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    backdrop-filter: blur(10px);
}

.hero-logo {
    width: 48px;
    height: auto;
}

.hero-brand-text {
    display: flex;
    flex-direction: column;
    color: rgba(255,255,255,0.95);
    font-size: 0.95rem;
}

.hero-brand-text strong {
    font-weight: 700;
    letter-spacing: 0.02em;
}

.hero-brand-text span {
    font-size: 0.9rem;
    opacity: 0.9;
}

.hero-text h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 1.3;
}

.hero-text p {
    font-size: 1rem;
    margin-bottom: 32px;
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: 16px;
}

.hero-image {
    flex: 1;
    position: relative;
}

/* ============================================================
   SLIDER HORIZONTAL
   ============================================================ */

.hero-slider {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 32px;
    padding: 24px;
    backdrop-filter: blur(20px);
    box-shadow: 0 25px 75px rgba(0,0,0,0.12);
}

.slider-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 18px;
}

.slider-pretitle {
    font-size: 0.85rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.76);
}

.slider-title {
    font-size: 1.4rem;
    line-height: 1.2;
    color: white;
    max-width: 320px;
}

.slider-container {
    overflow: hidden;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
    position: relative;
    width: 100%;
}

.slider-track {
    display: flex;
    flex-direction: row;
    transition: transform 0.6s ease;
    will-change: transform;
}

.slide {
    width: 340px;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    border-radius: 28px;
    margin-right: 18px;
    background: rgba(255,255,255,0.05);
}

.slider-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    transform: translateY(-50%);
    pointer-events: none;
}

.slider-button {
    pointer-events: auto;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: rgba(255,255,255,0.22);
    color: var(--white);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 18px 35px rgba(0,0,0,0.18);
    transition: transform 0.2s ease, background 0.2s ease;
}

.slider-button:hover,
.slider-button:focus {
    transform: scale(1.05);
    background: rgba(255,255,255,0.32);
}

.slider-button i {
    font-size: 1rem;
}

.slide figure {
    margin: 0;
    position: relative;
}

.slide img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease, filter 0.5s ease;
}

.slide:hover img {
    transform: scale(1.08);
    filter: brightness(1.05) contrast(1.1);
}

.slide::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.65) 100%);
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.slide-caption {
    position: absolute;
    bottom: 18px;
    left: 16px;
    right: 16px;
    color: white;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.4;
    z-index: 2;
    text-shadow: 0 12px 35px rgba(0,0,0,0.35);
}

.slide-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(255,255,255,0.14);
    border: 1px solid rgba(255,255,255,0.18);
    color: var(--white);
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 3;
    backdrop-filter: blur(10px);
}

.slider-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255,255,255,0.18);
    z-index: 15;
    overflow: hidden;
    border-radius: 0 0 28px 28px;
}

.slider-progress-bar {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, var(--secondary), var(--secondary-dark));
    animation: progressBar 7s linear infinite;
}

@keyframes progressBar {
    0% { width: 0%; }
    100% { width: 100%; }
}

.slider-container:hover .slider-progress-bar {
    animation-play-state: paused;
}

@keyframes slideHorizontal {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

/* ============================================================
   STATS CARD
   ============================================================ */

.stats-card {
    position: absolute;
    bottom: -30px;
    left: 20px;
    right: 20px;
    background: var(--white);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    justify-content: space-around;
    box-shadow: var(--shadow-lg);
    z-index: 20;
}

.stat-number {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--secondary);
    display: block;
}

.stat-item {
    text-align: center;
}

.stat-item span:last-child {
    color: var(--gray);
    font-size: 0.75rem;
}

/* ============================================================
   SERVICES
   ============================================================ */

.services {
    background: var(--light);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}

.service-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.service-icon {
    background: rgba(35,129,190,0.12);
    width: 60px;
    height: 60px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 0 24px;
}

.service-icon i {
    font-size: 1.6rem;
    color: var(--secondary);
}

.service-card h3 {
    margin: 20px 24px 8px;
}

.service-card p {
    margin: 0 24px 20px;
    color: var(--gray);
}

.service-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

/* ============================================================
   ABOUT
   ============================================================ */

.about-grid {
    display: flex;
    align-items: center;
    gap: 48px;
}

.about-image {
    flex: 1;
    position: relative;
}

.about-image img {
    width: 100%;
    border-radius: 24px;
    box-shadow: var(--shadow-lg);
}

.experience-badge {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: var(--white);
    border-radius: 16px;
    padding: 12px 20px;
    text-align: center;
    box-shadow: var(--shadow-md);
}

.experience-badge span {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--secondary);
    display: block;
}

.about-content {
    flex: 1;
}

.about-features {
    display: flex;
    gap: 24px;
    margin: 32px 0;
}

.about-features i {
    color: var(--secondary);
    margin-right: 8px;
}

/* ============================================================
   STATS SECTION
   ============================================================ */

.stats-section {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
}

.stats-section .stat-number {
    font-size: 2.5rem;
    color: var(--white);
}

/* ============================================================
   CONTACT
   ============================================================ */

.contact-grid {
    display: flex;
    gap: 48px;
}

.contact-form {
    flex: 1;
    background: var(--light);
    padding: 32px;
    border-radius: 20px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 14px;
    margin-bottom: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
}

    .form-status {
        margin-top: 16px;
        font-size: 0.95rem;
        line-height: 1.5;
    }
    box-shadow: var(--shadow-md);
}

.info-card i {
    font-size: 2rem;
    color: var(--secondary);
    margin-bottom: 12px;
}

/* ============================================================
   FOOTER
   ============================================================ */

.footer {
    background: var(--dark);
    color: #94a3b8;
    padding: 48px 0 24px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-bottom: 40px;
}

.footer-about h3 {
    color: var(--white);
    margin-bottom: 16px;
}

.footer-about h3 span {
    color: var(--secondary);
}

.footer h4 {
    color: var(--white);
    margin-bottom: 16px;
    font-size: 1.1rem;
}

.footer ul {
    list-style: none;
}

.footer ul li {
    margin-bottom: 8px;
}

.footer a {
    color: #94a3b8;
    text-decoration: none;
    transition: var(--transition);
}

.footer a:hover {
    color: var(--secondary);
}

.social-icons {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.social-icons a {
    background: rgba(255,255,255,0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.social-icons a:hover {
    background: var(--secondary);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 0.75rem;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */

/* Mobile */
@media (max-width: 768px) {
    .section-padding {
        padding: 50px 0;
    }

    .section-header h2 {
        font-size: 1.8rem;
    }

    .menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--white);
        flex-direction: column;
        padding: 20px;
        gap: 16px;
        box-shadow: var(--shadow-lg);
    }

    .nav-links.active {
        display: flex;
    }

    .hero-content {
        flex-direction: column;
        text-align: center;
    }

    .hero-text h1 {
        font-size: 2rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .slide {
        width: 280px;
    }

    .slide img {
        height: 220px;
    }

    .slide-caption {
        font-size: 0.75rem;
        padding: 30px 12px 12px;
    }

    .stats-card {
        position: relative;
        margin-top: -30px;
        flex-wrap: wrap;
    }

    .about-grid {
        flex-direction: column;
    }

    .contact-grid {
        flex-direction: column;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-grid {
        grid-template-columns: 1fr;
    }
}

/* Tablette */
@media (min-width: 768px) and (max-width: 1023px) {
    .slide {
        width: 320px;
    }

    .slide img {
        height: 260px;
    }

    .stats-card {
        position: absolute;
        bottom: -30px;
        left: 20px;
        right: 20px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .slide {
        width: 400px;
    }

    .slide img {
        height: 300px;
    }
}

/* Petit mobile */
@media (max-width: 480px) {
    .hero-text h1 {
        font-size: 1.6rem;
    }

    .logo-image {
        width: 38px;
    }

    .hero-logo {
        width: 48px;
    }

    .btn-primary,
    .btn-outline {
        padding: 10px 20px;
        font-size: 0.9rem;
    }

    .slider-container {
        border-radius: 20px;
    }

    .slide {
        width: 250px;
    }

    .slide img {
        height: 200px;
    }

    .stat-item {
        min-width: 80px;
    }

    .contact-info {
        grid-template-columns: 1fr;
    }
}
