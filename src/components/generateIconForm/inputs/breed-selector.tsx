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

const BREEDS = [
  "Beagle",
  "Chow Chow",
  "Corgi",
  "Dachshund",
  "French Bulldog",
  "German Shepherd",
  "Golden Retriever",
  "Greyhound",
  "Groodle",
  "Labrador",
  "Poodle",
  "Pomeranian",
  "Pug",
  "Samoyed",
  "Shiba Inu",
];

export const BreedSelector = () => {
  const form = useFormContext<InferredFormSchema>();

  return (
    <FormField
      control={form.control}
      name="breed"
      defaultValue=""
      render={({ field }) => (
        <FormItem>
          <FormLabel>1. Dog Breed</FormLabel>
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
                {BREEDS.map((breed) => (
                  <SelectItem key={breed} value={breed.toLowerCase()}>
                    {breed}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <div className="flex justify-between">
            <FormDescription>Pick your 🐶</FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};
