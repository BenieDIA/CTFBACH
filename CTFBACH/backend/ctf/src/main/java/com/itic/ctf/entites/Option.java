package com.itic.ctf.entites;


import java.util.List;

import jakarta.persistence.CascadeType;
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
@Table(name = "Option")
public class Option {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String libelle;
	
	
	 @ManyToOne(optional = false)
	    @JoinColumn(name = "id_sondage", nullable = false)
	    private Sondage sondage;
	 
	 
	    @OneToMany(mappedBy = "option", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<Vote> votes;
}
