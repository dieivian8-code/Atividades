document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica de autenticação futuramente
    console.log("Tentativa de login com:", email);
    alert("Formulário enviado com sucesso! (Verifique o console)");
});

// Alternar visibilidade da senha
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    // Altera o tipo do input de password para text e vice-versa
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Altera o ícone do Font Awesome
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});