import { LuDot, LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

import ebook15 from "@/assets/images/landing/ebook/img-15.jpg";

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <img src={ebook15} className="h-[500px] rounded-xl mx-auto" />
          </div>
          <div>
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              our About
            </span>
            <h2 className="text-4xl font-medium text-default-950 mt-5">
              About the Alchemist
            </h2>
            <p className="text-base mt-4">
              Lorem ipsum is simply Dummy text of the Printing and typesetting
              industry. lorem is simply dummy text
            </p>
            <ul role="list" className="my-6 space-y-2">
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-10 w-10 text-primary" />
                <p className="text-base">
                  Lorem ipsum is smiply dummy text of the printing.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-10 w-10 text-primary" />
                <p className="text-base">
                  Lorem ipsum is smiply dummy text of the printing and lorem{" "}
                  <br /> Donec posuere vulputate.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-10 w-10 text-primary" />
                <p className="text-base">
                  Aenean at bibendum enim. In auctor consectetur urna.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <LuDot className="inline-block h-10 w-10 text-primary" />
                <p className="text-base">
                  Lorem ipsum is smiply dummy text of the printing.
                </p>
              </li>
            </ul>
            <Link
              to=""
              className="inline-flex items-center justify-center gap-2 text-base py-3 px-8 rounded-md text-white bg-primary/90 hover:bg-primary transition-all duration-700"
            >
              Read More
              <LuMoveRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
