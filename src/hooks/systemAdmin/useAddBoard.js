import { useMutation } from "@tanstack/react-query";
import { createBoard } from "../../services/apiSystemAdmin";
import toast from "react-hot-toast";

export function useAddBoard() {
  const { isPending, mutate } = useMutation({
    mutationFn: createBoard,
    onSuccess: (data) => {
      toast.success("Board created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, mutate };
}
