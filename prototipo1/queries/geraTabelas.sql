----------- Área de testes ----------------

DROP TABLE IF EXISTS TB_USER CASCADE;
DROP TABLE IF EXISTS TB_CENR CASCADE;
DROP TABLE IF EXISTS TB_ALVO CASCADE;
DROP TABLE IF EXISTS ICONS CASCADE;
DROP TABLE IF EXISTS TB_FASE CASCADE;
DROP TABLE IF EXISTS TB_GBRT CASCADE;
DROP TABLE IF EXISTS TB_USER_FASE CASCADE;
DROP TABLE IF EXISTS USER_ICONS CASCADE;
-------- Criação das tabelas -------------

CREATE TABLE TB_USER(
    USER_ID SERIAL,
    USER_NAME VARCHAR NOT NULL,
    USER_EMAIL VARCHAR NOT NULL UNIQUE,
    USER_SENHA VARCHAR NOT NULL,
    USER_NASCIMENTO DATE,
    USER_PONT_TOTAL INT DEFAULT 0,
    USER_ESTRELAS INT DEFAULT 0,
    USER_ULTM_FASE INT DEFAULT 0,

    PRIMARY KEY (USER_ID)
);

CREATE TABLE ICONS (
    ID SERIAL PRIMARY KEY,
    TIPO VARCHAR(20),
    ID_IMG INT NOT NULL
	-- STATUS BOOLEAN NOT NULL
);


CREATE TABLE USER_ICONS(
    USER_ INT NOT NULL,
    USER_ICON INT NOT NULL,
    FOREIGN KEY (USER_) REFERENCES TB_USER (USER_ID),
    FOREIGN KEY (USER_ICON) REFERENCES ICONS(ID)
    -- PRIMARY KEY (USER_, USER_ICONS)
);


CREATE TABLE TB_CENR(
    CENR_ID INT NOT NULL  CHECK (CENR_ID >= 0),
    CENR_GVDD FLOAT CHECK (CENR_GVDD > 0),
    CENR_BON BOOLEAN,
    PRIMARY KEY (CENR_ID)
);

CREATE TABLE TB_FASE(
    FASE_ID INT NOT NULL  CHECK (FASE_ID > 0),
    FASE_DIFC INT NOT NULL,
    FASE_PONT INT DEFAULT 0,
    FASE_CENR INT NOT NULL,
    FASE_CANH INT NOT NULL,
    FASE_ALVO INT NOT NULL,
    PRIMARY KEY (FASE_ID),
    FOREIGN KEY (FASE_CENR) REFERENCES TB_CENR
);

-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',0,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',1,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',2,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',3,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',4,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',0,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',1,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',2,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',3,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',4,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',5,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',6,FALSE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('cenario',0,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('cenario',1,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('cenario',2,TRUE);
-- INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('cenario',3,TRUE);


insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas, user_ultm_fase)
values ('Dener', 'dener@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '2000-03-21', 8052, 202, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('Giulia', 'giulia@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1999-01-01', 8012, 199, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('Lásaro', 'lasaro@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1999-11-15', 7958, 194, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('Zarref', 'zarref@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1999-05-14', 7880, 193, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('A_ivil', 'a_ivil@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1999-10-19', 7764, 182, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('Flavin do pneu', 'flavin_do_pneu@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1990-12-25', 7256, 177, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('Ginzwar', 'ginzwar@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1989-03-18', 7115, 160, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('Shambler', 'shambler@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1969-10-14', 7002, 158, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('phfso', 'phfso@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1999-08-25', 6950, 157, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_estrelas,user_ultm_fase)
values ('R. Sarah', 'r.sarah@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', '1999-11-23', 6927, 150, 0);


INSERT INTO ICONS(TIPO, ID_IMG) VALUES('canhao',0);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('canhao',1);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('canhao',2);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('canhao',3);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('canhao',4);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',0);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',1);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',2);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',3);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',4);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',5);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('projetil',6);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('cenario',0);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('cenario',1);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('cenario',2);
INSERT INTO ICONS(TIPO, ID_IMG) VALUES('cenario',3);

INSERT INTO USER_ICONS(USER_, USER_ICON) VALUES (2, 1);
INSERT INTO USER_ICONS(USER_, USER_ICON) VALUES (2, 2);
INSERT INTO USER_ICONS(USER_, USER_ICON) VALUES (2, 3);
INSERT INTO USER_ICONS(USER_, USER_ICON) VALUES (2, 4);
INSERT INTO USER_ICONS(USER_, USER_ICON) VALUES (2, 5);

INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(0, 9.8, TRUE);
INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(1, 9.78, TRUE);
INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(2, 1.62, FALSE);
INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(3, 3.72, FALSE);