import React from 'react'
import Button from '../components/button';

const ShowcaseSection = () => {
  return (
    <section id="projects" class="py-20 px-10  mt-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Weather Dashboard --> */}
          <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <img
              src="./images/weather1.jpg"
              alt="Weather Dashboard"
              class="w-11/12 mx-auto rounded-lg mb-4"
            />
            <div class="p-3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                Weather Dashboard
              </h3>
              <p class="text-white-50 mb-3 text-start">
                A responsive weather app that displays real-time city weather
                data, focusing on clean design, API integration
              </p>
             
              <div class="flex justify-center gap-3">
                <a
                  href="https://e-weatherdashboard.vercel.app/"
                  target="_blank"
                  class="px-4 py-2 bg-[#14ddddc7] text-white font-bold rounded hover:bg-white hover:text-[#14ddddc7] hover:border hover:border-[#14ddddc7] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Enyewashebr/ALX-FE-Capstone-Project"
                  target="_blank"
                  class="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                >
                  <i class="fab fa-github"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Enex Boutiq --> */}
          <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <img
              src="./images/enex-boutique1.png"
              alt="Enex Boutiq"
              class="w-11/12 mx-auto rounded-lg mb-4"
            />
            <div class="p-3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                Enex Boutiqe
              </h3>
              <p class="text-white-50 mb-3 text-start">
                Enex Boutique is an e-commerce clothing platform with product
                filtering, detailed descriptions, cart management, and a secure
                checkout process.
              </p>
              
              <div class="flex justify-center gap-3">
                <a
                  href="https://enexboutique.vercel.app/"
                  target="_blank"
                  class="px-4 py-2 bg-[#14ddddc7] text-white font-bold rounded hover:bg-white hover:text-[#14ddddc7] hover:border hover:border-[#14ddddc7] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Enyewashebr/e-Commerce-Website/tree/main/Enex-Boutique"
                  target="_blank"
                  class="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                >
                  <i class="fab fa-github"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Netflix Clone --> */}
          <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <img
              src="./images/netflix1.png"
              alt="Netflix Clone"
              class="w-11/12 mx-auto rounded-lg mb-4"
            />
            <div class="p-3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                Netflix Clone
              </h3>
              <p class="text-white-50 mb-3 text-start ">
                A fully responsive Netflix clone built with React and Vite,
                featuring dynamic content from the TMDB API, smooth scrolling
                sections, a hero banner, and interactive hover effects.
              </p>
             
              <div class="flex justify-center gap-3">
                <a
                  href="https://netflex-by-enyew.vercel.app/"
                  target="_blank"
                  class="px-4 py-2 bg-[#14ddddc7] text-white font-bold rounded hover:bg-white hover:text-[#14ddddc7] hover:border hover:border-[#14ddddc7] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Enyewashebr/Netflix-Clone"
                  target="_blank"
                  class="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                >
                  <i class="fab fa-github"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Gebeya Market --> */}
          <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <img
              src="./images/gebeya1.png"
              alt="Gebeya Market"
              class="w-11/12 mx-auto rounded-lg mb-4"
            />
            <div class="p-3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                Gebeya Market
              </h3>
              <p class="text-white-50 mb-3">
                Online marketplace with smooth UI & seamless shopping
                experience.
              </p>
              
              <div class="flex justify-center gap-3">
                <a
                  href="https://gebeyamarket.vercel.app/"
                  target="_blank"
                  class="px-4 py-2 bg-[#14ddddc7] text-white font-bold rounded hover:bg-white hover:text-[#14ddddc7] hover:border hover:border-[#14ddddc7] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Enyewashebr/InterTechhub-internship-projects/tree/main/Stage-2/Gebeya-Market-App"
                  target="_blank"
                  class="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                >
                  <i class="fab fa-github"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Real Estate website --> */}
          <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <img
              src="./images/real-estate1.png"
              alt="Gebeya Market"
              class="w-11/12 mx-auto rounded-lg mb-4"
            />
            <div class="p-3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                Real Estate website
              </h3>
              <p class="text-white-50 mb-3 justify-center text-start">
                A sleek, responsive real estate landing page with smooth
                scrolling and subtle animations for a modern, user-friendly
                experience.
              </p>
             
              <div class="flex justify-center gap-3">
                <a
                  href="https://enexboutique.vercel.app/"
                  target="_blank"
                  class="px-4 py-2 bg-[#14ddddc7] text-white font-bold rounded hover:bg-white hover:text-[#14ddddc7] hover:border hover:border-[#14ddddc7] transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Enyewashebr/real-estate"
                  target="_blank"
                  class="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                >
                  <i class="fab fa-github"></i>View Code
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Eagle School Dashboard --> */}
          <div class="bg-gray-900 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <img
              src="/images/eagle-school.png"
              alt="Eagle School Dashboard"
              class="w-11/12 mx-auto rounded-lg mb-4"
            />
            <div class="p-3">
              <h3 class="text-2xl font-semibold text-white mb-2">
                Eagle School Dashboard (Coming Soon)
              </h3>
              <p class="text-white-50 mb-3">
                A dashboard for managing school activities and student data.
              </p>
              {/* <div class="flex flex-wrap justify-center gap-2 font-semibold mb-4">
                <span class="bg-gray-600 px-3 py-1 rounded">⚛️ Next.js</span>
                <span class="bg-gray-600 px-3 py-1 rounded">🌍 Typescript</span>
                <span class="bg-gray-600 px-3 py-1 rounded">📊 Chart</span>
              </div> */}
              <div class="flex justify-center gap-3">
                <a
                  href="#"
                  class="px-4 py-2 bg-gray-300 text-gray-400 font-bold rounded cursor-not-allowed"
                >
                  Coming Soon
                </a>
                <a
                  href="https://github.com/Enyewashebr/Eagle-School-Management/tree/Enyew/src"
                  target="_blank"
                  class="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-black transition"
                >
                  <i class="fab fa-github"></i>View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection
