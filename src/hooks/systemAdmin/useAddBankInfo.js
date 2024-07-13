import { useMutation } from "@tanstack/react-query";
import { createBankInfo } from "../../services/apiSystemAdmin";
import toast from "react-hot-toast";

export function useAddBankInfo() {
  const { isPending, mutate } = useMutation({
    mutationFn: createBankInfo,
    // onSuccess: (data) => {
    //   toast.success("Bank created successfully");
    // },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, mutate };
}
