import { useMutation } from "@tanstack/react-query";
import { createCompanyInfo } from "../../services/apiSystemAdmin";

export function useAddCompanyInfo() {
  const { isPending, mutate } = useMutation({
    mutationFn: createCompanyInfo,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isPending, mutate };
}
