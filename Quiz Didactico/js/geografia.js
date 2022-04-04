/* 
Descripción de la sección: Quiz simple de multiple choice
Algoritmos
- Escribir las preguntas en el DOM
- Corrección de respuesta correcta o incorrecta
- Funciones de botones anterior y siguiente
- Escribir puntaje actual
- guardar puntaje anterior (localStorage)
- Generar un "modal" cada vez que acerta a la pregunta
*/


/* --------------- Declarando arrays de objetos --------------- */
const preguntasGeo = 
    {
      q1: {
          
          p0: '1.- ¿Cuáles de los siguientes países son de Centroamérica?',
          a: 'A) EEUU, Chile, Costa Rica y México',
          b: 'B) Guatemala, Honduras, Chile y Costa Rica',
          c: 'C) Honduras, El Salvador, Haití y Costa Rica',
          d: 'D) Perú, Bolivia, Republica Dominicana y El Savador',
          answer1: 'incorrecto',
          answer2: 'incorrecto',
          answer3: 'correcto',
          answer4: 'incorrecto',
      } ,
    

      q2: {
          
        p0: '2.-¿Cuál es el baile nacional de Chile?',
        a: 'A) La cueca',
        b: 'B) La salsa',
        c: 'C) El merengue',
        d: 'D) El tango',
        answer1: 'correcto',
        answer2: 'incorrecto',
        answer3: 'incorrecto',
        answer4: 'incorrecto',

    } ,
    
      q3: {
            
        p0: '3.- ¿Qué países limitan Perú con ?',
        a: 'A) Chile, Argentina y Venezuela ',
        b: 'B) Bolivia, Chile, Brasil, Ecuador y Colombia',
        c: 'C) Bolivia, Brasil, Chile, Argentina y Paraguay',
        d: 'D) Perú es una isla',
        answer1: 'incorrecto',
        answer2: 'correcto',
        answer3: 'incorrecto',
        answer4: 'incorrecto',
    }
    
    };
  
  

  /* --------------- Escribiendo las preguntas en el DOM --------------- */

  //Seleccionando la tarjeta de GEO
  let papaCardGeo = document.querySelector('.papaCardGeo')
  let cardGeo1 = document.querySelector('.cardGeo1');

  
  

  //Declarando clase para el DOM
   class AlDom {

    constructor(preguntas) {
      
      this.preguntas = preguntas;
      
    }
  

    printDom( ) {
      cardGeo1.innerHTML =  

      
  `<div class="btn card_catg flex flex-col items-left py-10">
  <h2 class="font-bold mb-5">${this.preguntas.p0}</h2>
  <div class="flex flex-col items-left gap-5 undiv">
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction('${this.preguntas.answer1}')"
    >
        <button>${this.preguntas.a}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0]  hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction('${this.preguntas.answer2}')"
    >
      <butto >${this.preguntas.b}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction('${this.preguntas.answer3}')"
    >
      <butto >${this.preguntas.c}</button>
    </div>
    <div
      class="hover:bg-[#CABDF0] hover:border-[#BE84F0] card_alternativas alternativa" onClick="correction('${this.preguntas.answer4}')"
    >
      <butt  onclick="" >${this.preguntas.d}</button>
    </div>
    
     <div class="flex flex-col justify-center items-center md:flex-row gap-y-4 " > 
  
     <button class=" prev card_btns" onclick="sgte()" >anterior</button>
  
     <button class="  card_btns" onclick="sgte()" id="next" >Siguiente </button>
</div> 
   
  </div> 
</div>`

  papaCardGeo.appendChild(cardGeo1);

    }

  } 

 
  
  
  /* --------------- Seleccionando los botones de las alternativas --------------- */

    let alternativas = document.getElementsByClassName('alternativa');
    console.log(alternativas);

        for (const alternativa of alternativas) {
            alternativa.addEventListener('click', function () {
                    console.log('hola'); /* ---- No funciona ¿por qué?  */
                                   
            });        
    }
 

  //boton anterior
  let prev = document.getElementsByClassName('prev');
  

  
  /* --------------- creando cada pregunta --------------- */

  let geoQ1 = new AlDom(preguntasGeo.q1)
  let geoQ2 = new AlDom(preguntasGeo.q2)
  let geoQ3 = new AlDom(preguntasGeo.q3)



/* --------------- correccion --------------- */

  let ptje = []
  

  /* error */
  function error() {
  alert('Ups, lo siento!. No es correcto 😥') 
  }
  
  function correction(id) {
  
  if (id === 'correcto') {
    alert('super bien, sumas 1 punto 🥰')
    ptje.push(1);
    console.log(ptje);
    geoQ2.printDom()  /* ---- hacerlo dinámico  */

  } else if (id === 'incorrecto') {
    error();
  }
  
  console.log( 'Tu puntaje actual es: ' +
    ptje.reduce((a, b) => a + b, 0)
  )
  
  
  
  }
  

  /* --------------- Escribiendo pregunta 1 en el DOM --------------- */
  geoQ1.printDom()
  



/* --------------- En proceso  --------------- */

  let geoQ = [1, 2, 3];
    let i = 0;
    

  function sgte() {
   
    
      if(i >= geoQ.length-1) i = -1;
      i++;
      return printIt();
      
    }

      //lo print al Dom
      
      function printIt(){

	    return geoQ[i].printDom
      
       
    } 

  


