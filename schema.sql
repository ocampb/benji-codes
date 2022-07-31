--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Enrichments; Type: TABLE; Schema: public; Owner: 	swdkxmbx
--

CREATE TABLE public."Enrichments" (
    id integer NOT NULL,
    type character varying(255),
    duration character varying(255),
    notes character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PetId" integer
);


ALTER TABLE public."Enrichments" OWNER TO 	swdkxmbx;

--
-- Name: Enrichments_id_seq; Type: SEQUENCE; Schema: public; Owner: 	swdkxmbx
--

CREATE SEQUENCE public."Enrichments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Enrichments_id_seq" OWNER TO 	swdkxmbx;

--
-- Name: Enrichments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: 	swdkxmbx
--

ALTER SEQUENCE public."Enrichments_id_seq" OWNED BY public."Enrichments".id;


--
-- Name: Medications; Type: TABLE; Schema: public; Owner: 	swdkxmbx
--

CREATE TABLE public."Medications" (
    id integer NOT NULL,
    name character varying(255),
    dosage character varying(255),
    date_administered character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PetId" integer
);


ALTER TABLE public."Medications" OWNER TO 	swdkxmbx;

--
-- Name: Medications_id_seq; Type: SEQUENCE; Schema: public; Owner: 	swdkxmbx
--

CREATE SEQUENCE public."Medications_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Medications_id_seq" OWNER TO 	swdkxmbx;

--
-- Name: Medications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: 	swdkxmbx
--

ALTER SEQUENCE public."Medications_id_seq" OWNED BY public."Medications".id;


--
-- Name: Pet_Owners; Type: TABLE; Schema: public; Owner: 	swdkxmbx
--

CREATE TABLE public."Pet_Owners" (
    "PetID" character varying(255),
    "OwnerID" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PetId" integer NOT NULL,
    "UserId" integer NOT NULL
);


ALTER TABLE public."Pet_Owners" OWNER TO 	swdkxmbx;

--
-- Name: Pets; Type: TABLE; Schema: public; Owner: 	swdkxmbx
--

CREATE TABLE public."Pets" (
    id integer NOT NULL,
    name character varying(255),
    species character varying(255),
    birthday character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Pets" OWNER TO 	swdkxmbx;

--
-- Name: Pets_id_seq; Type: SEQUENCE; Schema: public; Owner: 	swdkxmbx
--

CREATE SEQUENCE public."Pets_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pets_id_seq" OWNER TO 	swdkxmbx;

--
-- Name: Pets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: 	swdkxmbx
--

ALTER SEQUENCE public."Pets_id_seq" OWNED BY public."Pets".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: 	swdkxmbx
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255),
    username character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO 	swdkxmbx;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: 	swdkxmbx
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO 	swdkxmbx;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: 	swdkxmbx
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Veterinary_Visits; Type: TABLE; Schema: public; Owner: 	swdkxmbx
--

CREATE TABLE public."Veterinary_Visits" (
    id integer NOT NULL,
    vet_name character varying(255),
    date_of_visit character varying(255),
    reason character varying(255),
    notes character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "PetId" integer
);


ALTER TABLE public."Veterinary_Visits" OWNER TO 	swdkxmbx;

--
-- Name: Veterinary_Visits_id_seq; Type: SEQUENCE; Schema: public; Owner: 	swdkxmbx
--

CREATE SEQUENCE public."Veterinary_Visits_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Veterinary_Visits_id_seq" OWNER TO 	swdkxmbx;

--
-- Name: Veterinary_Visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: 	swdkxmbx
--

ALTER SEQUENCE public."Veterinary_Visits_id_seq" OWNED BY public."Veterinary_Visits".id;


--
-- Name: Enrichments id; Type: DEFAULT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Enrichments" ALTER COLUMN id SET DEFAULT nextval('public."Enrichments_id_seq"'::regclass);


--
-- Name: Medications id; Type: DEFAULT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Medications" ALTER COLUMN id SET DEFAULT nextval('public."Medications_id_seq"'::regclass);


--
-- Name: Pets id; Type: DEFAULT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Pets" ALTER COLUMN id SET DEFAULT nextval('public."Pets_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: Veterinary_Visits id; Type: DEFAULT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Veterinary_Visits" ALTER COLUMN id SET DEFAULT nextval('public."Veterinary_Visits_id_seq"'::regclass);


--
-- Name: Enrichments Enrichments_pkey; Type: CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Enrichments"
    ADD CONSTRAINT "Enrichments_pkey" PRIMARY KEY (id);


--
-- Name: Medications Medications_pkey; Type: CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Medications"
    ADD CONSTRAINT "Medications_pkey" PRIMARY KEY (id);


--
-- Name: Pet_Owners Pet_Owners_pkey; Type: CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Pet_Owners"
    ADD CONSTRAINT "Pet_Owners_pkey" PRIMARY KEY ("PetId", "UserId");


--
-- Name: Pets Pets_pkey; Type: CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Pets"
    ADD CONSTRAINT "Pets_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Veterinary_Visits Veterinary_Visits_pkey; Type: CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Veterinary_Visits"
    ADD CONSTRAINT "Veterinary_Visits_pkey" PRIMARY KEY (id);


--
-- Name: Enrichments Enrichments_PetId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Enrichments"
    ADD CONSTRAINT "Enrichments_PetId_fkey" FOREIGN KEY ("PetId") REFERENCES public."Pets"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Medications Medications_PetId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Medications"
    ADD CONSTRAINT "Medications_PetId_fkey" FOREIGN KEY ("PetId") REFERENCES public."Pets"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Pet_Owners Pet_Owners_PetId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Pet_Owners"
    ADD CONSTRAINT "Pet_Owners_PetId_fkey" FOREIGN KEY ("PetId") REFERENCES public."Pets"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Pet_Owners Pet_Owners_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Pet_Owners"
    ADD CONSTRAINT "Pet_Owners_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Veterinary_Visits Veterinary_Visits_PetId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: 	swdkxmbx
--

ALTER TABLE ONLY public."Veterinary_Visits"
    ADD CONSTRAINT "Veterinary_Visits_PetId_fkey" FOREIGN KEY ("PetId") REFERENCES public."Pets"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

