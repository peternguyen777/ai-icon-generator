import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

const useLoginRedirect = () => {
  const session = useSession();
  const router = useRouter();

  const loginRedirectHandler = useCallback(async () => {
    if (session.data) {
      await router.push("/generate");
    } else {
      await signIn("google", { callbackUrl: "/generate" });
    }
  }, [router, session.data]);

  return { loginRedirectHandler };
};

export default useLoginRedirect;
