import useUser from "../lib/client/useUser";
import { Tweet, User } from "@prisma/client";
import Layout from "../components/tweetLayout";

export interface IForm {
  text: string;
  photo?: FileList;
}
export interface ITweets {
  ok?: boolean;
  tweets: TweetWithUser[];
}

export interface MutationResult {
  ok: boolean;
}

interface TweetWithUser extends Tweet {
  user: User;
}

const Profile = () => {
  const { user, isLoading } = useUser();

  const subTitle = () => {
    return (
      <div className="flex flex-col ml-3 items-start ">
        <h1 className="text-lg font-bold">{user?.name}</h1>
        <span className="text-xs text-gray-500">
          {user?._count.tweets} Tweets
        </span>
      </div>
    );
  };

  return isLoading ? (
    <div className="min-h-screen w-full flex justify-center items-center">
      <h1>Loading</h1>
    </div>
  ) : (
    <Layout isHome={false} pageTitle="Profile" subTitle={subTitle()}>
      <div>
        <div className="w-full h-36 bg-red-200"></div>

        <div className=" w-full flex items-center justify-between border p-2">
          <div className="w-3/p-10 bg-teal-200 ">정훈</div>
          <div className="w-1.5/5 h-10 flex items-center text-md px-2 rounded-3xl border font-bold">
            Edit profile
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
