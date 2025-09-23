import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between align-middle bg-white px-4 py-2">
      <h1 className="font-bold text-2xl text-black cursor-pointer">
        <Link href="/">LOGO</Link>
      </h1>
      <ul className="flex gap-2 align-middle text-blue-600">
        <li className="cursor-pointer">
          <Link href="/home">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
