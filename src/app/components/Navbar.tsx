import { useCartStore } from "@/store";
import Link from "next/link";
import Cart from "./Cart";

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-blue-600 text-white">
        <Link
          href="/"
          className="uppercase font-bold text-md h-12 flex items-center"
        >
          <span className="text-3xl font-bold mr-2">MKS</span>
          <span className="text-sm">sistemas</span>
        </Link>

        <div>
          <Cart />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
