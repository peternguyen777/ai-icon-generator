import { api } from "~/utils/api";
import { Spinner } from "../../icons/spinner";
import { Button } from "../../ui/button";
import { FormDescription } from "../../ui/form";

export const SubmitOrBuyCreditsButton = ({
  isLoading,
}: {
  isLoading: boolean;
}) => {
  const credits = api.user.getCredits.useQuery();
  const hasCredits = credits.data && credits.data > 0;

  return (
    <>
      <FormDescription>Available Credits: {credits.data}</FormDescription>
      <Button
        className={`mt-4 w-full`}
        type="submit"
        disabled={isLoading || !hasCredits}
      >
        {isLoading && <Spinner />}
        Submit
      </Button>
    </>
  );
};
