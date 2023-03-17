// Определение устройства PC / Mobile (mouse / touchScreen)

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
};




/* открывает блоки в Module for CMS */
if (document.querySelector('.module__cms') && document.querySelector('._touch')) {
   const moduleCmsShell = document.querySelectorAll('.module__cms-shell');
   document.body.addEventListener('click', function (event) {
      if (event.target.closest('.module__cms-shell')) {
         moduleCmsShell.forEach(e => {
            if (e == event.target.closest('.module__cms-shell')) {
               e.classList.toggle('module__cms-shell_activ');
            } else {
               e.classList.remove('module__cms-shell_activ');
            }
         })
      } else {
         moduleCmsShell.forEach(e => {
            e.classList.remove('module__cms-shell_activ');
         })
      }
   })
}


/* открывает блоки в Questions */
if (document.querySelector('.module__questions')) {
   const moduleQuestion = document.querySelectorAll('.module__question');
   document.body.addEventListener('click', function (event) {
      if (event.target.closest('.module__question')) {
         moduleQuestion.forEach(e => {
            if (e == event.target.closest('.module__question')) {
               e.classList.toggle('module__question-active');
            } else {
               e.classList.remove('module__question-active');
            }
         })
      } else {
         moduleQuestion.forEach(e => {
            e.classList.remove('module__question-active');
         })
      }
   })
}







if (document.querySelector('.bug__modal')) {
   document.body.addEventListener('click', function (event) {

      if (!event.target.closest('.bug__modal-body') || event.target.closest('.bug__modal__title-exit')) {
         document.querySelector('.bug__modal').classList.remove('bug__modal-active');
         document.body.classList.remove('bug__modal-active_hidden');
      }
      if (event.target.closest('.footer__bug')) {
         document.querySelector('.bug__modal').classList.add('bug__modal-active');
         document.body.classList.add('bug__modal-active_hidden');
      }
   })
}