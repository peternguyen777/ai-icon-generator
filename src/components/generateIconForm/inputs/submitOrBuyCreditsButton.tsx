import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { FormDescription } from "../../ui/form";
import { Button } from "../../ui/button";
import { Spinner } from "../../spinner";

export const SubmitOrBuyCreditsButton = ({
  isLoading,
}: {
  isLoading: boolean;
}) => {
  const { buyCredits } = useBuyCredits();
  const credits = api.user.getCredits.useQuery();

  return (
    <>
      <FormDescription>Available Credits: {credits.data}</FormDescription>
      {credits.data && credits.data > 0 ? (
        <Button className="mt-4 w-full" type="submit" disabled={isLoading}>
          {isLoading && <Spinner />}
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
    </>
  );
};
