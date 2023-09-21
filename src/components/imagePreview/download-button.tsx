import { Download } from "lucide-react";
import { convertToCamelCase } from "~/lib/utils";

interface DownloadButtonProps {
  fileName: string;
  imageUrl: string;
}

function forceDownload(blobUrl: string, filename: string) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const DownloadButton = ({ fileName, imageUrl }: DownloadButtonProps) => {
  return (
    <button
      className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/50 shadow-sm transition-all hover:scale-105 active:scale-95"
      onClick={() => {
        fetch(imageUrl, {
          headers: new Headers({
            Origin: location.origin,
          }),
          mode: "cors",
        })
          .then((response) => response.blob())
          .then((blob) => {
            const blobUrl = window.URL.createObjectURL(blob);
            const fileNameCamelCase = convertToCamelCase(fileName);
            forceDownload(blobUrl, `${fileNameCamelCase}.png`);
          })
          .catch((e) => console.error(e));
      }}
    >
      <Download className="h-5 w-5 text-gray-500" />
    </button>
  );
};
