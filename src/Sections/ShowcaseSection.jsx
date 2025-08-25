import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      // Hover IN
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
          duration: 0.4,
          ease: "power3.out",
        });
      });

      // Hover OUT
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power3.inOut",
        });
      });
    });
  }, []);

  const projects = [
    {
      title: "Weather Dashboard",
      desc: "A responsive weather app that displays real-time city weather data, focusing on clean design and API integration.",
      img: "./images/weather1.jpg",
      live: "https://e-weatherdashboard.vercel.app/",
      code: "https://github.com/Enyewashebr/ALX-FE-Capstone-Project",
    },
    {
      title: "Enex Boutique",
      desc: "E-commerce clothing platform with product filtering, cart management, and secure checkout.",
      img: "./images/enex-boutique1.png",
      live: "https://enexboutique.vercel.app/",
      code: "https://github.com/Enyewashebr/e-Commerce-Website/tree/main/Enex-Boutique",
    },
    {
      title: "Netflix Clone",
      desc: "Netflix clone with TMDB API integration, smooth scrolling sections, hero banner, and hover effects.",
      img: "./images/netflix1.png",
      live: "https://netflex-by-enyew.vercel.app/",
      code: "https://github.com/Enyewashebr/Netflix-Clone",
    },
    {
      title: "Gebeya Market",
      desc: "Online marketplace with smooth UI & seamless shopping experience.",
      img: "./images/gebeya1.png",
      live: "https://gebeyamarket.vercel.app/",
      code: "https://github.com/Enyewashebr/InterTechhub-internship-projects/tree/main/Stage-2/Gebeya-Market-App",
    },
    {
      title: "Real Estate Website",
      desc: "A sleek, responsive real estate landing page with smooth animations and a modern UI.",
      img: "./images/real-estate1.png",
      live: "https://enexboutique.vercel.app/",
      code: "https://github.com/Enyewashebr/real-estate",
    },
    {
      title: "Eagle School Dashboard (Coming Soon)",
      desc: "A dashboard for managing school activities and student data.",
      img: "./images/eagle-school.png",
      live: "#",
      code: "https://github.com/Enyewashebr/Eagle-School-Management/tree/Enyew/src",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-10 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-11/12 mx-auto rounded-lg mb-4"
              />
              <div className="p-3">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-3 text-start">{p.desc}</p>
                <div className="flex justify-center gap-3">
                  {p.live !== "#" ? (
                    <a
                      href={p.live}
                      target="_blank"
                      className="px-4 py-2 bg-teal-400 text-white font-bold rounded hover:bg-white hover:text-teal-500 hover:border hover:border-teal-400 transition"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-300 text-gray-500 font-bold rounded cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                  >
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
