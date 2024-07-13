import { useQuery } from "@tanstack/react-query";
import { apiFetchCompanyInfo } from "../../services/SystemAdmin/apiCompanyInfo";

export function useGetBranch() {
  const { isPending, data } = useQuery({
    queryKey: ["branch"],
    queryFn: apiFetchCompanyInfo,
  });
  return { isPending,data };
}
