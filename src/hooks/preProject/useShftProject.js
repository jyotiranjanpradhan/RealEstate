import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shiftProject as shiftProjectAPI } from "../../services/apiPreProject";
import toast from "react-hot-toast";

export function useShiftProject() {
  const queryClient = useQueryClient();
  const { isPending, mutate: shiftProject } = useMutation({
    mutationFn: shiftProjectAPI,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["project"],
      });
      toast.success("Project confirmed successfully");
    },
    onError: (errors) => {
      console.log(errors);
    },
  });
  return { isPending, shiftProject };
}
