import useSWR from "swr";
import useUser from "../lib/client/useUser";
import useMutation from "../lib/client/useMutation";
import { Tweet, User } from "@prisma/client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Tweets from "../components/tweets";
import Layout from "../components/tweetLayout";

export interface IForm {
  text: string;
}
export interface ITweets {
  ok?: boolean;
  tweets: TweetWithUser[];
}

interface MutationResult {
  ok: boolean;
}

interface TweetWithUser extends Tweet {
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
    <Layout isHome>
      <div className="w-full px-4 py-3  border-b dark:border-b-[#181818]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-start gap-2 "
        >
          {user && (
            <div
              className={`w-10 h-10 aspect-square rounded-full flex justify-center items-center text-white  ${
                user ? `bg-red-500` : "bg-blue-800"
              } `}
            >
              <p className="text-lg font-semibold uppercase text-black dark:text-white">
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
      {tweetData && <Tweets tweets={tweetData.tweets} />}
    </Layout>
  );
};

export default Home;
