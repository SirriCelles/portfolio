
// Pop Up
let project = [
  {
    id: 1,
    title:'Tonic',
    catList: ['CANOPY', 'Backend dev', 2015],
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langList: ['html', 'css', 'javacript'],
    image: 'tonic-1__image-holder',
    linkUrl:'https://sirricelles.github.io/portfolio/',
    gitUrl:'https://github.com/SirriCelles/portfolio'

  },
  {
    id: 2,
    title:'Multi-Post Stories',
    catList: ['CANOPY', 'Backend dev', 2015],
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langList: ['html', 'css', 'javacript'],
    image: 'tonic-2__image-holder',
    linkUrl:'https://sirricelles.github.io/portfolio/',
    gitUrl:'https://github.com/SirriCelles/portfolio'

  },
  {
    id: 3,
    title:'Tonic',
    catList: ['CANOPY', 'Backend dev', 2015],
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langList: ['html', 'css', 'javacript'],
    image: 'tonic-3__image-holder',
    linkUrl:'https://sirricelles.github.io/portfolio/',
    gitUrl:'https://github.com/SirriCelles/portfolio'

  },
  {
    id: 4,
    title:'Multi-Post Stories',
    catList: ['CANOPY', 'Backend dev', 2015],
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    langList: ['html', 'css', 'javacript'],
    image: 'tonic-4__image-holder',
    linkUrl:'https://sirricelles.github.io/portfolio/',
    gitUrl:'https://github.com/SirriCelles/portfolio'
  }
];


let seeProjectBtn = document.querySelectorAll('.tonic__btn');
let popUp = document.querySelector('.popup__backdrop');
let tonicHeader = document.querySelector('.popup__header-text');
let catLists = document.querySelector('.popup__cat-list');
let tonicText = document.querySelector('.popup__text');
let tonicLangs = document.querySelector('.popup__lang-list');
let liveLink = document.querySelector('.popup__btn-link');
let gitLink = document.querySelector('.popup__btn-link');
let imageHolder = document.querySelector('.popup__image-holder');
let popUpCloseIcon = document.getElementById('popUpCloseIcon');
let body =  document.querySelector('body');


Object.values(seeProjectBtn).forEach(btn => {
  btn.addEventListener('click', function() {
    const inputId = Number(btn.querySelector("input[type='hidden']").value);
    body.style.position = 'fixed';
    setTimeout(() => {
      showModal(project, inputId);
    }, 500);
  });
});

 popUpCloseIcon.addEventListener('click', function() {
   imageHolder.classList.remove(currentImage);
   body.style.position = 'relative';
   popUp.classList.remove('popup__open');
   popUp.classList.add('popup__close');
 });

let showModal = (data, id) => {
  if(!data || !id) {
    console.log('Error: No data');
    return;
  }else {
    popUp.classList.remove('popup__close');
    popUp.classList.add('popup__open');
    data.forEach(project => {
      if(project.id === id) {
        tonicHeader.textContent = project.title;
        tonicText.textContent = project.text;
        liveLink.setAttribute('href', project.linkUrl);
        gitLink.setAttribute('href', project.gitUrl);
        imageHolder.classList.add(project.image);
        imageHolder.style.maxWidth = '84.5rem';
        currentImage = project.image;
        Object.values(tonicLangs).forEach((el, index )=> {
          el.textContent = project.catList[index];
        });
        Object.values(tonicLangs).forEach((el, index) => {
          el.textContent = project.langList[index];
        });
      }
    });
  }
}
