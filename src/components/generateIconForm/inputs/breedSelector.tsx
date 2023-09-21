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
import type { InferredFormSchema } from "../GenerateIconForm";

const BREEDS = [
  "Beagle",
  "Corgi",
  "Dachshund",
  "French Bulldog",
  "German Shepherd",
  "Poodle",
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
              {BREEDS.map((breed) => (
                <SelectItem key={breed} value={breed.toLowerCase()}>
                  {breed}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>Pick your dog breed</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
