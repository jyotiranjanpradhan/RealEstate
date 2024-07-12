import { useQuery } from "@tanstack/react-query";
import {
  dropDownsForTabs,
  teamManagementDepartment,
} from "../services/apiDrownDowns";

export function useGetDropDowns(endpoint) {
  const { isLoading, data: dropDowns } = useQuery({
    queryKey: ["dropdowns", endpoint],
    queryFn: () => dropDownsForTabs(endpoint),
  });
  console.log(dropDowns);
  return { isLoading, dropDowns };
}
