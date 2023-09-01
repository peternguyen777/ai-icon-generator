import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { api } from "../utils/api";
import { Button, Formgroup, Input } from "~/component";

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({ prompt: "" });
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess: (data) => {
      setImageUrl(data.imageUrl);
    },
  });

  function updateForm(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    generateIcon.mutate({
      prompt: form.prompt,
    });
    setForm({ prompt: "" });
  }

  const session = useSession();

  const isLoggedIn = !!session.data;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {!isLoggedIn && (
          <Button
            onClick={() => {
              signIn().catch(console.error);
            }}
          >
            Login
          </Button>
        )}
        {isLoggedIn && (
          <Button
            onClick={() => {
              signOut().catch(console.error);
            }}
          >
            Logout
          </Button>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <Formgroup>
            <label>Prompt</label>
            <Input value={form.prompt} onChange={updateForm("prompt")} />
          </Formgroup>
          <Button>Submit</Button>
        </form>
        {imageUrl && (
          <Image
            alt="an image of generated prompt"
            src={imageUrl}
            width={100}
            height={100}
          />
        )}
      </main>
    </>
  );
};

export default GeneratePage;
