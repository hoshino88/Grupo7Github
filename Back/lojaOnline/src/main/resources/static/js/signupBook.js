document.getElementById('livro-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', document.getElementById('titulo').value);
    formData.append('autor', document.getElementById('autor').value);
    formData.append('genero', document.getElementById('genero').value);
    formData.append('imagem', document.getElementById('imagem').files[0]);

    fetch('/livros/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Livro cadastrado com sucesso:', data);
        // Redirecionar ou exibir mensagem de sucesso
    })
    .catch(error => console.error('Erro ao cadastrar livro:', error));
});
