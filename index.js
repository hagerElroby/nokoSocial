//SIDBAR
const menuItems = document.querySelectorAll('.menu-item');
//MESSAGES 
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
 const theme = document.querySelector('#theme');
 const themeModel = document.querySelector('.customize-theme')
 const fontSizes = document.querySelectorAll('.choose-size span');
 const root = document.querySelector(':root');
 const colorPalette = document.querySelectorAll('.choose-color span');
 const Bg1 = document.querySelector('.bg-1');
 const Bg2 = document.querySelector('.bg-2');
 const Bg3 = document.querySelector('.bg-3');
 //==========SIDEBAR==========
//remove active class from all menu items
const changeActiveItem = () => {
      menuItems.forEach(item => {
            item.classList.remove('active');
      })
}
menuItems.forEach(item => {
      item.addEventListener('click' , () =>{
            changeActiveItem();
            item.classList.add('active');
            if(item.id !='notifications'){
                  document.querySelector('.notifications-popup').style.display='none';
            }else{
                  document.querySelector('.notifications-popup').style.display='block';
                  document.querySelector('#notifications .notification-count').style.display='none';
   
            }
      })
})

//======MESSAGES ============\
//searches chats 
/*
let name = document.querySelectorAll('.frind').textContent.toLowerCase();
console.log(name[0]);
*/

const searchMessage = () => {
      const val = messageSearch.value.toLowerCase();
      console.log(val);
      message.forEach( chat => {
            let name = chat.querySelectorAll('.frind').textContent.toLowerCase();
            if(name.indexOf(val)!=-1){
                  chat.style.display='flex';
            }else{
                  chat.style.display = 'none'
            }
      })
}

//search chat 
messageSearch.addEventListener('keyup' , searchMessage);

messagesNotification.addEventListener('click' , () =>{
      messages.style.boxShadow = '0 0 1rem var(--color-primary)';
      messagesNotification.querySelector(".notification-count")
      .style.display = 'none';
      setTimeout( () => {
            messages.style.boxShadow = 'none';
      } ,2000);
})

//THEME CUSTOMIZATION
//opens model
const openThemeModel = () => {
      themeModel.style.display='grid';
}

//closes model
const closeThemeModel = (e) => {
      if(e.target.classList.contains('customize-theme')){
            themeModel.style.display = 'none';
      }
}

//close model 
themeModel.addEventListener('click' , closeThemeModel);

//open model
theme.addEventListener('click' ,openThemeModel);


//==========FONT SIZES===================

//remove active class from spans 
const removeSizeSelector = () => {
      fontSizes.forEach( size => {
            size.classList.remove('active');
      })
}

fontSizes.forEach( size => {
      size.addEventListener('click' , () =>{
            removeSizeSelector();
            let fontSize;
            size.classList.toggle('active');
            if(size.classList.contains('font-size-1')){
                  fontSize = '10px';
                  root.style.setProperty('--sticy-top-left' , '5.4rem');
                  root.style.setProperty('--sticy-top-right' , '5.4rem');
            }else if(size.classList.contains('font-size-2')){
                  fontSize = '13px';
                  root.style.setProperty('--sticy-top-left' , '5.4rem');
                  root.style.setProperty('--sticy-top-right' , '-7rem');  
            }else if(size.classList.contains('font-size-3')){
                  fontSize = '15px';
                  root.style.setProperty('--sticy-top-left' , '-2rem');
                  root.style.setProperty('--sticy-top-right' , '-17rem');  
            }else if(size.classList.contains('font-size-4')){
                  fontSize = '17px';
                  root.style.setProperty('--sticy-top-left' , '-5rem');
                  root.style.setProperty('--sticy-top-right' , '-25rem');  
            }
            else if(size.classList.contains('font-size-5')){
                  fontSize = '19px';
                  root.style.setProperty('--sticy-top-left' , '-12rem');
                  root.style.setProperty('--sticy-top-right' , '-35rem');  
            }
            //change font size of the root html element
            document.querySelector('html').style.fontSize= fontSize;
      })
})
 //remove active class from colors
  const changeActiveClassColor = () => {
      colorPalette.forEach( colorPicker => {
            colorPicker.classList.remove('active');
      })
  }
//change primary colors
colorPalette.forEach(color => {
      color.addEventListener('click' , () =>{
            let primary;
            changeActiveClassColor();
            if(color.classList.contains('color-1')){
              primaryHue = 252;
            }else if(color.classList.contains('color-2')){
                  primaryHue = 52;
            }else if(color.classList.contains('color-3')){
                  primaryHue = 352;
            }else if(color.classList.contains('color-4')){
                  primaryHue = 152;
            }else if(color.classList.contains('color-5')){
                  primaryHue = 202;
            }
            color.classList.add('active');
            root.style.setProperty('--primary-color-hue' ,primaryHue);
      })
})

//THEME BACKGROUND VALUES
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//CHANGES BACKGROUND COLOR
const changeBG = () => {
      root.style.setProperty('--light-color-lightness' , lightColorLightness);
      root.style.setProperty('--white-color-lightness' , whiteColorLightness);
      root.style.setProperty('--dark-color-lightness' ,  darkColorLightness);
}

//change background colors
Bg1.addEventListener('click' , () => {
      //add active class
      Bg1.classList.add('active');
      //remove active class from the others 
      Bg2.classList.remove('active');
      Bg3.classList.remove('active');
      //remove customized changes from local storage
      window.location.reload();
});

Bg2.addEventListener('click' , () => {
      darkColorLightness = '95%';
      whiteColorLightness = '20%';
      lightColorLightness = '15%';

      //add active class
      Bg2.classList.add('active');
      //remove active class from the others 
      Bg1.classList.remove('active');
      Bg3.classList.remove('active');
      //remove customized changes from local storage
      changeBG();
});

Bg3.addEventListener('click' , () => {
      darkColorLightness = '95%';
      whiteColorLightness = '10%';
      lightColorLightness = '0%';

      //add active class
      Bg3.classList.add('active');
      //remove active class from the others 
      Bg1.classList.remove('active');
      Bg2.classList.remove('active');
      //remove customized changes from local storage
      changeBG();
});
