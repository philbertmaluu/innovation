import { footerLinks } from "@/assets/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import * as yup from "yup";

import logoDark from "@/assets/images/logo-dark.png";
import logoLight from "@/assets/images/logo-light.png";
import { TextFormInput } from "@/components";

const Footer = () => {
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
    <footer>
      <div className="border-y border-default-200">
        <div className="container py-20">
          <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16">
            <div className="xl:col-span-2 md:col-span-3">
              <div>
                <Link to="">
                  <img
                    src={logoDark}
                    alt="logo"
                    className="h-10 flex dark:hidden"
                  />
                  <img
                    src={logoLight}
                    alt="logo"
                    className="h-10 hidden dark:flex"
                  />
                </Link>
                <p className="text-base text-default-800 mt-6">
                  Integer auctor aliquet martor, sed lorem malesuada eros
                  blandit eget. Proin lacinia mortoc id odio vestibulum.
                </p>
                <form
                  onSubmit={handleSubmit(() => {})}
                  className="space-y-2 mt-6"
                >
                  <TextFormInput
                    name="email"
                    type="email"
                    fullWidth
                    className="py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100"
                    placeholder="Enter Your Email"
                    endButton={
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-primary/20 text-primary rounded-md transition-all duration-500 hover:bg-primary hover:text-white"
                      >
                        <LuMoveRight className="h-6 w-6" />
                      </button>
                    }
                    control={control}
                  />
                </form>
              </div>
            </div>
            {footerLinks.map((item, idx) => {
              return (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">
                      {item.title}
                    </h5>
                    {item.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Fragment key={idx}>
                          {Icon ? (
                            <li className="flex items-center gap-5 group">
                              <Link
                                to={`${item.link ? item.link : ""}`}
                                className="h-10 w-10 inline-flex items-center justify-center border border-default-300 text-default-800 rounded-lg transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                              >
                                <Icon className="h-5 w-5" />
                              </Link>
                              <h5 className="text-base font-medium text-default-800">
                                {item.name}
                              </h5>
                            </li>
                          ) : (
                            <li>
                              <Link
                                to={`${item.link ? item.link : ""}`}
                                className="text-base text-default-700 hover:text-default-950 transition-all"
                              >
                                {item.name}
                              </Link>
                            </li>
                          )}
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
          <p className="text-base text-default-900">
            {new Date().getFullYear()} © AeroPage. Crafted and Coded with&nbsp;
            <span className="text-red-500">❤️</span> by&nbsp;
            <Link
              className="text-primary-700"
              to="https://coderthemes.com/"
              target="_blank"
            >
              Coderthemes
            </Link>
          </p>
          <p className="text-base">
            <Link to="">Terms Conditions &amp; Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
