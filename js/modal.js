// let backdrop  = document.querySelector('.backdrop ')
// let modal = document.querySelector('.modal')
// let modalBtn = document.querySelectorAll('.modal-btn')
// let backdropModalBtn = document.querySelector('.backdrop-modal-btn')

// modalBtn.forEach(drop => {
//  addEventListener('click', e  =>{
//        backdrop.classList.toggle('is-hidden')
//         console.log('lllll')
//     })
        
 
// })

// --------------------------
// backdrop.addEventListener('click', e  =>{
//       backdrop.classList.toggle('is-hidden')
//       console.log('lllll')
//     }) 

// backdroupModalBtn.addEventListener('click', e  => {
//     backdrop .classList.toggle('is-hidden')
  
// })


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();