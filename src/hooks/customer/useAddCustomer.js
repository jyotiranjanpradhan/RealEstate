import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCustomer as addCustomerAPI } from "./../../services/customer/apiCustomer";

export function useAddCustomer() {
  const queryClient = useQueryClient();
  const { isPending, mutate: addCustomer } = useMutation({
    mutationFn: addCustomerAPI,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["customer"],
      });
    },
    pnError: (error) => {
      console.log(error);
    },
  });

  return { isPending, addCustomer };
}
