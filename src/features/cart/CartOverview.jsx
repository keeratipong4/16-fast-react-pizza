import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuatity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { CartIcon } from "../../utils/Icons";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuatity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span className="text-yellow-400">
          {formatCurrency(totalCartPrice)}
        </span>
      </p>

      <Link className="flex items-center gap-2" to="/cart">
        <span>
          <CartIcon />
        </span>
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
