const openModal = (modalSelector, modalTimerId) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // Блокируем прокрутку страницы

  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
};

const closeModal = (modalSelector) => {
  const modal = document.querySelector(modalSelector);
  modal.style.display = "none";
  modal.classList.remove("show");
  document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы
};

function modal(triggerSelector, modalSelector, modalTimerId) {
  //Создаем modal window (Modal)

  const modalButtonsTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector); //Само модальное окно

  modalButtonsTrigger.forEach((buttons) => {
    buttons.addEventListener("click", () =>
      openModal(modalSelector, modalTimerId)
    );
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  function showModalByScroll() {
    if (
      // window.pageYOffset = window.scrollY
      // window.scrollY более современная
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight

      // 2 Solution с - 1 (px)
      // if (
      //   window.pageYOffset + document.documentElement.clientHeight >=
      //   document.documentElement.scrollHeight - 1
      // )
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };
