import { convertTime } from "../lib/client/utils";
import { TweetWithUser } from "../pages";

interface ITweets {
  tweets: TweetWithUser[];
}

export default function Tweets({ tweets }: ITweets) {
  return tweets.map((tweet, idx) => (
    <div
      key={idx}
      className="w-full px-4 py-3  border-b dark:border-b-[#181818]"
    >
      <div className="flex items-start gap-3 cursor-pointer">
        <div className="w-10 h-10 aspect-square rounded-full bg-blue-800 flex justify-center items-center text-white">
          <p className="text-lg font-semibold uppercase">
            {tweet.user.name[0]}
          </p>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-sm">{tweet.user.name}</p>
            <p className="text-sm text-gray-500">
              {convertTime(tweet.createdAt.toString())}
            </p>
          </div>
          <p className="text-sm text-gray-500">{tweet.text}</p>
        </div>
      </div>
    </div>
  ));
}
