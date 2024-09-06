import { TextFormInput } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ebook6 from "@/assets/images/landing/ebook/img-6.jpg";
import ebook7 from "@/assets/images/landing/ebook/img-7.jpg";
import ebook8 from "@/assets/images/landing/ebook/img-8.jpg";
import ebook9 from "@/assets/images/landing/ebook/img-9.jpg";
import ebook10 from "@/assets/images/landing/ebook/img-10.jpg";

const bookImages = [ebook6, ebook7, ebook8, ebook9, ebook10];
const SubscribeToMail = () => {
  const subscribeFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  });
  return (
    <section className="bg-default-100 dark:bg-default-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl/tight font-medium text-default-950">
              Elevate Your Life with Ebooks Authored by Experts
            </h2>
            <p className="text-base  mt-4">
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
              nunc, eu sollicitudin and urna dolor sagittis lacus. Vestibulum
              fringilla pede sit amet augue.
            </p>
            <div className="backdrop-blur-2xl bg-white rounded-md max-w-xl mt-10 dark:bg-default-100">
              <form onSubmit={handleSubmit(() => {})}>
                <TextFormInput
                  name="email"
                  type="email"
                  fullWidth
                  className="w-full p-4 border-0 h-14 focus:outline-none placeholder:text-default-950 bg-transparent"
                  placeholder="Enter Your Email"
                  endButton={
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center absolute top-[6px] end-[6px]  py-2  px-6 me-2 border-0 text-white font-semibold text-base rounded-md backdrop-blur-2xl bg-primary hover:bg-primary-700 transition-all"
                    >
                      <span>Submit</span>
                    </button>
                  }
                  control={control}
                  noValidate
                />
              </form>
            </div>
          </div>
          <div>
            <div className="mx-auto h-[495px] overflow-hidden">
              <div className="marquee grid grid-cols-2 gap-4 lg:gap-0">
                <div className="relative gap-6 m-auto flex flex-col overflow-hidden">
                  <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 h-full min-h-full">
                    {bookImages.map((image, idx) => (
                      <img
                        key={idx}
                        className="aspect-1 object-cover h-full w-60"
                        src={image}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full"
                  >
                    {bookImages.map((image, idx) => (
                      <img
                        key={idx}
                        className="aspect-1 object-cover h-full w-60"
                        src={image}
                      />
                    ))}
                  </div>
                </div>
                <div className="marquee-reverse gap-6 m-auto flex flex-col overflow-hidden">
                  <div className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                    {bookImages.map((image, idx) => (
                      <img
                        key={idx}
                        className="aspect-1 object-cover h-full w-60"
                        src={image}
                      />
                    ))}
                  </div>
                  <div
                    aria-hidden="true"
                    className="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full"
                  >
                    {bookImages.map((image, idx) => (
                      <img
                        key={idx}
                        className="aspect-1 object-cover h-full w-60"
                        src={image}
                      />
                    ))}
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

export default SubscribeToMail;
