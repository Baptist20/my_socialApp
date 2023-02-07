const menuItem = document.querySelectorAll('.menu-item');
const  messageNotif = document.querySelector('#notif');
const messagesBar = document.querySelector('.messages');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const searchMessages = document.querySelector('#messages-search');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bgOne = document.querySelector('.bg-1');
const bgTwo = document.querySelector('.bg-2');
const bgThree = document.querySelector('.bg-3');




// JJJJJJJJJJJJJJJJ  Left side nav active class
// JJJJJJJJJJJJJJJJ Add class

const changeActive = () => {
  menuItem.forEach(item => {
    item.classList.remove('active');
  })
};

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    changeActive();
    item.classList.add('active');
    if (item.id != 'notifications-notif') {
      document.querySelector('.notifications').style.display = 'none';
    }
    else {
      document.querySelector('.notifications').style.display = 'block';
      document.querySelector('#notifications-notif #notif-counts').style.display = 'none';
    }
  })
});

// JJJJJJJJJJJJJJJJJJJJ box shadow

messageNotif.addEventListener('click', () => {
  messagesBar.style.boxShadow = '0 0 1rem var(--color-primary)';
  setTimeout(() => {
    messagesBar.style.boxShadow = 'none';
  }, 2000);
  document.querySelector('#notif #notif-counts').style.display = 'none';
})

// JJJJJJJJJJJJJJJJJJJJ search messages

const messageSearch = () => {
  const val = searchMessages.value.toLowerCase();
  console.log(val);
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    }
    else {
      chat.style.display = 'none';
    }
  })
}

searchMessages.addEventListener('keyup', messageSearch)

// JJJJJJJJJJJJJJJJ  Left side nav active class

// JJJJJJJJJJJJJJJJ  Theme customization

const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

// JJJJJJJJJJJJJJJ Closing modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);




// JJJJJJJJJJJJJJJJ Font Size JJJJJJJJJJJJJJJJJJ

const removeSizeSelector = () => {
  fontSize.forEach(size => {
    size.classList.remove('active');
  })
}

fontSize.forEach(size => {

  size.addEventListener('click', () => {
    let fontSize;
    removeSizeSelector();
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    }
    else if (size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    }
    else if (size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    }
    else if (size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    }
    else if (size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
  
  })

})


// JJJJJJJJJJJJJJJJJJJ Color Palette JJJJJJJJJJJJJJ

//  JJJJJJJJJJJJJJJJJJ Change active class JJJJJJJJJJ

const ChangeActiveColor = () => {
  colorPalette.forEach(color => {
    color.classList.remove('active');
  });
}

// JJJJJJJJJJJJJJJJJJJ Change color JJJJJJJJJJJJJJ


colorPalette.forEach(color => {
  color.addEventListener('click', () => {

    ChangeActiveColor();
    let primaryHue;
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    }
    else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    }
    else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    }
    else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    }
    else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
});



let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bgTwo.addEventListener('click', () => {
  lightColorLightness = '95%';
  whiteColorLightness = '20%';
  darkColorLightness = '15%';

  bgTwo.classList.add('active');
  bgOne.classList.remove('active');
  bgThree.classList.remove('active');

  changeBg();
})
bgThree.addEventListener('click', () => {
  lightColorLightness = '95%';
  whiteColorLightness = '10%';
  darkColorLightness = '0%';

  bgTwo.classList.remove('active');
  bgOne.classList.remove('active');
  bgThree.classList.add('active');

  changeBg();
})
bgOne.addEventListener('click', () => {
  // lightColorLightness = '95%';
  // whiteColorLightness = '100%';
  // darkColorLightness = '17%';

  bgTwo.classList.remove('active');
  bgOne.classList.add('active');
  bgThree.classList.remove('active');

  // changeBg();

  window.location.reload();
})