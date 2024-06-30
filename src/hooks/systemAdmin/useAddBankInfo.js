import { useMutation } from "@tanstack/react-query";
import { createBankInfo } from "../../services/apiSystemAdmin";

export function useAddBankInfo() {
  const { isPending, mutate } = useMutation({
    mutationFn: createBankInfo,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isPending, mutate };
}
