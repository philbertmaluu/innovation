import ebook18 from "@/assets/images/landing/ebook/img-18.png";
import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

import { testimonialSlides } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">
              Testimonials
            </span>
            <h2 className="text-4xl font-medium text-default-950 my-4">
              Success Stories
            </h2>
            <p className="text-base">
              Uncover a realm of opportunities within our extensive ebook
              collection.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 grid-cols-1 gap-6">
            <div className="col-span-2">
              <div className="w-full h-full">
                <img src={ebook18} className="rounded-xl max-w-full h-full" />
              </div>
            </div>
            <div className="col-span-3 relative">
              <Swiper
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                loop
                navigation={{
                  prevEl: ".testimonials-button-prev",
                  nextEl: ".testimonials-button-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                className="testimonials rounded-md relative"
              >
                {testimonialSlides.map((slide, idx) => {
                  return (
                    <SwiperSlide key={idx} className="swiper-slide">
                      <div className="pt-3">
                        <div className="flex items-center gap-6">
                          <div>
                            <img
                              src={slide.image}
                              className="h-14 rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-medium text-default-950">
                              {slide.name}
                            </h3>
                            <p className="text-base  mt-2">{slide.position}</p>
                          </div>
                        </div>
                        <p className="text-base  mt-5">"{slide.description}"</p>
                        <div className="flex items-center gap-2 mt-5">
                          {Array.from(new Array(5)).map((_val, idx) => {
                            return (
                              <LuStar
                                key={idx}
                                className="h-5 w-5 fill-yellow-400 stroke-yellow-400"
                              />
                            );
                          })}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="hidden lg:block">
                <div className="absolute bottom-0 start-0 z-10">
                  <div className="flex items-center justify-end gap-5 relative pe-10">
                    <div className="testimonials-button-prev">
                      <div className="cursor-pointer h-10 w-10 rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50 flex items-center justify-center">
                        <LuChevronLeft className="h-6 w-6 stroke-default-950" />
                      </div>
                    </div>
                    <div className="testimonials-button-next">
                      <div className="cursor-pointer h-10 w-10 rounded-lg border border-default-300 bg-default-50/90 hover:bg-default-50 flex items-center justify-center">
                        <LuChevronRight className="h-6 w-6 stroke-default-950" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
