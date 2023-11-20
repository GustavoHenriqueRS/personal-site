"use client";

import Image, { StaticImageData } from "next/image";
import home from "../assets/home.png";
import vin from "../assets/vin.png";

import projectPath1 from "../assets/project1.png";
import projectPath2 from "../assets/project2.png";
import projectPath3 from "../assets/project3.png";
import projectPath4 from "../assets/project4.png";

import "react-magic-motion/card.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

import { MagicTabSelect } from "react-magic-motion";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ModalProps {
    path: StaticImageData;
    name: string;
    about: string;
    tecno: string[];
    link?: string;
}

interface CustomStyles {
    content: {
        display: string;
        top: string;
        left: string;
        transform: string;
        width: string;
        height: string;
        backgroundColor: string;
        border: string;
    };
    overlay: {
        backgroundColor: string;
    };
}

export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ModalProps | null>(
        null
    );

    function openModal(itemData: ModalProps) {
        setSelectedProject(itemData);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const ref = useRef(null);

    const headerTexts = ["Inicio", "Sobre", "Projetos", "Contato"];

    const customStyles: CustomStyles = {
        content: {
            display: "flex",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "70%",
            backgroundColor: "#1F1F1F",
            border: "none",
        },
        overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
        },
    };

    const sociaMedia = {
        linkedin: {
            name: "Linkedin",
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/gustavohenrique23/",
        },
        github: {
            name: "Github",
            icon: faGithub,
            link: "https://github.com/GustavoHenriqueRS",
        },
        instagram: {
            name: "Instagram",
            icon: faInstagram,
            link: "https://www.instagram.com/gustavo__hen1/",
        },
        email: {
            name: "Email",
            icon: faEnvelope,
            link: "mailto:gustavohenriqueprivado@gmail.com",
        },
    };

    const projectPaths = {
        project1: {
            path: projectPath1,
            name: "Vambora",
            about: "Aplicativo de caronas para universitários feito na disciplina de MDS, app feito em react-native e backend em node.js, minha principal contribuição foi no front-end do app, fui responsavel pela maior parte visual da aplicação",
            tecno: [
                "React-Native",
                "NodeJS",
                "Expo",
                "Styled-Components",
                "Docker",
                "TSyringe",
                "Nodemailer",
                "Vitest",
                "Express",
            ],
            link: "https://github.com/fga-eps-mds/2022-2-Vambora",
        },
        project2: {
            path: projectPath2,
            name: "Mavi",
            about: "Aplicativo para rotas de ônibus, app feito em react-native usando styled-components para a parte visual, integração com o react-native-maps para a parte de mapas e integração com a api do google maps para a parte de rotas",
            tecno: [
                "React-Native",
                "Styled-Components",
                "Google Maps API",
                "React-Native-Maps",
                "Axios",
            ],
            link: "https://github.com/MAVI-Inova-UnB",
        },
        project3: {
            path: projectPath3,
            name: "O que precisa",
            about: "Solução Web para pessoas que querem oferecer serviços e pessoas que precisam de serviços, feito em react.js com tailwind, minha principal contribuição foi no front-end do app, fui responsavel pela maior parte visual da aplicação",
            tecno: [
                "React",
                "Tailwind",
                "Axios",
                "React-Router",
                "Framer-Motion",
                "Vite",
            ],
            link: "https://oqueprecisa.vercel.app/",
        },
        project4: {
            path: projectPath4,
            name: "Brasil Participativo",
            about: "Solução Web do Governo Brasileiro para a participação popular, feito em Ruby e Ruby on Rails, minha principal contribuição foi no front-end do app, minha principal contribuição foi no front-end do app.",
            tecno: ["Ruby", "Ruby on Rails", "Decidim", "Docker", "SASS"],
            link: "https://brasilparticipativo.presidencia.gov.br/",
        },
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.65, 0.3, 1],
            },
        },
        cardHidden: {
            opacity: 0,
            y: `3em`,
        },
        card: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1.5,
                ease: [0.2, 0.65, 0.3, 1.3],
            },
        },
    };

    const headerComponent = headerTexts.map((header, index) => {
        return (
            <button
                key={header}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => {
                    window.location.href = `#${header.toLowerCase()}`;
                }}
                className="relative px-4 py-3 bg-black text-white border-0 rounded-full"
            >
                {hoveredIndex === index && (
                    <MagicTabSelect
                        id="pillTabs"
                        transition={{ type: "spring", bounce: 0.35 }}
                    >
                        <span className="rounded-2xl absolute top-0 bottom-0 left-0 right-0 z-10 bg-white mix-blend-difference" />
                    </MagicTabSelect>
                )}
                {header}
            </button>
        );
    });

    const CustomModal = ({
        isOpen,
        closeModal,
        itemData,
    }: {
        isOpen: boolean;
        closeModal: () => void;
        itemData: ModalProps;
    }) => {
        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            }

            return () => {
                document.body.style.overflow = "visible";
            };
        }, [isOpen]);

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="flex flex-col md:flex-row">
                    <Image
                        src={itemData.path}
                        alt={itemData.name}
                        width={300}
                        height={300}
                    />
                    <div className="text-white flex flex-col w-1/2 md:ml-14 py-8">
                        <h2 className="text-3xl font-bold xl:text-5xl my-8">
                            {itemData.name}
                        </h2>
                        <p className="text-xs md:text-lg">{itemData.about}</p>
                        <h2 className="text-3xl font-bold xl:text-5xl my-8">
                            Tecnologias
                        </h2>
                        {itemData.tecno.map((tecno) => (
                            <p key={tecno} className="text-xs md:text-lg">
                                {tecno}
                            </p>
                        ))}
                        <a
                            href={itemData.link}
                            className="mt-4  text-blue-600 text-xs md:text-xl"
                        >
                            Link
                        </a>
                        <p className="text-xs md:text-lg">
                            Para aplicações mobile, este link levara para o
                            repositorio. Ja aplicações Web levara para o site
                            implementado.
                        </p>
                    </div>
                </div>
            </Modal>
        );
    };

    const projectsComponent = Object.keys(projectPaths).map((key) => {
        const project = projectPaths[key as keyof typeof projectPaths];

        return (
            <div
                key={key}
                className="flex flex-col items-center w-1/2 overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out"
            >
                <h1 className="font-light text-xl">{project.name}</h1>
                <button
                    className="blur-md hover:blur-none transition-all duration-300 ease-in-out mt-4 grayscale hover:grayscale-0"
                    onClick={() => openModal(project)}
                >
                    <motion.div
                        initial={characterAnimation.cardHidden}
                        whileInView={characterAnimation.card}
                    >
                        <Image
                            src={project.path}
                            alt={project.name}
                            width={600}
                            height={600}
                        />
                    </motion.div>
                </button>
            </div>
        );
    });

    const socialMediaComponent = Object.keys(sociaMedia).map((key) => {
        return (
            <div
                className="flex flex-col items-center w-1/2 overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out mt-12 gap-4"
                key={key}
            >
                <h1 className="font-light text-xl">
                    {sociaMedia[key as keyof typeof sociaMedia].name}
                </h1>
                <a href={sociaMedia[key as keyof typeof sociaMedia].link}>
                    <FontAwesomeIcon
                        size="3x"
                        icon={
                            sociaMedia[key as keyof typeof sociaMedia]
                                .icon as IconProp
                        }
                    />
                </a>
            </div>
        );
    });

    return (
        <div className="bg-black flex w-full justify-between flex-col items-center md:gap-0">
            <div className="flex text-white justify-center w-2/4 font-light sticky top-4 xl:gap-16">
                {headerComponent}
            </div>
            <div
                className="flex flex-row justify-center items-center h-screen w-5/6"
                id="inicio"
                ref={ref}
            >
                <div className="text-white flex flex-col w-3/5 gap-4 ml-12">
                    <motion.h2
                        className="text-2xl"
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                    >
                        Front-End Developer
                    </motion.h2>
                    <motion.h1
                        className="font-bold md:text-6xl text-4xl xl:text-8xl"
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                    >
                        Gustavo Henrique
                    </motion.h1>
                    <motion.h3
                        className="text-sm md:text-xl"
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                    >
                        Tenho 20 anos, sou desenvolvedor front-end web e mobile,
                        sou estudante de Engenharia de Software na Universidade
                        Federal de Brasilia e estou em busca de novos desafios.
                    </motion.h3>
                </div>
                <motion.div
                    className="flex rounded-full"
                    initial={characterAnimation.hidden}
                    whileInView={characterAnimation.visible}
                >
                    <Image
                        src={home}
                        alt="homem-carregando-globo"
                        width={600}
                        height={600}
                    />
                </motion.div>
            </div>
            <div
                className="flex h-screen w-5/6 justify-between items-center"
                id="sobre"
                ref={ref}
            >
                <motion.div
                    initial={characterAnimation.hidden}
                    whileInView={characterAnimation.visible}
                    className="rounded-full gap-8 h-[500px] w-[500px] overflow-visible items-center justify-center flex flex-col"
                >
                    <Image
                        src={vin}
                        alt="JulioCesar"
                        width={600}
                        height={600}
                    />
                    <h3 className="font-bold md:text-2xl text-sm text-white">
                        Veni, Vidi, Vici
                        <br />{" "}
                        <p className="opacity-40 text-end md:text-xl text-xs font-normal">
                            Júlio César.
                        </p>
                    </h3>
                </motion.div>

                <div className="text-white flex-col h-1/2 flex justify-evenly w-1/2">
                    <motion.h1
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                        className="font-bold text-5xl xl:text-7xl"
                    >
                        Sobre
                    </motion.h1>
                    <motion.h2
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                        className="font-light xl:text-2xl text-sm"
                    >
                        Como já mencionei anteriormente, meu nome é Gustavo,
                        tenho 20 anos e estou atualmente no 6º semestre do curso
                        de Engenharia de Software na Universidade Federal de
                        Brasília. Meu foco está no desenvolvimento front-end
                        para web e mobile, contando com alguns anos de
                        experiência e projetos que você pode encontrar no meu
                        GitHub.
                    </motion.h2>
                    <motion.h2
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                        className="font-extralight xl:text-xl text-xs"
                    >
                        Estou buscando novas experiências e desafios na área. Me
                        considero-me uma pessoa proativa e honesta, sempre
                        disposta a aprender e ensinar.
                    </motion.h2>
                </div>
            </div>
            <div
                className="flex w-5/6 flex-col text-white justify-center h-screen"
                id="projetos"
                ref={ref}
            >
                <motion.h1
                    initial={characterAnimation.hidden}
                    whileInView={characterAnimation.visible}
                    className="font-bold md:text-7xl text-4xl flex text-center justify-center"
                >
                    Projetos
                </motion.h1>
                <div className="flex w-full gap-4 md:gap-16 flex-col sm:flex-row h-3/4 mt-4 items-center md:items-stretch">
                    {projectsComponent}
                    {selectedProject && (
                        <CustomModal
                            isOpen={modalIsOpen}
                            closeModal={closeModal}
                            itemData={selectedProject}
                        />
                    )}
                </div>
            </div>
            <div
                className="flex w-5/6 flex-col text-white justify-center h-screen"
                id="contato"
                ref={ref}
            >
                <div className="flex items-center justify-center flex-col">
                    <motion.h1
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                        className="font-bold md:text-7xl text-4xl flex text-center justify-center"
                    >
                        Contatos
                    </motion.h1>
                    <motion.h2
                        className="font-light md:text-2xl text-sm text-center mt-4"
                        initial={characterAnimation.hidden}
                        whileInView={characterAnimation.visible}
                    >
                        Se você gostou do meu trabalho e quer entrar em contato
                        comigo, pode me mandar um email ou me chamar no
                        linkedin. Abaixo deixarei alguns links para você me
                        conhecer melhor.
                    </motion.h2>
                    <div className="flex w-full">{socialMediaComponent}</div>
                </div>
            </div>
        </div>
    );
}
