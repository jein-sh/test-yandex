window.addEventListener('DOMContentLoaded', () => {
  const playersSlider = document.querySelector('[data-players-slider]');
  const stagesSlider = document.querySelector('[data-stages-slider]');
  const breakpoint = window.matchMedia('(min-width:1024px)');

  const initPlayersSlider = () => {
    if(!playersSlider) {
      return;
    }

    const swiper = new Swiper(playersSlider.querySelector('.swiper'), {
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 4000,
        effect: 'fade',
      },
     breakpoints: {
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        767: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        1119: {
          spaceBetween: 20,
          slidesPerView: 3,
        }
      },
      navigation: {
        nextEl: playersSlider.querySelector('.swiper-button-next'),
        prevEl: playersSlider.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: playersSlider.querySelector('.swiper-pagination'),
        type: 'fraction',
      },
    });  
  }

  const inintStagesSlider = () => {
    if(!stagesSlider) {
      return;
    }
    let swiper;

    const sliderSetiings = {
      slidesPerView: 1,
      navigation: {
        nextEl: stagesSlider.querySelector('.swiper-button-next'),
        prevEl: stagesSlider.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: stagesSlider.querySelector('.swiper-pagination'),
      },
    };    

    const breakpointChecker = () => { 
      if (swiper) {
        swiper.destroy(true, true);
      }
  
      if (!breakpoint.matches) {
        swiper = new Swiper(stagesSlider.querySelector('.swiper'), sliderSetiings);
      } 
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }

  initPlayersSlider();
  inintStagesSlider();

});
