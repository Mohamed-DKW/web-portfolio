import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ArrowDownToLine,
  Briefcase,
  ChevronRight,
  Contact,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Globe2,
  Laptop,
  Mail,
  MonitorSmartphone,
  ServerCog,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

type Language = "es" | "en";

const techWords = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Docker",
  "REST APIs",
  "PostgreSQL",
];

const content = {
  es: {
    meta: {
      title: "Mohamed Dukuray | Full Stack Developer",
      description:
        "Portfolio profesional de Mohamed Dukuray, desarrollador Full Stack en Barcelona especializado en Java, Spring Boot, React, TypeScript, Docker y APIs REST.",
      keywords:
        "Mohamed Dukuray, Full Stack Developer, Backend Java Developer, Software Engineer, Java, Spring Boot, React, TypeScript, Docker, PostgreSQL, Barcelona",
      author: "Mohamed Dukuray",
      siteName: "Mohamed Dukuray Portfolio",
      url: "https://mohamed-dukuray.dev",
    },
    nav: [
      { href: "#home", text: "Inicio" },
      { href: "#about", text: "Sobre mí" },
      { href: "#projects", text: "Proyectos" },
      { href: "#services", text: "Qué hago" },
      { href: "#skills", text: "Skills" },
      { href: "#timeline", text: "Timeline" },
      { href: "#contact", text: "Contacto" },
    ],
    hero: {
      greeting: "Hola, soy",
      name: "Mohamed Dukuray",
      role: "Full Stack Developer",
      intro:
        "Desarrollo aplicaciones web escalables con Java, Spring Boot y React, cuidando tanto la arquitectura backend como la experiencia de usuario.",
      open: "Open to Work",
      location: "Barcelona, España",
      projects: "Ver proyectos",
      cv: "Descargar CV",
      contact: "Contactar",
      scroll: "Scroll para descubrir",
    },
    about: {
      label: "Sobre mí",
      title:
        "Soy desarrollador Full Stack con foco en backend Java, APIs REST y experiencias frontend modernas.",
      body: "Me gusta construir aplicaciones mantenibles con Java, Spring Boot, React y TypeScript. Disfruto especialmente diseñando APIs, trabajando con bases de datos relacionales y creando interfaces claras. También cuento con experiencia profesional en automatización con Docker, Bash y Ansible, además de una base previa en soporte técnico. Actualmente busco una oportunidad como Full Stack Developer o Backend Java Developer donde seguir creciendo y aportar valor desde el primer día.",
      stats: [
        { label: "Stack principal", value: "Java + React" },
        { label: "Experiencia profesional", value: "4 roles" },
        { label: "Ubicación", value: "Barcelona" },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Trabajo real, stack actual y foco en producto.",
      body: "Estos proyectos muestran las áreas que estoy consolidando: desarrollo full stack, automatización DevOps e integración de herramientas modernas.",
      counter: "proyectos",
      items: [
        {
          title: "Portfolio Website",
          description:
            "Portfolio personal desarrollado con Next.js, Tailwind CSS y Framer Motion.",
          image: "/assets/portfolio.webm",
          href: "https://github.com/Mohamed-DKW",
        },
        {
          title: "DevOps Automation",
          description:
            "Automatización de entornos con Docker, Ansible, Bash y GitLab.",
          image: "/assets/infinitevps.webm",
          href: "https://github.com/Mohamed-DKW",
        },
        {
          title: "Hotel Platform",
          description:
            "Plataforma web para hotel con reservas, diseño responsive e integración API.",
          image: "/assets/unqueue.webm",
          href: "https://github.com/Mohamed-DKW",
        },
      ],
    },
    services: {
      label: "Qué hago",
      title: "Construyo soluciones web completas.",
      body: "Combino backend, frontend y automatización para entregar software claro, mantenible y preparado para crecer.",
      items: [
        {
          service: "Backend Development",
          description: "Desarrollo de APIs REST utilizando Java y Spring Boot.",
          icon: ServerCog,
        },
        {
          service: "Frontend Development",
          description:
            "Desarrollo de interfaces modernas utilizando React y TypeScript.",
          icon: MonitorSmartphone,
        },
        {
          service: "API Integration",
          description: "Integración de servicios externos mediante APIs REST.",
          icon: GitBranch,
        },
        {
          service: "DevOps",
          description: "Docker, Linux, Bash y automatización de entornos.",
          icon: TerminalSquare,
        },
        {
          service: "Database Design",
          description:
            "Diseño de bases de datos relacionales utilizando PostgreSQL.",
          icon: Database,
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Tecnologías organizadas por área.",
      categories: [
        {
          name: "Backend",
          icon: ServerCog,
          skills: ["Java", "Spring Boot", "Hibernate", "REST APIs"],
        },
        {
          name: "Frontend",
          icon: Laptop,
          skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
          name: "DevOps",
          icon: TerminalSquare,
          skills: ["Docker", "Linux", "Ansible", "Bash"],
        },
        { name: "Bases de datos", icon: Database, skills: ["PostgreSQL", "MySQL", "MongoDB"] },
        {
          name: "Herramientas",
          icon: Wrench,
          skills: ["Git", "GitHub", "Postman",],
        },
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Experiencia profesional",
      items: [
        {
          company: "Nordly Arrow",
          role: "Frontend Developer",
          period: "4 meses",
          points: [
            "Desarrollo de aplicaciones web sobre Odoo.",
            "HTML, CSS, JavaScript y nuevas funcionalidades.",
            "Diseño responsive e integración de APIs REST con Python.",
            "Plataforma web para hotel, gestión de reservas y UX.",
          ],
        },
        {
          company: "Nordly Arrow",
          role: "DevOps Developer",
          period: "4 meses",
          points: [
            "Automatización mediante Bash.",
            "Creación de máquinas virtuales y entornos reproducibles.",
            "Contenerización con Docker.",
            "Automatización de despliegues mediante Ansible.",
          ],
        },
        {
          company: "Gamma",
          role: "Helpdesk L1",
          period: "Soporte técnico",
          points: [
            "Soporte técnico de primer nivel.",
            "Resolución de incidencias VoIP.",
            "Configuración de extensiones y gestión de tickets.",
          ],
        },
        {
          company: "SOSMATIC",
          role: "Helpdesk L1",
          period: "Soporte técnico",
          points: [
            "Resolución de incidencias técnicas.",
            "Atención al cliente y diagnóstico de problemas.",
            "Gestión de incidencias y coordinación con departamentos.",
          ],
        },
      ],
    },
    timeline: {
      label: "Timeline",
      title: "Camino profesional",
      items: [
        { year: "2023-2024", title: "Helpdesk Gamma" },
        { year: "2024", title: "Helpdesk SOSMATIC" },
        { year: "2025", title: "DevOps Developer" },
        { year: "2025", title: "Frontend Developer" },
        { year: "2026", title: "Full Stack Developer (Open to Work)" },
      ],
    },
    certificates: {
      label: "Certificados",
      title: "Preparado para próximas certificaciones.",
      body: "Esta sección queda lista para incorporar certificados de Java, Spring, cloud, DevOps o frontend conforme los vayas añadiendo.",
      empty: "Certificados próximamente",
    },
    contact: {
      title: "Trabajemos juntos.",
      body: "Actualmente estoy buscando nuevas oportunidades como Full Stack Developer o Backend Java Developer. Si crees que puedo aportar valor a tu equipo, estaré encantado de hablar contigo.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV",
    },
  },
  en: {
    meta: {
      title: "Mohamed Dukuray | Full Stack Developer",
      description:
        "Professional portfolio of Mohamed Dukuray, a Barcelona-based Full Stack Developer focused on Java, Spring Boot, React, TypeScript, Docker and REST APIs.",
      keywords:
        "Mohamed Dukuray, Full Stack Developer, Backend Java Developer, Software Engineer, Java, Spring Boot, React, TypeScript, Docker, PostgreSQL, Barcelona",
      author: "Mohamed Dukuray",
      siteName: "Mohamed Dukuray Portfolio",
      url: "https://mohamed-dukuray.dev",
    },
    nav: [
      { href: "#home", text: "Home" },
      { href: "#about", text: "About" },
      { href: "#projects", text: "Projects" },
      { href: "#services", text: "What I do" },
      { href: "#skills", text: "Skills" },
      { href: "#timeline", text: "Timeline" },
      { href: "#contact", text: "Contact" },
    ],
    hero: {
      greeting: "Hi, I am",
      name: "Mohamed Dukuray",
      role: "Full Stack Developer",
      intro:
        "I build scalable web applications with Java, Spring Boot and React, caring about backend architecture and user experience.",
      open: "Open to Work",
      location: "Barcelona, Spain",
      projects: "View projects",
      cv: "Download CV",
      contact: "Contact",
      scroll: "Scroll to discover",
    },
    about: {
      label: "About",
      title:
        "I am a Full Stack Developer focused on Java backends, REST APIs and modern frontend experiences.",
      body: "I enjoy building maintainable applications with Java, Spring Boot, React and TypeScript. I especially like designing APIs, working with relational databases and creating clear interfaces. I also have professional experience in process automation with Docker, Bash and Ansible, plus a previous technical support background. I am currently looking for a Full Stack Developer or Backend Java Developer opportunity where I can keep growing and contribute from day one.",
      stats: [
        { label: "Core stack", value: "Java + React" },
        { label: "Professional roles", value: "4" },
        { label: "Location", value: "Barcelona" },
      ],
    },
    projects: {
      label: "Projects",
      title: "Real work, current stack and product focus.",
      body: "These projects show the areas I am consolidating: full stack development, DevOps automation and modern tooling integration.",
      counter: "projects",
      items: [
        {
          title: "Portfolio Website",
          description:
            "Personal portfolio built with Next.js, Tailwind CSS and Framer Motion.",
          image: "/assets/portfolio.webm",
          href: "https://github.com/Mohamed-DKW",
        },
        {
          title: "DevOps Automation",
          description:
            "Environment automation with Docker, Ansible, Bash and GitLab.",
          image: "/assets/infinitevps.webm",
          href: "https://github.com/Mohamed-DKW",
        },
        {
          title: "Hotel Platform",
          description:
            "Hotel web platform with bookings, responsive design and API integration.",
          image: "/assets/unqueue.webm",
          href: "https://github.com/Mohamed-DKW",
        },
      ],
    },
    services: {
      label: "What I do",
      title: "I build complete web solutions.",
      body: "I combine backend, frontend and automation to deliver clear, maintainable software ready to grow.",
      items: [
        {
          service: "Backend Development",
          description: "REST API development with Java and Spring Boot.",
          icon: ServerCog,
        },
        {
          service: "Frontend Development",
          description: "Modern interfaces built with React and TypeScript.",
          icon: MonitorSmartphone,
        },
        {
          service: "API Integration",
          description: "External service integration through REST APIs.",
          icon: GitBranch,
        },
        {
          service: "DevOps",
          description: "Docker, Linux, Bash and environment automation.",
          icon: TerminalSquare,
        },
        {
          service: "Database Design",
          description: "Relational database design using PostgreSQL.",
          icon: Database,
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Technologies organized by area.",
      categories: [
        {
          name: "Backend",
          icon: ServerCog,
          skills: ["Java", "Spring Boot", "Hibernate", "REST APIs"],
        },
        {
          name: "Frontend",
          icon: Laptop,
          skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
          name: "DevOps",
          icon: TerminalSquare,
          skills: ["Docker", "Linux", "Ansible", "Bash"],
        },
        { name: "Databases", icon: Database, skills: ["PostgreSQL"] },
        { name: "Tools", icon: Wrench, skills: ["Git", "GitHub", "Postman"] },
      ],
    },
    experience: {
      label: "Experience",
      title: "Professional experience",
      items: [
        {
          company: "Nordly Arrow",
          role: "Frontend Developer",
          period: "4 months",
          points: [
            "Web application development on Odoo.",
            "HTML, CSS, JavaScript and new feature development.",
            "Responsive design and REST API integration with Python.",
            "Hotel web platform, booking management and UX improvements.",
          ],
        },
        {
          company: "Nordly Arrow",
          role: "DevOps Developer",
          period: "4 months",
          points: [
            "Automation with Bash.",
            "Virtual machine creation and reproducible environments.",
            "Containerization with Docker.",
            "Deployment automation with Ansible.",
          ],
        },
        {
          company: "Gamma",
          role: "Helpdesk L1",
          period: "Technical support",
          points: [
            "First-level technical support.",
            "VoIP incident resolution.",
            "Extension configuration and ticket management.",
          ],
        },
        {
          company: "SOSMATIC",
          role: "Helpdesk L1",
          period: "Technical support",
          points: [
            "Technical issue resolution.",
            "Customer care and problem diagnosis.",
            "Incident management and cross-team coordination.",
          ],
        },
      ],
    },
    timeline: {
      label: "Timeline",
      title: "Professional path",
      items: [
        { year: "2023-2024", title: "Helpdesk Gamma" },
        { year: "2024", title: "Helpdesk SOSMATIC" },
        { year: "2025", title: "DevOps Developer" },
        { year: "2025", title: "Frontend Developer" },
        { year: "2026", title: "Full Stack Developer (Open to Work)" },
      ],
    },
    certificates: {
      label: "Certificates",
      title: "Ready for upcoming certifications.",
      body: "This section is prepared for Java, Spring, cloud, DevOps or frontend certificates as you add them.",
      empty: "Certificates coming soon",
    },
    contact: {
      title: "Let's work together.",
      body: "I am currently looking for new opportunities as a Full Stack Developer or Backend Java Developer. If you believe I can bring value to your team, I would be happy to talk.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV",
    },
  },
} as const;

export default function Home() {
  const refScrollContainer = useRef(null);
  const [language, setLanguage] = useState<Language>("es");
  const [typedIndex, setTypedIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTypedIndex((index) => (index + 1) % techWords.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let currentSection = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          currentSection = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${currentSection}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.95,
    });
  }, []);

  return (
    <Container
      navLinks={t.nav}
      language={language}
      onToggleLanguage={() => setLanguage(language === "es" ? "en" : "es")}
      {...t.meta}
    >
      <div ref={refScrollContainer}>
        <Gradient />

        <section
          id="home"
          data-scroll-section
          className="mt-36 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-wrap items-center gap-2"
            >
              <span className={styles.pill}>{t.hero.open}</span>
              <span className={styles.pill}>{t.hero.location}</span>
              <span className={styles.pill}>Java</span>
              <span className={styles.pill}>Spring Boot</span>
              <span className={styles.pill}>React</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-5xl tracking-tighter text-foreground sm:text-6xl 2xl:text-8xl">
                  {t.hero.greeting}
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-5xl sm:text-6xl 2xl:text-8xl">
                  {t.hero.name}
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-3 max-w-xl text-xl font-semibold tracking-tight text-foreground 2xl:text-2xl"
              >
                {t.hero.role}{" "}
                <span className="text-gradient clash-grotesk inline-flex min-w-[150px]">
                  {techWords[typedIndex]}
                  <span className="animate-blink text-foreground">|</span>
                </span>
              </p>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-3 max-w-xl tracking-tight text-muted-foreground 2xl:text-xl"
              >
                {t.hero.intro}
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-wrap items-center gap-3 pt-6"
            >
              <Button
                onClick={() => scrollTo(document.querySelector("#projects"))}
              >
                {t.hero.projects} <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Link href="/cv-mohamed-dukuray.html" download passHref>
                <Button variant="outline">
                  {t.hero.cv} <ArrowDownToLine className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:mdukurayw@gmail.com" passHref>
                <Button variant="outline">
                  {t.hero.contact} <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              {t.hero.scroll}{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
              {t.about.label}
            </span>
            <h2 className="text-4xl font-light leading-normal tracking-tighter text-foreground xl:text-5xl">
              {t.about.title}
            </h2>
            <p className="max-w-4xl text-base leading-8 tracking-tight text-muted-foreground xl:text-lg">
              {t.about.body}
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col rounded-md border border-white/10 bg-white/[3%] p-6 backdrop-blur"
                >
                  <span className="clash-grotesk text-gradient text-3xl font-semibold tracking-tight xl:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 tracking-tight text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" data-scroll-section>
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-56">
            <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
              {t.projects.label}
            </span>
            <h2 className="mt-3 text-5xl font-semibold tracking-tighter xl:text-7xl">
              {t.projects.title}
            </h2>
            <p className="mt-2 max-w-3xl text-base tracking-tight text-muted-foreground xl:text-lg">
              {t.projects.body}
            </p>

            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {t.projects.items.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            <video
                              src={project.image}
                              autoPlay
                              loop
                              muted
                              className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                            />
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/60 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            <span className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                              {project.title}
                              <ExternalLink className="h-3.5 w-3.5 text-primary" />
                            </span>
                            <span className="text-muted-foreground">
                              {project.description}
                            </span>
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                {t.projects.counter}
              </div>
            </div>
          </div>
        </section>

        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-stretch gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
                  {t.services.label}
                </span>
                <h2 className="mt-3 text-5xl font-medium tracking-tight">
                  {t.services.title}
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  {t.services.body}
                </p>
              </div>
              {t.services.items.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-10 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md xl:p-12"
                >
                  <service.icon className="my-6 text-primary" size={22} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" data-scroll-section className="my-40">
          <div data-scroll data-scroll-speed=".4">
            <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
              {t.skills.label}
            </span>
            <h2 className="mt-3 text-5xl font-semibold tracking-tighter xl:text-7xl">
              {t.skills.title}
            </h2>
            <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {t.skills.categories.map((category) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-md border border-white/10 bg-white/[3%] p-6 backdrop-blur transition hover:border-primary/40 hover:bg-white/[6%]"
                >
                  <category.icon className="mb-5 text-primary" size={24} />
                  <h3 className="text-lg font-semibold tracking-tight">
                    {category.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className={styles.pill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" data-scroll-section className="my-40">
          <div data-scroll data-scroll-speed=".4">
            <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
              {t.experience.label}
            </span>
            <h2 className="mt-3 text-5xl font-semibold tracking-tighter xl:text-7xl">
              {t.experience.title}
            </h2>
            <div className="mt-10 grid gap-4 xl:grid-cols-2">
              {t.experience.items.map((job) => (
                <motion.article
                  key={`${job.company}-${job.role}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-md border border-white/10 bg-white/[3%] p-7 backdrop-blur"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {job.role}
                      </h3>
                      <p className="text-gradient clash-grotesk mt-1">
                        {job.company}
                      </p>
                    </div>
                    <span className={styles.pill}>{job.period}</span>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" data-scroll-section className="my-40">
          <div data-scroll data-scroll-speed=".4">
            <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
              {t.timeline.label}
            </span>
            <h2 className="mt-3 text-5xl font-semibold tracking-tighter xl:text-7xl">
              {t.timeline.title}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {t.timeline.items.map((item) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-md border border-white/10 bg-white/[3%] p-5 backdrop-blur"
                >
                  <div className="absolute -top-2 left-5 h-4 w-4 rounded-full border border-primary bg-background shadow-[0_0_30px_rgba(132,134,255,0.8)]" />
                  <span className="text-gradient clash-grotesk text-sm font-semibold">
                    {item.year}
                  </span>
                  <p className="mt-3 text-sm tracking-tight text-foreground">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" data-scroll-section className="my-40">
          <div
            data-scroll
            data-scroll-speed=".4"
            className="rounded-md border border-white/10 bg-gradient-to-br from-primary/[6.5%] to-white/5 p-8 backdrop-blur xl:p-12"
          >
            <span className="text-gradient clash-grotesk text-base font-semibold tracking-tight">
              {t.certificates.label}
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tighter xl:text-6xl">
              {t.certificates.title}
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              {t.certificates.body}
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-md border border-dashed border-primary/40 bg-background/40 p-5 text-muted-foreground">
              <Briefcase className="h-5 w-5 text-primary" />
              {t.certificates.empty}
            </div>
          </div>
        </section>


        <section id="contact" data-scroll-section className="my-56">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="grid gap-8 rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 backdrop-blur xl:grid-cols-[1fr_0.9fr] xl:px-12 xl:py-20"
          >
            <div>
              <h2 className="text-5xl font-medium tracking-tighter xl:text-7xl">
                {t.contact.title.split(" ")[0]}{" "}
                <span className="text-gradient clash-grotesk">
                  {t.contact.title.split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base tracking-tight text-muted-foreground xl:text-lg">
                {t.contact.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://es.linkedin.com/in/mohamed-dukuray"
                  target="_blank"
                  passHref
                >
                  <Button variant="outline">
                    <Globe2 className="mr-2 h-4 w-4" />
                    {t.contact.linkedin}
                  </Button>
                </Link>
                <Link
                  href="https://github.com/Mohamed-DKW"
                  target="_blank"
                  passHref
                >
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    {t.contact.github}
                  </Button>
                </Link>
                <Link href="/cv-mohamed-dukuray.html" download passHref>
                  <Button variant="outline">
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    {t.contact.cv}
                  </Button>
                </Link>
              </div>
            </div>

            <form
              action="mailto:mdukurayw@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                name="name"
                placeholder={t.contact.name}
                className="w-full rounded-md border border-white/10 bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                name="email"
                type="email"
                placeholder={t.contact.email}
                className="w-full rounded-md border border-white/10 bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
              />
              <textarea
                name="message"
                placeholder={t.contact.message}
                rows={5}
                className="w-full resize-none rounded-md border border-white/10 bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
              />
              <Button type="submit" className="w-full">
                <Contact className="mr-2 h-4 w-4" />
                {t.contact.send}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
