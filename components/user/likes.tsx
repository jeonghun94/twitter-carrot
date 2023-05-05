import useSWR from "swr";

const Replies = () => {
  const { data } = useSWR("/api/user/likes");

  return (
    <div>
      {data?.likes.length > 0 ? (
        data?.likes.map((reply: any) => (
          <div key={reply.id}>
            <h1>{reply.text}</h1>
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-1 p-7">
          <h1 className="text-3xl font-bold">
            You don’t have any <br /> likes yet
          </h1>
          <h3 className="text-gray-500 text-sm font-semibold">
            Tap the heart on any Tweet to show it some love. <br /> When you do,
            it’ll show up here.
          </h3>
        </div>
      )}
    </div>
  );
};

export default Replies;
