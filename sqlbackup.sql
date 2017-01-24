CREATE TABLE `persondb`.`contactinfo` (
  `contactId` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phoneNumber` VARCHAR(45) NULL,
  UNIQUE INDEX `contactId_UNIQUE` (`contactId` ASC),
  PRIMARY KEY (`contactId`));
  
  
  
  
  INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('abc', 'def', '2334 aaa', 'efjdjf_djfd@ggg.com', '23424');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('ghi', 'jkl', '456 fnjdg', 'jdfj_fhfh@udhf.com', '3434');
INSERT INTO `persondb`.`contactinfo` (`firstName`, `lastName`, `address`, `email`, `phoneNumber`) VALUES ('mno', 'pqr', '4334 sdjfsdfn', 'sndj_sdsd@ds.com', '323244');



/*DELETE FROM `persondb`.`contactinfo` WHERE `contactId`='6';
DELETE FROM `persondb`.`contactinfo` WHERE `contactId`='5';
DELETE FROM `persondb`.`contactinfo` WHERE `contactId`='4';*/



ALTER TABLE `persondb`.`additionalinfo` 
DROP FOREIGN KEY `contactId`;
ALTER TABLE `persondb`.`additionalinfo` 
CHANGE COLUMN `gender` `gender` VARCHAR(45) NOT NULL ,
CHANGE COLUMN `country` `country` VARCHAR(45) NOT NULL ,
CHANGE COLUMN `age` `age` INT(11) NOT NULL ,
CHANGE COLUMN `contactId` `contactId` INT(11) NOT NULL ,
DROP INDEX `contactId_UNIQUE` ,
DROP INDEX `gender_UNIQUE` ,
DROP INDEX `country_UNIQUE` ,
DROP INDEX `age_UNIQUE` ;
ALTER TABLE `persondb`.`additionalinfo` 
ADD CONSTRAINT `contactId`
  FOREIGN KEY (`contactId`)
  REFERENCES `persondb`.`contactinfo` (`contactId`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'US', '34', '1');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'UK', '44', '2');
INSERT INTO `persondb`.`additionalinfo` (`gender`, `country`, `age`, `contactId`) VALUES ('Male', 'Ind', '23', '3');



UPDATE `persondb`.`additionalinfo` SET `infoId`='1' WHERE `infoId`='19';
UPDATE `persondb`.`additionalinfo` SET `infoId`='2' WHERE `infoId`='20';
UPDATE `persondb`.`additionalinfo` SET `infoId`='3' WHERE `infoId`='21';



