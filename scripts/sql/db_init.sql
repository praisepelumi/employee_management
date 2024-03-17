CREATE TABLE "department" (
  "id" SERIAL PRIMARY KEY,
  "department_name" VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "employees" (
  "id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(255),
  "last_name" VARCHAR(255),
  "email" VARCHAR UNIQUE NOT NULL,
  "title" VARCHAR(255),
  "department_id" INTEGER NOT NULL REFERENCES department(id)
);

CREATE TABLE "salaries" (
  "salary" MONEY,
  "employee_id" INTEGER NOT NULL REFERENCES employees(id)
);

CREATE TABLE "historical_salaries" (
  "id" SERIAL PRIMARY KEY,
  "salary" MONEY,
  "effective_date" DATE,
  "employee_id" INTEGER NOT NULL REFERENCES employees(id)
);

ALTER TABLE "employees" ADD CONSTRAINT "FK_department_id" FOREIGN KEY ("department_id") REFERENCES "department" ("id");

ALTER TABLE "salaries" ADD CONSTRAINT "FK_salaries_employees" FOREIGN KEY ("employee_id") REFERENCES "employees" ("id");

ALTER TABLE "historical_salaries" ADD CONSTRAINT "FK_historical_salaries_employees" FOREIGN KEY ("employee_id") REFERENCES "employees" ("id");

