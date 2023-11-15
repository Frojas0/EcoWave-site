// const openMetales= document.querySelector('.metales');
// const metales = document.querySelector('#metales');
// const closeMetales = document.querySelector('#close_metales');

// const openPeligrosos= document.querySelector('.peligrosos');
// const peligrosos = document.querySelector('#peligrosos');
// const closePeligrosos= document.querySelector('#close_peligrosos');

// const openVidrios= document.querySelector('.vidrios');
// const vidrios = document.querySelector('#vidrios');
// const closeVidrios = document.querySelector('#close_vidrios');

// const openPapelCarton= document.querySelector('.papelCarton');
// const papelCarton = document.querySelector('#papelCarton');
// const closePapelCarton = document.querySelector('#close_papelCarton');

// const openOrganicos= document.querySelector('.organicos');
// const organicos = document.querySelector('#organicos');
// const closeOrganicos= document.querySelector('#close_organicos');


// openMetales.addEventListener('click', (e) => {
//     e.preventDefault();
//     metales.classList.add('modales--show')
// })

// openPeligrosos.addEventListener('click', (e) => {
//     e.preventDefault();
//     peligrosos.classList.add('modales--show')
// })

// openVidrios.addEventListener('click', (e) => {
//     e.preventDefault();
//     vidrios.classList.add('modales--show')
// })


// openPapelCarton.addEventListener('click', (e) => {
//     e.preventDefault();
//     papelCarton.classList.add('modales--show')
// })

// openOrganicos.addEventListener('click', (e) => {
//     e.preventDefault();
//     organicos.classList.add('modales--show')
// })

// closeMetales.addEventListener('click', (e) => {
//     e.preventDefault();
//     metales.classList.remove('modales--show')
    
// })

// closePeligrosos.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     peligrosos.classList.remove('modales--show')
// })

// closeVidrios.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     vidrios.classList.remove('modales--show')
// })

// closePapelCarton.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     papelCarton.classList.remove('modales--show')
// })

// closeOrganicos.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     organicos.classList.remove('modales--show')
// })

const modalToggle = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('modales--show');
  };
  
  //Abrir modal
  document.querySelector('.metales').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('metales');
  });
  
  document.querySelector('.peligrosos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('peligrosos');
  });
  
  document.querySelector('.vidrios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('vidrios');
  });
  
  document.querySelector('.papelCarton').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('papelCarton');
  });
  
  document.querySelector('.organicos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('organicos');
  });

  document.querySelector('.plasticos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('plasticos');
  });

  document.querySelector('.ordinarios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('ordinarios')
  });
  

  //Cerrar modal
  document.getElementById('close_metales').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('metales');
  });
  
  document.getElementById('close_peligrosos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('peligrosos');
  });
  
  document.getElementById('close_vidrios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('vidrios');
  });
  
  document.getElementById('close_papelCarton').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('papelCarton');
  });
  
  document.getElementById('close_organicos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('organicos');
  });

  document.getElementById('close_plasticos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('plasticos');
  });

  document.getElementById('close_ordinarios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('ordinarios');
  });
  
  
  