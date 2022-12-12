1- SELECT * FROM 'students'
2-SELECT * FROM 'students' where age>30;
3-SELECT * FROM 'students' where gender = "F" AND age>30
4-SELECT Points FROM students WHERE name="Alex"
5-INSERT INTO students (ID, name, Age,Gender,Points)
VALUES ( 7 , 'faysal',27,'M', 600)
6-UPDATE students
SET Points= 450
WHERE ID=2;
7-UPDATE students
SET Points= 150
WHERE ID=1;
8-CREATE TABLE graduates (
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL UNIQUE,
    Age INTEGER,
    Gender TEXT,
    Points INTEGER,
    Graduation TEXT
);

creating table:

-1-INSERT INTO gradutes (ID,name,Age,Gender,Points) SELECT ID,name,Age,Gender,Points from students where name= 'Layal'
-2-UPDATE  gradutes set Graduation="08/09/2018" where name='Layal'
-3- DELETE FROM graduates
WHERE name ="layal"

