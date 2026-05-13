package com.itic.ctf.dtos;

import java.time.LocalDateTime;

import lombok.Data;

@Data

//Afficher le sondage
public class SondageDto {
	
	private String titre;
	private String description;
	private String date_creation;
	private LocalDateTime duree;
	private Long nb_vote;
	private Long total;

}
