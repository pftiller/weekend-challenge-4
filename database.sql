--Create Database--
CREATE DATABASE pauls_photo_gallery;

--Create Table--
CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	description VARCHAR(250),
	file_path VARCHAR(250),
	date_taken DATE,
	likes INT,
	hearts INT,
	clicks INT
);

--Insert Data--
INSERT INTO photos (title, description, file_path, date_taken, likes, hearts, clicks) 
VALUES ('My Sister and I', 'My sister is one of my best friends', '"/assets/sister.jpg"', '2010-09-04', 0, 0, 0),
('My Girlfriend and I', 'My girlfriend and I have known eachother since college', '"/assets/girlfriend.jpg"', '2014-06-21', 0, 0, 0),
('My Friends and I', 'I can always count on my friends', '"/assets/friends.jpg"', '2017-07-18', 0, 0, 0),
('My Mom and I', 'I would be lost without my mom', '"/assets/mother.jpg"', '2015-05-10', 0, 0, 0),
('My Coworkers and I', 'I am lucky to work alongside great people', '"/assets/coworkers.jpg"', '2015-11-19', 0, 0, 0),
('My Dad and I', 'My dad is someone I truly admire', '"/assets/father.jpg"', '2016-08-03', 0, 0, 0),
('My Friends and I', 'I have been blessed with amazing friends', '"/assets/more-friends.jpg"', '2015-12-24', 0, 0, 0),
('My Girlfriend and I', 'My girlfriend means the world to me', '"/assets/more-girlfriend.jpg"', '2017-08-30', 0, 0, 0);
