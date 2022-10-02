import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { File } from '../../typings.d';

const query = groq`*[_type == 'genericfile']`;

interface Data {
  files: File[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const files: File[] = await sanityClient.fetch(query);
  res.status(200).json({ files });
}
