import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shiftProject as shiftProjectAPI } from "../../services/apiPreProject";

export function useShiftProject() {
  const queryClient = useQueryClient();
  const { isPending, mutate: shiftProject } = useMutation({
    mutationFn: shiftProjectAPI,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["project"],
      });
    },
    onError: (errors) => {
      console.log(errors);
    },
  });
  return { isPending, shiftProject };
}
