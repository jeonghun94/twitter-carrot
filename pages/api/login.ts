import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/server/db";
import withHandler, { ResponseType } from "../../lib/server/withHandler";
import { withApiSession } from "../../lib/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email } = req.body;

  const existingUser = await client.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) return res.send({ ok: false, error: "user not found" });

  req.session.user = {
    id: existingUser.id,
  };
  await req.session.save();
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
