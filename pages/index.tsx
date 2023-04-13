import useSWR from "swr";
import useUser from "../lib/client/useUser";
import useMutation from "../lib/client/useMutation";
import { Tweet, User } from "@prisma/client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiFillHome } from "react-icons/ai";
import Head from "next/head";
import Tweets from "../components/tweets";

interface IForm {
  text: string;
}
interface ITweets {
  ok: boolean;
  tweets: TweetWithUser[];
}

interface MutationResult {
  ok: boolean;
}

export interface TweetWithUser extends Tweet {
  user: User;
}

const Home = () => {
  const { user, isLoading } = useUser();
  const { data: tweetData, mutate } = useSWR<ITweets>("/api/tweet");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const [tweet, { data, loading }] = useMutation<MutationResult>("/api/tweet");

  const onSubmit = (validData: IForm) => {
    tweet(validData);
  };

  useEffect(() => {
    if (loading) return;
    if (data?.ok) {
      setValue("text", "");
      mutate();
    }
  }, [data]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-full min-h-screen grid grid-cols-10">
      <Head>
        <title>Home / Twitter</title>
        <link
          rel="shortcut icon"
          href="https://abs.twimg.com/favicons/twitter.2.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="flex flex-col gap-3 border-r   p-1 py-3 box-border items-center dark:border-r-[#181818]">
        <svg
          viewBox="0 0 24 24"
          className="fill-[#1C9BEF] w-8  dark:fill-white"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
        <AiFillHome className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="col-span-9  mt-1">
        <div className="mb-3 px-4 py-3">
          <p className="font-semibold text-lg">Home</p>
        </div>
        <div className="w-full flex border-b justify-between pb-3 dark:dark:border-b-[#181818]">
          <p className="w-full text-center text-sm">
            <span className="border-b-2 border-b-[#1C9BEF] pb-3"> For you</span>
          </p>
          <p className="w-full text-center text-sm text-gray-500">
            <span>Following</span>
          </p>
        </div>

        <div className="w-full px-4 py-3  border-b dark:border-b-[#181818]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-start gap-2 "
          >
            {user && (
              <div
                className={`w-10 h-10 aspect-square rounded-full flex justify-center items-center text-white  ${
                  user.color ? `bg-[#${user.color}]` : "bg-blue-800"
                } `}
              >
                <p className="text-lg font-semibold uppercase">
                  {user.name[0]}
                </p>
              </div>
            )}

            <div className="w-full flex flex-col">
              <input
                {...register("text", {
                  required: {
                    value: true,
                    message: "Please enter your text",
                  },
                })}
                type="text"
                className="w-full p-2 bg-transparent outline-none placeholder:text-gray-500 border-transparent"
                placeholder="What's happeing?"
              />
              {errors.text && (
                <p className="text-blue-400 text-sm">{errors.text.message}</p>
              )}

              <button
                className={`place-self-end px-4 py-2 text-sm  text-white rounded-3xl bg-[#1C9BEF] dark:font-semibold hover:opacity-[0.8] ${
                  loading ? "cursor-not-allowed opacity-2" : ""
                } `}
                disabled={loading}
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
        {tweetData ? <Tweets tweets={tweetData.tweets} /> : ""}
      </div>
    </div>
  );
};

export default Home;
