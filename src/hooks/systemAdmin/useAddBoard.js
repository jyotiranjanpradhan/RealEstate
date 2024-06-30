import { useMutation } from "@tanstack/react-query";
import { createBoard } from "../../services/apiSystemAdmin";

export function useAddBoard() {
  const { isPending, mutate } = useMutation({
    mutationFn: createBoard,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isPending, mutate };
}
