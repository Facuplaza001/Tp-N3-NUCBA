const pizzas = [
  {   id:1,
      nombre: "Pizza muzzarella",
      ingredientes: ["Queso muzzarella", "Tomate"],
      precio: 700,
      imagen: "img/Muza.png",
  },
  {   id:2,
      nombre: "Pizza 4 quesos",
      ingredientes: ["Queso roquefort", "Queso muzzarella", "Queso parmesano", "Queso gouda", "Tomate"],
      precio: 900,
      imagen: 'img/cuatroquesos.png',
  },
  {   id:3,
      nombre: "Pizza Margarita",
      ingredientes: ["Tomate", "Queso muzzarella", "albahaca"],
      precio: 950,
      imagen: 'img/margarita.png',
  },
  {   id:4,
      nombre: "Pizza de champiñones",
      ingredientes: ["Tomate", "Queso muzzarella", "champiñones", "aceitunas", "jamon"],
      precio: 1000,
      imagen: 'img/champiniones.png',
  },
  {   id:5,
      nombre: "Pizza de anana",
      ingredientes: ["Tomate", "Anana", "Queso fresco", "Jamon"],
      precio: 1100,
      imagen: 'img/anana.png',
  },
  {   id:6,
      nombre: "Pizza de palmitos",
      ingredientes: ["Tomate", "Queso fresco", "Palmitos", "Jamon", "Salsa golf"],
      precio: 1200,
      imagen: 'img/palmitos.png',
  }, 
 
];
  
window.onload = (e) => {
    let precioPizza = document.getElementById('precioPizza');
    let nombrePizza = document.getElementById('nombrePizza');
    let ingredientesPizza = document.getElementById('ingredientesPizza');
    let imgPizza = document.getElementById('imgPizza');
   
  
    if (localStorage.length > 0) {
        precioPizza.textContent = localStorage.getItem("precioPizza");
  
        nombrePizza.textContent = localStorage.getItem("nombrePizza");
  
        ingredientesPizza.textContent = localStorage.getItem("ingredientesPizza");
  
        imgPizza.setAttribute('src', localStorage.getItem('imagenPizza'));
    } else {
        imgPizza.setAttribute('src', 'img/signo.png');
        }
    };
  
  
    let listado = document.getElementById('listadoPizzas');

    const buscarPizza = () => {
      let valueid = document.getElementById('valueId').value;
      let precioPizza = document.getElementById('precioPizza');
      let nombrePizza = document.getElementById('nombrePizza');
      let ingredientesPizza = document.getElementById('ingredientesPizza');
      let inputVacio = document.getElementById('inputVacio');
      let imgPizza = document.getElementById('imgPizza');
      inputVacio.textContent = "";
      precioPizza.textContent = "";
      nombrePizza.textContent = "";
      ingredientesPizza.textContent = "";
      imgPizza.setAttribute('src', 'img/signo.png')
  
    
  
      let found = pizzas.find(function(post, i) {
        inputVacio.textContent = ""
        if (post.id == valueid) {
            precioPizza.textContent = post.precio;
            localStorage.setItem("precioPizza", post.precio);
  
            nombrePizza.textContent = post.nombre;
            localStorage.setItem("nombrePizza", post.nombre);
  
            ingredientesPizza.textContent = post.ingredientes.join(" , ");
            localStorage.setItem("ingredientesPizza", post.ingredientes);
            
            imgPizza.setAttribute('src', post.imagen);
            localStorage.setItem("imagenPizza", post.imagen);
            return true;
        }
    });
  
    if (found == undefined) return inputVacio.textContent = "El valor ingresado es incorrecto."
    if (valueid === "") return inputVacio.textContent = "Debes ingresar un valor numerico."
  
}