package br.com.literarura.lojaOnline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import br.com.literarura.lojaOnline.entity.Livro;
import br.com.literarura.lojaOnline.services.LivroService;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/livros")
public class LivroController {

    private final LivroService livroService;

    @Autowired
    public LivroController(LivroService livroService) {
        this.livroService = livroService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerLivro(
            @RequestParam String titulo,
            @RequestParam String autor,
            @RequestParam String genero,
            @RequestParam String editora,
            @RequestParam int ano,
            @RequestParam String idioma,
            @RequestParam int paginas,
            @RequestParam double preco,
            @RequestParam String descricao,
            @RequestParam MultipartFile imagem) {
        try {
            // Salvar imagem no diretório e obter o caminho
            String imagemPath = saveImage(imagem);

            // Criar o livro com os dados recebidos e a imagem
            Livro livro = new Livro(titulo, autor, editora, ano, genero, idioma, paginas, preco, descricao, imagemPath);

            // Salvar o livro no banco de dados
            livroService.saveLivro(livro);

            return new ResponseEntity<>("Livro cadastrado com sucesso!", HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>("Erro ao salvar a imagem", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Método para salvar a imagem no diretório
    private String saveImage(MultipartFile imagem) throws IOException {
        // Gerar um nome único para a imagem
        String nomeImagem = UUID.randomUUID().toString() + "_" + imagem.getOriginalFilename();

        // Definir o diretório onde as imagens serão salvas
        File diretorio = new File("src/main/resources/static/images");
        if (!diretorio.exists()) {
            diretorio.mkdirs(); // Cria o diretório se não existir
        }

        // Criar o caminho completo para o arquivo
        File arquivoImagem = new File(diretorio, nomeImagem);

        // Salvar a imagem no diretório
        imagem.transferTo(arquivoImagem);

        // Retornar o caminho relativo da imagem
        return "/images/" + nomeImagem;
    }
}
