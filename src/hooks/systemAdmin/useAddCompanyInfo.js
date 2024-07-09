import { useMutation } from "@tanstack/react-query";
import { createCompanyInfo } from "../../services/apiSystemAdmin";
import toast from "react-hot-toast";

export function useAddCompanyInfo() {
  const { isPending, mutate } = useMutation({
    mutationFn: createCompanyInfo,
    onSuccess: (data) => {
      toast.success("Company created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, mutate };
}
