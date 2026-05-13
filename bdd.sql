CREATE TABLE OPTION (
  PRIMARY KEY (id_option),
  id_option VARCHAR(42) NOT NULL,
  libelle   VARCHAR(42)
);

CREATE TABLE SONDAGE (
  PRIMARY KEY (id_sondage),
  id_sondage    VARCHAR(42) NOT NULL,
  titre         VARCHAR(42),
  description   VARCHAR(42),
  date_creation VARCHAR(42),
  duree         VARCHAR(42),
  nb_vote       VARCHAR(42),
  total         VARCHAR(42),
  id_option     VARCHAR(42) NOT NULL
);

CREATE TABLE USER (
  PRIMARY KEY (id_user),
  id_user    VARCHAR(42) NOT NULL,
  nom        VARCHAR(42),
  prenom     VARCHAR(42),
  mail       VARCHAR(42),
  password   VARCHAR(42),
  id_sondage VARCHAR(42) NOT NULL
);

CREATE TABLE VOTE (
  PRIMARY KEY (id_vote),
  id_vote   VARCHAR(42) NOT NULL,
  date_vote VARCHAR(42),
  id_option VARCHAR(42) NOT NULL,
  id_user   VARCHAR(42) NOT NULL
);

ALTER TABLE SONDAGE ADD FOREIGN KEY (id_option) REFERENCES OPTION (id_option);

ALTER TABLE USER ADD FOREIGN KEY (id_sondage) REFERENCES SONDAGE (id_sondage);

ALTER TABLE VOTE ADD FOREIGN KEY (id_user) REFERENCES USER (id_user);
ALTER TABLE VOTE ADD FOREIGN KEY (id_option) REFERENCES OPTION (id_option);
