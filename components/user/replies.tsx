import useMutation from "@/lib/client/useMutation";
import { useEffect } from "react";
import useSWR from "swr";

const Replies = () => {
  const { data } = useSWR("/api/user/replies");

  return (
    <div>
      replies
      {data?.replies.map((reply: any) => (
        <div key={reply.id}>
          <h1>{reply.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default Replies;
