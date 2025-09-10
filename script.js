// Inicializa o WebApp
Telegram.WebApp.ready();

// Exibe informações do usuário no console
console.log('User data:', Telegram.WebApp.initDataUnsafe.user);

// Exibe um alerta de boas-vindas
Telegram.WebApp.showAlert(`Olá, ${Telegram.WebApp.initDataUnsafe.user.first_name}!`);

// Adiciona um evento de clique ao botão
document.getElementById('sendData').addEventListener('click', function() {
  // Envia dados para o chat do Telegram
  Telegram.WebApp.sendData(JSON.stringify({
    message: "Dados enviados do miniaplicativo!",
    timestamp: new Date().toISOString()
  }));

  // Fecha o miniaplicativo após o envio
  Telegram.WebApp.close();
});
