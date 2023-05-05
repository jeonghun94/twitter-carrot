import useMutation from "@/lib/client/useMutation";
import { useEffect } from "react";
import useSWR from "swr";

const Replies = () => {
  const { data } = useSWR("/api/user/replies");

  return (
    <div className="px-1 py-2">
      <h1 className="text-xl font-bold">Who to follow</h1>
      {data?.replies.map((reply: any) => (
        <div key={reply.id}>
          <h1>{reply.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default Replies;
