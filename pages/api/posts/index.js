import initMiddleware from '../middleware/cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handler(req, res) {
  const cors = await initMiddleware(req, res); 

  try {
    await cors;

    switch (req.method) {
      case 'GET':
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
        break;
      case 'POST':
        const { title, content, published, authorId } = req.body;
        const newPost = await prisma.post.create({
          data: { title, content, published, authorId }
        });
        res.status(201).json(newPost);
        break;
      default:
        res.status(405).json({ message: 'Method Not Allowed' });
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}

export default handler;