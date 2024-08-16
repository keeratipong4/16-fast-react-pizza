import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>;
    </fetcher.Form>
  );
}
export async function action({ request, params }) {
  console.log("update");
  const updateData = { priority: true };
  await updateOrder(params.orderId, updateData);
  return null;
}
export default UpdateOrder;
