import { useMutation } from "@tanstack/react-query";
import { addCustomer as addCustomerAPI } from "./../../services/customer/apiCustomer";

export function useAddCustomer() {
  const { isPending, mutate: addCustomer } = useMutation({
    mutationFn: addCustomerAPI,
    onSuccess: (data) => {
      console.log(data);
    },
    pnError: (error) => {
      console.log(error);
    },
  });

  return { isPending, addCustomer };
}
