import { useQuery } from "@tanstack/react-query";
import { getConfirmPreProject } from "../../services/apiPreProject";

export function useGetConfirmProject() {
  const { isPending, data: project } = useQuery({
    queryKey: ["confirmProject"],
    queryFn: getConfirmPreProject,
  });
  console.log(project);
  return { isPending, project };
}
