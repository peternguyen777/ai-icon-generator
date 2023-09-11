/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { toast } from "~/components/ui/use-toast";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { Spinner } from "./spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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

const FormSchema = z.object({
  prompt: z.string({
    required_error: "Prompt is required",
  }),
  colour: z.string().nonempty("Required"),
  style: z.string().nonempty("Required"),
  numberOfIcons: z
    .number({
      required_error: "Number is required",
      invalid_type_error: "Must be a whole number between 1 and 10",
    })
    .int()
    .min(1)
    .max(10),
});

export function InputForm({
  setImageUrls,
  imageUrls,
}: {
  setImageUrls: Dispatch<
    SetStateAction<
      {
        imageUrl: string;
      }[]
    >
  >;
  imageUrls: { imageUrl: string }[];
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { buyCredits } = useBuyCredits();

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess: (data) => {
      setImageUrls([...data, ...imageUrls]);
      form.reset();
      toast({
        title: "Success!",
        description: <p>{`Image successfully generated`}</p>,
      });
    },
    onError: (error) => {
      toast({
        title: "Error occured:",
        description: <p>{error.message}</p>,
      });
    },
  });

  const credits = api.user.getCredits.useQuery();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    generateIcon.mutate(data);
    toast({
      title: "Submitting the prompt:",
      description: <p>{data.prompt}</p>,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
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
        <FormField
          control={form.control}
          name="colour"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>2. Colour</FormLabel>
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
                  {COLOURS.map((colour) => (
                    <SelectItem key={colour} value={colour.toLowerCase()}>
                      {colour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Pick your icon colour</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div>
          <FormDescription className="flex justify-end pt-6">
            Available Credits: {credits.data}
          </FormDescription>

          {credits.data && credits.data > 0 ? (
            <Button
              className="mt-4 w-full"
              type="submit"
              disabled={generateIcon.isLoading}
            >
              {generateIcon.isLoading && <Spinner />}
              Submit
            </Button>
          ) : (
            <Button
              onClick={() => {
                buyCredits().catch(console.error);
              }}
              type="button"
              className="mt-4 w-full"
            >
              Buy credits
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
