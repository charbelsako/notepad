import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { File } from '../../typings';

interface Data {
  deletedFile: File;
}

interface Error {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
): Promise<void> {
  if (req.query.id !== null) {
    res.status(500).json({ message: 'No ID was passed' });
    return;
  }
  const id: string = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const deletedFile: File = await sanityClient.delete(id);
  res.status(200).json({ deletedFile });
}
