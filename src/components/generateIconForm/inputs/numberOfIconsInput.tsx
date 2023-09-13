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
import { type InferredFormSchema } from "../GenerateIconForm";

export const NumberOfIconsInput = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="numberOfIcons"
      defaultValue={1}
      render={({ field }) => (
        <FormItem>
          <FormLabel>4. Number of icons</FormLabel>
          <FormControl>
            <Input
              {...field}
              type="number"
              defaultValue={field.value}
              min={1}
              max={10}
              {...form.register("numberOfIcons", { valueAsNumber: true })}
            />
          </FormControl>
          <FormDescription>
            How many icons do you want? Note: 1 credit per icon.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
