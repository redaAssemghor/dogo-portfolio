import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between lg:px-40 py-3 bg-gray-800 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <p className="text-center lg:text-left">
          &copy; 2023 Your Company. All rights reserved.
        </p>
        <nav className="flex gap-10 mt-3 lg:mt-0">
          <Link
            className="font-bold lg:text-xl text-sm hover:underline hover:text-[--orange-primary] hover:scale-105 duration-500"
            href="#privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-bold lg:text-xl text-sm hover:underline hover:text-[--orange-primary] hover:scale-105 duration-500"
            href="#terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="font-bold lg:text-xl text-sm hover:underline hover:text-[--orange-primary] hover:scale-105 duration-500"
            href="#contact"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
