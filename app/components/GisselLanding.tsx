"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import { TETO_GIF, MOMO_OKARUN_GIF } from "../lib/media";
import TetoFigure from "./TetoFigure";
import TetoPotetoBuddy from "./TetoPotetoBuddy";

/* ============================================ */
/*  STEPS — el mensaje para Gissel              */
/* ============================================ */

interface Step {
  kicker: string;
  title: string;
  body: string;
  gif?: string;
  gifAlt?: string;
}

const STEPS: Step[] = [
  {
    kicker: "Inicio",
    title: "Gissel",
    body: `Hola Gissel, soy Sergio xdd.

Sí, usé IA para hacer esta página... ya sé, suena raro. La IA me ayudó a armarla, pero lo que dice aquí <strong>sale de mí :V</strong>, no de chatgpt xddd la vdd.
`,
  },
{
kicker: "Responsabilidad",
title: "Perdón",
body: `Todo lo que pasó fue mi culpa. No tuya. Si te alejaste fue por mi forma de ser. Te hice daño sin querer, no fue mi intención. Ese día yo estaba cansado y adolorido porque había jugado después de tiempo fútbol y me habían pateado mucho las piernas, y también me raspé las rodillas, una rodilla aún tiene algunas cicatrices xd. Bueno, pero eso no cambia que ese día estuve algo frío en responderte, y antes de eso también no te respondía a tiempo, te respondía después de tiempo y así, y lo siento mucho. Ojalá nunca hubiese ido a ese partido.<br/><br/>

Yo entiendo que te molestes porque las mujeres son más sensibles, o de repente te molestó tal vez porque te estaba pidiendo mucho cariño ese mismo día.<br/><br/>

Si algún día quieres hablar, te prometo que voy a <strong>escucharte de verdad y cambiar</strong>. Y si no quieres decir porque te cuesta, yo trataré de entender lo máximo posible para ser mejor persona, aunque no sé si fue una excusa para dejarme. Igual voy a seguir intentando ser mejor. Por ti, aunque ya no me quieras.<br/><br/>

La verdad he pensado muchas cosas, por eso es que no quise hablarte. Siento que molesto o agobio, o tal vez fui muy intenso. He pensado en muchas opciones del porqué te fuiste. Yo la verdad sí te amaba, no te quise hacer daño...<br/><br/>

Lamento mis malos actos. Yo hubiese entendido y mejoraría si me hubieses hablado ese día cuál era el problema...`,
},

  {
    kicker: "Sentimiento",
    title: "Lo que llevo dentro",
    body: `Te pienso todo el día. En serio no dejo de pensar en como la kgé. Me despierto y ya estás en mi cabeza, y en la noche es peor, ya ni duermo a mi horario y a veces me pongo a llorar por haberte hecho daño y no ser sucifiente para ti.

Me da tristeza no sentirme suficiente para ti... pero respeto lo que decidas. Solo quiero que sepas que <strong>te amo</strong>. Tus mensajes, tu forma de ser, tu todo... ha sido importante para mí desde el primer día que hablamos.`,
    gif: MOMO_OKARUN_GIF,
    gifAlt: "Momo y Okarun — Dandadan",
  },
  {
    kicker: "Recuerdo",
    title: "Lo que siempre sentí",
    body: `Para mí eres <strong>la niña más linda del mundo</strong>. En serio, no exagero y ya te lo habia dicho antes :v.  Desde el primer día que te conocí le diste alegría a mi vida aburrida y me diste un cariño que nunca había recibido, eres tan lindaaa. Eres divertida, linda, preciosa, inteligente... eres perfecta.

Me encantaba hablar contigo. Cada conversación, cada mensaje tonto donde nos reimos, el cariño,  o las preguntas raras o cosas raras que nos deciamos :v , cada momento... todo eso lo guardo en mi corazon. Los días sin hablarte son tristes y vacíos.`,
  },
  {
    kicker: "Compromiso",
    title: "Promesa",
    body: `Te prometo que voy a ser más atento. Menos arrogante, menos idiota. Te prometo que no te voy a volver a lastimar.

Estoy dispuesto a <strong>cambiar de verdad</strong> lo que te moleste. No quiero perderte, Gissel. Pero si igual quieres irte para siempre, lo respetaré y sera mis ultimas molestias hacia ti ... desde hoy voy a hacer lo que sea para ser la persona que te mereces... a este punto suena raro jajaja, pero quiero mejorar por ti porque pollo frito con papas. Y esta vez lo digo en serio.`,
  },
  {
    kicker: "Cierre",
    title: "Lo que importa",
    body: `Si algún día quieres hablar... aquí voy a estar. Siempre. No importa cuándo.

Te deseo todo lo bueno del mundo. <strong>Gracias</strong> por el amor y el tiempo que me diste, Gissel. Para mí significó todo, y siempre lo va a significar.

Te quiero mucho. 🩷`,
  },
];

