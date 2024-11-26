package br.com.literarura.lojaOnline.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/tela")
public class TelaController {

    @RequestMapping("/")
    public String telaIndex() {
        return "index";
    }

    @RequestMapping("/login")
    public String telaLogin() {
        return "login";
    }

    @RequestMapping("/cart")
    public String telaCart() {
        return "cart";
    }

    @RequestMapping("/checkout")
    public String telaCheckout() {
        return "checkout";
    }

    @RequestMapping("/signup")
    public String telaSignup() {
        return "signup";
    }
}
