// Código JavaScript
const loginForm = document.querySelector("#login-form");
const submitButton = document.querySelector("#submit-button");

// Adicionando evento de submit ao formulário
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // Validação de formulário
  if (!email) {
    alert("Email é obrigatório!");
    return;
  }
  if (!password) {
    alert("Senha é obrigatória!");
    return;
  }

  // Enviando informações de login para o servidor
  const data = {
    email: email,
    password: password
  };

  // Aqui você faria a chamada AJAX para enviar as informações de login para o seu servidor
  // e tratar a resposta
});
