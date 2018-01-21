--Create Database--
CREATE DATABASE pauls_photo_gallery;

--Create Table--
CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	file_path VARCHAR(250),
	date_taken DATE,
	likes INT,
	hearts INT
)

--Insert Data--
INSERT INTO photos (title, file_path, date_taken, likes, hearts) 
VALUES ('My Sister and I', '/assets/sister.jpg', '2010-09-04', 0, 0),
('My Girlfriend and I', '/assets/girlfriend.jpg', '2014-06-21', 0, 0),
('My Friends and I', '/assets/friends.jpg', '2017-07-18', 0, 0),
('My Mom and I', '/assets/mother.jpg', '2015-05-10', 0, 0),
('My Coworkers and I', '/assets/coworkers.jpg', '2015-11-19', 0, 0),
('My Dad and I', '/assets/father.jpg', '2016-08-03', 0, 0),
('My Friends and I', '/assets/more-friends.jpg', '2015-12-24', 0, 0),
('My Girlfriend and I', '/assets/more-girlfriend.jpg', '2017-08-30', 0, 0);
