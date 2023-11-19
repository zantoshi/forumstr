import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row text-white align-middle pl-2 py-2 bg-violet-600 border-double border-b-2 border-slate-400 font-semibold">
      <Link href="/">Forumstr</Link>
    </nav>
  );
};

export default Nav;
