import { NextPageContext } from "next";
import { Tweet, User } from "@prisma/client";
import client from "../../lib/server/db";
import Layout from "../../components/tweetLayout";
import { useForm } from "react-hook-form";
import { IForm } from "..";
import TweetImage from "../../components/tweetImage";

interface TweetWithUser extends Tweet {
  user: User;
  _count: {
    likes: number;
    replys: number;
  };
}

interface ITweet {
  ok?: boolean;
  tweet: TweetWithUser;
}

export default function TweetDetail({ tweet }: ITweet) {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm<IForm>();

  const createdAt = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date(tweet.createdAt));

  // const date = ` ${createdAt.split(",")[0]}, ${createdAt.split(",")[1]}`;

  const time = `${createdAt.split(":")[0]}:${createdAt.split(":")[1]} ${
    createdAt.split(" ")[4]
  }`;

  return (
    <Layout>
      <div className=" border-b  p-3 dark:border-[#181818]">
        {tweet.user && (
          <>
            <div className="flex w-full  items-center gap-3">
              <div
                className={`w-10 h-10 aspect-square rounded-full flex justify-center items-center text-white  ${
                  tweet.user ? `bg-red-500` : "bg-blue-800"
                } `}
              >
                <p className="text-lg font-semibold uppercase text-black dark:text-white">
                  {tweet.user.name[0]}
                </p>
              </div>
              <p className="place-self-start">{tweet.user.name}</p>
            </div>

            <div className="flex flex-col px-1">
              <p className="  py-3">{tweet.text}</p>

              <p className="flex gap-3 py-3 text-blue-400">
                <span>#Hash</span> <span>#Tags</span>{" "}
              </p>

              {tweet.imageUrl && (
                <TweetImage imageUrl={tweet.imageUrl} height={320} />
              )}

              <div className="border-b py-3 flex items-center gap-3 dark:border-b-[#181818]">
                <p className="text-gray-500 text-sm">
                  {``}
                  {`${time.split(" ")[3]} ${time.split(" ")[4]} · ${
                    createdAt.split(",")[0]
                  }, ${createdAt.split(",")[1]} · `}
                  <span className="font-semibold text-white">
                    {" "}
                    {tweet.views}{" "}
                  </span>
                  Views
                </p>
              </div>
              <div className="border-b py-3 flex items-center gap-3 dark:border-b-[#181818]">
                <p className="text-gray-500 text-sm">
                  <span className="mr-1 text-white font-semibold">
                    {tweet._count.likes}
                  </span>
                  Likes
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="mr-1 text-white font-semibold">
                    {tweet._count.replys}
                  </span>
                  Replys
                </p>
              </div>
            </div>

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
                placeholder="Tweet Your reply?"
              />
              {errors.text && (
                <p className="text-blue-400 text-sm">{errors.text.message}</p>
              )}

              <button
                className={`place-self-end px-4 py-2 text-sm  text-white rounded-3xl bg-[#1C9BEF] dark:font-semibold hover:opacity-[0.8] `}
              >
                Tweet
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const tweet = await client.tweet.findUnique({
    where: {
      id: Number(context.query?.id),
    },
    include: {
      user: true,
      _count: {
        select: {
          likes: true,
          replys: true,
        },
      },
    },
  });

  await client.tweet.update({
    where: {
      id: tweet?.id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  return {
    props: {
      tweet: JSON.parse(JSON.stringify(tweet)),
    },
  };
};
