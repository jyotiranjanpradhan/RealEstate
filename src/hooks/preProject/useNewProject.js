import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewPreProject } from "../../services/apiPreProject";

export function useNewProject() {
  const queryClient = useQueryClient();
  const { isPending, mutate: newProject } = useMutation({
    mutationFn: createNewPreProject,
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
  return { isPending, newProject };
}
