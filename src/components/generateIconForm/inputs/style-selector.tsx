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
import { type InferredFormSchema } from "../generate-icon-form";
import { ScrollArea } from "~/components/ui/scroll-area";

const STYLES = [
  "3d Rendered",
  "Anime",
  "Charcoal",
  "Collage",
  "Cyberpunk",
  "Impressionist",
  "Minimalism",
  "Pencil Sketch",
  "Sticker",
  "Steampunk",
  "Vector",
  "Vintage",
  "Watercolor",
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
              <ScrollArea className="h-[240px]">
                {STYLES.map((style) => (
                  <SelectItem key={style} value={style.toLowerCase()}>
                    {style}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <div className="flex justify-between">
            <FormDescription>Pick your style</FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};
