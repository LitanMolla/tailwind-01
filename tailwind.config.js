/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // Colors Part Start
      colors: {
        brandColor: '#160C6D',
        overlyColor: 'rgba(22, 12, 109, 0.8)',
        navColor: 'rgba(22, 12, 109, 0.5)',
        secondaryColor: '#1BBF00',
        grayBG: '#F9F9FB',
        grayBG2: '#FDFDFD',
        grayBG3: '#F6F5FF',
        boxBG: '#C4C4C4',
        reviewBG: '#F8F8FF',
        serviceBG: '#F6F5FF',
        serviceItemBG: '#6B62C5',
        footerBG: '#6B62C5',
      },
      // Colors Part End
      
      // Container Part 
      maxWidth: {
        'containerHeader': '1170px',
      },
      // Container Part 

      // Font Family
      fontFamily: {
        open: ['Open Sans'],
        paprika: ['Paprika'],
        nunito: ['Nunito'],
      },
      // Font Family

      // Transtion 
      transitionTimingFunction: {
        transition5: '.5s',
      },
      // Transtion 

      // backgroundImage
      backgroundImage: {
        bannerBG: "url('../images/bannerBG.jpg')",
        box1: "url('../images/card1.jpg')",
        counterbg: "url('../images/counterbg.png')",
        whybg: "url('../images/whybg.png')",
        realBG: "url('../images/real.png')",
        newsBG: "url('../images/newsBG.png')",
      },
      // backgroundImage

      // 
      borderRadius: {
        'roundBottom': '0 0 15px 15px',
      },
      // 
      flex: {
        2: '2 2 0%',
        3: '3 3 0%', 
        4: '4 4 0%', 
        5: '5 5 0%', 
        6: '6 6 0%', 
      },
    },
  },
  plugins: [],
}