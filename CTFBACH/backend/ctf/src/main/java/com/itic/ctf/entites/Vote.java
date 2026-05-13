package com.itic.ctf.entites;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Vote")
public class Vote {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private LocalDate date_vote;
	
	
	  @ManyToOne(optional = false)
	    @JoinColumn(name = "id_option", nullable = false)
	    private Option option;
	 
	   
	    @ManyToOne(optional = false)
	    @JoinColumn(name = "id_user", nullable = false)
	    private User user;
}
