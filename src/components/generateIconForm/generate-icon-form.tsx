import { zodResolver } from "@hookform/resolvers/zod";
import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "~/components/ui/form";
import { toast } from "~/components/ui/use-toast";
import type { GeneratedImages } from "~/pages/generate";
import { api } from "~/utils/api";
import { CardContent, CardFooter } from "../ui/card";
import { BreedSelector } from "./inputs/breed-selector";
import { ColourSelector } from "./inputs/colour-selector";
import { NumberOfIconsInput } from "./inputs/number-of-icons-input";
import { PromptInput } from "./inputs/prompt-input";
import { StyleSelector } from "./inputs/style-selector";
import { SubmitOrBuyCreditsButton } from "./inputs/submit-button";

const FormSchema = z.object({
  breed: z.string().nonempty("Required"),
  prompt: z.string().trim().min(1, { message: "Required" }),
  colour: z.string().nonempty("Required"),
  style: z.string().nonempty("Required"),
  numberOfIcons: z
    .array(z.number().int().min(1).max(10))
    .refine((arr) => arr.length === 1),
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

  const utils = api.useContext();

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
    onSettled: async () => {
      setIsGenerating(false);
      await utils.user.getCredits.refetch();
    },
  });

  function onSubmit(data: InferredFormSchema) {
    const parsedData = {
      ...data,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      numberOfIcons: data.numberOfIcons[0]!,
    };
    generateIcon.mutate(parsedData);

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
          <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            <StyleSelector />
            <ColourSelector />
          </div>
          <NumberOfIconsInput />
        </CardContent>
        <CardFooter className="flex flex-col items-end">
          <SubmitOrBuyCreditsButton isLoading={generateIcon.isLoading} />
        </CardFooter>
      </form>
    </Form>
  );
}
