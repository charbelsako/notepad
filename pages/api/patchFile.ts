import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { File } from '../../typings';

interface Data {
  updatedFile: File;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const file: any = { _id: req.body._id, filename: req.body.filename, content: req.body.content };
  const updatedFile: File = await sanityClient.patch(file._id).set({ content: file.content }).commit();
  res.status(200).json({ updatedFile });
}
