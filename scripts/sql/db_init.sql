CREATE TABLE "employees" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(255),
  "last_name" VARCHAR(255),
  "email" VARCHAR UNIQUE NOT NULL,
  "title" VARCHAR(255),
  "department_id" INTEGER NOT NULL REFERENCES department(id)
);

CREATE TABLE "department" (
  "id" SERIAL PRIMARY KEY,
  "department_name" VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "salaries" (
  "id" SERIAL PRIMARY KEY,
  "employee_id" integer NOT NULL REFERENCES employees(id) UNIQUE,
  "salary" MONEY
  
);

CREATE TABLE "historical_salaries" (
  "id" SERIAL PRIMARY KEY,
  "employee_id" integer NOT NULL REFERENCES employees(id),
  "salary" MONEY,
  "effective_date" DATE
);

ALTER TABLE "employees" ADD FOREIGN KEY ("department_id") REFERENCES "department" ("id");

ALTER TABLE "salaries" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("id");

ALTER TABLE "historical_salaries" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("id");

