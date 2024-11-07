package br.com.literarura.lojaOnline.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/tela")
public class TelaController {

    @RequestMapping("/inicial")
    public String telaInicial() {
        return "TelaInicial";
    }

    @RequestMapping("/principal")
    public String telaPrincipal() {
        return "TelaPrincipal";
    }

    @RequestMapping("/produtos")
    public String telaProdutos() {
        return "TelaProdutos";
    }

    @RequestMapping("/cadastro")
    public String telaCadastro() {
        return "TelaCadastro";
    }
}
