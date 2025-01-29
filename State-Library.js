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
    function noScrollMain() {
      const main = document.querySelector('.js-main');
      const nav = document.querySelector('.js-nav');

      if (nav.classList.contains('navDisplayAll')) {
        main.classList.add('main-noScroll');
      } else {
        main.classList.remove('main-noScroll');
      }
      console.log('true')
    }
    function darkMode() {
      const bodyDark = document.querySelector('.js-body');
      if (bodyDark.classList.contains('body')) {
        bodyDark.classList.add('bodyDark');
      }
    }
    
