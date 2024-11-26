package br.com.literarura.lojaOnline.controller;

import br.com.literarura.lojaOnline.entity.User;
import br.com.literarura.lojaOnline.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Método de cadastro de usuário
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return new ResponseEntity<>("Usuário cadastrado com sucesso!", HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // Método de login
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {

        User foundUser = userService.findUserByEmail(user.getEmail());

        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return new ResponseEntity<>("Login bem-sucedido!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Credenciais inválidas!", HttpStatus.UNAUTHORIZED);
    }
}
