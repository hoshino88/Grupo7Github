package br.com.literarura.lojaOnline.repository;

import br.com.literarura.lojaOnline.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository {
    Livro findByTitulo(String titulo);

}
