CREATE TABLE loginuser(
     userid INT AUTO_INCREMENT PRIMARY KEY,
     email VARCHAR(200) NOT NULL UNIQUE,
     pasword VARCHAR(20) NOT NULL
     );
	
SELECT *FROM BOOKISHBAZAAR.LOGINUSER;
INSERT INTO LOGINUSER(email,pasword)
 values ("harsh@gmail.com","12345"),
 ("mallika@gmail.com","4567"),
 ("kashish@gmail.com","3222");
 show databases