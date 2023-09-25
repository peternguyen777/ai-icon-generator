import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import type { InferredFormSchema } from "../generate-icon-form";
import { ScrollArea } from "~/components/ui/scroll-area";

const COLOURS = [
  "Blue",
  "Red",
  "Pink",
  "Green",
  "Orange",
  "Yellow",
  "White",
  "Black",
];

export const ColourSelector = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="colour"
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormLabel>4. Colour</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <ScrollArea className="h-[240px]">
                {COLOURS.map((colour) => (
                  <SelectItem key={colour} value={colour.toLowerCase()}>
                    {colour}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <div className="flex justify-between">
            <FormDescription>Pick your colour</FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};
