import { ChevronRightSquare, Palette, PawPrint, PenTool } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import type { IconData } from "../collection";
import { DownloadButton } from "../download-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { capitalizeString } from "~/lib/utils";

interface DialogContentImageProps {
  icon: IconData[number];
  imageUrl: string;
}

interface AttributeCardProps {
  title: string;
  icon: ReactNode;
  content: string;
}

const AttributeCard = ({ title, icon, content }: AttributeCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent className="p-4 pt-0">
      <div className="text-xl font-medium">{capitalizeString(content)}</div>
    </CardContent>
  </Card>
);

export const DialogContentImage = ({
  icon,
  imageUrl,
}: DialogContentImageProps) => {
  return (
    <DialogContent>
      {icon.breed && icon.User?.name && (
        <DialogHeader>
          <DialogTitle>{`${icon.User.name}'s ${capitalizeString(
            icon.breed
          )} `}</DialogTitle>
        </DialogHeader>
      )}
      <div className="relative">
        <DownloadButton fileName={icon.id} imageUrl={imageUrl} />
        <Image
          src={imageUrl}
          alt="your icon"
          width={512}
          height={512}
          className="rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {icon.breed && (
          <AttributeCard
            title={"Dog Breed"}
            content={icon.breed}
            icon={<PawPrint className="h-4 w-4 text-muted-foreground" />}
          />
        )}
        {icon.prompt && (
          <AttributeCard
            title={"Prompt"}
            content={icon.prompt}
            icon={
              <ChevronRightSquare className="h-4 w-4 text-muted-foreground" />
            }
          />
        )}
        {icon.style && (
          <AttributeCard
            title={"Style"}
            content={icon.style}
            icon={<PenTool className="h-4 w-4 text-muted-foreground" />}
          />
        )}
        {icon.colour && (
          <AttributeCard
            title={"Colour"}
            content={icon.colour}
            icon={<Palette className="h-4 w-4 text-muted-foreground" />}
          />
        )}
      </div>
    </DialogContent>
  );
};
