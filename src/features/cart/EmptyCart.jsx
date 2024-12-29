import LinkButton from "../../ui/LinkButton";
import { BackIcon, CartEmptyIcon } from "../../utils/Icons";

function EmptyCart() {
  return (
    <div className="px3 mx-5 py-4">
      <LinkButton to="/menu" className="flex">
        <span>
          <BackIcon size={22} />
        </span>
        Back to menu
      </LinkButton>
      <div className="mt-7 flex flex-col gap-3">
        <div className="mx-auto">
          <CartEmptyIcon />
        </div>
        <p className="mx-auto font-semibold">
          Your cart is still empty. <br />
          Start adding some pizzas :)
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
