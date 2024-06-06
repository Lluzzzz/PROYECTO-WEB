let recetas = [
    {
        nombre: "PAIN AU CHOCOLAT",
        descripcion: "Este elemento básico del desayuno francés está hecho con una masa de croissant hojaldrada y mantecosa, y un solo trozo de chocolate negro y rico que se coloca cuidadosamente en el interior antes de hornearlo hasta obtener la perfección dorada.",
        linkReceta: "recetas/r1.html",
        ingredientes: [
            "Leche",
            "Azúcar",
            "Harina 0000",
            "Harina 000",
            "Levadura",
            "Mantequilla",
            "Manteca con sal",
            "Sal",
            "Spray antiadherente"
        ]
    },
    {
        nombre: "Pain aux raisins",
        descripcion: "Pan con uvas pasas en francés, es una pieza de bollería francesa, equivalente a la caracola española. Se elabora con una masa hojaldrada mezclada con pasas y crema pastelera, y enrollada en espiral aplanada. Se le da lustre con una fina capa de azúcar o azúcar glas o huevo.",
        linkReceta: "recetas/r2.html",
        ingredientes: [
            "Pasas",
            "Agua",
            "Coñac (opcional)",
            "Levadura seca instantánea",
            "Agua tibia",
            "Harina para pan",
            "Leche",
            "Azúcar granulada",
            "Mantequilla sin sal, derretida y enfriada",
            "Sal fina",
            "Mantequilla sin sal, ablandada",
            "Frangipane o relleno de almendras dulces",
            "Huevo grande",
            "Leche"
        ]
    },
    {
        nombre: "Madeleines",
        descripcion: "Magdalena o madalena​ es un pequeño bollo tradicional de Francia y España.​ Las magdalenas francesas tienen la forma de una concha pequeña, que se obtiene cociéndolas al horno en una placa metálica que tiene hoyos con dicha forma.",
        linkReceta: "recetas/r3.html",
        ingredientes: [
            "Harina de trigo todo uso",
            "Mantequilla",
            "Azúcar blanca",
            "Huevos L o XL",
            "Leche",
            "Esencia de vainilla",
            "Levadura química (polvos de hornear)",
            "Sal"
        ]
    },
    {
        nombre: "Rosas de manzana",
        descripcion: "Deliciosas rosas de manzana con hojaldre, perfectas para un postre o una merienda dulce.",
        linkReceta: "recetas/r4.html",
        ingredientes: [
            "400 g de manzanas rojas",
            "1 limón",
            "1 lámina de masa de hojaldre rectangular",
            "150 g de mermelada al gusto",
            "3 cucharadas de azúcar moreno",
            "1 cucharadita de canela en polvo",
            "1 cucharada de azúcar glas"
        ]
    },
    {
        nombre: "Sopa de trufas",
        descripcion: "Esta sopa fue creada por Bocuse en 1975 en honor del presidente de Francia. Por ello también es conocida como Sopa Valéry Giscard d'Estaing o Sopa de trufas Elyseé. En el restaurante de Bocuse en Lyon, con 3 estrellas Michelin desde hace 50 años, este plato cuesta 85 euros.",
        linkReceta: "recetas/r5.html",
        ingredientes: [
            "80 g de trufa negra (Tuber melanosporum)",
            "1 litro de caldo concentrado de ave",
            "100 g de martignon",
            "120 g de foie mi-cuit",
            "10 g de pechuga de pollo",
            "1 lámina de hojaldre",
            "1 huevo"
        ]
    },
    {
        nombre: "Salmonetes con escamas de patata crujiente",
        descripcion: "Esta receta es una muestra impresionante de técnica culinaria. Además, es imprescindible la paciencia propia de los maestros de la cocina para el armado de un plato inigualable. Su elaboración lleva una espectacular salsa sobre la que reposará el pescado. Se trata de una crema de crustáceos elaborada en base a roux y mantequilla de langosta. A esta preparación se le agrega, al final, un poco de nata para completar su consistencia.",
        linkReceta: "recetas/r6.html",
        ingredientes: [
            "8 salmonetes de unos 100 g cada uno",
            "4 patatas medianas peladas",
            "8 cucharadas de mayonesa",
            "4 cucharadas de ketchup",
            "4 cucharadas de aceite de oliva",
            "Sal",
            "Pimienta"
        ]
    },
    {
        nombre: "HUEVOS A LA PIPERADE",
        linkReceta: "recetas/r7.html",
        descripcion: "Los huevos a la piperade son una receta tradicional vasca que combina huevos cocidos sobre una base de pimientos, tomates y cebollas sofritas. Es un plato colorido y sabroso, perfecto para cualquier ocasión.",
        ingredientes: [
            "6 huevos",
            "4 pimientos verdes italianos",
            "2 pimientos rojos",
            "4 tomates grandes enteros",
            "1 cebolla grande nueva",
            "2 dientes de ajo",
            "1 guindilla roja fresca",
            "4 cucharadas aceite de oliva virgen",
            "1 cucharadita azúcar moreno",
            "sal",
            "pimienta en grano recién molida",
            "una nuez de mantequilla"
        ]
    },
    {
        nombre: "LUBINA EN HOJALDRE",
        linkReceta: "recetas/r8.html",
        descripcion: "Este hojaldre de lubina es un 'Wellington' de pescado en toda regla. Perfecto como idea navideña pero también para cualquier otro día especial en el que queramos sorprender.",
        ingredientes: [
            "1,250 gr de lubina, sin piel y sin espinas",
            "1 paquete de masa hojaldre",
            "1 huevo",
            "1 paquete de brotes tiernos de espinacas",
            "100 gr de queso en láminas muy finas",
            "Hierbas frescas (perejil, cilantro, eneldo, tomillo, etc.)",
            "1 limón",
            "Sal Maldon y pimienta molida"
        ]
    },
    {
        nombre: "LE MAGRET DE CANARD",
        linkReceta: "recetas/r9.html",
        descripcion: "Es un filete de carne de pato, cortado finamente y que se acompaña de diferentes maneras: con papas, con verduras, con puré, y se puede presentar con salsa de naranja, ahumado, cocinado. Es una carne roja, delicioso acompañado de un buen vino tinto. Sin duda uno de los platos preferidos de los franceses.",
        ingredientes: [
            "Magret de pato",
            "Cebolleta",
            "Vinagre balsámico",
            "Miel",
            "Rama de romero fresco",
            "Pimienta negra molida",
            "Sal"
        ]
    }
    


];

function buscar() {
    const name = document.getElementById('nombre').value.toLowerCase().replace(/\s/g, '');

    let nombre;
    let descripcion;
    let ingredientes;
    let linkReceta;

    for (let i = 0; i < recetas.length; i++) {
        const nombreReceta = recetas[i].nombre.toLowerCase().replace(/\s/g, '');

        if (nombreReceta === name) {
            nombre = recetas[i].nombre;
            descripcion = recetas[i].descripcion;
            ingredientes = recetas[i].ingredientes;
            linkReceta = recetas[i].linkReceta;
            break;
        }
    }

    const titulo = document.getElementById('title');
    titulo.innerText = "Receta: " + nombre;

    const descripcionElement = document.getElementById('descripcion');
    descripcionElement.innerText = descripcion;

    const linkElement = document.getElementById('linkReceta');
    linkElement.setAttribute('href', linkReceta);

    const listaIngredientes = document.getElementById('ingredientes');
    listaIngredientes.innerHTML = '';

    const ul = document.createElement('ul');
    for (let i = 0; i < ingredientes.length; i++) {
        const li = document.createElement('li');
        li.textContent = ingredientes[i];
        ul.appendChild(li);
    }

    listaIngredientes.appendChild(ul);
}
