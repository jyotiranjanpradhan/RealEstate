import { useQuery } from "@tanstack/react-query";
import { apiFetchCommission, apiFetchCommissionDetails, apiFetchPaymentSchedule, apiFetchProductDetails } from "../../services/Project/apiProjectDetails";
import { apiFetchTax } from "../../services/Project/apiTax";

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

  export function useProjectTaxDetails(id) {
    const { data: tax_details, error, isLoading } = useQuery({
      queryKey: ["confirm_project_id", id], // Pass the id here
      queryFn: apiFetchTax,
      enabled: !!id, // Ensure the query runs only if id is not null
    });
  
    return { tax_details, error, isLoading };
  }

  // export function useProjectAmentityget() {
  //   const { data: payment_schedule, error, isLoading } = useQuery({
  //     queryKey: ["confirm_project_id", id], // Pass the id here
  //     queryFn: apiFetchPaymentSchedule,
  //     enabled: !!id, // Ensure the query runs only if id is not null
  //   });
  
  //   return { payment_schedule, error, isLoading };
  // }