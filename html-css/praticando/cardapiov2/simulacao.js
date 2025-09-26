// simulacao.js
const { db, collection, addDoc } = require('./firebase-config.js');

const pedidoSimulado = {
    cliente: {
        nome: "João da Silva",
        telefone: "99999999999",
        tipo: "Entrega",
        endereco: { bairro: "Central", rua: "Rua A", numero: "123", complemento: "Ap 101" }
    },
    data: new Date(), // Usando o objeto Date para simular um timestamp
    itens: [
        {
            nome: "Hamburguer X-Tudo",
            precoBase: 25.00,
            quantidade: 1,
            observacoes: "sem cebola",
            adicionais: { "Bacon": { quantidade: 1, preco: 7 }, "Queijo": { quantidade: 2, preco: 5 } },
            bebidas: { "Refrigerante 2L": { quantidade: 1, preco: 8 } }
        },
        {
            nome: "Açaí 500ml",
            tipo: "acai",
            precoBase: 22.00,
            quantidade: 1,
            observacoes: "",
            ingredientes: {
                acompanhamentos: { "Granola": 1, "Leite Condensado": 1 },
                frutas: { "Banana": 1 },
                coberturas: { "Chocolate": 1 }
            },
            adicionais: {},
            bebidas: {}
        }
    ],
    taxaEntrega: 5,
    pagamento: "PIX",
    troco: 0,
    status: "pendente_impressao",
    impressoraDestino: ["cozinha", "entregador"]
};

const clienteId = "arthurlanches";
const pedidosRef = collection(db, `clientes/${clienteId}/pedidos`);

addDoc(pedidosRef, pedidoSimulado)
.then(docRef => {
    console.log("Pedido simulado adicionado com sucesso! ID do documento: ", docRef.id);
})
.catch(error => {
    console.error("Erro ao adicionar o pedido simulado: ", error);
});