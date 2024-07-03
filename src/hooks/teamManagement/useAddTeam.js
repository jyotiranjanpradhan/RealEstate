import { useMutation } from "@tanstack/react-query";
import { createTeam } from "../../services/apiTeamManagement";

export function useAddTeam() {
  const { isPending, mutate } = useMutation({
    mutationFn: createTeam,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isPending, mutate };
}
