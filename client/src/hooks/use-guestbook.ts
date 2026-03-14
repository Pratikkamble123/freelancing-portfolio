import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type GuestbookEntryInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useGuestbook() {
  return useQuery({
    queryKey: [api.guestbook.list.path],
    queryFn: async () => {
      const res = await fetch(api.guestbook.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch guestbook entries");
      return api.guestbook.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateGuestbookEntry() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: GuestbookEntryInput) => {
      const validated = api.guestbook.create.input.parse(data);
      const res = await fetch(api.guestbook.create.path, {
        method: api.guestbook.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.guestbook.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to post entry");
      }
      return api.guestbook.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.guestbook.list.path] });
      toast({
        title: "Your project details have been received.  ",
        description: "I’ll carefully analyze the scope and get back to you with next steps shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
