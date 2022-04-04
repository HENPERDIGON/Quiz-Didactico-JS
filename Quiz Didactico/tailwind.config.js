module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "300px",
        "3/4": "80%",
      },

      width: {
        "90%": "90%",
      },

      colors: {
        "rojo-TOW": "#bd1212",
        "cafe-TOW": "#E3BA24",
        "cafe-TOW-O": "#700000",
        "verde-TOW-O": "#44B00B",
        "verde-TOW-Cl": "#0EE34A",
        "celeste-TOW": "#2499E3",
        "amarillo-TOW": "#E3E024",
        "celeste-verde": "#0D9488",
      },

      fontFamily: {
        mainFont: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};

// //hero redes sociales
// 'facebook': '#226EBE',
// 'instagram': '#F28907',
// 'compartir': '#A9D941',
