import Image from "next/image";
import Link from "next/link";
import type { RouterOutputs } from "~/utils/api";

type Icons = RouterOutputs["icons"]["getIcons"];

interface CollectionProps {
  title: string;
  icons: Icons;
}

const BUCKET_NAME = "ai-icon-generator2";

export const Collection = ({ title, icons }: CollectionProps) => {
  return (
    <main className="container mx-auto mt-24 flex min-h-screen flex-col px-8">
      <h1 className="text-4xl">{title}</h1>
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {icons.map((icon) => (
          <li key={icon.id}>
            <Link
              href={`https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`}
              target="_blank"
            >
              <Image
                src={`https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`}
                className="w-full rounded-lg"
                height="128"
                width="128"
                alt={icon.prompt ?? "an image of an icon"}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
