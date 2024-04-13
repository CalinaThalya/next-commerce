import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-5 px-5 justify-between z-50 bg-blue-600 text-gray-100  font-size: 24px">
      <Link
        href="/"
        className="uppercase font-bold   text-lg h-20  flex items-center"
      >
        MKS
      </Link>
    </nav>
  );
}
export default Navbar;
