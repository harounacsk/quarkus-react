--  Test data
-- USE quarkusjwt;
CREATE TABLE Customer (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE Service (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id),
    UNIQUE KEY uk_service_name (name)
);

CREATE TABLE CustomerOrder (
    id BIGINT NOT NULL AUTO_INCREMENT,
    customer_id BIGINT,
    service_id BIGINT,
    price FLOAT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE CustomerOrder
    ADD CONSTRAINT fk_customerorder_customer
    FOREIGN KEY (customer_id) REFERENCES Customer (id);

ALTER TABLE CustomerOrder
    ADD CONSTRAINT fk_customerorder_service
    FOREIGN KEY (service_id) REFERENCES Service (id);

INSERT INTO Customer(id, name, address)
VALUES
    (1,'PASTEF Gmbh','Dakr'),
    (2,'APR Gmbh','Matam'),
    (3,'PDS Gmbh','Kolda'),
    (4,'AWALE Gmbh','Thies'),
    (5,'PTP Gmbh','Ziguinchor'),
    (6,'TAXAWOU SENEGAL Gmbh','Saint-Louis'),
    (7,'PPC Gmbh','Thies'),
    (8,'PSS Gmbh','Louga'),
    (9,'PLS Gmbh','Diourbel '),
    (10,'REENU-REW Gmbh','Tambacounda '),
    (11,'UDS Gmbh','Kaffrine '),
    (12,'AND-JEF Gmbh','Kédougou ');

INSERT INTO Service(id, name)
VALUES
    (1,'Beratung'),
    (2,'Schulung'),
    (3,'Entwicklung');

INSERT INTO CustomerOrder (id, customer_id, service_id, price)
VALUES
    (1,1,1,6362.87),
    (2,1,2,8345.98),
    (3,1,3,7362.87),

    (4,2,1,8765.95),
    (5,2,2,1500.23),
    (6,2,3,7262.45),

    (7,3,1,2983.23),
    (8,3,2,5322.22),
    (9,3,3,8372.65);
