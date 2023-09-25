import { useFormContext } from "react-hook-form";
import { Slider } from "~/components/ui/slider";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { type InferredFormSchema } from "../generate-icon-form";

export const NumberOfIconsInput = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="numberOfIcons"
      defaultValue={[1]}
      render={({ field: { value, onChange } }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>5. Number of icons</FormLabel>
            <span className="w-12 rounded-md border px-2 py-0.5 text-center text-sm font-medium">
              {value}
            </span>
          </div>
          <FormControl>
            <Slider
              min={1}
              max={10}
              step={1}
              value={value}
              onValueChange={onChange}
              className="pb-2 pt-4 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            />
          </FormControl>
          <FormDescription>One credit per icon</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
