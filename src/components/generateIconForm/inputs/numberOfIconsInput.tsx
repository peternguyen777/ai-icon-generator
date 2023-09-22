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
import { type InferredFormSchema } from "../GenerateIconForm";

export const NumberOfIconsInput = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="numberOfIcons"
      defaultValue={[5]}
      render={({ field: { value, onChange } }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>5. Number of icons</FormLabel>
            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {value}
            </span>
          </div>
          <FormControl>
            <Slider
              id="numberOfIcons"
              min={1}
              max={10}
              step={1}
              defaultValue={value}
              onValueChange={onChange}
              className="py-4 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Number of Icons"
            />
          </FormControl>
          <FormDescription>
            Icons to generate: 1 credit per icon.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
