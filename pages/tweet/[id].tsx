import { NextPageContext } from "next";
import { Tweet, User } from "@prisma/client";
import client from "../../lib/server/db";
import Layout from "../../components/tweetLayout";

interface TweetWithUser extends Tweet {
  user: User;
}

interface ITweet {
  ok?: boolean;
  tweet: TweetWithUser;
}

export default function TweetDetail({ tweet }: ITweet) {
  return (
    <Layout>
      <h1>nanan</h1>
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
    },
  });

  return {
    props: {
      tweet: JSON.parse(JSON.stringify(tweet)),
    },
  };
};
