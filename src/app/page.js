"use client"; // Esto es obligatorio para usar hooks en Next.js app directory

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [openTestimonio, setOpenTestimonio] = useState(null);

  const toggleTestimonio = (index) => {
    if (openTestimonio === index) {
      setOpenTestimonio(null);
    } else {
      setOpenTestimonio(index);
    }
  };

  const testimonios = [
    {
      texto: "Es muy responsable y siempre entrega sus trabajos a tiempo. Si algo no le sale a la primera, sigue intentando hasta lograrlo.",
      autor: "Astrid Reyes",
    },
    {
      texto: "Es una persona comprometida y organizada. Cuando se propone una meta, se enfoca y la cumple con dedicación.",
      autor: "Kenia Murcia",
    },
    {
      texto: "Tiene mucha creatividad y siempre aporta ideas nuevas. Además, trabaja con disciplina y le gusta que todo quede bien hecho.",
      autor: "Andrea Perez",
    },
  ];

  return (
    <main className={styles.main}>
      {/* --- SECCIÓN 1: PORTADA --- */}
      <section className={styles.portada}>
        <div className={styles.textoPortada}>
          <h1 className={styles.titulo}>
            POR<br />
            TAFO<br />
            LIO
          </h1>
          <p className={styles.subtitulo}>Arquitecta de interiores</p>
        </div>

    <div>
      <img 
        src="/mifoto.png" 
        alt="Mi foto"
        width="300"
        height="300"
        style={{ borderRadius: "10px" }}
      />
    </div>
  

        <p className={styles.nombre}>NAYELI FABIÁN</p>
      </section>

      {/* --- SECCIÓN 2: PRESENTACIÓN --- */}
      <section className={styles.presentacion}>
        <Image
          src="/segunda.png"
          alt="Nayeli Fabián"
          width={300}
          height={400}
          className={styles.imagenIzquierda}
        />
        <blockquote className={styles.texto}>
          Estudiante de bachillerato próxima a egresar, con interés en el diseño,
          la creatividad y las experiencias visuales. Tengo conocimientos en
          diseño digital desarrollados en proyectos académicos y personales.
          Aunque aún no tengo experiencia laboral, estoy motivada por aprender
          y aportar ideas. Busco mi primera oportunidad profesional y prepararme
          para mi próxima meta: estudiar Arquitectura de Interiores y
          desarrollarme en el diseño espacial.
        </blockquote>
      </section>

      {/* --- SECCIÓN 3: PROYECTOS --- */}
      <section id="proyectos" className={styles.proyectos}>
        <h2>Mis proyectos</h2>
        <div className={styles.grid}>

          <div className={styles.card}>
            <Image src="/rumi.png" alt="" width={250} height={140} />
            <h3>Rumi</h3>
            <p className={styles.descripcion}>
              Rumí es una aplicación dedicada al alquiler de casas, apartamentos y habitaciones de forma fácil y segura. 
            </p>
            <a
              href="https://www.figma.com/design/q0X1BtW3tFaLUYSW31QeVr/RUMI?node-id=0-1&t=FVMrklfqgIDqYoD2-1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonProyecto}
            >
              👆🏻
            </a>
          </div>

          <div className={styles.card}>
            <Image src="/jambo.png" alt="" width={250} height={140} />
            <h3>Jambo</h3>
            <p className={styles.descripcion}>
              Jambo es una aplicación que ayuda a personas sin empleo ni títulos universitarios a encontrar trabajo.
            </p>
            <a
              href="https://github.com/javo-zy/JamboExpo.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonProyecto}
            >
              👆🏻
            </a>
          </div>

          <div className={styles.card}>
            <Image src="/logo.png" alt="" width={250} height={140} />
            <h3>Creación de logos</h3>
            <p className={styles.descripcion}>
              Diseño de logos para negocios o aplicaciones, adaptando identidad y creatividad para cada proyecto.
            </p>
            <a
              href="https://www.canva.com/design/DAGwcoWThIs/ANyq81Qqnmfa-BtX6bU2Rg/edit?utm_content=DAGwcoWThIs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.botonProyecto}
            >
              👆🏻
            </a>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN 4: TESTIMONIOS --- */}
      <section id="testimonios" className={styles.testimonios}>
        <h2>Testimonios</h2>
        <div className={styles.cajasTestimonios}>
          {testimonios.map((t, i) => (
            <div
              key={i}
              className={`${styles.caja} ${openTestimonio === i ? styles.abierto : ""}`}
              onClick={() => toggleTestimonio(i)}
            >
              <p>{t.texto}</p>
              <p className={styles.autor}>{t.autor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN CERTIFICACIONES --- */}
      <section className={styles.certificaciones}>
        <h2>Certificaciones</h2>
        <p className={styles.textoIntro}>
          Algunos de mis logros y diplomas obtenidos durante mi formación.
        </p>

        <div className={styles.gridCertificados}>
          <div className={styles.cardCert}>
            <Image
              src="/excel.png"
              alt="Diploma Excel"
              width={320}
              height={220}
              className={styles.imagenCert}
            />
            <h3>Microsoft Office Excel</h3>
            <p>Certificación de Excel Microsoft 365 Apps.</p>
          </div>

          <div className={styles.cardCert}>
            <Image
              src="/python.png"
              alt="Diploma Python"
              width={320}
              height={220}
              className={styles.imagenCert}
            />
            <h3>Python</h3>
            <p>Certificación de Python.</p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN HABILIDADES --- */}
      <section id="habilidades" className={styles.habilidades}>
        <h2>Mis habilidades</h2>
        <div className={styles.nubeHabilidades}>
          <span className={styles.habilidad}>Creatividad</span>
          <span className={styles.habilidad}>Diseño</span>
          <span className={styles.habilidad}>Trabajo en equipo</span>
          <span className={styles.habilidad}>Comunicación</span>
          <span className={styles.habilidad}>Responsabilidad</span>
          <span className={styles.habilidad}>Organización</span>
          <span className={styles.habilidad}>Disciplina</span>
          <span className={styles.habilidad}>Motivación</span>
        </div>
      </section>

      {/* --- SECCIÓN FRASE FINAL Y CONTACTO --- */}
      <section className={styles.fraseFinal}>
        <blockquote>
          “Rompe los límites y demuestra que la creatividad no tiene reglas.”
        </blockquote>

        <div className={styles.contacto}>
          <p>📧 nayeli.fab8@gmail.com</p>

          <p>
            📸{" "}
            <a
              href="https://www.instagram.com/its_.nayee.0?igsh=MWZwdjd4NDloZjUzcA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
          </p>

          <p>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/nayeli-fabián?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className={styles.footer}>
        <p>© 2025 Nayeli Fabián — Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
