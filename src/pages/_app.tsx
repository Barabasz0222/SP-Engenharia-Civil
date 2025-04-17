import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? <LoadingIndicator /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;