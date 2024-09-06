import { Link } from "react-router-dom";

import ebook16 from "@/assets/images/landing/ebook/img-16.png";
import ebook17 from "@/assets/images/landing/ebook/img-17.jpg";
import ebookBackground from "@/assets/images/landing/ebook/bg-2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="pb-40 pt-40 flex items-center justify-center relative overflow-hidden bg-cover bg-gradient-to-l from-primary-500/5 to-primary-500/10 via-primary-500/0"
    >
      <div className="absolute top-1/4 start-[10%] -z-1 hidden 2xl:block">
        <img src={ebookBackground} className="h-28" />
      </div>
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 relative items-center">
          <div className="col-span-1">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Ennovations
            </span>
            <h2 className="md:text-5xl/tight text-4xl font-medium text-default-950 my-5">
              We’re betting on ambitious founders that are shaping the future in Africa
            </h2>
            <p className="text-base text-default-950 mb-10">
              We support visionary founders in Africa who are driving innovation, solving challenges, and shaping a future of global progress through bold ideas and relentless passion.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link
                to=""
                className="text-lg py-2 px-8 rounded-lg text-white border border-primary bg-primary/90 hover:border-primary hover:bg-primary transition-all duration-700"
              >
                Get started
              </Link>
              <Link
                to=""
                className="text-lg font-medium py-2 px-8 rounded-lg border border-primary text-primary hover:border-primary hover:text-white hover:bg-primary transition-all duration-700"
              >

                TheNextFund
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-end justify-center">
              <div className="-me-40 z-10 hidden md:block">
                <img
                  src={ebook17}
                  className="h-60 rounded-tr-[90px] rounded-bl-[90px] border-4 border-default-100"
                />
              </div>
              <div className="relative">
                <img src={ebook16} className="h-[500px] rounded-t-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
