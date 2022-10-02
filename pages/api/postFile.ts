import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { File } from '../../typings.d';

interface Data {
  createdFile: File;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  console.log(req.body);
  const file: any = { _type: 'genericfile', filename: req.body.filename, content: req.body.content };
  const createdFile: File = await sanityClient.create(file);
  res.status(200).json({ createdFile });
}
