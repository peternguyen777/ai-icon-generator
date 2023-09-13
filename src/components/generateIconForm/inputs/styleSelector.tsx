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
import { type InferredFormSchema } from "../GenerateIconForm";

const STYLES = [
  "Claymorphic",
  "3d Rendered",
  "Pixelated",
  "Watercolor",
  "Geometric",
  "Collage",
  "Vector artwork",
  "Vintage",
  "Surrealistic",
];

export const StyleSelector = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="style"
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormLabel>3. Style</FormLabel>
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
              {STYLES.map((style) => (
                <SelectItem key={style} value={style.toLowerCase()}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>Pick your icon style</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
