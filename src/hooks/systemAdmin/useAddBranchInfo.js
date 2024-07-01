import { useMutation } from "@tanstack/react-query";
import { createBranchInfo } from "../../services/apiSystemAdmin";

export function useAddBranchInfo() {
  const { isPending, mutate } = useMutation({
    mutationFn: createBranchInfo,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isPending, mutate };
}
