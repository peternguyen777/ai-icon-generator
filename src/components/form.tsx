/* eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { type Dispatch, type SetStateAction } from "react";
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
import { api } from "~/utils/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Spinner } from "./spinner";

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
  colour: z.string(),
  style: z.string(),
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    generateIcon.mutate(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Generate your icon
        </h1>
        <p className=" leading-7">
          Fill out the form below to start generating your icons.
        </p>
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>2. Colour</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>3. Style</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>4. Number of icons</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  defaultValue={1}
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
        <Button type="submit">
          {generateIcon.isLoading && <Spinner />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
