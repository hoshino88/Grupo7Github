package br.com.literarura.lojaOnline.services;

import br.com.literarura.lojaOnline.entity.Livro;
import br.com.literarura.lojaOnline.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LivroService {

    private final LivroRepository livroRepository;

    @Autowired
    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    // Método para encontrar livro por título
    public Livro findByTitulo(String titulo) {
        Optional<Livro> livroOptional = livroRepository.findByTitulo(titulo);
        return livroOptional.orElse(null); // Retorna o livro ou null se não encontrado
    }

    // Método para encontrar livro por autor
    public Livro findByAutor(String autor) {
        Optional<Livro> livroOptional = livroRepository.findByAutor(autor);
        return livroOptional.orElse(null);
    }

    // Método para encontrar livro por gênero
    public Livro findByGenero(String genero) {
        Optional<Livro> livroOptional = livroRepository.findByGenero(genero);
        return livroOptional.orElse(null);
    }

    // Método para salvar um novo livro ou atualizar um existente
    public Livro saveLivro(Livro livro) {
        // Aqui, o livro será salvo ou atualizado no banco de dados
        return livroRepository.save(livro); // O método save retorna o livro salvo com o ID atribuído
    }
}
