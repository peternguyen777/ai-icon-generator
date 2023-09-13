import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import type { InferredFormSchema } from "../GenerateIconForm";

export const PromptInput = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="prompt"
      render={({ field }) => (
        <FormItem>
          <FormLabel>1. Prompt</FormLabel>
          <FormControl>
            <Input placeholder="Shiba inu eating a pizza" {...field} />
          </FormControl>
          <FormDescription>
            Describe what you want your icon to look like
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
