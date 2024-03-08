// script.js

// Evento de clique para o botão "Voltar para o Início"
document.getElementById("btn-voltar").addEventListener("click", function() {
    window.location.href = "index.html";
});

// Evento de clique para o botão "Visualização de Denúncias"
document.getElementById("btn-visualizacao").addEventListener("click", function() {
    window.location.href = "visualizacao.html";
});

// Eventos para abrir câmera e obter localização (aqui você pode adicionar suas implementações)
document.getElementById("btn-camera").addEventListener("click", function() {
    // Seu código para abrir a câmera aqui
    console.log("Abrir câmera");
});

document.getElementById("btn-localizacao").addEventListener("click", function() {
    // Seu código para obter a localização aqui
    console.log("Obter localização");
});

document.getElementById("btn-nova-denuncia").addEventListener("click", function() {
    window.location.href = "denuncia.html";
});