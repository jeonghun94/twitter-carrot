import { SWRConfig } from "swr";
import "../global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="max-w-md m-auto  dark:bg-black dark:text-white">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
