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
      },
      // Colors Part End
      
      // Container Part 
      maxWidth: {
        container: '1170px',
      },
      // Container Part 

      // Font Family
      fontFamily: {
        open: ['Open Sans'],
        paprika: ['Paprika'],
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
      },
      // backgroundImage
    },
  },
  plugins: [],
}