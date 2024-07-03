import { useMutation } from "@tanstack/react-query";
import { createBoard, createCompanyType } from "../../services/apiSystemAdmin";

export function useAddCompanyType() {
  const { isPending, mutate } = useMutation({
    mutationFn: createCompanyType,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isPending, mutate };
}
