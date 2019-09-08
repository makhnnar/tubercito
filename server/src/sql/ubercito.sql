--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.14
-- Dumped by pg_dump version 9.5.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    id_address integer NOT NULL,
    country character varying NOT NULL,
    state character varying NOT NULL,
    city character varying NOT NULL,
    comunity character varying NOT NULL,
    street integer NOT NULL,
    house integer NOT NULL,
    block integer NOT NULL,
    latitude integer NOT NULL,
    longitude integer NOT NULL
);


ALTER TABLE public.address OWNER TO postgres;

--
-- Name: addressByPerson; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."addressByPerson" (
    id_address_by_person integer NOT NULL,
    id_address integer,
    id_person integer
);


ALTER TABLE public."addressByPerson" OWNER TO postgres;

--
-- Name: addressByPerson_id_address_by_person_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."addressByPerson_id_address_by_person_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."addressByPerson_id_address_by_person_seq" OWNER TO postgres;

--
-- Name: addressByPerson_id_address_by_person_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."addressByPerson_id_address_by_person_seq" OWNED BY public."addressByPerson".id_address_by_person;


--
-- Name: address_id_address_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.address_id_address_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.address_id_address_seq OWNER TO postgres;

--
-- Name: address_id_address_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.address_id_address_seq OWNED BY public.address.id_address;


--
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person (
    id_person integer NOT NULL,
    first_name character varying,
    last_name character varying,
    id_telephone integer,
    email character varying,
    gender character varying,
    birthday date,
    number_id integer
);


ALTER TABLE public.person OWNER TO postgres;

--
-- Name: person_id_person_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.person_id_person_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_id_person_seq OWNER TO postgres;

--
-- Name: person_id_person_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.person_id_person_seq OWNED BY public.person.id_person;


--
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    id_session integer NOT NULL,
    id_user integer,
    expiration boolean,
    temporal_token boolean
);


ALTER TABLE public.session OWNER TO postgres;

--
-- Name: session_id_session_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.session_id_session_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.session_id_session_seq OWNER TO postgres;

--
-- Name: session_id_session_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.session_id_session_seq OWNED BY public.session.id_session;


--
-- Name: telephone; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.telephone (
    id_telephone integer NOT NULL,
    area_code character varying NOT NULL,
    operator character varying NOT NULL,
    number integer
);


ALTER TABLE public.telephone OWNER TO postgres;

--
-- Name: telephoneByPerson; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."telephoneByPerson" (
    id_telephone_by_person integer NOT NULL,
    id_telephone integer,
    id_person integer
);


ALTER TABLE public."telephoneByPerson" OWNER TO postgres;

--
-- Name: telephoneByPerson_id_telephone_by_person_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."telephoneByPerson_id_telephone_by_person_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."telephoneByPerson_id_telephone_by_person_seq" OWNER TO postgres;

--
-- Name: telephoneByPerson_id_telephone_by_person_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."telephoneByPerson_id_telephone_by_person_seq" OWNED BY public."telephoneByPerson".id_telephone_by_person;


--
-- Name: telephone_id_telephone_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.telephone_id_telephone_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.telephone_id_telephone_seq OWNER TO postgres;

--
-- Name: telephone_id_telephone_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.telephone_id_telephone_seq OWNED BY public.telephone.id_telephone;


--
-- Name: travel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.travel (
    id_travel integer NOT NULL,
    id_requesting_user integer,
    id_borrower_user integer,
    id_origin_address integer,
    id_destination_address integer NOT NULL,
    trip_distance integer,
    time_distance integer,
    price integer
);


ALTER TABLE public.travel OWNER TO postgres;

--
-- Name: travel_id_destination_address_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.travel_id_destination_address_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.travel_id_destination_address_seq OWNER TO postgres;

--
-- Name: travel_id_destination_address_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.travel_id_destination_address_seq OWNED BY public.travel.id_destination_address;


--
-- Name: travel_id_travel_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.travel_id_travel_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.travel_id_travel_seq OWNER TO postgres;

--
-- Name: travel_id_travel_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.travel_id_travel_seq OWNED BY public.travel.id_travel;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id_user integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    id_person integer,
    is_enable boolean,
    id_user_type integer,
    id_wallet integer
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: userType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."userType" (
    id_user_type integer NOT NULL,
    description character varying
);


ALTER TABLE public."userType" OWNER TO postgres;

--
-- Name: userType_id_user_type_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."userType_id_user_type_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."userType_id_user_type_seq" OWNER TO postgres;

--
-- Name: userType_id_user_type_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."userType_id_user_type_seq" OWNED BY public."userType".id_user_type;


--
-- Name: user_id_user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_user_seq OWNER TO postgres;

--
-- Name: user_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_user_seq OWNED BY public."user".id_user;


--
-- Name: vehicle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehicle (
    id_vehicle integer NOT NULL,
    color character varying NOT NULL,
    brand character varying NOT NULL,
    model character varying NOT NULL,
    year integer NOT NULL
);


