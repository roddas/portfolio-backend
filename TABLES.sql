USE portfolio_db;
CREATE TABLE IF NOT EXISTS conhecimentos_tecnicos_tb
(
	id_conhecimento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(101) NOT NULL
);
CREATE TABLE IF NOT EXISTS contactos_tb(
	id_contacto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_contacto VARCHAR(64) NOT NULL,
    descricao_contacto VARCHAR(101) NOT NULL
);
CREATE TABLE IF NOT EXISTS experiencia_tb(
	id_experiencia INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao_experiencia TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS formacao_academica_tb(
	id_formacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao_formacao TEXT NOT NULL,
    desde VARCHAR(20) NOT NULL,
    ate VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS idiomas_tb(
	id_idioma INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idioma TEXT NOT NULL,
    nivel VARCHAR(14) NOT NULL
);

CREATE TABLE IF NOT EXISTS linguagens_ferramentas_tb(
	id_linguagem_ferramenta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagem_ferramenta VARCHAR(255) NOT NULL
);