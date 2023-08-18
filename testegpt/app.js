// Configuração do Firebase (Você precisará de suas próprias credenciais aqui)
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Funções de login e cadastro (simplificadas)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        console.error("Erro ao fazer login:", error);
    });
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.error("Erro ao criar usuário:", error);
    });
});