ALTER TABLE public.vehicle OWNER TO postgres;

--
-- Name: vehicleByPerson; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."vehicleByPerson" (
    id_vehicle_by_person integer NOT NULL,
    id_vehicle integer,
    id_person integer
);


ALTER TABLE public."vehicleByPerson" OWNER TO postgres;

--
-- Name: vehicleByPerson_id_vehicle_by_person_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."vehicleByPerson_id_vehicle_by_person_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."vehicleByPerson_id_vehicle_by_person_seq" OWNER TO postgres;

--
-- Name: vehicleByPerson_id_vehicle_by_person_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."vehicleByPerson_id_vehicle_by_person_seq" OWNED BY public."vehicleByPerson".id_vehicle_by_person;


--
-- Name: vehicle_id_vehicle_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vehicle_id_vehicle_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vehicle_id_vehicle_seq OWNER TO postgres;

--
-- Name: vehicle_id_vehicle_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vehicle_id_vehicle_seq OWNED BY public.vehicle.id_vehicle;


--
-- Name: wallet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wallet (
    id_wallet integer NOT NULL,
    cuantity integer
);


ALTER TABLE public.wallet OWNER TO postgres;

--
-- Name: wallet_id_wallet_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wallet_id_wallet_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wallet_id_wallet_seq OWNER TO postgres;

--
-- Name: wallet_id_wallet_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wallet_id_wallet_seq OWNED BY public.wallet.id_wallet;


--
-- Name: id_address; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address ALTER COLUMN id_address SET DEFAULT nextval('public.address_id_address_seq'::regclass);


--
-- Name: id_address_by_person; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."addressByPerson" ALTER COLUMN id_address_by_person SET DEFAULT nextval('public."addressByPerson_id_address_by_person_seq"'::regclass);


--
-- Name: id_person; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person ALTER COLUMN id_person SET DEFAULT nextval('public.person_id_person_seq'::regclass);


--
-- Name: id_session; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session ALTER COLUMN id_session SET DEFAULT nextval('public.session_id_session_seq'::regclass);


--
-- Name: id_telephone; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telephone ALTER COLUMN id_telephone SET DEFAULT nextval('public.telephone_id_telephone_seq'::regclass);


--
-- Name: id_telephone_by_person; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."telephoneByPerson" ALTER COLUMN id_telephone_by_person SET DEFAULT nextval('public."telephoneByPerson_id_telephone_by_person_seq"'::regclass);


--
-- Name: id_travel; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel ALTER COLUMN id_travel SET DEFAULT nextval('public.travel_id_travel_seq'::regclass);


--
-- Name: id_destination_address; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel ALTER COLUMN id_destination_address SET DEFAULT nextval('public.travel_id_destination_address_seq'::regclass);


--
-- Name: id_user; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id_user SET DEFAULT nextval('public.user_id_user_seq'::regclass);


--
-- Name: id_user_type; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userType" ALTER COLUMN id_user_type SET DEFAULT nextval('public."userType_id_user_type_seq"'::regclass);


--
-- Name: id_vehicle; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle ALTER COLUMN id_vehicle SET DEFAULT nextval('public.vehicle_id_vehicle_seq'::regclass);


--
-- Name: id_vehicle_by_person; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."vehicleByPerson" ALTER COLUMN id_vehicle_by_person SET DEFAULT nextval('public."vehicleByPerson_id_vehicle_by_person_seq"'::regclass);


--
-- Name: id_wallet; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wallet ALTER COLUMN id_wallet SET DEFAULT nextval('public.wallet_id_wallet_seq'::regclass);


--
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (id_address, country, state, city, comunity, street, house, block, latitude, longitude) FROM stdin;
\.


--
-- Data for Name: addressByPerson; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."addressByPerson" (id_address_by_person, id_address, id_person) FROM stdin;
\.


--
-- Name: addressByPerson_id_address_by_person_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."addressByPerson_id_address_by_person_seq"', 1, false);


--
-- Name: address_id_address_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_address_seq', 1, false);


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person (id_person, first_name, last_name, id_telephone, email, gender, birthday, number_id) FROM stdin;
\.


--
-- Name: person_id_person_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.person_id_person_seq', 1, false);


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (id_session, id_user, expiration, temporal_token) FROM stdin;
\.


--
-- Name: session_id_session_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.session_id_session_seq', 1, false);


--
-- Data for Name: telephone; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telephone (id_telephone, area_code, operator, number) FROM stdin;
\.


--
-- Data for Name: telephoneByPerson; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."telephoneByPerson" (id_telephone_by_person, id_telephone, id_person) FROM stdin;
\.


--
-- Name: telephoneByPerson_id_telephone_by_person_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."telephoneByPerson_id_telephone_by_person_seq"', 1, false);


