import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/lib/server/withHandler";
import { withApiSession } from "@/lib/server/withSession";
import client from "@/lib/server/db";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const userId = Number(req.session.user?.id);

  const likes = await client.like.findMany({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  res.json({
    ok: true,
    likes,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
