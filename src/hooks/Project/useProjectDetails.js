import { useQuery } from "@tanstack/react-query";
import { apiFetchPaymentSchedule, apiFetchProductDetails } from "../../services/Project/apiProjectDetails";

export function useProjectDetails(id) {
  const { isLoading, data: project, error,  } = useQuery({
    queryKey: ["confirmProject", id], // Pass the id here
    queryFn: apiFetchProductDetails,
    enabled: !!id, // Ensure the query runs only if id is not null
  });
  
  return { isLoading, project, error };
}
export function useProjectPaymentScheduleDetails(id) {
    const { data: payment_schedule, error, isLoading } = useQuery({
      queryKey: ["confirm_project_id", id], // Pass the id here
      queryFn: apiFetchPaymentSchedule,
      enabled: !!id, // Ensure the query runs only if id is not null
    });
  
    return { payment_schedule, error, isLoading };
  }
