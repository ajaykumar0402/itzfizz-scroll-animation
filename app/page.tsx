"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // =========================
      // INITIAL LOAD ANIMATIONS
      // =========================

      gsap.from(".navbar", {
        opacity: 0,
        y: -25,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".top-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-title span", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.06,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.from(".car-image", {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1.3,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".stat-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        delay: 1,
        ease: "power2.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 1.2,
        ease: "power2.out",
      });

      // =========================
      // SCROLL - CAR
      // =========================

      gsap.to(".car-image", {
        x: 430,
        y: 80,
        scale: 0.58,
        rotation: 3,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =========================
      // SCROLL - HEADING
      // =========================

      gsap.to(".hero-title", {
        y: -110,
        opacity: 0,
        scale: 0.92,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "55% top",
          scrub: 1,
        },
      });

      // =========================
      // SCROLL - TOP LABEL
      // =========================

      gsap.to(".top-label", {
        y: -70,
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "35% top",
          scrub: 1,
        },
      });

      // =========================
      // SCROLL - STATS
      // =========================

      gsap.to(".stats-container", {
        y: -60,
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "30% top",
          end: "75% top",
          scrub: 1,
        },
      });

      // =========================
      // SCROLL - CTA
      // =========================

      gsap.to(".hero-cta", {
        y: -50,
        opacity: 0,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "20% top",
          end: "50% top",
          scrub: 1,
        },
      });

      // =========================
      // NAVBAR SCROLL EFFECT
      // =========================

      gsap.to(".navbar", {
        backgroundColor: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(14px)",
        borderColor: "rgba(255,255,255,0.12)",
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "10% top",
          end: "35% top",
          scrub: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar fixed left-0 top-0 z-50 w-full border-b border-white/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-lg font-bold tracking-[0.25em]">
            ITZFIZZ
          </div>

          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-gray-400 md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">

        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

        {/* Small heading */}

        <div className="top-label relative z-20 mb-6 text-center md:mb-8">
          <p className="text-xs uppercase tracking-[0.55em] text-gray-500 md:text-sm">
            Digital Experiences
          </p>
        </div>

        {/* Main heading */}

        <h1 className="hero-title relative z-20 text-center text-4xl font-semibold uppercase leading-tight tracking-[0.18em] sm:text-5xl md:text-7xl lg:text-8xl">

          <span className="inline-block">W</span>
          <span className="inline-block">E</span>
          <span className="inline-block">L</span>
          <span className="inline-block">C</span>
          <span className="inline-block">O</span>
          <span className="inline-block">M</span>
          <span className="inline-block">E</span>

          <span className="inline-block w-4 md:w-8" />

          <span className="inline-block">I</span>
          <span className="inline-block">T</span>
          <span className="inline-block">Z</span>
          <span className="inline-block">F</span>
          <span className="inline-block">I</span>
          <span className="inline-block">Z</span>
          <span className="inline-block">Z</span>

        </h1>

        {/* =========================
            CAR AREA
        ========================= */}

        <div className="relative mt-8 flex h-[300px] w-full max-w-6xl items-center justify-center sm:h-[350px] md:mt-2 md:h-[400px]">

          {/* Glow behind car */}

          <div className="absolute h-64 w-64 rounded-full bg-white/[0.07] blur-[90px] md:h-96 md:w-96" />

          {/* Car */}

          <div className="car-image relative z-10 w-full max-w-[850px] will-change-transform">

            <Image
              src="/car.png"
              alt="Premium sports car"
              width={1200}
              height={700}
              priority
              className="h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(255,255,255,0.12)]"
            />

          </div>
        </div>

        {/* =========================
            CTA
        ========================= */}

        <div className="hero-cta relative z-30 mt-2 flex flex-col items-center gap-4">

          <a
            href="#work"
            className="group flex items-center gap-4 rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-105"
          >
            Explore Experience

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* =========================
            STATISTICS
        ========================= */}

        <div className="stats-container relative z-20 mt-8 grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-7 md:mt-7 md:grid-cols-4 md:gap-10">

          <div className="stat-card text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              58%
            </h2>

            <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
              Performance Growth
            </p>
          </div>

          <div className="stat-card text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              23%
            </h2>

            <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
              Faster Experience
            </p>
          </div>

          <div className="stat-card text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              27%
            </h2>

            <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
              Better Engagement
            </p>
          </div>

          <div className="stat-card text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              40%
            </h2>

            <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
              More Conversion
            </p>
          </div>

        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center">

          <p className="animate-pulse text-[10px] uppercase tracking-[0.45em] text-gray-600">
            Scroll
          </p>

          <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-gray-400 to-transparent" />

        </div>

      </section>

      {/* =========================
          WORK
      ========================= */}

      <section
        id="work"
        className="flex min-h-screen items-center justify-center bg-zinc-950 px-6"
      >
        <div className="max-w-3xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-gray-600">
            Our Work
          </p>

          <h2 className="text-4xl font-semibold sm:text-5xl md:text-7xl">
            Built For Impact
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            We create digital experiences focused on performance,
            interaction and memorable user experiences.
          </p>

        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="flex min-h-screen items-center justify-center bg-black px-6"
      >
        <div className="max-w-4xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-gray-600">
            About
          </p>

          <h2 className="text-4xl font-semibold sm:text-5xl md:text-7xl">
            Digital. Interactive. Fast.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            Modern websites should not only look good. They should
            respond to users, feel smooth and communicate clearly.
          </p>

        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="flex min-h-[70vh] items-center justify-center bg-zinc-950 px-6"
      >
        <div className="text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-gray-600">
            Contact
          </p>

          <h2 className="text-4xl font-semibold sm:text-5xl md:text-7xl">
            Let's Create
          </h2>

          <a
            href="mailto:ajaykumar20765@gmail.com"
            className="mt-8 inline-block rounded-full border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.25em] transition-all hover:bg-white hover:text-black"
          >
            Get In Touch
          </a>

        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-white/10 bg-black px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <p className="text-xs font-semibold tracking-[0.25em] text-gray-500">
            ITZFIZZ
          </p>

          <p className="text-xs text-gray-700">
            Scroll-Driven Digital Experience
          </p>

        </div>

      </footer>

    </main>
  );
}