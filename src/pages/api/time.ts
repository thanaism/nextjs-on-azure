import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    res.status(200).json({ time: new Date() });
}
