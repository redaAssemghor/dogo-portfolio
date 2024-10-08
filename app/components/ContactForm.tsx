"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { FormEvent, useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { CiPhone } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiHouseLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import {
  backgroundAnimation,
  revealAnimation,
} from "../animation/text-animation";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const form = useRef<HTMLFormElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_d8x35t6", "template_tdbycnl", form.current, {
        publicKey: "qGvOnqjqYxrS_fhQo",
      })
      .then(
        () => {
          setSubmitted(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useGSAP(() => {
    if (ref.current) {
      backgroundAnimation(ref.current);
    }
    const textArr = gsap.utils.toArray(".text");
    textArr.forEach((el) => {
      revealAnimation(el as HTMLElement);
    });
  });

  return (
    <div
      id="contact"
      className="relative backdrop-blur-3xl z-40 h-full flex justify-center items-center w-full lg:p-40"
    >
      <div
        ref={ref}
        className="z-10 absolute h-full w-full"
        style={{
          background: "linear-gradient(90deg, #ff8e00, #be4f0a)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div className="flex lg:flex-row flex-col z-40 pt-40 lg:pt-0 text-white lg:justify-between justify-center items-center h-full w-full">
        {/* Header Section */}
        <div className="flex flex-col p-5 lg:items-start items-center gap-4 mb-auto">
          <h2 className="text text-xl font-bold">
            Get in Touch with Max&apos;s Team!
          </h2>
          <h1 className="text lg:text-3xl text-lg neon-text text-center font-black">
            We&apos;d love to hear from you!
          </h1>
          <h1 className="text text-2xl font-bold">
            For collaborations, inquiries, or just a friendly bark
          </h1>

          <div className="lg:flex gap-8 items-center min-h-[200px] hidden">
            <div className="flex gap-4 justify-center items-center">
              <span className="w-[60px] h-[2px] bg-[--text3] inline-block"></span>
              <h1 className="text text-xl font-black">My Socials</h1>
            </div>

            <div className="flex gap-4">
              <Link
                href="#"
                className="text text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Form Section */}
        {!submitted ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative w-full flex flex-col gap-4 p-6 max-w-lg"
          >
            <div className="relative z-10 backdrop-blur-3xl blur-3xl h-full w-full">
              <div ref={lightRef} className="relative">
                <span className="absolute spotlight z-10 top-20 left-20 w-[140px] h-[140px] rounded-full bg-[--text1]"></span>
                <span className="absolute spotlight z-10 top-24 right-24 w-[140px] h-[140px] rounded-full bg-[--accent]"></span>
              </div>
            </div>
            <label
              htmlFor="Name"
              className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
            >
              <RxPerson className="text-2xl" />
              <input
                required
                type="text"
                placeholder="Name"
                name="user_name"
                className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
              />
            </label>

            <label
              htmlFor="Company"
              className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
            >
              <PiHouseLight className="text-2xl" />
              <input
                required
                type="text"
                placeholder="Company"
                name="company_name"
                className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
              />
            </label>

            <label
              htmlFor="email"
              className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
            >
              <AiOutlineMail className="text-2xl" />
              <input
                required
                type="email"
                placeholder="Email"
                name="user_email"
                className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
              />
            </label>

            <label
              htmlFor="Phone"
              className="flex items-center py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
            >
              <CiPhone className="text-2xl" />
              <input
                required
                type="text"
                placeholder="Phone"
                name="user_phone"
                className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none"
              />
            </label>

            <label
              htmlFor="Message"
              className="flex items-start py-3 z-40 border-b-[0.1px] border-[--text2] gap-3 text-xl"
            >
              <BiMessage className="text-2xl mt-2" />
              <textarea
                required
                placeholder="Message"
                name="message"
                className="w-full bg-transparent placeholder:font-light placeholder:text-white focus:outline-none resize-none h-32"
              ></textarea>
            </label>
            <div className="w-full lg:flex justify-end pt-10">
              <motion.button
                className="bg-orange-500 text-white py-4 px-6 rounded-lg"
                whileHover={{ scale: 1.1, backgroundColor: "#ff8e00" }}
                whileTap={{ scale: 0.9 }}
              >
                <button type="submit">Submit</button>
              </motion.button>
            </div>
          </form>
        ) : (
          <div className="w-full flex flex-col gap-4 items-center justify-center p-6 max-w-lg text-center">
            <h1 className="text-4xl font-bold">Thank You!</h1>
            <p className="text-lg text-[--text2]">
              Your message has been successfully submitted. We&rsquo;ll get back
              to you soon.
            </p>
            <Link href="/" className="text-[--accent] hover:underline mt-6">
              Return to Home
            </Link>
          </div>
        )}

        <div className="flex gap-8 items-center min-h-[200px] lg:hidden">
          <div className="flex gap-4 justify-center items-center">
            <span className="w-[60px] h-[2px] bg-[--text3] inline-block"></span>
            <h1 className="text-xl font-black">Follow Us</h1>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-xl border-2 rounded-full p-2 border-[--text2] hover:border-[--text3] hover:bg-[--text3] transition duration-500"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
