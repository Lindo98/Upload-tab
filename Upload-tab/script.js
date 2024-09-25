const openModalBtn = document.getElementById("show-modal");
const modal = document.querySelector(".modal");
const closeModalbtn = document.querySelector(".close-modal");


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  
  openModalBtn.addEventListener('click', openModal);


  closeModalbtn.addEventListener('click', closeModal);
  