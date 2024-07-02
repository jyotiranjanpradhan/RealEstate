import { useQuery } from "@tanstack/react-query";
import { getBank } from "../../services/apiSystemAdmin";

export function useGetProject() {
  const { isPending, data: project } = useQuery({
    queryKey: ["project"],
    queryFn: getBank,
  });
  console.log(project);
  return { isPending, project };
}
