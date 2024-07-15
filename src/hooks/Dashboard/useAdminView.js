import { useQuery } from "@tanstack/react-query";
import { adminDashboardView } from "../../services/Dashboard/apiAdminView";

export function useGetAdminData() {
  const { isPending, data: adminData } = useQuery({
    queryKey: ["project"],
    queryFn: adminDashboardView,
  });
//   console.log(adminData);
  return { isPending, adminData };
}
