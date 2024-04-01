

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import ButtonWrapper from "./button.js";
import Illustration from './cta-illustration.svg';



export default function Cta() {
    useEffect(() => {
        AOS.init({
          // settings here
          duration: 1000, // Global animation duration
        });
      }, []);
  return (
    <section className="bg-slate-900 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div className="relative bg-gradient-to-tr from-slate-600 to-teal-500 rounded-2xl py-10 px-8 md:py-16 md:px-12 overflow-hidden" data-aos="zoom-out">
          {/* Bg illustration */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10" aria-hidden="true">
            <img src={Illustration} className="max-w-none" alt="Illustration" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="text-4xl font-bold font-alliance mb-2 text-white">Get started with Innovation Studios</h3>
              <p className="text-slate-900 font-alliance">It only takes a few minutes to get started with Innovation Studios. Understand your users, start free, today.</p>
            </div>
            {/* CTA button */}
            <div className="shrink-0">
              
              <ButtonWrapper></ButtonWrapper>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
