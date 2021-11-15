CREATE TABLE infoc_tht_lugar (
	id_lugar	                    int primary key not NULL AUTO_INCREMENT,
	nm_lugar 		               	varchar(100),
	ds_avaliacao 	         		decimal(10,5),
	ds_endereco 	         		varchar(200),
	ds_imagem 		           		varchar(255),
	ds_informacao 	     			varchar(255),
	ds_horario_fds                	Datetime,
	ds_horario_dds               	Datetime,
 	ds_categoria					varchar(50) 
)ENGINE=InnoDB;

CREATE TABLE infoc_tht_chat (
	id_mensagem 	        		 int primary key not NULL AUTO_INCREMENT,
	nm_nome 		               	 varchar(20),
	ds_mensagem 	        		 varchar(200),
	dt_mensagem 	        		 DATETIME
)ENGINE=InnoDB;

CREATE TABLE infoc_tht_pacote (
	id_pacote 		               	INT primary key not NULL AUTO_INCREMENT,
	nm_pacote						varchar(100),
	dt_data							DATE,
	ds_ingresso						varchar(10),
	vl_preco						varchar(30),
	ds_horario						varchar(10),
	ds_cancelamento   				varchar(255),
	ds_endereco 	          		varchar(255),
	ds_acesso 		              	varchar(255),
	ds_imagem1          			varchar(255),
	ds_imagem2 		           		varchar(255),
	ds_imagem3		           		varchar(255),
	ds_imagem4	           			varchar(255),
	ds_link 		               	varchar(255)
)ENGINE=InnoDB;


CREATE TABLE infoc_tht_cartao (
	id_cartao 		        INT primary key not NULL AUTO_INCREMENT,
	nr_cartao				INT (16),
	nm_cartao				Varchar(60),
	ds_validade				DATE,
	nr_cvv					INT(3),
	nr_parcela				INT(10)
)ENGINE=InnoDB;

CREATE TABLE infoc_tht_usuario (
	id_usuario 		        INT primary key not NULL AUTO_INCREMENT,
	nm_usuario				varchar(30),
	ds_email				varchar(50),
	nr_celular				INT(13),
	ds_senha				varchar(50)

)ENGINE=InnoDB;

CREATE TABLE infoc_tht_compra (
	id_compra 				INT primary key not NULL AUTO_INCREMENT,
	id_pacote				INT,
	id_usuario				INT,
	ds_aprovacao			bool
FOREIGN KEY (id_pacote) references infoc_tht_pacote(id_pacote) on delete cascade,
FOREIGN KEY (id_usuario) references infoc_tht_usuario(id_usuario)
on delete cascade
)ENGINE=InnoDB;