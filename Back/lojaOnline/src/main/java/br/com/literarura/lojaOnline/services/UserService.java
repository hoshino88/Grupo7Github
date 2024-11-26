package br.com.literarura.lojaOnline.services;

import br.com.literarura.lojaOnline.entity.User;
import br.com.literarura.lojaOnline.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("E-mail já cadastrado!");
        }
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Nome de usuário já cadastrado!");
        }
        return userRepository.save(user);
    }

    public User findUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);

    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }
}
