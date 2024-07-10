import { useQuery } from "@tanstack/react-query";
import { getBranch } from "../../services/apiSystemAdmin";

export function useGetBranch() {
  const { isPending, data: branch } = useQuery({
    queryKey: ["branch"],
    queryFn: getBranch,
  });
  console.log(branch);
  return { isPending, branch };
}
