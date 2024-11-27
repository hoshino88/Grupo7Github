package br.com.literarura.lojaOnline.repository;

import br.com.literarura.lojaOnline.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {

    Optional<Livro> findByTitulo(String titulo);

    Optional<Livro> findByAutor(String autor);

    Optional<Livro> findByGenero(String genero);

}
