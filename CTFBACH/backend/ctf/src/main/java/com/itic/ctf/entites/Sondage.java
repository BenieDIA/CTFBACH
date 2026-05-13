package com.itic.ctf.entites;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sondage")
public class Sondage {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	private String titre;
	private String description;
	private String date_creation;
	private LocalDateTime duree;
	private Long nb_vote;
	private Long total;

	
	   @ManyToOne(optional = false)
	    @JoinColumn(name = "id_user", nullable = false)
	    private User createur;
	
	   @OneToMany(mappedBy = "sondage", cascade = CascadeType.ALL, orphanRemoval = true)
	    @Column(nullable = false)
	    private List<Option> options;
}
