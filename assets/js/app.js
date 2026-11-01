(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  const search = document.querySelector('#service-search');
  const cards = [...document.querySelectorAll('.service-card')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  if (search) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const match = (card.dataset.search + ' ' + card.textContent).toLowerCase().includes(query);
        card.hidden = !match;
        if (match) visible += 1;
      });
      count.textContent = visible + (visible === 1 ? ' area' : ' areas');
      empty.hidden = visible !== 0;
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
