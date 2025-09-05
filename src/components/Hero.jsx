import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  return (
    <main
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="relative overflow-hidden px-4 lg:px-20 
                 pt-5 lg:pt-32 pb-40
                 flex flex-col lg:flex-row items-center 
                 justify-center lg:justify-between
                 min-h-dvh lg:min-h-[90vh]"
      role="main"
    >
      {/* Left content */}
      <div className="relative z-10 max-w-xl lg:max-w-2xl text-center lg:text-left">
        {/* Small intro label */}
        <div
          className="mx-auto lg:mx-0 relative w-56 h-10
                     bg-gradient-to-r from-[#656565] to-[#e99b63]
                     shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
        >
          <div
            className="absolute inset-[3px] bg-black rounded-full
                       flex items-center justify-center gap-2 text-md"
          >
            <i className="bx bxs-diamond"></i>
            Introduction
          </div>
        </div>

        {/* Main SEO H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider my-6 leading-tight">
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-gray-400 hover:from-red-500 hover:to-orange-400 transition-all duration-300"
          >
            Redcube Agency
          </Link>{" "}
          – Powering Growth Through Code & Creativity {" "}
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 hover:from-orange-500 hover:to-gray-300 transition-all duration-300"
          >
          </Link>
        </h1>

        {/* SEO-rich paragraph */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 mx-auto lg:mx-0 max-w-[32rem]">
          At{" "}
          <Link to="/" className="text-red-400 hover:underline">
            Redcube Agency
          </Link>
          , we build powerful{" "}
          <em>websites, mobile apps, and custom software solutions</em> that
          help startups and enterprises grow. Our team specializes in{" "}
          <strong>IT consulting, product design, and end-to-end development</strong>.
        </p>

        {/* Call-to-actions */}
        <div className="flex justify-center lg:justify-start gap-4 mt-10">
          <Link
            to="/services"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            Our Services <i className="bx bx-link-external"></i>
          </Link>

          <Link
            to="/contact"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black"
          >
            Get Started <i className="bx bx-link-external"></i>
          </Link>
        </div>
      </div>

      {/* Right visual (Spline → only visible on desktop) */}
      <div className="hidden lg:flex w-full lg:w-1/2 h-[600px] justify-end items-center relative overflow-hidden">
        <Suspense
          fallback={
            <img
              src="/assets/hero-fallback.png"
              alt="Redcube Agency software, website and app development"
              className="w-[80%] max-w-sm mx-auto object-contain"
            />
          }
        >
          <Spline
            scene="https://prod.spline.design/ybUsFRTEXm6XoH0G/scene.splinecode"
            className="w-full h-full object-contain"
          />
        </Suspense>

        {/* Mask the bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black"></div>
      </div>
    </main>
  );
};

export default Hero;
