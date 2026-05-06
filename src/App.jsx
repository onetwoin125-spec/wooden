import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Videos from './components/Videos';
import Terms from './components/Terms';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const initTheme = () => {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      updateThemeIcon(theme);
    };

    const updateThemeIcon = (theme) => {
      const toggle = document.querySelector('.theme-toggle');
      if (toggle) {
        toggle.setAttribute('data-theme', theme);
      }
    };

    // Theme toggle functionality
    const handleThemeToggle = () => {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    };

    // Mobile nav toggle
    const handleNavToggle = () => {
      const nav = document.querySelector('.nav');
      if (nav) {
        nav.classList.toggle('is-open');
      }
    };

    // Close nav when link is clicked
    const handleNavClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link && document.querySelector('.nav')) {
        document.querySelector('.nav').classList.remove('is-open');
      }
    };

    // Set current year in footer
    const yearElements = document.querySelectorAll('[data-year]');
    yearElements.forEach(el => {
      if (el.textContent === '') {
        el.textContent = new Date().getFullYear();
      }
    });

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#') && target.hash !== '#') {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach(el => {
      observer.observe(el);
    });

    // Back to top button visibility and click
    const toTopBtn = document.querySelector('[data-to-top]');
    const handleScroll = () => {
      if (toTopBtn) {
        if (window.scrollY > 300) {
          toTopBtn.classList.add('is-visible');
        } else {
          toTopBtn.classList.remove('is-visible');
        }
      }
    };

    const handleToTopClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Event listeners
    initTheme();
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', handleThemeToggle);

    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) navToggle.addEventListener('click', handleNavToggle);

    const nav = document.querySelector('.nav');
    if (nav) nav.addEventListener('click', handleNavClick);

    if (toTopBtn) {
      toTopBtn.addEventListener('click', handleToTopClick);
      window.addEventListener('scroll', handleScroll);
    }

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      if (themeToggle) themeToggle.removeEventListener('click', handleThemeToggle);
      if (navToggle) navToggle.removeEventListener('click', handleNavToggle);
      if (nav) nav.removeEventListener('click', handleNavClick);
      if (toTopBtn) {
        toTopBtn.removeEventListener('click', handleToTopClick);
        window.removeEventListener('scroll', handleScroll);
      }
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#home">Skip to content</a>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="videos">
          <Videos />
        </section>
        <section id="terms">
          <Terms />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;