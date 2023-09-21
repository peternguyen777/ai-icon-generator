import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import type { Dispatch, SetStateAction } from "react";

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PaginationBar = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationBarProps) => {
  return (
    <div className="flex items-center gap-4 font-clash">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-md w-16 text-center font-medium">
        {`${currentPage} / ${totalPages}`}
      </span>
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
