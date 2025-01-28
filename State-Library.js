  function toggleNav() {
      const hamburgerMenu = document.querySelector('.js-navToggle');
      const nav = document.querySelector('.js-nav');
      if (nav.classList.contains('navDiplayNone')) {
        nav.classList.add('navDisplayAll')
       console.log(true)
      }
    }
    function returnNav() {
      document.querySelector('.js-returnNav');
      const nav = document.querySelector('.js-nav');
      if (nav.classList.contains('navDisplayAll')) {
        nav.classList.remove('navDisplayAll');
      }
      console.log(true)
    }