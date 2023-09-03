CREATE DATABASE IF NOT exists employees;

USE employees

--table employees

CREATE TABLE IF NOT EXISTS public.employees
(
    id integer NOT NULL DEFAULT nextval('employees_id_seq'::regclass),
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    salary integer NOT NULL,
    CONSTRAINT pk_employees PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.employees
    OWNER to postgres;

-- table job

CREATE TABLE IF NOT EXISTS public.job
(
    id integer NOT NULL DEFAULT nextval('job_id_seq'::regclass),
    name character varying(15) COLLATE pg_catalog."default" NOT NULL,
    description character varying(50) COLLATE pg_catalog."default",
    id_employees integer NOT NULL DEFAULT nextval('job_id_employees_seq'::regclass),
    CONSTRAINT pk_job PRIMARY KEY (id),
    CONSTRAINT fk_id_employees FOREIGN KEY (id_employees)
        REFERENCES public.employees (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.job
    OWNER to postgres;