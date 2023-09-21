/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "~/components/ui/form";
import { toast } from "~/components/ui/use-toast";
import type { GeneratedImages } from "~/pages";
import { api } from "~/utils/api";
import { CardContent, CardFooter } from "../ui/card";
import { ColourSelector } from "./inputs/colourSelector";
import { NumberOfIconsInput } from "./inputs/numberOfIconsInput";
import { PromptInput } from "./inputs/promptInput";
import { StyleSelector } from "./inputs/styleSelector";
import { SubmitOrBuyCreditsButton } from "./inputs/submitOrBuyCreditsButton";
import { BreedSelector } from "./inputs/breedSelector";

const FormSchema = z.object({
  breed: z.string().nonempty("Required"),
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

export type InferredFormSchema = z.infer<typeof FormSchema>;

export function GenerateIconForm({
  setGeneratedImages,
  generatedImages,
  setIsGenerating,
}: {
  setGeneratedImages: Dispatch<SetStateAction<GeneratedImages>>;
  generatedImages: GeneratedImages;
  setIsGenerating: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<InferredFormSchema>({
    resolver: zodResolver(FormSchema),
  });

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess: (data) => {
      setGeneratedImages([...data, ...generatedImages]);

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
    onSettled: () => {
      setIsGenerating(false);
    },
  });

  function onSubmit(data: InferredFormSchema) {
    generateIcon.mutate(data);
    setIsGenerating(true);
    toast({
      title: "Submitting the prompt:",
      description: <p>{`A ${data.breed} ${data.prompt}`}</p>,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col space-y-6">
          <BreedSelector />
          <PromptInput />
          <StyleSelector />
          <ColourSelector />
          <NumberOfIconsInput />
        </CardContent>
        <CardFooter className="flex flex-col items-end">
          <SubmitOrBuyCreditsButton isLoading={generateIcon.isLoading} />
        </CardFooter>
      </form>
    </Form>
  );
}
