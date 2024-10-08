import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-16">
      <div>
        <Link href={"/"}>
          <Image src="/logo-text.png" alt="logo" height={120} width={120} />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="font-bold text-xl hover:underline duration-500">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-bold text-xl hover:underline duration-500">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="font-bold text-xl hover:underline duration-500">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
