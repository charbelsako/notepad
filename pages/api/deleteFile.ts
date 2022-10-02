import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { File } from '../../typings';

interface Data {
  deletedFile: File;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const deletedFile: File = await sanityClient.delete(req.query.id);
  res.status(200).json({ deletedFile });
}
