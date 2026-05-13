package com.itic.ctf.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itic.ctf.entites.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {

}
