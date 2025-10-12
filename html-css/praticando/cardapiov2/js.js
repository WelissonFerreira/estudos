
// 1. IMPORTAÇÕES - SEMPRE NO TOPO!
import { db, collection, addDoc } from './firebase-config.js';



let catalogoDeProdutos = {
    "produto-arthur-grande": {
        tipo: "lanche",
        nome: "Especial Arthur Grande",
        precoRiscado: 65.00,
        preco: 55.00,
        descricao: "Especial da casa, dividido em 4 pedaços e serve 4 pessoas.",
        ingredientes: [
            "Pão Grande",
            "Bacon",
            "Calabresa",
            "Frango Desfiado",
            "Filé de Alcatra",
            "2x Salsicha",
            "2x Ovos",
            "2x Hamburguer",
            "2x Queijo",
            "2x Presunto",
            "Molho Rosé",
            "Salada",
            "Tomate"
        ],
        imagem: "imagens/lanches/especial4grande.png",
        adicionais: [
            { nome: "Frango desfiado", preco: 7.00 },
            { nome: "Filé de alcatra", preco: 10.00 },
            { nome: "Calabresa", preco: 7.00 },
            { nome: "Bacon", preco: 7.00 },
            { nome: "Carne do sol", preco: 10.00 },
            { nome: "Queijo", preco: 3.00 },
            { nome: "Presunto", preco: 2.00 },
            { nome: "Ovo", preco: 2.00 },
            { nome: "Queijo coalho", preco: 3.00 },
            { nome: "Salsicha", preco: 2.00 },
            { nome: "Hambúrguer", preco: 3.00 }
        ]
    },


    "produto-arthur-baby": {
    tipo: "lanche",
    nome: "Especial Arthur Baby",
    precoRiscado: 45.00, // opcional, se quiser mostrar preço riscado
    preco: 40.00,
    descricao: "Especial da casa, dividido em 2 pedaços e servem 2 pessoas.",
    ingredientes: [
        "Pão Grande",
        " Bacon ",
        " Calabresa",
        " Frango Desfiado",
        " Filé de Alcatra",
        " Salsicha",
        " Ovo",
        " Hambúrguer",
        " Queijo",
        " Presunto",
        " Molho Rosé",
        " Salada",
        " Tomate"
    ],
    imagem: "imagens/lanches/arthurbabyatt.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},


    "produto-passaporte-carne": {
    tipo: "lanche",
    nome: "Passaporte de Carne",
    precoRiscado: 20.00, // preço riscado sugerido
    preco: 17.00,
    descricao: "Passaporte de carne super recheado",
    ingredientes: [
        "Pão Sedão",
        "Carne Moída",
        "Salsicha",
        "Tomate Picado Verde",
        "Milho e Ervilha",
        "Queijo Ralado",
        "Katchup",
        "Maionese",
        "Batata Palha"
    ],
    imagem: "imagens/lanches/passaportecarnealternativo.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-passaporte-frango": {
    tipo: "lanche",
    nome: "Passaporte de Frango",
    precoRiscado: 21.00,
    preco: 18.00,
    descricao: "Passaporte de frango super recheado",
    ingredientes: [
        "Pão Sedão",
        "Frango Desfiado",
        "Salsicha",
        "Tomate Picado Verde",
        "Milho e Ervilha",
        "Queijo Ralado",
        "Katchup",
        "Maionese",
        "Batata Palha"
    ],
    imagem: "imagens/lanches/passaportefrangoalternativo.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xbacon": {
    tipo: "lanche",
    nome: "X-Bacon",
    precoRiscado: 25.00,
    preco: 22.00,
    descricao: "X-Bacon topadão.",
    ingredientes: [
        "Pão",
        "Bacon",
        "Hambúrguer",
        "Ovo",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/x-bacon.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},



    "produto-passaporte-carnesol": {
    tipo: "lanche",
    nome: "Passaporte de Carne de Sol",
    precoRiscado: 28.00,
    preco: 25.00,
    descricao: "Passaporte de Carne de Sol super recheado",
    ingredientes: [ 
        "Pão Sedão",
        "Carne de Sol",
        "Catupiry",
        "Queijo Coalho",
        "Salsicha",
        "Tomate Picado Verde",
        "Milho e Ervilha",
        "Queijo Ralado",
        "Ketchup",
        "Maionese",
        "Batata Palha",
    ],
    imagem: "imagens/lanches/passaportecarnedesolalternativo2.jpg",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-passaporte-misto": {
    tipo: "lanche",
    nome: "Passaporte de Misto",
    precoRiscado: 27.00,
    preco: 24.00,
    descricao: "Passaporte de Misto super recheado",
    ingredientes: [
        "Pão Sedão",
        "Carne Moída",
        "Frango Desfiado",
        "Salsicha",
        "Tomate Picado Verde",
        "Milho e Ervilha",
        "Queijo Ralado",
        "Kettchup",
        "Maionese",
        "Batata Palha",
    ],
    imagem: "imagens/lanches/sanduichemistoalternativo.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xtudo": {
    tipo: "lanche",
    nome: "X-Tudo",
    precoRiscado: 38.00,
    preco: 34.00,
    descricao: "X-Tudo Super recheado. Serve 2 pessoas.",
    ingredientes: [
        "Pão Grande",
        "Bacon",
        "Calabresa",
        "Frango Desfiado",
        "Salsicha",
        "Ovo",
        "Hamburguer",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/x-tudo.jpg",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-misto-quente": {
    tipo: "lanche",
    nome: "Misto Quente",
    precoRiscado: 14.00,
    preco: 12.00,
    descricao: "Misto Quente naquele modelo",
    ingredientes: [
        "Pão Assado na chapa",
        "2 Fatias de Queijo",
        "2 Fatias de Presunto"
    ],
    imagem: "imagens/lanches/mistoquente.png",
    adicionais: [
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 }
    ]
},

"produto-queijo-quente": {
    tipo: "lanche",
    nome: "Queijo Quente",
    precoRiscado: 14.00,
    preco: 12.00,
    descricao: "Queijo Quente naquele padrão",
    ingredientes: [
        "Pão Assado na chapa",
        "3 Fatias de Queijo"
    ],
    imagem: "imagens/lanches/queijo-quente.jpg",
    adicionais: [
        { nome: "Queijo", preco: 3.00 },
        { nome: "Ovo", preco: 2.00 }
    ]
},

"produto-americano": {
    tipo: "lanche",
    nome: "Americano",
    precoRiscado: 18.00,
    preco: 16.00,
    descricao: "Americano clássico naquele padrão",
    ingredientes: [ 
        "Pão",
        "Ovo",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/americano2.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},


  "produto-bauru": {
    tipo: "lanche",
    nome: "Baurú",
    precoRiscado: 18.00,
    preco: 16.00,
    descricao: "Baurú daquele jeito",
    ingredientes: [
        "Pão",
        "Salsicha",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/bauruatt.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-hamburguer": {
    tipo: "lanche",
    nome: "Hambúrguer",
    precoRiscado: 20.00,
    preco: 17.00,
    descricao: "Hambúrguer daquele jeito",
    ingredientes: [
        "Pão",
        "Hambúrguer",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/hamburgueratt.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xburguer": {
    tipo: "lanche",
    nome: "X-Burguer",
    precoRiscado: 20.00,
    preco: 18.00,
    descricao: "X Burguersão daquele jeito",
    ingredientes: [
        "Pão",
        "Hambúrguer",
        "Queijo",
        "Presunto",
        "Ovo",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/x-burguer.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xsalsicha": {
    tipo: "lanche",
    nome: "X-Salsicha",
    precoRiscado: 20.00,
    preco: 18.00,
    descricao: "X Salsichão daquele jeito",
    ingredientes: [
        "Pão",
        "Salsicha",
        "Hambúrguer",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/x-salsicha.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-minuano": {
    tipo: "lanche",
    nome: "Minuano",
    precoRiscado: 23.00,
    preco: 20.00,
    descricao: "Minuano clássico naquele padrão",
    ingredientes: [
        "Pão",
        "Ovo",
        "Salsicha",
        "Hambúrguer",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/minuano1.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xfrango": {
    tipo: "lanche",
    nome: "X-Frango",
    precoRiscado: 25.00,
    preco: 22.00,
    descricao: "X-Frango topadão",
    ingredientes: [
        "Pão",
        "Frango Desfiado",
        "Catupiry",
        "Milho",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/xfrango.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xcarnedesol": {
    tipo: "lanche",
    nome: "X-Carne de Sol",
    precoRiscado: 25.00,
    preco: 22.00,
    descricao: "X-Carne de Sol topadão",
    ingredientes: [
        "Pão",
        "Carne de Sol Desfiada",
        "Catupiry",
        "Queijo",
        "Presunto"
    ],
    imagem: "imagens/lanches/carnedesolcaipira.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

    "produto-xcalabresa": {
    tipo: "lanche",
    nome: "X-Calabresa",
    precoRiscado: 23.00,
    preco: 20.00,
    descricao: "X-Calabresa topadão",
    ingredientes: [
        "Pão",
        "Calabresa",
        "Ovo",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/xcalabresa.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-frangosalada": {
    tipo: "lanche",
    nome: "Frango Salada",
    precoRiscado: 25.00,
    preco: 22.00,
    descricao: "Frango Salada naquele padrão",
    ingredientes: [
        "Pão",
        "Frango Desfiado",
        "Hambúrguer",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/frangosalada.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-xfile": {
    tipo: "lanche",
    nome: "X-Filé",
    precoRiscado: 26.00,
    preco: 23.00,
    descricao: "X-Filé topadão",
    ingredientes: [
        "Pão",
        "Filé de Alcatra",
        "Ovo",
        "Queijo",
        "Presunto",
        "Ervilha",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/xfile.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-filebacon": {
    tipo: "lanche",
    nome: "Filé Bacon",
    precoRiscado: 29.00,
    preco: 26.00,
    descricao: "Filé-Bacon topadão",
    ingredientes: [
        "Pão",
        "Filé de Alcatra",
        "Bacon",
        "Ovo",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/filebacon.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-frangobresa": {
    tipo: "lanche",
    nome: "Frango-Bresa",
    precoRiscado: 28.00,
    preco: 25.00,
    descricao: "Frango-Bresa topadão",
    ingredientes: [
        "Pão",
        "Frango Desfiado",
        "Calabresa",
        "Ovo",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/frangobresa.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},


    "produto-filefrango": {
    tipo: "lanche",
    nome: "Filé-Frango",
    precoRiscado: 29.00,
    preco: 26.00,
    descricao: "Filé-Frango topadão",
    ingredientes: [
        "Pão",
        "Filé de Alcatra",
        "Frango Desfiado",
        "Queijo",
        "Presunto",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/xfrango.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},

"produto-carnedesolcaipira": {
    tipo: "lanche",
    nome: "Carne de Sol Caipira",
    precoRiscado: 28.00,
    preco: 25.00,
    descricao: "Carne de Sol Caipira topadão",
    ingredientes: [
        "Pão",
        "Carne de Sol Desfiada",
        "Catupiry",
        "Queijo Coalho",
        "Milho e Ervilha",
        "Molho Rosé",
        "Salada"
    ],
    imagem: "imagens/lanches/carnedesolcaipira.png",
    adicionais: [
        { nome: "Frango Desfiado", preco: 7.00 },
        { nome: "Filé de Alcatra", preco: 10.00 },
        { nome: "Calabresa", preco: 7.00 },
        { nome: "Bacon", preco: 7.00 },
        { nome: "Carne do Sol", preco: 10.00 },
        { nome: "Queijo", preco: 3.00 },
        { nome: "Presunto", preco: 2.00 },
        { nome: "Ovo", preco: 2.00 },
        { nome: "Queijo Coalho", preco: 3.00 },
        { nome: "Salsicha", preco: 2.00 },
        { nome: "Hambúrguer", preco: 3.00 }
    ]
},



    "produto-acai-200ml": {
        tipo: "acai",
        nome: "Açai 200ml - Mini Delícia",
        descricao: "Açaí 200ml: compacto e saboroso (2 acompanhamentos · 1 fruta · 1 cobertura)",
        imagem: "imagens/acai/acai200ml.png",
        precoRiscado: 15.00,
        preco: 10.00,
        limiteAcompanhamentos: 2,
        limiteFrutas: 1,
        limiteCoberturas: 1,
        acompanhamentos: [
                    {nome: "Leite em Pó", quantidade: 0},
                    {nome: "Granola", quantidade: 0},
                    {nome: "OvoMaltine", quantidade: 0},
                    {nome: "Sucrilhos", quantidade: 0},
                    {nome: "M&M", quantidade: 0},
                    {nome: "Paçoca", quantidade: 0},
                    {nome: "Jujuba", quantidade: 0},
                    {nome: "Farinha Lacta", quantidade: 0},
                    {nome: "Flocos de Arroz", quantidade: 0},
                    {nome: "Amendoim", quantidade: 0},
                    {nome: "Nescau Cereal", quantidade: 0}
                ],
                coberturas: [
                    {nome: "Leite Condensado", quantidade: 0},
                    {nome: "Chocolate", quantidade: 0},
                    {nome: "Morango", quantidade: 0},
                    {nome: "Amora", quantidade: 0},
                    {nome: "Menta", quantidade: 0},
                    {nome: "Doce de Leite", quantidade: 0}
                ],
                frutas: [
                    {nome: "Banana", quantidade: 0},
                    {nome: "Uva", quantidade: 0}
                ],
            },


    "produto-acai-300ml": {
                tipo: "acai",
                nome: "Açai 300ml - Clássico",
                descricao: "Açaí 300ml: na medida certa (3 acompanhamentos · 1 fruta · 1 cobertura)",
                imagem: "imagens/acai/acai200ml.png",
                precoRiscado: 20.00,
                preco: 14.00,
                limiteAcompanhamentos: 3,
                limiteFrutas: 1,
                limiteCoberturas: 1,
                acompanhamentos: [
                    {nome: "Leite em Pó", quantidade: 0},
                    {nome: "Granola", quantidade: 0},
                    {nome: "OvoMaltine", quantidade: 0},
                    {nome: "Sucrilhos", quantidade: 0},
                    {nome: "M&M", quantidade: 0},
                    {nome: "Paçoca", quantidade: 0},
                    {nome: "Jujuba", quantidade: 0},
                    {nome: "Farinha Lacta", quantidade: 0},
                    {nome: "Flocos de Arroz", quantidade: 0},
                    {nome: "Amendoim", quantidade: 0},
                    {nome: "Nescau Cereal", quantidade: 0}
                ],
                coberturas: [
                    {nome: "Leite Condensado", quantidade: 0},
                    {nome: "Chocolate", quantidade: 0},
                    {nome: "Morango", quantidade: 0},
                    {nome: "Amora", quantidade: 0},
                    {nome: "Menta", quantidade: 0},
                    {nome: "Doce de Leite", quantidade: 0}
                ],
                frutas: [
                    {nome: "Banana", quantidade: 0},
                    {nome: "Uva", quantidade: 0},
                    {nome: "Kiwi", quantidade: 0}
                    
                ],
                
                
    },

        "produto-acai-500ml": {
                tipo: "acai",
                nome: "Açai 500ml - Generoso",
                descricao: "Açaí 500ml: para matar a fome (4 acompanhamentos · 1 fruta · 1 cobertura)",
                imagem: "imagens/acai/acai500ml.png",
                precoRiscado: 25.00,
                preco: 17.00,
                limiteAcompanhamentos: 4,
                limiteFrutas: 1,
                limiteCoberturas: 1,
                acompanhamentos: [
                    {nome: "Leite em Pó", quantidade: 0},
                    {nome: "Granola", quantidade: 0},
                    {nome: "OvoMaltine", quantidade: 0},
                    {nome: "Sucrilhos", quantidade: 0},
                    {nome: "M&M", quantidade: 0},
                    {nome: "Paçoca", quantidade: 0},
                    {nome: "Jujuba", quantidade: 0},
                    {nome: "Farinha Lacta", quantidade: 0},
                    {nome: "Flocos de Arroz", quantidade: 0},
                    {nome: "Amendoim", quantidade: 0},
                    {nome: "Nescau Cereal", quantidade: 0}
                ],
                coberturas: [
                    {nome: "Leite Condensado", quantidade: 0},
                    {nome: "Chocolate", quantidade: 0},
                    {nome: "Morango", quantidade: 0},
                    {nome: "Amora", quantidade: 0},
                    {nome: "Menta", quantidade: 0},
                    {nome: "Doce de Leite", quantidade: 0}
                ],
                frutas: [
                    {nome: "Banana", quantidade: 0},
                    {nome: "Uva", quantidade: 0},
                    {nome: "Kiwi", quantidade: 0}
                    
                ],
                
                
    },

        "produto-acai-700ml": {
                tipo: "acai",
                nome: "Açai 700ml - Família",
                descricao: "Açaí 700ml: gigante e irresistível (5 acompanhamentos · 1 fruta · 1 cobertura)",
                imagem: "imagens/acai/acai700ml.png",
                precoRiscado: 30.00,
                preco: 24.00,
                limiteAcompanhamentos: 5,
                limiteFrutas: 1,
                limiteCoberturas: 1,
                acompanhamentos: [
                {nome: "Leite em Pó", preco: 0},
                    {nome: "Granola", preco: 0},
                    {nome: "OvoMaltine", preco: 0},
                    {nome: "Sucrilhos", preco: 0},
                    {nome: "M&M", preco: 0},
                    {nome: "Paçoca", preco: 0},
                    {nome: "Jujuba", preco: 0},
                    {nome: "Farinha Lacta", preco: 0},
                    {nome: "Flocos de Arroz", preco: 0},
                    {nome: "Amendoim", preco: 0},
                    {nome: "Nescau Cereal", preco: 0}
                ],
                coberturas: [
                    {nome: "Leite Condensado", preco: 0},
                    {nome: "Chocolate", preco: 0},
                    {nome: "Morango", preco: 0},
                    {nome: "Amora", preco: 0},
                    {nome: "Menta", preco: 0},
                    {nome: "Doce de Leite", preco: 0}
                ],
                frutas: [
                    {nome: "Banana", preco: 0},
                    {nome: "Uva", preco: 0},
                    {nome: "Kiwi", preco: 0}
                    
                ],
                
    },


    "produto-cocacola250ml": {
        tipo: "bebida",
        nome: "Coca-Cola em lata" ,
        precoRiscado: 8.00,
        preco: 6.00 ,
        descricao: "Coca-Cola em lata de 250 ml",
        imagem: "imagens/bebidas/cocacola350ml.png"
    },

    "produto-guarana250ml": {
        tipo: "bebida",
        nome: "Guaraná em lata",
        precoRiscado: 8.00,
        preco: 6.00,
        descricao: "Guanará em lata de 250 ml",
        imagem: "imagens/bebidas/GuaranaLataATTpngSFundo.png"
    },

    "produto-fanta250ml": {
      tipo: "bebida",
      nome: "Fanta 250ml",
      precoRiscado: 8.00,
      preco: 6.00,
      descricao: "Fanta em lata",
      imagem: "imagens/bebidas/Fantalata350ml.png"
    },

    "produto-soda250ml": {
      tipo: "bebida",
      nome: "Soda 250ml",
      precoRiscado: 8.00,
      preco: 6.00,
      descricao: "Soda em lata",
      imagem: "imagens/bebidas/sodalata.png"
    },

    "produto-cocacola1L": {
      tipo: "bebida",
      nome: "Coca-Cola 1L",
      precoRiscado: 12.00,
      preco: 10.00,
      descricao: "Coca-Cola 1L",
      imagem: "imagens/bebidas/Coca1LA.png"
    },

    "produto-guarana1L": {
      tipo: "bebida",
      nome: "Guaraná 1L",
      precoRiscado: 10.00,
      preco: 8.00,
      descricao: "Guaraná 1L",
      imagem: "imagens/bebidas/guarana1LA.png"
    },

    "produto-fanta1L": {
      tipo: "bebida",
      nome: "Fanta 1L",
      precoRiscado: 10.00,
      preco: 8.00,
      descricao: "Fanta 1L",
      imagem: "imagens/bebidas/fanta1LA.png"
    },

    "produto-soda1L": {
      tipo: "bebida",
      nome: "Soda 1L",
      precoRiscado: 10.00,
      preco: 8.00,
      descricao: "Soda 1L",
      imagem: "imagens/bebidas/soda1LA.png"
    },

    "produto-cocacola2L": {
      tipo: "bebida",
      nome: "Coca-Cola 2L",
      precoRiscado: 15.00,
      preco: 13.00,
      descricao: "Coca-Cola 2L",
      imagem: "imagens/bebidas/Coca2LA.png"
    },

    "produto-guarana2L": {
      tipo: "bebida",
      nome: "Guaraná 2L",
      precoRiscado: 14.00,
      preco: 12.00,
      descricao: "Guaraná 2L",
      imagem: "imagens/bebidas/Guarana2LA.png"
    },

    "produto-fanta2L": {
      tipo: "bebida",
      nome: "Fanta 2L",
      precoRiscado: 14.00,
      preco: 12.00,
      descricao: "Fanta 2L",
      imagem: "imagens/bebidas/Fanta2LA.png"
    },

    "produto-soda2L": {
      tipo: "bebida",
      nome: "Soda 2L",
      precoRiscado: 14.00,
      preco: 12.00,
      descricao: "Soda 2L",
      imagem: "imagens/bebidas/soda2LA.png"
    },

      "produto-sucolaranja700ml": {
      tipo: "bebida",
      nome: "Suco Natural Laranja no Copo 700ml",
      precoRiscado: 14.00,
      preco: 10.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/sucolaranjacopo500ml.png"
    },

      "produto-sucolaranja1L": {
      tipo: "bebida",
      nome: "Suco Natural Laranja na Jarra 1L",
      precoRiscado: 25.00,
      preco: 20.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/jarralaranja1L.png"
    },

      "produto-suco-polpa-caju500ml": {
      tipo: "bebida",
      nome: "Suco Caju da Polpa – 500ml.",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaCaju.jpg"
    },

      "produto-suco-polpa-caja500ml": {
      tipo: "bebida",
      nome: "Suco Cajá da Polpa – 500ml.",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaCaja.png"
    },

      "produto-suco-polpa-acerola500ml": {
      tipo: "bebida",
      nome: "Suco Acerola da Polpa – 500ml",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaAcerola.jpg"
    },

      "produto-suco-polpa-goiaba500ml": {
      tipo: "bebida",
      nome: "Suco Goiaba da Polpa – 500ml",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaGoiaba.jpg"
    },

      "produto-suco-polpa-graviola500ml": {
      tipo: "bebida",
      nome: "Suco Graviola da Polpa – 500ml",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaGraviola.jpg"
    },

      "produto-suco-polpa-manga500ml": {
      tipo: "bebida",
      nome: "Suco Manga da Polpa – 500ml",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaManga.jpg"
    },

      "produto-suco-polpa-abacaxi500ml": {
      tipo: "bebida",
      nome: "Suco Abacaxi da Polpa – 500ml",
      precoRiscado: 8.00,
      preco: 7.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaAbacaxi.jpg"
    },

      "produto-suco-polpa-caju1L": {
      tipo: "bebida",
      nome: "Suco Caju da Polpa – 1L",
      precoRiscado: 20.00,
      preco: 15.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaCaju.jpg"
      
    },

      "produto-suco-polpa-caja1L": {
      tipo: "bebida",
      nome: "Suco Caja da Polpa – 1L",
      precoRiscado: 20.00,
      preco: 15.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaCaja.png"
    },

      "produto-suco-polpa-acerola1L": {
      tipo: "bebida",
      nome: "Suco Acerola da Polpa – 1L",
      precoRiscado: 20.00,
      preco: 15.00,
      descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
      imagem: "imagens/bebidas/PolpaAcerola.jpg"
    },

    "produto-suco-polpa-goiaba1L": {
        tipo: "bebida",
        nome: "Suco Goiaba da Polpa – 1L",
        precoRiscado: 20.00,
        preco: 15.00,
        descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
        imagem: "imagens/bebidas/PolpaGoiaba.jpg"
    },

    "produto-suco-polpa-graviola1L": {
        tipo: "bebida",
        nome: "Suco Graviola da Polpa – 1L",
        precoRiscado: 20.00,
        preco: 15.00,
        descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
        imagem: "imagens/bebidas/PolpaGraviola.jpg"
    },

    "produto-suco-polpa-manga1L": {
        tipo: "bebida",
        nome: "Suco Manga da Polpa – 1L",
        precoRiscado: 20.00,
        preco: 15.00,
        descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
        imagem: "imagens/bebidas/PolpaManga.jpg"
    },

    "produto-suco-polpa-abacaxi1L": {
        tipo: "bebida",
        nome: "Suco Abacaxi da Polpa – 1L",
        precoRiscado: 20.00,
        preco: 15.00,
        descricao: "Espremido na hora, 100% fruta. Refrescante, doce e bom demaisss.",
            imagem: "imagens/bebidas/PolpaAbacaxi.jpg"
    },




}





const precosEntrega = {
    "Feitosa": 2,
    "Farol": 5,
    "Jacintinho": 5,
    "Peixoto": 5,
    "Poço": 7,
    "Barro Duro": 5,
    "Serraria": 7,
    "Cruz das Almas": 7,
    "Ponta Verde": 7,
    "Jatiúca": 7,
    "Pajuçara": 7,
    "Jaraguá": 7,
    "Pitanguinha": 5,
}

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

  preloader.style.opacity = "0"; // inicia fade

setTimeout(() => {
    preloader.style.display = "none"; // some do DOM
  }, 500); // tempo igual ao transition
});



function atualizarContadorCarrinho() {
    let contador = document.querySelector(".contcarrinho");

    if (!contador) return; // se não existir no HTML, não dá erro

    // Soma todas as quantidades
    let total = itensCarrinho.reduce((soma, item) => soma + item.quantidade, 0);

    contador.textContent = total;
}

// ==========================================================================================
// SELETORES GLOBAIS

 // Configurando botão do carrinnho para o contador do carrinho e para pegar os objetos
let abrirCarrinho = document.querySelector('#botaoCarrinho')
let modalCarrinho = document.querySelector('#ModalCarrinho')
let fecharCarrinho = document.querySelector('.close-button-carrinho')
let mensagemCarrinhoVazioDiv = document.querySelector('#mensagem-carrinho-vazio');
let itensCarrinho = [];

let scrollPosition = 0;


// ==========================================================================================
// FUNÇÃO DE COMPARAÇÃO DE OBJETOS PARA ADICIONAIS E BEBIDAS
// Esta função verifica se dois objetos são idênticos em chaves e valores.
function saoObjetosIguais(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function arraysIguais(array1 = [], array2 = []) {
    // 1. Primeiro, verifique se os tamanhos são diferentes. Se forem, já retorna false.
    if (array1.length !== array2.length) {
        return false
    }

     // 2. Use o método `every` para percorrer e comparar cada elemento.
    return array1.every((elemento, indice) => {
        return saoObjetosIguais(elemento, array2[indice]);
    })


}

// ==========================================================================================
// Na função adicionarAoCarrinho:
// Mude a lógica para usar apenas saoObjetosIguais
function adicionarAoCarrinho(produto, quantidade, adicionais, bebidas, acompanhamentos, frutas, coberturas, observacao = '') {

    if (AbertoFechado()) {

    let itemExistente = itensCarrinho.find(item =>
        item.produto.nome === produto.nome &&
        saoObjetosIguais(item.adicionais, adicionais) &&
        saoObjetosIguais(item.bebidas, bebidas) &&
        saoObjetosIguais(item.acompanhamentos, acompanhamentos) && // AQUI
        saoObjetosIguais(item.frutas, frutas) && // AQUI
        saoObjetosIguais(item.coberturas, coberturas) && // AQUI
        item.observacao === observacao
    );

    if (itemExistente) {
        itemExistente.quantidade += parseInt(quantidade);
    } else {
        itensCarrinho.push({
            produto: produto,
            quantidade: parseInt(quantidade),
            adicionais: { ...adicionais },
            bebidas: { ...bebidas },
            acompanhamentos: { ...acompanhamentos }, // AQUI
            frutas: { ...frutas }, // AQUI
            coberturas: { ...coberturas }, // AQUI
            observacao: observacao,
        });
    }

    atualizarCarrinho();
    atualizarContadorCarrinho();













    } else {
        // Se a função retornar 'false' (fechado por hora ou dia)
        alert("Desculpe, estamos fechados. Nosso horário de atendimento é das 18:00h à 01:00h, exceto nas Segundas-Feiras.");
        return; 
    }




   
}





// ==========================================================================================


fecharCarrinho.addEventListener('click', function() {
        modalCarrinho.style.display = 'none';

        document.body.style.overflow = 'auto'
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
        });

        // FUNÇÃO ABRIR CARRINHO
abrirCarrinho.addEventListener('click', function(event) {
    event.preventDefault();




    // Garante que o modal de dados e o de pedido estejam escondidos
    // Isso evita o problema de um modal estar aberto em cima do outro
 if (exibirModalDados) exibirModalDados.style.display = 'none';
 if (exibirModalPedido) exibirModalPedido.style.display = 'none';
    
    // Agora, sempre abre o modal do carrinho
    modalCarrinho.style.display = 'block';
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // A função `atualizarCarrinho` já trata se o carrinho está vazio ou não
    atualizarCarrinho();
});








// ============================================================================================================


//=================== FUNÇÃO QUE RENDERIZA O MODAL LANCHE ==============================
function modalLanche(produtoSelecionado, adicionaisSelecionados, bebidasSelecionadas, conteudoModal, scrollPosition) {

     // ====================================================================
        // Conteúdo Principal do Produto (Imagem, Nome, Descrição, Preços)
        // ====================================================================
        
        // DIV PRINCIPAL DO CONTEÚDO (Imagem e texto do produto)

        


        let divPrincipal = document.createElement('div')
        divPrincipal.classList.add('divPrincipal')
        conteudoModal.appendChild(divPrincipal)

                // DIV para organizar as imagens
        let divImagemPre = document.createElement('div');
        divImagemPre.classList.add('divImagemPre');
        divPrincipal.appendChild(divImagemPre);

       let imagemPre = document.createElement('img');
        imagemPre.src = `${produtoSelecionado.imagem}`;
        imagemPre.classList.add('imagemPre');
        divImagemPre.appendChild(imagemPre);

        let divPrincipalProdutoInfo = document.createElement('div'); // Renomeei para maior clareza
        divPrincipalProdutoInfo.classList.add('divPrincipalProdutoInfo');
        divPrincipal.appendChild(divPrincipalProdutoInfo);



        // DIV para organizar conteúdo, nome, preco, descrição
        let divConteudoPre = document.createElement('div');
        divConteudoPre.classList.add('divConteudoPre');
        divPrincipalProdutoInfo.appendChild(divConteudoPre);

        let h3ProdutoPre = document.createElement('h3');
        h3ProdutoPre.textContent = `${produtoSelecionado.nome}`;
        h3ProdutoPre.classList.add('h3ProdutoPre');
        divConteudoPre.appendChild(h3ProdutoPre);

        let descricaoPre = document.createElement('p');
        descricaoPre.textContent = `${produtoSelecionado.descricao}`;
        descricaoPre.classList.add('descricaoPre');
        divConteudoPre.appendChild(descricaoPre);

        let ingredientesPre = document.createElement('p')
        ingredientesPre.classList.add('ingredientesPre')
        ingredientesPre.textContent = `${produtoSelecionado.ingredientes}`
        divConteudoPre.appendChild(ingredientesPre)

        let divPrecos = document.createElement('div');
        divPrecos.classList.add('divPrecos');
        divConteudoPre.appendChild(divPrecos);

        let precoRiscadoPre = document.createElement('span');
        precoRiscadoPre.classList.add('PrecoRiscadoPre');
        precoRiscadoPre.textContent = `R$ ${produtoSelecionado.precoRiscado.toFixed(2).replace('.', ',')}`;
        divPrecos.appendChild(precoRiscadoPre);

        let precoPre = document.createElement('span');
        precoPre.classList.add('precoPre');
        precoPre.textContent = `R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
        divPrecos.appendChild(precoPre);

        // DIV PARA SUGESTÃO DE BEBIDAS
        let divSugestaoBebidas = document.createElement('div');
        divSugestaoBebidas.classList.add('divSugestaoBebidas');
        divPrincipal.appendChild(divSugestaoBebidas);

        let divH4eP = document.createElement('div')
        divH4eP.classList.add('divH4eP')
        divSugestaoBebidas.appendChild(divH4eP)

        let divControleH4P = document.createElement('div')
        divControleH4P.classList.add('divControleH4P')
        divH4eP.appendChild(divControleH4P)

        let h4SugestaoBebidas = document.createElement('h4');
        h4SugestaoBebidas.classList.add('h4SugestaoBebidas');
        h4SugestaoBebidas.textContent = `O que você vai beber hoje?`;
        divControleH4P.appendChild(h4SugestaoBebidas);

        let pSugestao = document.createElement('p')
        pSugestao.classList.add('pSugestao')
        pSugestao.textContent = `Escolhas até 3 opções`
        divControleH4P.appendChild(pSugestao)


        for (const produtoId in catalogoDeProdutos) {
            const produtoAtual = catalogoDeProdutos[produtoId];
            
            if (produtoAtual.tipo === 'bebida') {

                let divDividirItensBebidas = document.createElement('div')
                divDividirItensBebidas.classList.add('divDividirItensBebidas')
                divSugestaoBebidas.append(divDividirItensBebidas)


                let divItemBebida = document.createElement('div');
                divItemBebida.classList.add('divItemBebida');
                divDividirItensBebidas.appendChild(divItemBebida);

                
                

                let divImagemBebida = document.createElement('div');
                divImagemBebida.classList.add('divImagemBebida');
                divItemBebida.appendChild(divImagemBebida);

                let imgBebida = document.createElement('img');
                imgBebida.src = `${produtoAtual.imagem}`;
                imgBebida.classList.add('imgBebida')
                divImagemBebida.appendChild(imgBebida);

                let divInfoBebida = document.createElement('div');
                divInfoBebida.classList.add('divInfoBebida');
                divItemBebida.appendChild(divInfoBebida);

                let h4Bebida = document.createElement('h4');
                h4Bebida.classList.add('h4Bebida');
                h4Bebida.textContent = `${produtoAtual.nome}`;
                divInfoBebida.appendChild(h4Bebida);
                
                let divPrecosBebida = document.createElement('div');
                divPrecosBebida.classList.add('divPrecosBebida');
                divInfoBebida.appendChild(divPrecosBebida);

                if (produtoAtual.precoRiscado) {
                    let precoRiscadoBebida = document.createElement('span');
                    precoRiscadoBebida.classList.add('precoRiscadoBebida');
                    precoRiscadoBebida.textContent = `R$ ${produtoAtual.precoRiscado.toFixed(2).replace('.', ',')}`;
                    divPrecosBebida.appendChild(precoRiscadoBebida);
                }

                let precoBebida = document.createElement('span');
                precoBebida.classList.add('precoBebida');
                precoBebida.textContent = `+ R$ ${produtoAtual.preco.toFixed(2).replace('.', ',')}`;
                divPrecosBebida.appendChild(precoBebida);

                let divBotoesBebidas = document.createElement('div');
                divBotoesBebidas.classList.add('divBotoesBebidas');
                divDividirItensBebidas.appendChild(divBotoesBebidas);

                let diminuirBebidas = document.createElement('button');
                diminuirBebidas.classList.add('diminuirBebidas');
                diminuirBebidas.textContent = `-`;
                diminuirBebidas.dataset.id = produtoId;
                divBotoesBebidas.appendChild(diminuirBebidas);
                

                let inputBebidas = document.createElement('input');
                inputBebidas.classList.add('inputBebidas');
                inputBebidas.value = 0;
                inputBebidas.dataset.id = produtoId;
                divBotoesBebidas.appendChild(inputBebidas);

                
                let aumentarBebidas = document.createElement('button');
                aumentarBebidas.classList.add('aumentarBebidas');
                aumentarBebidas.textContent = `+`;
                aumentarBebidas.dataset.id = produtoId;
                divBotoesBebidas.appendChild(aumentarBebidas);


                // LÓGICA DE OCULTAR E EXIBIR + EVENTOS DAS BEBIDAS
                inputBebidas.style.display = 'none';
                diminuirBebidas.style.display = 'none';

                aumentarBebidas.addEventListener('click', (event) => {
                    const idProduto = event.currentTarget.dataset.id; // pega o data-id do botão clicado
                    inputBebidas.style.display = 'block';
                    diminuirBebidas.style.display = 'block';
                    inputBebidas.value = parseInt(inputBebidas.value) + 1;
                    bebidasSelecionadas[idProduto] = parseInt(inputBebidas.value);
                    atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                    
                });

                diminuirBebidas.addEventListener('click', (event) => {
    const idProduto = event.currentTarget.dataset.id;
    let valorAtual = parseInt(inputBebidas.value);

    if (valorAtual > 0) {
        valorAtual -= 1;               // diminui o valor primeiro
        inputBebidas.value = valorAtual; 
        bebidasSelecionadas[idProduto] = valorAtual;  // atualiza o objeto com o novo valor
    }

    if (valorAtual === 0) {
        inputBebidas.style.display = 'none';
        diminuirBebidas.style.display = 'none';
    }

    atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
    
});
}
}

        // LÓGICA PARA OS ADICIONAIS, DOM, OBJECT, EVENTOS...
        let divAdicional = document.createElement('div');
        divPrincipal.appendChild(divAdicional);
        divAdicional.classList.add('divAdicional');

        let divh4PAdicional = document.createElement('div')
        divh4PAdicional.classList.add('divh4PAdcicional')
        divAdicional.appendChild(divh4PAdicional)

        let h4Adicional = document.createElement('h4');
        h4Adicional.classList.add('h4Adicional');
        h4Adicional.textContent = `Deseja um adicional?`;
        divh4PAdicional.appendChild(h4Adicional);

        let txtAdicional = document.createElement('p');
        txtAdicional.classList.add('txtAdicional');
        txtAdicional.textContent = `Escolha até 8 opções`;
        divh4PAdicional.appendChild(txtAdicional);

        produtoSelecionado.adicionais.forEach(adicionalAtual => {

            let divDividirItensAdicionais = document.createElement('div')
            divDividirItensAdicionais.classList.add('divDividirItensAdicionais')
            divAdicional.appendChild(divDividirItensAdicionais)


            let divItemAdicional = document.createElement('div');
            divItemAdicional.classList.add('divItemAdicional');
            divDividirItensAdicionais.appendChild(divItemAdicional);
            
            let divNomePrecoAdicional = document.createElement('div');
            divNomePrecoAdicional.classList.add('divNomePrecoAdiconal');
            divItemAdicional.appendChild(divNomePrecoAdicional);

            let nomeAdicional = document.createElement('p');
            nomeAdicional.classList.add('nomeAdicional');
            nomeAdicional.textContent = `${adicionalAtual.nome}`;
            divNomePrecoAdicional.appendChild(nomeAdicional);
            
            let precoAdicional = document.createElement('span');
            precoAdicional.classList.add('precoAdicional');
            precoAdicional.textContent = `R$ ${adicionalAtual.preco.toFixed(2).replace('.', ',')}`;
            divNomePrecoAdicional.appendChild(precoAdicional);

            let divBotoesAdicionais = document.createElement('div');
            divBotoesAdicionais.classList.add('divBotoesAdicionais');
            divDividirItensAdicionais.appendChild(divBotoesAdicionais);
            
            // CRIANDO OS ELEMENTOS PRIMEIRO
            let diminuirAdicionais = document.createElement('button');
            diminuirAdicionais.classList.add('diminuirAdicionais');
            diminuirAdicionais.textContent = `-`;
            
            let inputQuantidadeAdicionais = document.createElement('input'); 
            inputQuantidadeAdicionais.classList.add('inputQuantidadeAdicionais');
            inputQuantidadeAdicionais.value = 0;
            
            let aumentarQuantidadeAdicionais = document.createElement('button');
            aumentarQuantidadeAdicionais.classList.add('aumentarQuantidadeAdicionais');
            aumentarQuantidadeAdicionais.textContent = `+`;

            // AGORA ANEXANDO AO HTML
            divBotoesAdicionais.appendChild(diminuirAdicionais);
            divBotoesAdicionais.appendChild(inputQuantidadeAdicionais);
            divBotoesAdicionais.appendChild(aumentarQuantidadeAdicionais);
            
            // Lógica de exibir/esconder
            if (!adicionaisSelecionados[adicionalAtual.nome] || adicionaisSelecionados[adicionalAtual.nome] === 0) {
                diminuirAdicionais.style.display = 'none';
                inputQuantidadeAdicionais.style.display = 'none';
            }

            // ADICIONANDO OS EVENTOS AGORA
            diminuirAdicionais.addEventListener('click', () => {
                let valorAtual = parseInt(inputQuantidadeAdicionais.value);
                if (valorAtual > 0) {
                    inputQuantidadeAdicionais.value = valorAtual - 1;
                }
                if (parseInt(inputQuantidadeAdicionais.value) === 0) {
                    diminuirAdicionais.style.display = 'none';
                    inputQuantidadeAdicionais.style.display = 'none';
                }
                adicionaisSelecionados[adicionalAtual.nome] = parseInt(inputQuantidadeAdicionais.value);
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                

            });
            
            aumentarQuantidadeAdicionais.addEventListener('click', () => {
                diminuirAdicionais.style.display = 'block';
                inputQuantidadeAdicionais.style.display = 'block';
                inputQuantidadeAdicionais.value = parseInt(inputQuantidadeAdicionais.value) + 1;
                adicionaisSelecionados[adicionalAtual.nome] = parseInt(inputQuantidadeAdicionais.value);
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                
            });
        });

// OBSERVAÇÃO

     // Variável local para armazenar o valor da observação
let observacaoLanche = ''; // 👈 Use o nome da variável local correto para este modal!

// Otimização: Se você estiver reabrindo um item do carrinho, pode carregar a observação salva
if (produtoSelecionado.observacao) {
    observacaoLanche = produtoSelecionado.observacao;
}



let divObsModal = document.createElement('div');
divObsModal.classList.add('divObsModal'); // Nova classe para estilizar o bloco no modal
divPrincipal.appendChild(divObsModal); 

let labelObsModal = document.createElement('label');
labelObsModal.textContent = 'Observação (Opcional):'
labelObsModal.classList.add('labelObs') 

let inputObsModal = document.createElement('input');
inputObsModal.placeholder = 'Ex: sem maionese, sem tomate, etc.';
inputObsModal.classList.add('inputObs'); 

// 1. Carrega o valor inicial
inputObsModal.value = observacaoLanche;

// 2. Ouve a digitação e atualiza a variável local
inputObsModal.addEventListener('input', function() {
    observacaoLanche = inputObsModal.value;
});

divObsModal.appendChild(labelObsModal);
divObsModal.appendChild(inputObsModal);

// ====================================================================
        // NOVA DIV PARA OS BOTÕES FINAIS (QUANTIDADE DO PRINCIPAL E ADICIONAR)
        // ====================================================================
        let divFinalAcoes = document.createElement('div');
        divFinalAcoes.classList.add('divFinalAcoes'); // Adicione uma classe para estilizar com CSS
        conteudoModal.appendChild(divFinalAcoes);

        // DIV para organizar os botões de quantidade do produto principal
        let divBotoesAcoes = document.createElement('div'); // Esta já existia, mas vamos movê-la
        divBotoesAcoes.classList.add('divBotoesAcoes');
        divFinalAcoes.appendChild(divBotoesAcoes); // Anexado à nova divFinalAcoes

        // Botão Diminuir
        let botaoDiminuirPre = document.createElement('button');
        botaoDiminuirPre.textContent = `-`;
        botaoDiminuirPre.classList.add('botaoDiminuirPre');
        divBotoesAcoes.appendChild(botaoDiminuirPre);

        // INPUT DE QUANTIDADE
        let inputQuantidadePre = document.createElement('input');
        inputQuantidadePre.classList.add('inputQuantidadePre');
        divBotoesAcoes.appendChild(inputQuantidadePre);
        inputQuantidadePre.value = 1;
        
        // Botão Aumentar Quantidade
        let botaoAumentarPre = document.createElement('button');
        botaoAumentarPre.textContent = `+`;
        botaoAumentarPre.classList.add('botaoAumentarPre');
        divBotoesAcoes.appendChild(botaoAumentarPre);

        // EVENTOS para botões do produto principal (mantidos aqui)
        botaoDiminuirPre.addEventListener('click', () => {
            if (inputQuantidadePre.value > 1) {
                inputQuantidadePre.value = parseInt(inputQuantidadePre.value) - 1;
                atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
                
            }
        });
        
        botaoAumentarPre.addEventListener('click', () => {
            inputQuantidadePre.value = parseInt(inputQuantidadePre.value) + 1;
            atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
            
        });

        // Botão Adicionar ao Carrinho
        let botaoAdicionar = document.createElement('button');
        botaoAdicionar.classList.add('AdicionarCarrinho');
        botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
        divFinalAcoes.appendChild(botaoAdicionar); // Anexado à nova divFinalAcoes

        // EVENTO DE ADICIONAR AO CARRINHO E FECHAR MODAL
        botaoAdicionar.addEventListener('click', () => {
            adicionarAoCarrinho(produtoSelecionado, inputQuantidadePre.value, adicionaisSelecionados, bebidasSelecionadas, {}, {}, {}, observacaoLanche);
            ModalPreCarrinho.style.display = 'none';
            atualizarCarrinho();
            
            // RESTAURA O BODY
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto';
            window.scrollTo(0, scrollPosition)
        });

        // Chamar atualizarPreCarrinho para garantir que os preços iniciais estejam corretos
        atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas);
        atualizarContadorCarrinho()
        
} 

//=================== FIM DA FUNÇÃO QUE RENDERIZA O MODAL LANCHE ==============================


//=================== INICIO DA FUNÇÃO QUE RENDERIZA O MODAL AÇAI ==============================

function acaiModal(produtoSelecionado, conteudoModal, scrollPosition) {
    
    // As variáveis de estado (seleções) são definidas localmente:
    let acompanhamentosSelecionados = {};
    let frutasSelecionadas = {};
    let coberturasSelecionadas = {};


    let divPrincipal = document.createElement('div')
    divPrincipal.classList.add('divPrincipal')
    conteudoModal.appendChild(divPrincipal)

    // =============================================================
    // 💥 NOVO CÓDIGO AQUI: Crie os elementos de Preço para evitar erros!
    // Você precisa deles para as chamadas a 'atualizarPreCarrinhoAcai'
    // =============================================================


         // =======================================================
    // 💥 CÓDIGO PARA ADICIONAR A IMAGEM 💥
    // =======================================================
    let divImagemAcai = document.createElement('div');
    divImagemAcai.classList.add('divImagemAcai');
    divPrincipal.appendChild(divImagemAcai);

    let imgProdutoAcai = document.createElement('img');
    // Assume que a URL da imagem está no objeto produtoSelecionado.img
    imgProdutoAcai.src = produtoSelecionado.imagem; 
    imgProdutoAcai.alt = `Imagem de ${produtoSelecionado.nome}`;
    imgProdutoAcai.classList.add('imgProdutoAcai');
    divImagemAcai.appendChild(imgProdutoAcai);
    // =======================================================
    
    // Crie o cabeçalho básico do produto
    let divCabecalhoProduto = document.createElement('div');
    divCabecalhoProduto.classList.add('divCabecalhoProduto');
    divPrincipal.appendChild(divCabecalhoProduto);
    
    let nomeProduto = document.createElement('h3');
    nomeProduto.textContent = produtoSelecionado.nome;
    nomeProduto.classList.add('nomeProdutoAcai')
    divCabecalhoProduto.appendChild(nomeProduto);
    

    let descricaoPre = document.createElement('p');
        descricaoPre.textContent = `${produtoSelecionado.descricao}`;
        descricaoPre.classList.add('descricaoPreAcai');
        divCabecalhoProduto.appendChild(descricaoPre);



    let divPrecos = document.createElement('div');
    divPrecos.classList.add('divPrecosAcai');
    divCabecalhoProduto.appendChild(divPrecos); 
    
    // ** VARIÁVEIS DE PREÇO ** - Declaração no escopo da função
    let precoRiscadoPre = document.createElement('span'); 
    precoRiscadoPre.classList.add('PrecoRiscadoPre');
    divPrecos.appendChild(precoRiscadoPre);

    let precoPre = document.createElement('span'); 
    precoPre.classList.add('precoPre');
    divPrecos.appendChild(precoPre);
    
    // A 'inputQuantidadePre' será definida mais abaixo, mas é um 'let' 
    // e estará acessível em todas as chamadas `atualizarPreCarrinhoAcai`

    // --- SESSÃO DE ACOMPANHAMENTOS ---
    let divTitulosAcompanhamentos = document.createElement('div');
    divTitulosAcompanhamentos.classList.add('divTitulosAcompanhamentos');
    divPrincipal.appendChild(divTitulosAcompanhamentos);

    let h4Acompanhamentos = document.createElement('h4');
    h4Acompanhamentos.classList.add('h4Acompanhamentos');
    h4Acompanhamentos.textContent = `Escolha seus acompanhamentos`;
    divTitulosAcompanhamentos.appendChild(h4Acompanhamentos);

    let pLimiteAcompanhamentos = document.createElement('p');
    pLimiteAcompanhamentos.classList.add('pLimiteAcompanhamentos');
    pLimiteAcompanhamentos.textContent = `Máximo de ${produtoSelecionado.limiteAcompanhamentos} opções`;
    divTitulosAcompanhamentos.appendChild(pLimiteAcompanhamentos);

    let divTodosAcompanhamentos = document.createElement('div');
    divTodosAcompanhamentos.classList.add('divTodosAcompanhamentos');
    divPrincipal.appendChild(divTodosAcompanhamentos);

    //let acompanhamentosSelecionados = {}; // JÁ DECLARADA ACIMA (Melhor prática)

    produtoSelecionado.acompanhamentos.forEach(acompanhamentoAtual => {
        let divItemAcompanhamento = document.createElement('div');
        divItemAcompanhamento.classList.add('divItemAcompanhamento');
        divTodosAcompanhamentos.appendChild(divItemAcompanhamento);

        let divNomePrecoAcompanhamento = document.createElement('div');
        divNomePrecoAcompanhamento.classList.add('divNomePrecoAcompanhamento');
        divItemAcompanhamento.appendChild(divNomePrecoAcompanhamento);

        let nomeAcompanhamento = document.createElement('p');
        nomeAcompanhamento.classList.add('nomeAcompanhamento');
        nomeAcompanhamento.textContent = `${acompanhamentoAtual.nome}`;
        divNomePrecoAcompanhamento.appendChild(nomeAcompanhamento);

        let divBotoesAcompanhamentos = document.createElement('div');
        divBotoesAcompanhamentos.classList.add('divBotoesAcompanhamentos');
        divItemAcompanhamento.appendChild(divBotoesAcompanhamentos);

        let diminuirAcompanhamento = document.createElement('button');
        diminuirAcompanhamento.classList.add('diminuirAcompanhamento');
        diminuirAcompanhamento.textContent = `-`;
        diminuirAcompanhamento.dataset.nome = acompanhamentoAtual.nome;

        let inputQuantidadeAcompanhamento = document.createElement('input');
        inputQuantidadeAcompanhamento.classList.add('inputQuantidadeAcompanhamento');
        inputQuantidadeAcompanhamento.value = 0;
        inputQuantidadeAcompanhamento.dataset.nome = acompanhamentoAtual.nome;

        let aumentarQuantidadeAcompanhamento = document.createElement('button');
        aumentarQuantidadeAcompanhamento.classList.add('aumentarQuantidadeAcompanhamento');
        aumentarQuantidadeAcompanhamento.textContent = `+`;
        aumentarQuantidadeAcompanhamento.dataset.nome = acompanhamentoAtual.nome;

        divBotoesAcompanhamentos.appendChild(diminuirAcompanhamento);
        divBotoesAcompanhamentos.appendChild(inputQuantidadeAcompanhamento);
        divBotoesAcompanhamentos.appendChild(aumentarQuantidadeAcompanhamento);

        inputQuantidadeAcompanhamento.style.display = 'none';
        diminuirAcompanhamento.style.display = 'none';
    });

    // NOVO CÓDIGO: Delegação de eventos para Acompanhamentos
    divTodosAcompanhamentos.addEventListener('click', (event) => {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('aumentarQuantidadeAcompanhamento')) {
            const nomeAcompanhamento = elementoClicado.dataset.nome;
            const inputQuantidade = elementoClicado.previousElementSibling;
            const diminuirBotao = elementoClicado.previousElementSibling.previousElementSibling;
            
            const quantidadeTotal = Object.values(acompanhamentosSelecionados).reduce((total, qt) => total + qt, 0);

            if (quantidadeTotal < produtoSelecionado.limiteAcompanhamentos) {
                inputQuantidade.style.display = 'block';
                diminuirBotao.style.display = 'block';
                inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
                acompanhamentosSelecionados[nomeAcompanhamento] = parseInt(inputQuantidade.value);
                pLimiteAcompanhamentos.textContent = `Acompanhamentos: ${quantidadeTotal + 1} de ${produtoSelecionado.limiteAcompanhamentos}`;
                // inputQuantidadePre, precoPre e precoRiscadoPre estão acessíveis no escopo
                atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
            }
        } 
        else if (elementoClicado.classList.contains('diminuirAcompanhamento')) {
            const nomeAcompanhamento = elementoClicado.dataset.nome;
            const inputQuantidade = elementoClicado.nextElementSibling;
            const diminuirBotao = elementoClicado;
            
            let valorAtual = parseInt(inputQuantidade.value);

            if (valorAtual > 0) {
                valorAtual -= 1;
                inputQuantidade.value = valorAtual;
                acompanhamentosSelecionados[nomeAcompanhamento] = valorAtual;
                const quantidadeTotal = Object.values(acompanhamentosSelecionados).reduce((total, qt) => total + qt, 0);
                pLimiteAcompanhamentos.textContent = `Acompanhamentos: ${quantidadeTotal} de ${produtoSelecionado.limiteAcompanhamentos}`;
                atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
            }

            if (valorAtual === 0) {
                inputQuantidade.style.display = 'none';
                diminuirBotao.style.display = 'none';
            }
        }
    });

    // --- SESSÃO DE FRUTAS ---
    //let frutasSelecionadas = {}; // JÁ DECLARADA ACIMA (Melhor prática)

    let divTitulosFrutas = document.createElement('div');
    divTitulosFrutas.classList.add('divTitulosFrutas');
    divPrincipal.appendChild(divTitulosFrutas);

    let h4Frutas = document.createElement('h4');
    h4Frutas.classList.add('h4Frutas');
    h4Frutas.textContent = `Escolha suas frutas`;
    divTitulosFrutas.appendChild(h4Frutas);

    let pLimiteFrutas = document.createElement('p');
    pLimiteFrutas.classList.add('pLimiteFrutas');
    pLimiteFrutas.textContent = `Máximo de ${produtoSelecionado.limiteFrutas} opções`;
    divTitulosFrutas.appendChild(pLimiteFrutas);

    let divTodosFrutas = document.createElement('div');
    divTodosFrutas.classList.add('divTodosFrutas');
    divPrincipal.appendChild(divTodosFrutas);

    produtoSelecionado.frutas.forEach(frutaAtual => {
        let divItemFruta = document.createElement('div');
        divItemFruta.classList.add('divItemFruta');
        divTodosFrutas.appendChild(divItemFruta);

        let divNomePrecoFruta = document.createElement('div');
        divNomePrecoFruta.classList.add('divNomePrecoFruta');
        divItemFruta.appendChild(divNomePrecoFruta);

        let nomeFruta = document.createElement('p');
        nomeFruta.classList.add('nomeFruta');
        nomeFruta.textContent = `${frutaAtual.nome}`;
        divNomePrecoFruta.appendChild(nomeFruta);

        let divBotoesFrutas = document.createElement('div');
        divBotoesFrutas.classList.add('divBotoesFrutas');
        divItemFruta.appendChild(divBotoesFrutas);

        let diminuirFruta = document.createElement('button');
        diminuirFruta.classList.add('diminuirFruta');
        diminuirFruta.textContent = `-`;
        diminuirFruta.dataset.nome = frutaAtual.nome;

        let inputQuantidadeFruta = document.createElement('input');
        inputQuantidadeFruta.classList.add('inputQuantidadeFruta');
        inputQuantidadeFruta.value = 0;
        inputQuantidadeFruta.dataset.nome = frutaAtual.nome;

        let aumentarQuantidadeFruta = document.createElement('button');
        aumentarQuantidadeFruta.classList.add('aumentarQuantidadeFruta');
        aumentarQuantidadeFruta.textContent = `+`;
        aumentarQuantidadeFruta.dataset.nome = frutaAtual.nome;

        divBotoesFrutas.appendChild(diminuirFruta);
        divBotoesFrutas.appendChild(inputQuantidadeFruta);
        divBotoesFrutas.appendChild(aumentarQuantidadeFruta);

        inputQuantidadeFruta.style.display = 'none';
        diminuirFruta.style.display = 'none';
    });

    // NOVO CÓDIGO: Delegação de eventos para Frutas
    divTodosFrutas.addEventListener('click', (event) => {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('aumentarQuantidadeFruta')) {
            const nomeFruta = elementoClicado.dataset.nome;
            const inputQuantidade = elementoClicado.previousElementSibling;
            const diminuirBotao = elementoClicado.previousElementSibling.previousElementSibling;
            
            const quantidadeTotal = Object.values(frutasSelecionadas).reduce((total, qt) => total + qt, 0);

            if (quantidadeTotal < produtoSelecionado.limiteFrutas) {
                inputQuantidade.style.display = 'block';
                diminuirBotao.style.display = 'block';
                inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
                frutasSelecionadas[nomeFruta] = parseInt(inputQuantidade.value);
                pLimiteFrutas.textContent = `Frutas: ${quantidadeTotal + 1} de ${produtoSelecionado.limiteFrutas}`;
                atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
            }
        }
        else if (elementoClicado.classList.contains('diminuirFruta')) {
            const nomeFruta = elementoClicado.dataset.nome;
            const inputQuantidade = elementoClicado.nextElementSibling;
            const diminuirBotao = elementoClicado;

            let valorAtual = parseInt(inputQuantidade.value);
            if (valorAtual > 0) {
                valorAtual -= 1;
                inputQuantidade.value = valorAtual;
                frutasSelecionadas[nomeFruta] = valorAtual;
                const quantidadeTotal = Object.values(frutasSelecionadas).reduce((total, qt) => total + qt, 0);
                pLimiteFrutas.textContent = `Frutas: ${quantidadeTotal} de ${produtoSelecionado.limiteFrutas}`;
                atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
            }
            if (valorAtual === 0) {
                inputQuantidade.style.display = 'none';
                diminuirBotao.style.display = 'none';
            }
        }
    });

    // --- SESSÃO DE COBERTURAS ---
    //let coberturasSelecionadas = {}; // JÁ DECLARADA ACIMA (Melhor prática)
    let divTitulosCoberturas = document.createElement('div');
    divTitulosCoberturas.classList.add('divTitulosCoberturas');
    divPrincipal.appendChild(divTitulosCoberturas);

    let h4Coberturas = document.createElement('h4');
    h4Coberturas.classList.add('h4Coberturas');
    h4Coberturas.textContent = `Escolha suas coberturas`;
    divTitulosCoberturas.appendChild(h4Coberturas);

    let pLimiteCoberturas = document.createElement('p');
    pLimiteCoberturas.classList.add('pLimiteCoberturas');
    pLimiteCoberturas.textContent = `Máximo de ${produtoSelecionado.limiteCoberturas} opções`;
    divTitulosCoberturas.appendChild(pLimiteCoberturas);

    let divTodosCoberturas = document.createElement('div');
    divTodosCoberturas.classList.add('divTodosCoberturas');
    divPrincipal.appendChild(divTodosCoberturas);

    produtoSelecionado.coberturas.forEach(coberturaAtual => {
        let divItemCobertura = document.createElement('div');
        divItemCobertura.classList.add('divItemCobertura');
        divTodosCoberturas.appendChild(divItemCobertura);

        let divNomePrecoCobertura = document.createElement('div');
        divNomePrecoCobertura.classList.add('divNomePrecoCobertura');
        divItemCobertura.appendChild(divNomePrecoCobertura);

        let nomeCobertura = document.createElement('p');
        nomeCobertura.classList.add('nomeCobertura');
        nomeCobertura.textContent = `${coberturaAtual.nome}`;
        divNomePrecoCobertura.appendChild(nomeCobertura);

        let divBotoesCoberturas = document.createElement('div');
        divBotoesCoberturas.classList.add('divBotoesCoberturas');
        divItemCobertura.appendChild(divBotoesCoberturas);

        let diminuirCobertura = document.createElement('button');
        diminuirCobertura.classList.add('diminuirCobertura');
        diminuirCobertura.textContent = `-`;
        diminuirCobertura.dataset.nome = coberturaAtual.nome;

        let inputQuantidadeCobertura = document.createElement('input');
        inputQuantidadeCobertura.classList.add('inputQuantidadeCobertura');
        inputQuantidadeCobertura.value = 0;
        inputQuantidadeCobertura.dataset.nome = coberturaAtual.nome;

        let aumentarQuantidadeCobertura = document.createElement('button');
        aumentarQuantidadeCobertura.classList.add('aumentarQuantidadeCobertura');
        aumentarQuantidadeCobertura.textContent = `+`;
        aumentarQuantidadeCobertura.dataset.nome = coberturaAtual.nome;

        divBotoesCoberturas.appendChild(diminuirCobertura);
        divBotoesCoberturas.appendChild(inputQuantidadeCobertura);
        divBotoesCoberturas.appendChild(aumentarQuantidadeCobertura);

        inputQuantidadeCobertura.style.display = 'none';
        diminuirCobertura.style.display = 'none';
    });

    // NOVO CÓDIGO: Delegação de eventos para Coberturas
    divTodosCoberturas.addEventListener('click', (event) => {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('aumentarQuantidadeCobertura')) {
            const nomeCobertura = elementoClicado.dataset.nome;
            const inputQuantidade = elementoClicado.previousElementSibling;
            const diminuirBotao = elementoClicado.previousElementSibling.previousElementSibling;
            
            const quantidadeTotal = Object.values(coberturasSelecionadas).reduce((total, qt) => total + qt, 0);

            if (quantidadeTotal < produtoSelecionado.limiteCoberturas) {
                inputQuantidade.style.display = 'block';
                diminuirBotao.style.display = 'block';
                inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
                coberturasSelecionadas[nomeCobertura] = parseInt(inputQuantidade.value);
                pLimiteCoberturas.textContent = `Coberturas: ${quantidadeTotal + 1} de ${produtoSelecionado.limiteCoberturas}`;
                atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
            }
        } 
        else if (elementoClicado.classList.contains('diminuirCobertura')) {
            const nomeCobertura = elementoClicado.dataset.nome;
            const inputQuantidade = elementoClicado.nextElementSibling;
            const diminuirBotao = elementoClicado;
            
            let valorAtual = parseInt(inputQuantidade.value);

            if (valorAtual > 0) {
                valorAtual -= 1;
                inputQuantidade.value = valorAtual;
                coberturasSelecionadas[nomeCobertura] = valorAtual;
                const quantidadeTotal = Object.values(coberturasSelecionadas).reduce((total, qt) => total + qt, 0);
                pLimiteCoberturas.textContent = `Coberturas: ${quantidadeTotal} de ${produtoSelecionado.limiteCoberturas}`;
                atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
            }

            if (valorAtual === 0) {
                inputQuantidade.style.display = 'none';
                diminuirBotao.style.display = 'none';
            }
        }
    });






         // Variável local para armazenar o valor da observação
let observacaoAcai = ''; // 👈 Use o nome da variável local correto para este modal!

// Otimização: Se você estiver reabrindo um item do carrinho, pode carregar a observação salva
if (produtoSelecionado.observacao) {
    observacaoAcai = produtoSelecionado.observacao;
}



let divObsModal = document.createElement('div');
divObsModal.classList.add('divObsModal'); // Nova classe para estilizar o bloco no modal
divPrincipal.appendChild(divObsModal); 

let labelObsModal = document.createElement('label');
labelObsModal.textContent = 'Observação (Opcional):'
labelObsModal.classList.add('labelObs') 

let inputObsModal = document.createElement('input');
inputObsModal.placeholder = 'Ex: sem maionese, sem tomate, etc.';
inputObsModal.classList.add('inputObs'); 

// 1. Carrega o valor inicial
inputObsModal.value = observacaoAcai;

// 2. Ouve a digitação e atualiza a variável local
inputObsModal.addEventListener('input', function() {
    observacaoAcai = inputObsModal.value;
});

divObsModal.appendChild(labelObsModal);
divObsModal.appendChild(inputObsModal);


    
    //====================================================================
    // NOVA DIV PARA OS BOTÕES FINAIS (QUANTIDADE DO PRINCIPAL E ADICIONAR)
    //====================================================================
    let divFinalAcoes = document.createElement('div');
    divFinalAcoes.classList.add('divFinalAcoes');
    conteudoModal.appendChild(divFinalAcoes);

    let divBotoesAcoes = document.createElement('div');
    divBotoesAcoes.classList.add('divBotoesAcoes');
    divFinalAcoes.appendChild(divBotoesAcoes);

    let botaoDiminuirPre = document.createElement('button');
    botaoDiminuirPre.textContent = `-`;
    botaoDiminuirPre.classList.add('botaoDiminuirPre');
    divBotoesAcoes.appendChild(botaoDiminuirPre);

    let inputQuantidadePre = document.createElement('input'); // ESTA AGORA É DEFINIDA E PODE SER USADA ACIMA
    inputQuantidadePre.classList.add('inputQuantidadePre');
    divBotoesAcoes.appendChild(inputQuantidadePre);
    inputQuantidadePre.value = 1;

    let botaoAumentarPre = document.createElement('button');
    botaoAumentarPre.textContent = `+`;
    botaoAumentarPre.classList.add('botaoAumentarPre');
    divBotoesAcoes.appendChild(botaoAumentarPre);

    botaoDiminuirPre.addEventListener('click', () => {
        const quantidadeAtual = parseInt(inputQuantidadePre.value);
        if (quantidadeAtual > 1) {
            inputQuantidadePre.value = quantidadeAtual - 1;
            atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
        }
    });

    botaoAumentarPre.addEventListener('click', () => {
        const quantidadeAtual = parseInt(inputQuantidadePre.value);
        inputQuantidadePre.value = quantidadeAtual + 1;
        atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
    });

    let botaoAdicionar = document.createElement('button');
    botaoAdicionar.classList.add('AdicionarCarrinho');
    // NOTE: Se o preço é dinâmico, o texto do botão é atualizado pela função `atualizarPreCarrinhoAcai`
    botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
    divFinalAcoes.appendChild(botaoAdicionar);

    botaoAdicionar.addEventListener('click', () => {
        const quantidade = parseInt(inputQuantidadePre.value);

        const totalAcompanhamentos = Object.values(acompanhamentosSelecionados).reduce((sum, value) => sum + value, 0);
        const totalFrutas = Object.values(frutasSelecionadas).reduce((sum, value) => sum + value, 0);
        const totalCoberturas = Object.values(coberturasSelecionadas).reduce((sum, value) => sum + value, 0);
        
        if (totalAcompanhamentos === produtoSelecionado.limiteAcompanhamentos && 
            totalFrutas === produtoSelecionado.limiteFrutas && 
            totalCoberturas === produtoSelecionado.limiteCoberturas) {

            // Chamada de adicionarAoCarrinho. Os objetos vazios são para 'adicionais' e 'bebidas'
            adicionarAoCarrinho(produtoSelecionado, quantidade, {}, {}, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas, observacaoAcai);

            ModalPreCarrinho.style.display = 'none';
            atualizarCarrinho();
            atualizarContadorCarrinho();
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto';
            window.scrollTo(0, scrollPosition);
        } else {
            alert('Por favor, selecione a quantidade correta de cada item para o seu açaí. Verifique o limite de cada seção!');
        }
    });

    // ======================================================================
    // 💥 CÓDIGO DO BOTÃO FECHAR REMOVIDO DAQUI
    //    (Ele já é criado uma vez no bloco principal de cliques. Se for duplicado
    //    aqui, vai criar 2 botões de fechar).
    // ======================================================================
    
    // Chamada inicial para preencher os preços e limites
    atualizarPreCarrinhoAcai(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, acompanhamentosSelecionados, frutasSelecionadas, coberturasSelecionadas);
}



/* MODAL PRÉ-CARRINHO */

// ABRIR MODAL AO CLICAR NO CARD
const CardProdutos = document.querySelectorAll('.card-destaque, .card-pai')
const ModalPreCarrinho = document.getElementById('ModalPreCarrinho')
const conteudoModal = document.querySelector('.ContModalPreCarrinho')

CardProdutos.forEach(cardAtual => {
    cardAtual.addEventListener('click', () => {

      const seletorPreCarrinho = cardAtual.dataset.produtoId;
      const produtoSelecionado = catalogoDeProdutos[seletorPreCarrinho];
    // AGORA AS VARIÁVEIS SÃO LOCAIS E SÃO REINICIADAS A CADA CLIQUE
      const adicionaisSelecionados = {};
      const bebidasSelecionadas = {};

        // 2. PREPARAÇÃO DO MODAL (Comum a todos os tipos)
        conteudoModal.textContent = ''; // 💥 ESSENCIAL: Limpa o conteúdo antigo
        let scrollPosition = 0
        let modalConstruido = false
        

        // --- CRIAÇÃO DO BOTÃO FECHAR (COMO VOCÊ TINHA) ---
        let divbotaoFecharPre = document.createElement('div');
        divbotaoFecharPre.classList.add('divbotaoFecharPre');
        conteudoModal.appendChild(divbotaoFecharPre);

        let botaoFecharPre = document.createElement('button');
        botaoFecharPre.innerHTML = '&times;';
        botaoFecharPre.classList.add('botaoFecharPre');
        divbotaoFecharPre.appendChild(botaoFecharPre);

        // EVENTO DE FECHAR BOTÃO
        botaoFecharPre.addEventListener('click', () => {
             // ... Lógica de fechar o modal e restaurar o scroll (como você tinha) ...
            ModalPreCarrinho.style.display = 'none';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, scrollPosition);
        });
        // ---------------------------------------------------

    


    
        if (produtoSelecionado.tipo === 'lanche') {

            modalLanche(produtoSelecionado, adicionaisSelecionados, bebidasSelecionadas, conteudoModal, scrollPosition)    
            modalConstruido = true
            


        } else if (produtoSelecionado.tipo === 'acai') {
             // 💥 CHAMADA DO MODAL DE LANCHE 💥
            acaiModal(produtoSelecionado, conteudoModal, scrollPosition)    
            modalConstruido = true
            


        } else {
            // 🚨 SE CAIR AQUI, É UM PRODUTO SEM MODAL CONFIGURADO
        console.warn(`Tipo de produto '${produtoSelecionado.tipo}' não tem modal configurado. Modal não será aberto.`);
        // modalConstruido CONTINUA false
        }


    
        
         // 4. 🚀 LÓGICA DE ABERTURA: SÓ ABRE SE ALGO FOI CONSTRUÍDO 🚀
        if (modalConstruido) {
            ModalPreCarrinho.style.display = 'block';
            scrollPosition = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        }

       
        
      



       
    }); 
});






// FUNÇÃO ATUALIZAR PRÉ CARRINHO
function atualizarPreCarrinho(inputQuantidadePre, produtoSelecionado, precoPre, precoRiscadoPre, adicionaisSelecionados, bebidasSelecionadas) {
    let precoPreCarrinho = produtoSelecionado.preco * parseInt(inputQuantidadePre.value);
    
    let precoRiscadoPreCarrinho = produtoSelecionado.precoRiscado * parseInt(inputQuantidadePre.value);

    let precoTotalAdicionais = 0;

    // Adicione esta verificação para evitar o erro!
    if (produtoSelecionado.adicionais) { 
        // Percorrendo os adicionais selecionados com Object.keys()
        Object.keys(adicionaisSelecionados).forEach(nomeDoAdicional => {
            // Procurando o objeto completo do adicional
            let objetoAdicional = produtoSelecionado.adicionais.find(function(adicional) {
                return adicional.nome === nomeDoAdicional;
            });
    
            if (objetoAdicional) {
                // Pega a quantidade do adicional que o usuário escolheu
                let quantidadeAdicional = adicionaisSelecionados[nomeDoAdicional];
                // Pega o preço unitário do adicional
                let precoUnitario = objetoAdicional.preco;
                precoTotalAdicionais += quantidadeAdicional * precoUnitario;
            }
        });
    }

    let precoTotalBebidas = 0;
    Object.keys(bebidasSelecionadas).forEach(idBebida => {
        const quantidadeBebida = bebidasSelecionadas[idBebida];
        const bebida = catalogoDeProdutos[idBebida];
        if (bebida) {
            precoTotalBebidas += quantidadeBebida * bebida.preco;
        }
    });

    let precoTotalFinal = precoPreCarrinho + precoTotalAdicionais + precoTotalBebidas;
    let precoRiscadoTotalFinal = precoRiscadoPreCarrinho + precoTotalAdicionais + precoTotalBebidas;

    // Atualiza os preços na tela
    if (precoRiscadoPre) {
        precoRiscadoPre.textContent = `R$ ${precoRiscadoTotalFinal.toFixed(2).replace('.', ',')}`;
    }
    precoPre.textContent = `R$ ${precoTotalFinal.toFixed(2).replace('.', ',')}`;

    // Atualiza o preço no botão "Adicionar"
    const botaoAdicionar = document.querySelector('.AdicionarCarrinho');
    if (botaoAdicionar) {
        botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${precoTotalFinal.toFixed(2).replace('.', ',')}`;
    }
}

function atualizarPreCarrinhoAcai(inputQuantidade, produto, precoElemento, precoRiscadoElemento, acompanhamentos, frutas, coberturas) {
    const quantidade = parseInt(inputQuantidade.value) || 1;

    // Se o preço base do açaí for undefined, use 0
    const precoBase = produto.preco || 0;

    // Calcula o preço total apenas com o preço base do açaí
    const precoTotalDoAcai = precoBase * quantidade;

    // Atualiza o texto dos preços no modal
    precoElemento.textContent = `R$ ${precoTotalDoAcai.toFixed(2).replace('.', ',')}`;

    // Se houver preço riscado, ajuste o cálculo também para ele
    if (precoRiscadoElemento) {
        const precoRiscado = (produto.precoRiscado || 0) * quantidade;
        precoRiscadoElemento.textContent = `R$ ${precoRiscado.toFixed(2).replace('.', ',')}`;
    }

    // Atualiza o texto do botão de adicionar
    const botaoAdicionar = document.querySelector('.AdicionarCarrinho');
    if (botaoAdicionar) {
        botaoAdicionar.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar R$ ${precoTotalDoAcai.toFixed(2).replace('.', ',')}`;
    }
}




   // FUNÇÃO EXIBIR ITENS DO CARRINHO
let itensDoCarrinhoDiv = document.querySelector('#itens-do-carrinho');

function mostrarItensDoCarrinho() {
    itensDoCarrinhoDiv.textContent = "" // Limpa o conteúdo atual

    if (itensCarrinho.length === 0) {
        itensDoCarrinhoDiv.innerHTML = "<p>Seu carrinho está vazio</p>";
    } else {
        itensCarrinho.forEach(function(item) {
            let divItemCarrinho = document.createElement('div');
            divItemCarrinho.classList.add('item-do-carrinho');

            let h3NomeProduto = document.createElement('h3');
            h3NomeProduto.textContent = item.produto.nome;
            h3NomeProduto.classList.add('nomeProduto');

            let descricaoProduto = document.createElement('p');
            descricaoProduto.textContent = `${item.produto.descricao}`;
            descricaoProduto.classList.add('descricaoProduto');

            let spanPrecoProduto = document.createElement('span');
            spanPrecoProduto.textContent = `R$ ${item.produto.preco.toFixed(2).replace('.',',')}`;
            spanPrecoProduto.classList.add('precoCarrinho');

            let imagemProduto = document.createElement('img');
            imagemProduto.src = `${item.produto.imagem}`;
            
             // --- CÓDIGO ALTERADO AQUI ---
            // Verifica o tipo de produto e adiciona a classe correta
            if (item.produto.tipo === 'lanche') {
                imagemProduto.classList.add('imagemProduto');
    } else if (item.produto.tipo === 'bebida') {
                imagemProduto.classList.add('imagemBebidaCarrinho');
    } else if (item.produto.tipo === 'porcao') {
                imagemProduto.classList.add('imagemPorcaoCarrinho');
    } else if (item.produto.tipo === 'acai') {
        imagemProduto.classList.add('imagemAcaiCarrinho');
    }



            // -----------------------------

            let divImagem = document.createElement('div');
            divImagem.classList.add('divImagem');
            divImagem.appendChild(imagemProduto);

            let divProdutoDescricao = document.createElement('div');
            divProdutoDescricao.classList.add('divProdutoDescricao');

            divProdutoDescricao.appendChild(h3NomeProduto);
            divProdutoDescricao.appendChild(descricaoProduto);



            // --- NOVO CÓDIGO INSERIDO AQUI ---
        if (item.produto.tipo === 'acai') {
            
    // Lógica para Acompanhamentos
// item.acompanhamentos é um objeto { "Leite em Pó": 1, "Granola": 2 }
const acompComprados = Object.keys(item.acompanhamentos).filter(nome => item.acompanhamentos[nome] > 0);
if (acompComprados.length > 0) {
    let divAcompanhamentosItem = document.createElement('div');
    divAcompanhamentosItem.classList.add('adicionais-item-carrinho');
    let pAcompanhamentos = document.createElement('p');
    
    // Converte o objeto para texto: "1x Leite em Pó, 2x Granola"
    pAcompanhamentos.textContent = 'Acompanhamentos: ' + acompComprados.map(nome => `${item.acompanhamentos[nome]}x ${nome}`).join(', ');
    
    divAcompanhamentosItem.appendChild(pAcompanhamentos);
    divProdutoDescricao.appendChild(divAcompanhamentosItem);
}

// Lógica para Frutas
const frutasCompradas = Object.keys(item.frutas).filter(nome => item.frutas[nome] > 0);
if (frutasCompradas.length > 0) {
    let divItemFruta = document.createElement('div');
    divItemFruta.classList.add('adicionais-item-carrinho');
    let pFrutas = document.createElement('p');
    pFrutas.textContent = 'Frutas: ' + frutasCompradas.map(nome => `${item.frutas[nome]}x ${nome}`).join(', ');
    divItemFruta.appendChild(pFrutas);
    divProdutoDescricao.appendChild(divItemFruta)
}

// Lógica para Coberturas
const coberturasCompradas = Object.keys(item.coberturas).filter(nome => item.coberturas[nome] > 0);
if (coberturasCompradas.length > 0) {
    let divCoberturasItem = document.createElement('div');
    divCoberturasItem.classList.add('adicionais-item-carrinho');
    let pCoberturas = document.createElement('p');
    pCoberturas.textContent = 'Coberturas: ' + coberturasCompradas.map(nome => `${item.coberturas[nome]}x ${nome}`).join(', ');
    divCoberturasItem.appendChild(pCoberturas);
    divProdutoDescricao.appendChild(divCoberturasItem);
}
};

            // Adiciona adicionais ao HTML (se existirem)
            const adicionaisComprados = Object.keys(item.adicionais).filter(key => item.adicionais[key] > 0);
            if (adicionaisComprados.length > 0) {
                let divAdicionaisItem = document.createElement('div');
                divAdicionaisItem.classList.add('adicionais-item-carrinho');
                let pAdicionais = document.createElement('p');
                pAdicionais.textContent = 'Adicionais: ' + adicionaisComprados.map(nome => `${item.adicionais[nome]}x ${nome} `).join(', ');
                divAdicionaisItem.appendChild(pAdicionais);
                divProdutoDescricao.appendChild(divAdicionaisItem);
            }

           /// Lógica para lanches: exibe ingredientes
if (item.produto.tipo === 'lanche') {
    let ingredientesProdutos = document.createElement('p');
    if (item.produto.ingredientes && Array.isArray(item.produto.ingredientes)) {
        ingredientesProdutos.textContent = `Ingredientes: ${item.produto.ingredientes.join(', ')}`;
    } else {
        ingredientesProdutos.textContent = `Ingredientes: N/A`;
    }
    ingredientesProdutos.classList.add('ingredientesProdutos');
    divProdutoDescricao.appendChild(ingredientesProdutos);
}


            // 🚀 Lógica para exibir observação
        if (item.observacao && item.observacao.trim() !== '') { // <--- Esta condição está correta
            let pObservacao = document.createElement('p');
            pObservacao.textContent = `Observação: ${item.observacao}`; // <--- Esta leitura está correta
            pObservacao.classList.add('observacao-item-carrinho');
            divProdutoDescricao.appendChild(pObservacao);
    }




            // Lógica para adicionar as bebidas
            const bebidasCompradas = Object.keys(item.bebidas).filter(key => item.bebidas[key] > 0);
            if (bebidasCompradas.length > 0) {
                let divBebidasItem = document.createElement('div');
                divBebidasItem.classList.add('divBebidasItem');

                bebidasCompradas.forEach(id => {
                    const bebida = catalogoDeProdutos[id];
                    
                    // Contêiner para a imagem e o nome da bebida
                    let divBebidaInfo = document.createElement('div');
                    divBebidaInfo.classList.add('divBebidaInfo');

                    // Cria e adiciona a imagem da bebida
                    let imagemBebida = document.createElement('img');
                    imagemBebida.src = `${bebida.imagem}`;
                    imagemBebida.classList.add('imagemBebidaCarrinho');
                    divBebidaInfo.appendChild(imagemBebida);

                    // Cria e adiciona o texto da bebida (quantidade e nome)
                    let pBebida = document.createElement('p');
                    pBebida.textContent = `${item.bebidas[id]}x ${bebida.nome}`;
                    divBebidaInfo.appendChild(pBebida);

                    // Adiciona o preço da bebida
                    let spanPrecoBebida = document.createElement('span');
                    spanPrecoBebida.textContent = `R$ ${bebida.preco.toFixed(2).replace('.',',')}`;
                    spanPrecoBebida.classList.add('precoCarrinhoBebida');
                    divBebidaInfo.appendChild(spanPrecoBebida);

                    // Adiciona o contêiner de info da bebida ao divBebidasItem
                    divBebidasItem.appendChild(divBebidaInfo);
                });
                
                divProdutoDescricao.appendChild(divBebidasItem);
            }

            let divControleDeQuantidade = document.createElement('div');
            divControleDeQuantidade.classList.add('controles-quantidade');

            let divControleBotoes = document.createElement('div');
            divControleBotoes.classList.add('divControleBotoes');

            let botaoAumentar = document.createElement('button');
            botaoAumentar.textContent = `+`;
            botaoAumentar.classList.add('btnAumentar');
            botaoAumentar.addEventListener('click', function() {
                item.quantidade++;
                atualizarCarrinho();
                atualizarContadorCarrinho()
            });

            let spanQuantidade = document.createElement('span');
            spanQuantidade.textContent = item.quantidade;
            spanQuantidade.classList.add('quantidade-item');

            let botaoDiminuir = document.createElement('button');
            botaoDiminuir.textContent = `-`;
            botaoDiminuir.classList.add('btnDiminuir');
            botaoDiminuir.addEventListener('click', function() {
                if (item.quantidade === 1) {
                    let encontrarItem = itensCarrinho.indexOf(item);
                    itensCarrinho.splice(encontrarItem, 1);
                } else {
                    item.quantidade--;
                }
                atualizarCarrinho();
                atualizarContadorCarrinho()
            });

            let botaoRemover = document.createElement('button');
            let iconeRemover = document.createElement('i');
            iconeRemover.classList.add('fa-solid', 'fa-trash-can');
            botaoRemover.classList.add('btnRemover');
            botaoRemover.addEventListener('click', function() {
                let encontrarItem = itensCarrinho.indexOf(item);
                itensCarrinho.splice(encontrarItem, 1);
                atualizarCarrinho();
                atualizarContadorCarrinho()
            });

            divControleBotoes.appendChild(botaoAumentar);
            divControleBotoes.appendChild(spanQuantidade);
            divControleBotoes.appendChild(botaoDiminuir);
            botaoRemover.appendChild(iconeRemover);
            divControleBotoes.appendChild(botaoRemover);

            divControleDeQuantidade.appendChild(spanPrecoProduto);
            divControleDeQuantidade.appendChild(divControleBotoes);

            let divInfoProdutos = document.createElement('div');
            divInfoProdutos.classList.add('divInfoProdutos');
            divInfoProdutos.appendChild(divProdutoDescricao);
            divInfoProdutos.appendChild(divControleDeQuantidade);

            divItemCarrinho.appendChild(divImagem);
            divItemCarrinho.appendChild(divInfoProdutos);

            itensDoCarrinhoDiv.appendChild(divItemCarrinho);
        });
    }
}



// ==========================================================================================




// ==========================================================================================
// FUNÇÃO ATUALIZAR CARRINHO
let contadorCarrinho = document.querySelector('#contador-carrinho');

function atualizarCarrinho() {
    // Primeiro, mostra os itens no modal para refletir as quantidades e valores
    mostrarItensDoCarrinho();

    let valorTotalCarrinho = document.querySelector('#total-carrinho');
    let somaDoTotal = 0;
    let totalItensCarrinho = 0;

    itensCarrinho.forEach(function(item) {
        // Soma a quantidade de todos os produtos para o contador do carrinho
        totalItensCarrinho += item.quantidade;

        
        // Calcula o preço do item principal
        let precoItem = item.produto.preco * item.quantidade;
        
        // Calcula o preço dos adicionais
        let precoAdicionais = 0;
        for (const nomeAdicional in item.adicionais) {
            const quantidadeAdicional = item.adicionais[nomeAdicional];
            if (quantidadeAdicional > 0) {
                const adicional = item.produto.adicionais.find(a => a.nome === nomeAdicional);
                if (adicional) {
                    precoAdicionais += adicional.preco * quantidadeAdicional;
                }
            }
        }
        
        // Calcula o preço das bebidas
        let precoBebidas = 0;
        for (const idBebida in item.bebidas) {
            const quantidadeBebida = item.bebidas[idBebida];
            if (quantidadeBebida > 0) {
                const bebida = catalogoDeProdutos[idBebida];
                if (bebida) {
                    precoBebidas += bebida.preco * quantidadeBebida;
                }
            }
        }
        
        // Soma todos os preços para o total final do carrinho
        somaDoTotal += (precoItem + precoAdicionais + precoBebidas);
    });

    // Atualiza o contador de itens no topo do carrinho
    if (contadorCarrinho) {
        contadorCarrinho.textContent = `${totalItensCarrinho}`;
    }

    // NOVO: Cria o <h3> se ele não existir
    let h3Total = valorTotalCarrinho.querySelector('h3');
    if (!h3Total) {
        h3Total = document.createElement('h3');
        valorTotalCarrinho.appendChild(h3Total);
    }
    // Atualiza o valor total no modal do carrinho
    h3Total.textContent = `TOTAL: R$ ${somaDoTotal.toFixed(2).replace('.', ',')}`;
    h3Total.classList.add('precoCarrinhoTotal');

    // Se o carrinho estiver vazio, fecha o modal.
    if (itensCarrinho.length === 0) {
        if (modalCarrinho.style.display === 'block') {
            modalCarrinho.style.display = 'none';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = 'auto'; 
            window.scrollTo(0, scrollPosition);
        }
    }
}



// ================================================================================



let valorTaxaDeEntrega = 0;

// FUNÇÃO ABRIR MODAL PEDIDO E LISTAR ITENS
function abrirModalPedidoEListarItens() {
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    exibirModalDados.style.display = 'none';
    exibirModalPedido.style.display = 'block';
    divItensListaPedido.innerHTML = '';
    
    let precoItens = 0; 

    const bairroSelecionado = document.getElementById('Bairro').value;
    // ATUALIZA O VALOR DA VARIÁVEL GLOBAL
    valorTaxaDeEntrega = precosEntrega[bairroSelecionado] || 0;

    itensCarrinho.forEach(function(item) {
        let divControleItemIndividual = document.createElement('div');
        divControleItemIndividual.classList.add('divControleItemIndividual');
        
        let addPedido = document.createElement('li');
        addPedido.textContent = `Item: ${item.quantidade}x ${item.produto.nome}`;
        addPedido.classList.add('appPedido');
        divControleItemIndividual.appendChild(addPedido);

        let pedidoImagem = document.createElement('img');
        pedidoImagem.src = `${item.produto.imagem}`;
        pedidoImagem.classList.add('imagemPedidoFinal');
        divControleItemIndividual.appendChild(pedidoImagem);
        
        let listaAdicionais = [];
        let precoAdicionais = 0;
        
        for (let nomeAdicional in item.adicionais) {
            let quantidadeAdicional = item.adicionais[nomeAdicional];
            if (quantidadeAdicional > 0) {
                let adicional = item.produto.adicionais.find(a => a.nome === nomeAdicional);
                if (adicional) {
                    listaAdicionais.push(`${adicional.nome} (${quantidadeAdicional})`);
                    precoAdicionais += (parseFloat(adicional.preco) || 0) * quantidadeAdicional;
                }
            }
        }
        
        if (listaAdicionais.length > 0) {
            let pAdicionais = document.createElement('p');
            pAdicionais.textContent = `Adicionais: ${listaAdicionais.join(', ')}`;
            divControleItemIndividual.appendChild(pAdicionais);
            pAdicionais.classList.add('addAdicionais');
        }

        let listaBebidas = [];
        let precoBebidas = 0;
        
        for (let idBebida in item.bebidas) {
            let quantidadeBebida = item.bebidas[idBebida];
            if (quantidadeBebida > 0) {
                let bebida = catalogoDeProdutos[idBebida];
                if (bebida) {
                    listaBebidas.push(`${bebida.nome} (${quantidadeBebida})`);
                    precoBebidas += (parseFloat(bebida.preco) || 0) * quantidadeBebida;
                }
            }
        }
        
        if (listaBebidas.length > 0) {
            let pBebidas = document.createElement('p');
            pBebidas.textContent = `Bebidas: ${listaBebidas.join(', ')}x`;
            divControleItemIndividual.appendChild(pBebidas);
            pBebidas.classList.add('addBebidas');
        }

        if (item.produto.tipo === 'lanche') {
            let addIngredientes = document.createElement('p');
            addIngredientes.textContent = `Ingredientes: ${item.produto.ingredientes.join(', ')}`;
            addIngredientes.classList.add('addIngredientes');
            divControleItemIndividual.appendChild(addIngredientes);

            if (item.observacao) {
                let addObservacao = document.createElement('p');
                addObservacao.textContent = `Observação: ${item.observacao}`;
                addObservacao.classList.add('addObservacao');
                divControleItemIndividual.appendChild(addObservacao);
            }

        } else if (item.produto.tipo === 'acai') {

            // 1. Exibir Acompanhamentos
    const acompComprados = Object.keys(item.acompanhamentos || {}).filter(nome => item.acompanhamentos[nome] > 0);
    if (acompComprados.length > 0) {
        let pAcomp = document.createElement('p');
        pAcomp.textContent = 'Acompanhamentos: ' + acompComprados.map(nome => `${item.acompanhamentos[nome]}x ${nome}`).join(', ');
        pAcomp.classList.add('addAcaiDetalhe'); // Nova classe para estilizar se necessário
        divControleItemIndividual.appendChild(pAcomp);
    }


      // 2. Exibir Frutas
    const frutasCompradas = Object.keys(item.frutas || {}).filter(nome => item.frutas[nome] > 0);
    if (frutasCompradas.length > 0) {
        let pFrutas = document.createElement('p');
        pFrutas.textContent = 'Frutas: ' + frutasCompradas.map(nome => `${item.frutas[nome]}x ${nome}`).join(', ');
        pFrutas.classList.add('addAcaiDetalhe');
        divControleItemIndividual.appendChild(pFrutas);
    }


    // 3. Exibir Coberturas
    const coberturasCompradas = Object.keys(item.coberturas || {}).filter(nome => item.coberturas[nome] > 0);
    if (coberturasCompradas.length > 0) {
        let pCoberturas = document.createElement('p');
        pCoberturas.textContent = 'Coberturas: ' + coberturasCompradas.map(nome => `${item.coberturas[nome]}x ${nome}`).join(', ');
        pCoberturas.classList.add('addAcaiDetalhe');
        divControleItemIndividual.appendChild(pCoberturas);
    }


    // 4. Exibir Observação (Se o Açaí também tiver uma)
    if (item.observacao && item.observacao.trim() !== '') {
        let addObservacao = document.createElement('p');
        addObservacao.textContent = `Observação: ${item.observacao}`;
        addObservacao.classList.add('addObservacao');
        divControleItemIndividual.appendChild(addObservacao);
    }


        }




    
        
        // CORREÇÃO: Usa a função centralizada para calcular o preço
        let precoItemIndividual = calcularPrecoDeItem(item);
        let addPreco = document.createElement('span');
        addPreco.textContent = `Preço: R$ ${precoItemIndividual.toFixed(2).replace('.', ',')}`;
        addPreco.classList.add('precoFazerPedido');
        divControleItemIndividual.appendChild(addPreco);
        
        precoItens += precoItemIndividual;
        divItensListaPedido.appendChild(divControleItemIndividual);
    });

    const precoFinal = precoItens + valorTaxaDeEntrega;

    totalPreco.textContent = `Preço Total: R$ ${precoFinal.toFixed(2).replace('.', ',')}`;
    taxaEntrega.textContent = `Taxa de Entrega: R$ ${valorTaxaDeEntrega.toFixed(2).replace('.', ',')}`;
};








// =================================================================================

    // MODAL DADOS DINÂMICAMENTE CONFIGURADO A PARTIR DAQUI ATÉ O ======

    // FUNÇÃO EXIBIR DADOS

    const exibirModalDados = document.querySelector('#ModalDados')
    const btnFinalizar = document.getElementById('finalizar-compra')
    btnFinalizar.addEventListener('click', function() {

       // 1. Salva a posição e "congela" o body ANTES de abrir
    scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';



        exibirModalDados.style.display = 'block'
        modalCarrinho.style.display = 'none'
    })

    // FUNÇÃO BOTÃO VOLTAR

    const btnVoltar = document.getElementById('VoltarPedido')

    btnVoltar.addEventListener('click', function(event) {
        event.preventDefault();
        
        btnVoltar.classList.add('clicado')
        setTimeout(() => {
        btnVoltar.classList.remove('clicado')
        }, 300);
        exibirModalDados.style.display = 'none'
        modalCarrinho.style.display = 'block'
    })


    // EVENTO BOTÃO FECHAR

    const botaoFecharPedido = document.querySelector('.close-button-dados')
    botaoFecharPedido.addEventListener('click', function() {

     // 2. Remove as propriedades de "congelamento" e restaura a rolagem
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = 'auto'; // Reabilita a rolagem
    window.scrollTo(0, scrollPosition);
      
    exibirModalDados.style.display = 'none'
    document.body.style.overflow = 'auto'
    
})
  // FUNÇÃO AVANÇAR PEDIDO
    const btnAvancar = document.getElementById('AvancarPedido')
    console.log('Botão Avançar encontrado:', btnAvancar); 
    const exibirModalPedido = document.getElementById('ModalFazerPedido')
    const divPedido = document.getElementById('Pedido')
    const totalPreco = document.getElementById('ValorTotalPedidoFinal')
    const divItensListaPedido = document.getElementById('itensListadosNoPedido')

    let precoTotalDosItens = 0

      btnAvancar.addEventListener('click', function() {
      btnAvancar.classList.add('clicado')
      setTimeout(() => {
    btnAvancar.classList.remove('clicado');
      }, 300);

      let possoAvancar = false

      if (opcaoRetirada.checked) {
    possoAvancar = verificarCamposRetirada();
} else if (opcaoEntrega.checked) {
    possoAvancar = verificarCamposEntrega();
} else if (opcaoAgendamento.checked) {
    possoAvancar = verificarCamposAgendamento();
}

if (possoAvancar) {
    abrirModalPedidoEListarItens();
}

  })



    

      

      
      // EVENTO OPÇÃO ENTREGA
    let opcaoEntrega = document.querySelector('.CEntrega')
    let Formul = document.querySelector('#formEntrega')

    opcaoEntrega.addEventListener('click', function() {
        document.querySelector('#formEntrega').style.display = 'flex'
    })





    



    // EVENTO OPÇÃO RETIRADA
    let opcaoRetirada = document.querySelector('.CRetirada')
    
    opcaoRetirada.addEventListener('click', function() {

        document.querySelector('#formEntrega').style.display = 'none'

        document.querySelector('#Bairro').value = 'Selecionar'
        document.querySelector('#Rua').value = ''
        document.querySelector('#Numero').value = ''
        document.querySelector('#complemento').value = ''
        
    }) 

      // FUNÇÃO QUE VALIDA OS DADOS PARA RETIRADA
      function verificarCamposRetirada() {
        const inputNome = document.getElementById('nomeUsuario')
        const valorNome = inputNome.value

        const inputCell = document.getElementById('cellUsuario')
        const valorCell = inputCell.value

        let dadosPreenchidos = true

        if (valorNome === "") {
          erroNome.style.display = 'block';
          dadosPreenchidos = false;
        } else {
          erroNome.style.display = 'none'
        }

        if (valorCell === "") {
          erroCell.style.display = 'block';
          dadosPreenchidos = false;
        } else {
          erroCell.style.display = 'none'
        }

        return dadosPreenchidos
      }

      /*=============*/

        function verificarCamposEntrega() {

    const inputNome = document.getElementById('nomeUsuario')
    const valorNome = inputNome.value;

    const inputCell = document.getElementById('cellUsuario')
    const valorCell = inputCell.value;

    const selectBairro = document.getElementById('Bairro')
    const valorBairro = selectBairro.value;

    const inputRua = document.getElementById('Rua')
    const valorRua = inputRua.value;

    const inputNumero = document.getElementById('NumeroCasa')
    const valorNumero = inputNumero.value

    const erroNome = document.getElementById('erroNome')
    const erroCell = document.getElementById('erroCell')
    const erroBairro = document.getElementById('erroBairro')
    const erroRua = document.getElementById('erroRua')
    const erroNumero = document.getElementById('erroNumero')
      
      let todosPreenchidos = true;
      
      if (!valorNome) {
        erroNome.style.display = 'block';
        todosPreenchidos = false;
    } else {
      erroNome.style.display = 'none';
    }

      if (!valorCell) {
        erroCell.style.display = 'block';
        todosPreenchidos = false;
      } else {
        erroCell.style.display = 'none'
      }

      if (valorBairro === 'Selecionar') {
        erroBairro.style.display = 'block'
        todosPreenchidos = false;
      } else {
        erroBairro.style.display = 'none';
      }

      if (!valorRua) {
        erroRua.style.display = 'block';
        todosPreenchidos = false;
      } else {
        erroRua.style.display = 'none';
      }

      if (!valorNumero) {
        erroNumero.style.display = 'block'
        todosPreenchidos = false;
      } else {
        erroNumero.style.display = 'none'
      }

      // Retorna o resultado final
      return todosPreenchidos



    }

    let taxaEntrega = document.getElementById('taxaEntrega')
    let divModalConteudo = document.querySelector('.ContModalFazerPedido')

        


    const btnVoltarPedido = document.getElementById('voltarPedido')
        btnVoltarPedido.addEventListener('click', function() {
        exibirModalPedido.style.display = 'none'
        exibirModalDados.style.display = 'block'
    })

    const btnFecharPedido = document.querySelector('.close-button-pedido')
    btnFecharPedido.addEventListener('click', function() {

     // 2. Remove as propriedades de "congelamento" e restaura a rolagem
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = 'auto'; // Reabilita a rolagem
    window.scrollTo(0, scrollPosition);

    exibirModalPedido.style.display = 'none'
    document.body.style.overflow = 'auto'
    


    })




    // Mostrar ou esconder input de troco
const inputTroco = document.querySelector('#inputTroco');
document.querySelectorAll('input[name="formaPagamento"]').forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.id === 'Dinheiro') {
            inputTroco.style.display = 'block';
        } else {
            inputTroco.style.display = 'none';
            inputTroco.value = '';
        }
    });
});



// =======================================================================================================


// A função de cálculo deve ser definida no topo do seu arquivo, antes de ser usada.
function calcularPrecoDeItem(item) {
    let precoTotal = parseFloat(item.produto.preco) || 0;

    // CORREÇÃO: Verifica se 'adicionais' existe no objeto 'item.produto' antes de usar .find()
    if (item.adicionais && item.produto.adicionais && Object.keys(item.adicionais).length > 0) {
        for (const nomeAdicional in item.adicionais) {
            const adicionalDoProduto = item.produto.adicionais.find(ad => ad.nome === nomeAdicional);
            if (adicionalDoProduto) {
                precoTotal += parseFloat(adicionalDoProduto.preco) || 0;
            }
        }
    }

    if (item.bebidas && Object.keys(item.bebidas).length > 0) {
        for (const idBebida in item.bebidas) {
            const bebida = catalogoDeProdutos[idBebida];
            if (bebida) {
                precoTotal += (parseFloat(bebida.preco) || 0) * item.bebidas[idBebida];
            }
        }
    }
    
    return precoTotal * item.quantidade;
}


// ENVIAR PEDIDO PARA O WHATSAPP
const btnFinalizarPedidoWhatsApp = document.getElementById('Finalizar-Pedido');

btnFinalizarPedidoWhatsApp.addEventListener('click', async function () {

    if (btnFinalizarPedidoWhatsApp) {
    btnFinalizarPedidoWhatsApp.disabled = true;
    btnFinalizarPedidoWhatsApp.textContent = `Enviando Pedido...`;
}



    const nomeCliente = document.querySelector('#nomeUsuario')?.value || 'Não informado';
    const telefoneCliente = document.querySelector('#cellUsuario')?.value || 'Não informado';
    const tipoPedido = document.querySelector('input[name="TipoPedido"]:checked')?.id || 'Não informado';
    const bairro = document.querySelector('#Bairro')?.value || 'Não informado';
    const rua = document.querySelector('#Rua')?.value || 'Não informado';
    const numero = document.querySelector('#NumeroCasa')?.value || 'Não informado';
    const complemento = document.querySelector('#complemento')?.value || '';

    // --- 2. Forma de pagamento e troco ---
    const formaPagamentoSelecionada = document.querySelector('input[name="formaPagamento"]:checked')?.id || 'Não informado';
    let troco = ''
    // Declare a variável aqui, antes dos ifs
    const valorTrocoInput = document.querySelector('#inputTroco')?.value || 0; // Adicione || 0 para garantir que tenha um valor padrão
    
    if (formaPagamentoSelecionada === 'Dinheiro') {
        const valorTroco = document.querySelector('#inputTroco')?.value;
        if (valorTroco && parseFloat(valorTroco) > 0) {
            troco = ` | Troco para R$ ${parseFloat(valorTroco).toFixed(2).replace('.', ',')}`;
        }
    }
    let formaPagamentoMensagem = formaPagamentoSelecionada;
    if (troco) formaPagamentoMensagem += troco;

    // --- NOVO: se for PIX, coloca a chave ---
    if (formaPagamentoSelecionada === 'Pix') {
    const chavePIX = document.getElementById('inputChavePIX').value;
    const nomePIX = document.getElementById('inputNomePIX').value;
    const bancoPIX = document.getElementById('inputBancoPIX').value;

    formaPagamentoMensagem =    `*PIX - Chave CPNJ: ${chavePIX}*\n` +
                                `Nome: *${nomePIX}*\n` +
                                `Banco: ${bancoPIX}\n` + 
                                `----------- ENVIE O COMPROVANTE ABAIXO, POR GENTILEZA. -------------`;
}



    if (!itensCarrinho || itensCarrinho.length === 0) {
        alert("Selecione pelo menos um produto!");
        return;
    }

    // --- 3. Taxa de entrega ---
    let taxaEntregaValor = precosEntrega[bairro] || 0;

    // --- 4. Montar itens do pedido ---
    let totalPedido = 0;

    const itensPedido = itensCarrinho.map((item, index) => {

        const produtoInfo = catalogoDeProdutos[item.produto.id] || item.produto; // pega info do catálogo principal
        const precoBase = produtoInfo.preco * item.quantidade;

        let observacaoTexto = '';
        let adicionaisTexto = '';
        let precoAdicionais = 0;
        let bebidasTexto = '';
        let precoBebidas = 0;
        let acompanhamentosTexto = '';
        let frutasTexto = '';
        let coberturasTexto = '';

    if (item.produto.tipo === 'lanche') {

    
    if (item.observacao) {
        observacaoTexto = ` | Observação: ${item.observacao}`
    }


        // Adicionais
        
        if (item.adicionais && Object.keys(item.adicionais).length > 0) {
            adicionaisTexto = Object.entries(item.adicionais)
                .filter(([nome, qtd]) => qtd > 0)
                .map(([nome, qtd]) => {
                    const adicionalInfo = produtoInfo.adicionais?.find(a => a.nome === nome);
                    const preco = adicionalInfo ? adicionalInfo.preco : 0;
                    precoAdicionais += preco * qtd;
                    return `${nome} x${qtd} (R$ ${preco.toFixed(2).replace('.', ',')})`;
                })
                .join(', ');
            if (adicionaisTexto) adicionaisTexto = ` | Adicionais: ${adicionaisTexto}`;
        }

        // Bebidas

        if (item.bebidas && Object.keys(item.bebidas).length > 0) {
            bebidasTexto = Object.entries(item.bebidas)
                .filter(([nome, qtd]) => qtd > 0)
                .map(([nome, qtd]) => {
                    const bebidaInfo = catalogoDeProdutos[nome];
                    const preco = bebidaInfo ? bebidaInfo.preco : 0;
                    precoBebidas += preco * qtd;
                    return `${bebidaInfo?.nome || nome} x${qtd} (R$ ${preco.toFixed(2).replace('.', ',')})`;
                })
                .join(', ');
            if (bebidasTexto) bebidasTexto = ` | Bebidas: ${bebidasTexto}`;
        }

        const precoTotalItem = precoBase + precoAdicionais + precoBebidas;
        totalPedido += precoTotalItem;

        return `${index + 1}. ${item.quantidade}x ${produtoInfo.nome} ${observacaoTexto} (R$ ${precoBase.toFixed(2).replace('.', ',')})${adicionaisTexto}${bebidasTexto} | Total Item: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}`;

/*Fim do If Lanche */ 

}   else if (item.produto.tipo === 'acai') {
    const precoBase = produtoInfo.preco * item.quantidade;

    if (item.observacao) {
        observacaoTexto = `| Observação: ${item.observacao}`;
    }

if (item.acompanhamentos && Object.keys(item.acompanhamentos).length > 0) {
    acompanhamentosTexto = ` | Acompanhamentos: ${Object.entries(item.acompanhamentos).filter(([nome, quantidade]) => quantidade > 0)
        .map(([nome, quantidade]) => {
        return `x${quantidade} ${nome} `;
    }).join(', ')}`;
}

    // Lógica para Coberturas
if (item.coberturas && Object.keys(item.coberturas).length > 0) {
    coberturasTexto = ` | Coberturas: ${Object.entries(item.coberturas).filter(([nome, quantidade]) => quantidade > 0)
        .map(([nome, quantidade]) => {
        return `x${quantidade} ${nome}`;
    }).join(', ')}`;
}

    // Lógica para Frutas
if (item.frutas && Object.keys(item.frutas).length > 0) {
    frutasTexto = ` | Frutas: ${Object.entries(item.frutas)
        .filter(([nome, quantidade]) => quantidade > 0) // <-- AQUI! Filtra itens com quantidade maior que zero
        .map(([nome, quantidade]) => {
            return `x${quantidade} ${nome}`;
        })
        .join(', ')}`;
}

        const precoTotalItem = precoBase + precoAdicionais + precoBebidas;
        totalPedido += precoTotalItem;


    return `${index + 1}. ${item.quantidade}x ${produtoInfo.nome} ${observacaoTexto} ${acompanhamentosTexto} ${coberturasTexto} ${frutasTexto} | Total Item: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}`

}




    
    }).join('\n');



    // --- 5. Somar taxa de entrega ---
    totalPedido += taxaEntregaValor;

    // --- 6. Montar mensagem final ---
let mensagem =  `*-- NOVO PEDIDO - ARTHUR LANCHES --*\n` +
                `*Dados do Cliente:*\n` +
                `Nome: ${nomeCliente}\n` +
                `Telefone: ${telefoneCliente}\n` +
                `Tipo de Pedido: ${tipoPedido}\n`;

// Adiciona endereço e taxa apenas se for entrega
if (tipoPedido === "Entrega") {
    mensagem += `*Endereço de Entrega:*\n` +
                `Bairro: ${bairro}\n` +
                `Rua: ${rua}\n` +
                `Número: ${numero}\n` +
                `Complemento: ${complemento}\n` +
                `*Taxa de Entrega: R$ ${taxaEntregaValor.toFixed(2).replace('.', ',')}*\n`;
}

// Itens do pedido
mensagem += `*Itens do Pedido:*\n${itensPedido}\n`;

// Total do pedido
mensagem += `*Total do Pedido${tipoPedido === "Entrega" ? " (Itens + Taxa)" : ""}: R$ ${totalPedido.toFixed(2).replace('.', ',')}*\n`;

// Forma de pagamento
mensagem += `*Forma de Pagamento: *\n${formaPagamentoMensagem}`;

    // --- 7. MONTAR O OBJETO PARA O FIREBASE (Aqui é a parte adaptada!) ---
    const clienteInfo = {
        nome: nomeCliente,
        telefone: telefoneCliente,
        tipo: tipoPedido};
    if (tipoPedido === 'Entrega') {
        const enderecoInfo = {
            bairro: bairro,
            rua: rua,
            numero: numero,
            complemento: complemento
        };
        clienteInfo.endereco = enderecoInfo;
    }

    const itensParaFirebase = itensCarrinho.map(item => {
        const itemParaFirebase = {
            nome: item.produto.nome,
            precoBase: item.produto.preco,
            quantidade: item.quantidade,
            observacoes: item.observacao || '',
            bebidas: {},
            adicionais: {}
        };
        
        if (item.produto.tipo !== 'acai' && item.adicionais) {
            for (const nomeAdicional in item.adicionais) {
                const adicionalDoProduto = item.produto.adicionais.find(ad => ad.nome === nomeAdicional);
                if (adicionalDoProduto) {
                    itemParaFirebase.adicionais[nomeAdicional] = {
                        quantidade: item.adicionais[nomeAdicional],
                        preco: adicionalDoProduto.preco
                    };
                }
            }
        } else if (item.produto.tipo === 'acai') {
            // 1. Inicializa os campos específicos do Açaí
            itemParaFirebase.acompanhamentos = {};
            itemParaFirebase.frutas = {};
            itemParaFirebase.coberturas = {};

            // 2. Processa Acompanhamentos
            for (const nome in item.acompanhamentos) {
                if (item.acompanhamentos[nome] > 0) {
                    itemParaFirebase.acompanhamentos[nome] = {
                        quantidade: item.acompanhamentos[nome]
                        // Você pode adicionar 'preco: 0' se souber que não tem custo extra
                    };
                }
            }

            // 3. Processa Frutas
            for (const nome in item.frutas) {
                if (item.frutas[nome] > 0) {
                    itemParaFirebase.frutas[nome] = {
                        quantidade: item.frutas[nome]
                    };
                }
            }
            
            // 4. Processa Coberturas
            for (const nome in item.coberturas) {
                if (item.coberturas[nome] > 0) {
                    itemParaFirebase.coberturas[nome] = {
                        quantidade: item.coberturas[nome]
                    };
                }
            }
            
            // 5. Garante que 'adicionais' fique vazio ou pode ser removido
            // Deixamos vazio, pois não se aplica ao Açaí, mas a estrutura ainda pode existir
            itemParaFirebase.adicionais = {}; 
        }
        return itemParaFirebase;
    });

    // Aqui está a nova lógica que envia para o Firestore
    const pedidoParaFirebase = {
        cliente: clienteInfo,
        itens: itensParaFirebase,
        taxaEntrega: taxaEntregaValor, // Corrigido para a variável correta
        pagamento: formaPagamentoSelecionada, // Corrigido para a variável correta
        troco: valorTrocoInput, // Corrigido para a variável correta
        data: new Date(),

        //status: 'teste-web',
        //impressoraDestino: []
        // CAMPOS ADICIONADOS PARA O FIREBASE
        status: 'pendente_impressao',
        //status: 'pendente_impressao',
        impressoraDestino: ['cozinha', 'entregador']
    };

    // --- 8. ENVIO PARA O FIREBASE E WHATSAPP ---
    try {
        const pedidosRef = collection(db, `clientes/arthurlanches/pedidos`);
        await addDoc(pedidosRef, pedidoParaFirebase);
        console.log("Pedido enviado para o Firestore com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar o pedido para o Firestore:", error);
        alert("Ocorreu um erro ao enviar o pedido. Tente novamente ou verifique sua conexão.");

        if (btnFinalizarPedidoWhatsApp) {
            btnFinalizarPedidoWhatsApp.disabled = false;
            btnFinalizarPedidoWhatsApp.textContent = `Finalizar Pedido`;
        }


    }

    // A lógica do WhatsApp permanece
    let numeroWhatsApp = '5582988204888';
    let mensagemCodificada = encodeURIComponent(mensagem);
    let linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, '_blank');


    document.getElementById('ModalConfirmacaoPedido').style.display = 'block';
    

    // --- 12. Limpar carrinho ---
    itensCarrinho = [];
    atualizarCarrinho(); // (função que você já deve ter para renderizar carrinho)
    // Atualiza o contador para 0
    atualizarContadorCarrinho();

    document.querySelector('#ModalFazerPedido').style.display = 'none';
    document.body.style.overflow = 'auto';



});

// Fechar modal de confirmação
document.getElementById('btnOkConfirmacao').addEventListener('click', () => {
// 1. Reverte as propriedades de bloqueio
    document.body.style.position = ''; // Remove 'fixed'
    document.body.style.top = '';      // Remove o top negativo
    document.body.style.width = '';    // Remove a largura fixa (se foi definida)
    document.body.style.overflow = 'auto'; // Reverte o overflow

    // 2. Restaura a posição original da página
    window.scrollTo(0, scrollPosition);

    // 3. Fecha o modal
    document.getElementById('ModalConfirmacaoPedido').style.display = 'none';

});





    //FUNÇÃO TOPO (OPEN-CLOSE)
    let openClose = document.getElementById('open-close')
    let data = new Date()
    let hora = data.getHours()
    let dia = data.getDay()
    //let hora = 10

    function AbertoFechado() {

        /*Exemplo de código se fecha-se algum dia o estabelecimento */

        /* if (dia === 1) {
          return false
        } else {
          if (hora >= 18 && hora < 24) {
          return true
          } else {
            return false
          } */

          // Como abre todo santo dia, fizemos só a condição do horário.
          if (hora >= 17  && hora < 24 ) {
            return true
        } else {
            return false
        }

        }
        
    



    function exibirOpenClose() {
        let ResultadoFuncao = AbertoFechado()

        if (ResultadoFuncao === true) {
            let p1 = document.createElement('p')
            p1.textContent = 'Aberto!'
            p1.style.color = 'white'
            p1.style.backgroundColor = 'green'
            p1.style.padding = '5px'
            p1.style.margin = '5px'
            p1.style.borderRadius = '3px'
            openClose.appendChild(p1)

            let novoP = document.createElement('p')
            novoP.textContent = 'Estamos funcionando!'
            novoP.classList.add('novoP')
            openClose.appendChild(novoP)

        } else {

            let p2 = document.createElement('p')
            p2.textContent = 'Fechado!'
            p2.classList.add('btn-fechado-horarios')
            openClose.appendChild(p2)
            let novoP2 = document.createElement('p')
            novoP2.textContent = 'Horário de funcionamento: '
            novoP2.classList.add('msghorariofuncionamento')
            openClose.appendChild(novoP2)

            let divFuncionamento = document.createElement('div')
            divFuncionamento.classList.add('divFuncionamento')
            openClose.appendChild(divFuncionamento)
            
            let p3 = document.createElement('p')
            p3.textContent = '18:00 - 23:59'
            p3.classList.add('msgfuncionamento')
            divFuncionamento.appendChild(p3)

            let p4 = document.createElement('p')
            p4.textContent = '👈 Visualizar os dias'
            p4.classList.add('msgverhorarios')
            divFuncionamento.appendChild(p4)

            let btnEntregaTaxa = document.querySelector('.btnEntrega')
            btnEntregaTaxa.style.display = 'none'



            p3.addEventListener('click', function() {
            modalhorarios.style.display = 'block'
        })
        }




        let botaoFechar = document.querySelector('.close-button-horarios')
            botaoFechar.addEventListener('click', function() {
                modalhorarios.style.display = 'none'
            })
    
    }

    exibirOpenClose();

    let ModalEntrega = document.querySelector('#modalTaxaEntrega')
    let btnEntregaTaxa = document.querySelector('.btnEntrega')
    btnEntregaTaxa.addEventListener('click', function() {
        ModalEntrega.style.display = 'block'
    })

    let btnfecharModalEntrega = document.querySelector('.close-button-taxas')

    btnfecharModalEntrega.addEventListener('click', function() {
      ModalEntrega.style.display = 'none'
    })

    let opcaoDinheiro = document.getElementById('Dinheiro')
    let divPIX = document.getElementById('controlePIX')
    let opcaoPIX = document.getElementById('Pix')
    let opcaoCartao = document.getElementById('pagamentoCartao')
    let opcaoTroco = document.getElementById('inputTroco')
    let divformadePagamento = document.querySelector('.formas-pagamento')

    // Evento clique em dinheiro liberar opção troco.
    opcaoDinheiro.addEventListener('click', function () {
      opcaoTroco.style.display = 'flex'
      divformadePagamento.style.marginBottom = '35px'

    })

    opcaoPIX.addEventListener('click', function() {
      opcaoTroco.style.display = 'none'
      divformadePagamento.style.marginBottom = ''
    })

    opcaoCartao.addEventListener('click', function() {
      opcaoTroco.style.display = 'none'
      divformadePagamento.style.marginBottom = ''
    })




    let qrcode = document.getElementById('qrcode')
    let modalQRCode = document.getElementById('ModalQRCode')
    qrcode.addEventListener('click', function(event) {
      
      event.preventDefault();
      modalQRCode.style.display = 'flex'

    })

    let botaofecharQRCODE = document.querySelector('.close-button-qrcode')

    botaofecharQRCODE.addEventListener('click', function() {
      modalQRCode.style.display = 'none'
    })



    // BOTÃO ZAP

  let btnZap = document.getElementById('botaozap')
    btnZap.addEventListener('click', function() {

    const numeroWhatsApp = '5582988204888'; // Exemplo: 55 = Brasil, 82 = DDD, 999261614 = número

    // 2. Crie a mensagem (opcional, mas muito útil)
    const mensagemPadrao = 'Olá, gostaria de fazer um pedido!';

    // 3. Monte o link completo para o WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemPadrao)}`;

    // 4. Abra o link em uma nova aba
    window.open(linkWhatsApp, '_blank');

    })

    /* MENU CATEGORIAS */
    
const botoesMenu = document.querySelectorAll('.botoesCategorias')

      botoesMenu.forEach(function (botaoSelecionado) {
        botaoSelecionado.addEventListener('click', function() {

          const categoriaID = botaoSelecionado.dataset.categoria

                // Se o valor não estiver vazio, rola a página
        if (categoriaID) {
        //Encontra a seção correspondente pelo ID
        const secao = document.getElementById(categoriaID)

        // Rola a página até a seção
        if (secao) {
          secao.scrollIntoView({
            behavior: 'auto', // Deixa a rolagem suave
            block: 'start' // Alinha o topo da seção com o topo da janela
          });
        }
      }

        })

      })



//======================== MODAL DE BEBIDAS ========================

// Elementos do modal
const modalBebida = document.getElementById('modal-bebida');
const fecharBebida = document.querySelector('.fechar-bebida');

const imagemModalBebida = document.querySelector('#modal-bebida #imagem-modal');
const nomeModalBebida = document.querySelector('#modal-bebida #nome-modal');
const descricaoModalBebida = document.querySelector('#modal-bebida #descricao-modal');
const precoRiscadoBebida = document.querySelector('#modal-bebida #preco-riscado-modal');
const precoNormalBebida = document.querySelector('#modal-bebida #preco-normal-modal');
const quantidadeModalBebida = document.querySelector('#modal-bebida #quantidade-modal');
const btnDiminuirBebida = document.querySelector('#modal-bebida .btn-diminuir-modal');
const btnAumentarBebida = document.querySelector('#modal-bebida .btn-aumentar-modal');
const btnAdicionarBebida = document.querySelector('#adicionar-bebida-btn');
const precoTotalBebida = document.querySelector('#preco-total-bebida');

let quantidadeAtualBebida = 1;

// Função para abrir o modal de bebida
function abrirModalBebida(produtoId) {
    const produto = catalogoDeProdutos[produtoId];
    if (!produto) {
        console.error('Produto não encontrado:', produtoId);
        return;
    }

    // Reset quantidade do modal
    quantidadeAtualBebida = 1;

    // Preenche o modal
    imagemModalBebida.src = produto.imagem;
    nomeModalBebida.textContent = produto.nome;
    descricaoModalBebida.textContent = produto.descricao;
    precoRiscadoBebida.textContent = produto.precoAntigo ? `R$ ${produto.precoAntigo.toFixed(2).replace('.', ',')}` : '';
    precoNormalBebida.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    quantidadeModalBebida.textContent = quantidadeAtualBebida;
    precoTotalBebida.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;

    modalBebida.style.display = 'flex';

    // Botão aumentar
    btnAumentarBebida.onclick = function() {
        quantidadeAtualBebida++;
        quantidadeModalBebida.textContent = quantidadeAtualBebida;
        precoTotalBebida.textContent = `R$ ${(produto.preco * quantidadeAtualBebida).toFixed(2).replace('.', ',')}`;
    };

    // Botão diminuir
    btnDiminuirBebida.onclick = function() {
        if (quantidadeAtualBebida > 1) {
            quantidadeAtualBebida--;
            quantidadeModalBebida.textContent = quantidadeAtualBebida;
            precoTotalBebida.textContent = `R$ ${(produto.preco * quantidadeAtualBebida).toFixed(2).replace('.', ',')}`;
        }
    };

    // Limpa qualquer onclick antigo do botão
    btnAdicionarBebida.onclick = null;

    // Adicionar ao carrinho
    btnAdicionarBebida.onclick = function() {
        // Cria uma cópia do produto para evitar referência compartilhada
        const novoItem = {
            produto: { ...produto },
            quantidade: quantidadeAtualBebida,
            adicionais: {},
            observacao: '',
            bebidas: {}
        };

        itensCarrinho.push(novoItem);

        atualizarCarrinho(); 
        atualizarContadorCarrinho();

        modalBebida.style.display = 'none';
    };
}

// Eventos para abrir modal de bebida
document.querySelectorAll('.card-bebida').forEach(card => {
    card.addEventListener('click', function() {
        const produtoId = this.getAttribute('data-produto-id');
        abrirModalBebida(produtoId);
    });
});


let btnfecharModalBebidas = document.querySelector('.fechar-bebida')

btnfecharModalBebidas.addEventListener('click', ()  => {

  modalBebida.style.display = 'none';

})