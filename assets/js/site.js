(function () {
  const ROOT = '/' + location.pathname.split('/')[1];
  function inject(id, file) {
    const el = document.getElementById(id);
    if (!el) return;
    fetch(`${ROOT}/${file}`).then(r=>r.text()).then(html=>{
      el.innerHTML = html;
      const y = document.getElementById('y');
      if (y) y.textContent = new Date().getFullYear();
      const path = location.pathname.replace(/\/$/,'');
      document.querySelectorAll('.nav-list a').forEach(a=>{
        const href = a.getAttribute('href').replace(/\/$/,'');
        if (href === path) a.classList.add('active');
      });
    });
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    inject('header','partials/header.html');
    inject('footer','partials/footer.html');
  });
})();
