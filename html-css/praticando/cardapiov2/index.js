// server.js

// 1. Importa a biblioteca do Firebase Admin
const admin = require('firebase-admin');

// 2. Carrega as credenciais do seu arquivo JSON
const serviceAccount = require('./serviceAccountKey.json');

// 3. Inicializa o app do Firebase com as credenciais de administrador
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 4. Pega a referência do Firestore
const db = admin.firestore();

// AQUI você colocaria sua função de impressão.
// Por exemplo, você pode importá-la de outro arquivo
// const imprimirPedido = require('./imprimirPedido.js');

function imprimirPedido(pedido) {
    // Sua lógica de impressão virá aqui
    console.log('Iniciando impressão do pedido:', pedido.data);
    // ...
}

// 5. Configura o ouvinte para a coleção 'pedidos'
const pedidosRef = db.collection('pedidos');

pedidosRef.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            const novoPedido = change.doc.data();
            console.log('Novo pedido recebido:', novoPedido);
            
            // 6. Chama a função de impressão com os dados do novo pedido
            imprimirPedido(novoPedido);
        }
    });
}, err => {
    console.error('Erro ao ouvir mudanças no Firestore:', err);
});

// 7. Mensagem para saber que o script está rodando
console.log('Servidor de impressão iniciado. Ouvindo novos pedidos no Firestore...');