import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createEmployeeSalary } from "../../services/apiEmployeeManagement";

export function useAddEmSalary() {
  const { isPending, mutate } = useMutation({
    mutationFn: createEmployeeSalary,
    onSuccess: (data) => {
      toast.success("Bank created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isPending, mutate };
}