/* ============================================ */
/*  INTRO SCREEN                                */
/* ============================================ */

function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll("[data-intro-anim]");
    gsap.fromTo(
      els,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <motion.div
      className="intro-screen"
      onClick={onEnter}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="intro-content" ref={containerRef}>
        <div className="intro-teto" data-intro-anim>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={TETO_GIF} alt="Kasane Teto" />
        </div>
        <p className="intro-kicker" data-intro-anim>
          un mensaje para ti
        </p>
        <h1 className="intro-title" data-intro-anim>
          Para <em>Gissel</em>
        </h1>
        <p className="intro-subtitle" data-intro-anim>
          Con cariño y calma, paso a paso
        </p>
        <p className="intro-cta" data-intro-anim>
          toca para abrir
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================ */
/*  MAIN LANDING                                */
/* ============================================ */

export default function GisselLanding() {
  const [entered, setEntered] = useState(false);
  const [step, setStep] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // GSAP micro-animation on step change
  useEffect(() => {
    if (!panelRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-step-panel]",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }, panelRef);
    return () => ctx.revert();
  }, [step]);

  const progress = ((step + 1) / STEPS.length) * 100;
  const currentStep = STEPS[step];
  const isFinal = step === STEPS.length - 1;

  return (
    <>
      {/* Intro */}
      <AnimatePresence>
        {!entered && <IntroScreen onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {/* Main */}
      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Header */}
          <header className="site-header">
            <span className="header-name">Sergio</span>
            <span className="header-divider">✦</span>
            <span className="header-for">para Gissel</span>
          </header>

          {/* Progress bar */}
          <div className="progress-bar-track">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>

          {/* Content */}
          <div className="main-content" ref={panelRef}>
            {/* Hero */}
            <motion.div
              className="hero-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="hero-title">
                Con cariño y calma, <em>paso a paso</em>
              </h1>
              <p className="hero-sub">
                Un mensaje que viene desde lo más profundo
              </p>
            </motion.div>

            {/* Teto */}
            <TetoFigure />


            {/* Step chips */}
            <div className="step-chips">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  className={`step-chip ${i === step ? "active" : ""} ${
                    i < step ? "completed" : ""
                  }`}
                  onClick={() => setStep(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Step panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                className="step-panel"
                data-step-panel
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="step-kicker">{currentStep.kicker}</p>
                <h2 className="step-title">{currentStep.title}</h2>
                <div
                  className="step-body"
                  dangerouslySetInnerHTML={{ __html: currentStep.body }}
                />

                {currentStep.gif && (
                  <motion.div
                    className="step-character"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={currentStep.gif} alt={currentStep.gifAlt || ""} />
                  </motion.div>
                )}

                {isFinal && (
                  <>
                    <p className="final-signature">
                      Con todo mi amor, Sergio
                    </p>
                    <div className="hearts-row">
                      <span>🩷</span>
                      <span>💗</span>
                      <span>💖</span>
                      <span>💗</span>
                      <span>🩷</span>
                    </div>
                  </>
                )}

                {/* Nav */}
                <div className="nav-row">
                  {step > 0 && (
                    <motion.button
                      className="btn btn-ghost"
                      onClick={() => setStep((p) => Math.max(p - 1, 0))}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      ← Anterior
                    </motion.button>
                  )}
                  {!isFinal && (
                    <motion.button
                      className="btn btn-primary"
                      onClick={() =>
                        setStep((p) => Math.min(p + 1, STEPS.length - 1))
                      }
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Siguiente →
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Poteto buddy */}
          <TetoPotetoBuddy />
        </motion.div>
      )}
    </>
  );
}
