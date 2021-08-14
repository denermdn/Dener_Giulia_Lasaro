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
    USER_ULTM_FASE INT DEFAULT 0,
    PRIMARY KEY (USER_ID)
);

CREATE TABLE ICONS (
    ID SERIAL PRIMARY KEY,
    TIPO VARCHAR(20),
    ID_IMG INT NOT NULL,
	STATUS BOOLEAN NOT NULL
);


CREATE TABLE USER_ICONS(
    USER_ INT NOT NULL,
    USER_ICONS INT NOT NULL,
    FOREIGN KEY (USER_) REFERENCES TB_USER (USER_ID),
    FOREIGN KEY (USER_ICONS) REFERENCES ICONS,
    PRIMARY KEY (USER_, USER_ICONS)
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

INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',0,TRUE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',1,TRUE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',2,FALSE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',3,FALSE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('canhao',4,FALSE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',0,TRUE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',1,TRUE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',2,TRUE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',3,FALSE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',4,FALSE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',5,FALSE);
INSERT INTO ICONS(TIPO, ID_IMG, STATUS) VALUES('projetil',6,FALSE);

INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(0, 9.8, TRUE);
INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(1, 9.78, TRUE);
INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(2, 1.62, FALSE);
INSERT INTO TB_CENR(CENR_ID, CENR_GVDD, CENR_BON) VALUES(3, 3.72, FALSE);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Dener', 'dener@', 1, '2000-03-21', 8052, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Giulia', 'giulia@', 1, '1999-10-14', 8012, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Lásaro', 'lasaro@', 1, '1999-10-14', 7958, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Zarref', 'zarref@', 1, '1999-10-14', 7880, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('A_ivil', 'a_ivil@', 1, '1999-10-14', 7764, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Flavin do pneu', 'flavin_do_pneu@', 1, '1999-10-14', 7256, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Ginzwar', 'ginzwar@', 1, '1999-10-14', 7115, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('Shambler', 'shambler@', 1, '1999-10-14', 7002, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('phfso', 'phfso@', 1, '1999-10-14', 6950, 0);

insert into tb_user (user_name, user_email, user_senha, user_nascimento, user_pont_total, user_ultm_fase)
values ('R. Sarah', 'r.sarah@', 1, '1999-10-14', 6927, 0);