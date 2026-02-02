import { motion } from "framer-motion";
import { useGuestbook, useCreateGuestbookEntry } from "@/hooks/use-guestbook";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertGuestbookEntrySchema } from "@shared/schema";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Guestbook() {
  const { data: entries, isLoading } = useGuestbook();
  const createMutation = useCreateGuestbookEntry();

  const form = useForm<z.infer<typeof insertGuestbookEntrySchema>>({
    resolver: zodResolver(insertGuestbookEntrySchema),
    defaultValues: {
      name: "",
      message: ""
    }
  });

  const onSubmit = (data: z.infer<typeof insertGuestbookEntrySchema>) => {
    createMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="guestbook" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Guestbook</h2>
          <p className="text-muted-foreground">Leave a mark on my digital home.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6">Sign the Guestbook</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...form.register("name")}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <textarea
                  {...form.register("message")}
                  placeholder="Your Message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={createMutation.isPending}
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {createMutation.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Sign Now <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* List Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-[400px]"
          >
            <h3 className="text-xl font-bold mb-6 px-2">Recent Messages</h3>
            <ScrollArea className="flex-1 pr-4">
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 bg-white/5 rounded-xl animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {entries?.map((entry) => (
                    <div 
                      key={entry.id} 
                      className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-white group-hover:text-primary transition-colors">
                          {entry.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {entry.createdAt && format(new Date(entry.createdAt), "MMM d, yyyy")}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.message}
                      </p>
                    </div>
                  ))}
                  {entries?.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      No messages yet. Be the first!
                    </div>
                  )}
                </div>
              )}
            </ScrollArea>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
