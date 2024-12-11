const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Coletando os dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    try {
        // Enviando os dados para o Back-end
        const response = await fetch('http://localhost:3000/api/formulario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Dados enviados com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar os dados.');
        }
    } catch (error) {
        console.error('Erro na conexão com o servidor:', error);
        alert('Erro ao enviar os dados. Verifique sua conexão.');
    }
});