--
-- Name: telephone_id_telephone_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telephone_id_telephone_seq', 1, false);


--
-- Data for Name: travel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.travel (id_travel, id_requesting_user, id_borrower_user, id_origin_address, id_destination_address, trip_distance, time_distance, price) FROM stdin;
\.


--
-- Name: travel_id_destination_address_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.travel_id_destination_address_seq', 1, false);


--
-- Name: travel_id_travel_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.travel_id_travel_seq', 1, false);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id_user, username, password, id_person, is_enable, id_user_type, id_wallet) FROM stdin;
\.


--
-- Data for Name: userType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."userType" (id_user_type, description) FROM stdin;
\.


--
-- Name: userType_id_user_type_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."userType_id_user_type_seq"', 1, false);


--
-- Name: user_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_user_seq', 1, false);


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehicle (id_vehicle, color, brand, model, year) FROM stdin;
\.


--
-- Data for Name: vehicleByPerson; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."vehicleByPerson" (id_vehicle_by_person, id_vehicle, id_person) FROM stdin;
\.


--
-- Name: vehicleByPerson_id_vehicle_by_person_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."vehicleByPerson_id_vehicle_by_person_seq"', 1, false);


--
-- Name: vehicle_id_vehicle_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vehicle_id_vehicle_seq', 1, false);


--
-- Data for Name: wallet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wallet (id_wallet, cuantity) FROM stdin;
\.


--
-- Name: wallet_id_wallet_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wallet_id_wallet_seq', 1, false);


--
-- Name: id_address; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT id_address PRIMARY KEY (id_address);


--
-- Name: id_address_by_person; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."addressByPerson"
    ADD CONSTRAINT id_address_by_person PRIMARY KEY (id_address_by_person);


--
-- Name: id_person; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT id_person PRIMARY KEY (id_person);


--
-- Name: id_session; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT id_session PRIMARY KEY (id_session);


--
-- Name: id_telephone; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telephone
    ADD CONSTRAINT id_telephone PRIMARY KEY (id_telephone);


--
-- Name: id_telephone_by_person; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."telephoneByPerson"
    ADD CONSTRAINT id_telephone_by_person PRIMARY KEY (id_telephone_by_person);


--
-- Name: id_travel; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel
    ADD CONSTRAINT id_travel PRIMARY KEY (id_travel);


--
-- Name: id_user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT id_user PRIMARY KEY (id_user);


--
-- Name: id_user_type; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."userType"
    ADD CONSTRAINT id_user_type PRIMARY KEY (id_user_type);


--
-- Name: id_vehicle; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT id_vehicle PRIMARY KEY (id_vehicle);


--
-- Name: id_vehicle_by_person; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."vehicleByPerson"
    ADD CONSTRAINT id_vehicle_by_person PRIMARY KEY (id_vehicle_by_person);


--
-- Name: id_wallet; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wallet
    ADD CONSTRAINT id_wallet PRIMARY KEY (id_wallet);


--
-- Name: id_addres; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."addressByPerson"
    ADD CONSTRAINT id_addres FOREIGN KEY (id_address) REFERENCES public.address(id_address);


--
-- Name: id_detination_address; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel
    ADD CONSTRAINT id_detination_address FOREIGN KEY (id_destination_address) REFERENCES public.address(id_address);


--
-- Name: id_origin_address; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel
    ADD CONSTRAINT id_origin_address FOREIGN KEY (id_origin_address) REFERENCES public.address(id_address);


--
-- Name: id_person; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."addressByPerson"
    ADD CONSTRAINT id_person FOREIGN KEY (id_person) REFERENCES public.person(id_person);


--
-- Name: id_person; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."telephoneByPerson"
    ADD CONSTRAINT id_person FOREIGN KEY (id_person) REFERENCES public.person(id_person);


--
-- Name: id_person; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT id_person FOREIGN KEY (id_person) REFERENCES public.person(id_person);


--
-- Name: id_person; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."vehicleByPerson"
    ADD CONSTRAINT id_person FOREIGN KEY (id_person) REFERENCES public.person(id_person);


--
-- Name: id_requesting_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.travel
    ADD CONSTRAINT id_requesting_user FOREIGN KEY (id_requesting_user) REFERENCES public."user"(id_user);


--
-- Name: id_telephone; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."telephoneByPerson"
    ADD CONSTRAINT id_telephone FOREIGN KEY (id_telephone) REFERENCES public.telephone(id_telephone);


--
-- Name: id_user_type; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT id_user_type FOREIGN KEY (id_user_type) REFERENCES public."userType"(id_user_type);


--
-- Name: id_vehicle; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."vehicleByPerson"
    ADD CONSTRAINT id_vehicle FOREIGN KEY (id_vehicle) REFERENCES public.vehicle(id_vehicle);


--
-- Name: id_wallet; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT id_wallet FOREIGN KEY (id_wallet) REFERENCES public.wallet(id_wallet);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

