import { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name } = req.body;

  const isExisted = await client.user.findUnique({
    where: {
      email,
    },
  });

  if (isExisted) {
    res.send({
      ok: false,
      error: "user already exists please login",
    });
    return;
  }

  await client.user.create({
    data: {
      name,
      email,
    },
  });

  res.send({
    ok: true,
  });
}
