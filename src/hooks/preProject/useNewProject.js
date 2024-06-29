import { useMutation } from "@tanstack/react-query";
import { createNewPreProject } from "../../services/apiPreProject";

export function useNewProject() {
  const { isPending, mutate: newProject } = useMutation({
    mutationFn: createNewPreProject,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (errors) => {
      console.log(errors);
    },
  });
  return { isPending, newProject };
}
