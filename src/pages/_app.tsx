import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import localFont from "next/font/local";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/toaster";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const clash = localFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
});

const archivo = localFont({
  src: "../fonts/Archivo-Variable.ttf",
  variable: "--font-archivo",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${archivo.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SessionProvider session={session}>
          <main className={`${clash.variable} flex min-h-screen flex-col`}>
            <div className="flex flex-grow flex-col">
              <Header />
              <Toaster />
              <Component {...pageProps} />
            </div>
            <Footer />
          </main>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
