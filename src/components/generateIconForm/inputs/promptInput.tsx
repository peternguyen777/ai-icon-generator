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
          <FormLabel>2. What is it doing?</FormLabel>
          <FormControl>
            <Input placeholder="eating a pizza" {...field} />
          </FormControl>
          <FormDescription>Describe an action</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
