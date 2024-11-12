function definirAcaoFormulario() {
    // Obtém o tipo de usuário selecionado
    const tipoUsuario = document.getElementById('tipo-usuario').value;
    const formulario = document.getElementById('login-form');
    
    // Define a ação do formulário com base no tipo de usuário
    if (tipoUsuario === 'administrador') {
        formulario.action = 'login_administrador.php';  // Endpoint para administradores
    } else if (tipoUsuario === 'paciente') {
        formulario.action = 'login_paciente.php';  // Endpoint para pacientes
    } else if (tipoUsuario === 'medico') {
        formulario.action = 'login_medico.php';  // Endpoint para médicos
    }
}
