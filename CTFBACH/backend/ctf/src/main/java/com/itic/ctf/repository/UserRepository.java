package com.itic.ctf.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itic.ctf.entites.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User>findByEmail(String email);
}
