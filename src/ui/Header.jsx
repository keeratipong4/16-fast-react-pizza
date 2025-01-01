import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { PizzaIcon } from "../utils/Icons";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="flex items-center gap-1 text-nowrap sm:tracking-widest"
      >
        Fast React Pizza.Co
        <span className="h-10 w-10">
          <PizzaIcon />
        </span>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
