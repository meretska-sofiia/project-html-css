(() => {
  const refs = {

    headerOpenModalBtn: document.querySelector(".page-header__button[data-modal-open]"),
    heroOpenModalBtn: document.querySelector(".hero__button[data-modal-open]"),
    sectionOpenModalBtn: document.querySelector(".offerings__button[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };


  refs.headerOpenModalBtn.addEventListener("click", toggleModal);
  refs.heroOpenModalBtn.addEventListener("click", toggleModal);
  refs.sectionOpenModalBtn.addEventListener("click", toggleModal);

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();