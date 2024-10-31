function slider({
  container,
  slide,
  nextArrow,
  prevArrow,
  totatCounter,
  currentCounter,
  wrapper,
  field,
}) {
  //slider

  //My solution
  // const next = document.querySelector(".offer__slider-next");
  // const prev = document.querySelector(".offer__slider-prev");
  // const slides = document.querySelector(".offer__slide");
  // const total = document.querySelector("#total");
  // const current = document.querySelector("#current");

  // let slideIndex = 1;
  // total.textContent = 4;

  // function showSlide(index) {
  //   if (index < 1) {
  //     slideIndex = 4;
  //   } else if (index > 4) {
  //     slideIndex = 1;
  //   }

  //   if (slideIndex === 1) {
  //     slides.innerHTML = `
  //       <div class="offer__slide">
  //         <img src="img/slider/pepper.jpg" alt="pepper" />
  //       </div>`;
  //   } else if (slideIndex === 2) {
  //     slides.innerHTML = `
  //       <div class="offer__slide">
  //         <img src="img/slider/food-12.jpg" alt="food">
  //       </div>`;
  //   } else if (slideIndex === 3) {
  //     slides.innerHTML = `
  //       <div class="offer__slide">
  //         <img src="img/slider/olive-oil.jpg" alt="oil">
  //       </div>`;
  //   } else if (slideIndex === 4) {
  //     slides.innerHTML = `
  //       <div class="offer__slide">
  //         <img src="img/slider/paprika.jpg" alt="paprika">
  //       </div>`;
  //   }

  //   current.textContent = slideIndex;
  // }

  // next.addEventListener("click", () => {
  //   slideIndex++;
  //   showSlide(slideIndex);
  // });

  // prev.addEventListener("click", () => {
  //   slideIndex--;
  //   showSlide(slideIndex);
  // });

  // showSlide(slideIndex);

  //Udemy
  const slides = document.querySelectorAll(slide);
  const slider = document.querySelector(container);
  const next = document.querySelector(nextArrow);
  const prev = document.querySelector(prevArrow);
  const total = document.querySelector(totatCounter);
  const current = document.querySelector(currentCounter);
  const slidesWrapper = document.querySelector(wrapper);
  const slidesField = document.querySelector(field);
  const width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const indicators = document.createElement("ol");
  const dots = [];

  indicators.classList.add("carousel-indicators");

  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");

    dot.setAttribute("data-slide-to", i + 1);

    dot.classList.add("dot");

    indicators.append(dot);

    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach((dot) => (dot.style.opacity = "0.5"));
      dots[slideIndex - 1].style.opacity = 1;
    });
  });

  //First Solution
  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }

  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach((item) => (item.style.display = "none"));

  //   slides[slideIndex - 1].style.display = "block";

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  // prev.addEventListener("click", () => {
  //   plusSlides(-1);
  // });

  // next.addEventListener("click", () => {
  //   plusSlides(+1);
  // });
}

export default slider;
