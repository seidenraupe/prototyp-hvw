document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? 'Schliessen' : 'Menü';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menü';
      });
    });
  }

  const quoteChips = document.querySelectorAll('[data-quote-target]');
  const quotePanels = document.querySelectorAll('[data-quote-panel]');

  if (quoteChips.length && quotePanels.length) {
    quoteChips.forEach(chip => {
      chip.addEventListener('click', e => {
        e.preventDefault();
        const id = chip.dataset.quoteTarget;

        quoteChips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');

        quotePanels.forEach(panel => {
          panel.hidden = panel.dataset.quotePanel !== id;
        });
      });
    });
  }

  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Prototyp: Newsletter-Anmeldung würde hier angebunden werden.');
    });
  }
});
