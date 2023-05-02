import useUser from "../lib/client/useUser";
import { Tweet, User } from "@prisma/client";
import Layout from "../components/tweetLayout";
import { AiFillCalendar } from "react-icons/ai";

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
        <div className="w-full h-36 bg-gray-600"></div>
        <div className=" w-full flex items-center justify-between p-2">
          <div className="flex items-center -mt-16 aspect-square rounded-full p-3 text-3xl box-border bg-blue-600 border dark:border-black">
            정훈
          </div>
          <button className="w-1.5/5 h-10 flex items-center text-sm px-2 rounded-3xl border font-bold hover:opacity-[0.8]">
            Edit profile
          </button>
        </div>
        <div className="h-atuo px-5">
          <p className="text-2xl  font-semibold">{user.name}</p>
          <p className="text-gray-400">{user.email}</p>
          <p className="flex items-center gap-1 text-gray-400">
            <AiFillCalendar /> Joined
          </p>
          <p className="flex items-center gap-3 text-gray-400">
            <span>
              <strong className="text-white">{user?._count?.following}</strong>{" "}
              Following
            </span>
            <span>
              <strong className="text-white">{user?._count?.followers}</strong>{" "}
              Followers
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
