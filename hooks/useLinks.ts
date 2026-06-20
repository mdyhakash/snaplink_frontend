import { createLink } from "@/services/link.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLink,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
  });
}
