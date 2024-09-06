import ebook5 from "@/assets/images/landing/ebook/img-5.jpg";
import { allCourse } from "../data";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <section id="courses" className="py-10 lg:py-20 bg-default-100">
      <div className="container">
        <div className="grid lg:grid-cols-5 lg:gap-12 gap-8 items-center">
          <div className="lg:col-span-2 lg:order-1 order-2">
            <img src={ebook5} className="rounded-xl shadow-md h-full w-full" />
          </div>
          <div className="lg:col-span-3 lg:order-2 order-1">
            <h2 className="text-4xl font-medium text-default-950">
              Our Featured Courses
            </h2>
            <p className="text-base font-me mt-4">
              Lorem ipsum dolor sit amet, consectetur, adipiscing elit.
              pellentesque quils arcu nisl. pellentesque quis arcu nisl.
              pellentesque ac tortor et est dignissim vulputate. proin quis
              sagittis est. phasellus dignissim dui et ipsum elementum, et
              auctor risus posuere.
            </p>
            {allCourse.map((course, idx) => (
              <CourseCard course={course} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
