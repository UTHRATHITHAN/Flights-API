##About this Project

This is a flight booking API build using Node js, Express Js, MySQL, Sequelize ORM.


## Initializing the Projects,

1 - `npm i`

2 - .env and add PORT=5000

3 - Inside src delete models folder

4 - `npx sequelize init`

5 - `npx  sequelize db:create` ---> To create a db using config.json

6 - `npx sequelize model:generate` --name Airplane --attributes modeNumber:String,capacity:integer ---> Creating a model(table) with name Airplane with column name of modelNumbers of string type and capacity of integer type.

7 - `npx  sequelize db:migrate` ---> Applies the all the pending migrations to the DB.How it know what are the change in the migrations .By using the unique number in front of the migration file.

8 - `npx sequelize db:migrate:undo` ---> To revert the last migrations.


