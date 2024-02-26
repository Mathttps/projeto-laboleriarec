--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 15.2

-- Started on 2024-02-26 17:25:30

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

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 65766)
-- Name: cakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying NOT NULL,
    price numeric NOT NULL,
    image character varying NOT NULL,
    description character varying
);


ALTER TABLE public.cakes OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 65765)
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cakes_id_seq OWNER TO postgres;

--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 209
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- TOC entry 212 (class 1259 OID 65775)
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    phone character varying NOT NULL
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 65774)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO postgres;

--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 211
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 214 (class 1259 OID 65784)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    clientid integer,
    cakeid integer,
    quantity integer NOT NULL,
    createdat timestamp without time zone,
    totalprice numeric NOT NULL
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 65783)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 213
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 3179 (class 2604 OID 65769)
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- TOC entry 3180 (class 2604 OID 65778)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 3181 (class 2604 OID 65787)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 3330 (class 0 OID 65766)
-- Dependencies: 210
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cakes (id, name, price, image, description) FROM stdin;
1	bolobpcf 3	53	httmp://fotoDoBolo	bolo de teste 2
\.


--
-- TOC entry 3332 (class 0 OID 65775)
-- Dependencies: 212
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (id, name, address, phone) FROM stdin;
1	nnn	httmp://fotoDoBolo	14999999999
\.


--
-- TOC entry 3334 (class 0 OID 65784)
-- Dependencies: 214
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, clientid, cakeid, quantity, createdat, totalprice) FROM stdin;
1	1	1	4	2023-08-24 22:11:12.45594	10
2	1	1	4	2023-08-24 22:11:25.785047	10
\.


--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 209
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cakes_id_seq', 1, true);


--
-- TOC entry 3345 (class 0 OID 0)
-- Dependencies: 211
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, true);


--
-- TOC entry 3346 (class 0 OID 0)
-- Dependencies: 213
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 2, true);


--
-- TOC entry 3183 (class 2606 OID 65773)
-- Name: cakes cakes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);


--
-- TOC entry 3185 (class 2606 OID 65782)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 65791)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 3188 (class 2606 OID 65797)
-- Name: orders orders_cakeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_cakeid_fkey FOREIGN KEY (cakeid) REFERENCES public.cakes(id);


--
-- TOC entry 3189 (class 2606 OID 65792)
-- Name: orders orders_clientid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_clientid_fkey FOREIGN KEY (clientid) REFERENCES public.clients(id);


--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2024-02-26 17:25:30

--
-- PostgreSQL database dump complete
--

