import initMiddleware from '../middleware/cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handler(req, res) {
  const cors = await initMiddleware(req, res);

  const { id } = req.query;

  try {
    await cors;

    switch (req.method) {
      case 'GET':
        const post = await prisma.post.findUnique({ where: { id } });
        if (!post) {
          res.status(404).json({ message: 'Post not found' });
        } else {
          res.status(200).json(post);
        }
        break;
      case 'PUT':
        const { title, content, published, authorId } = req.body;
        const updatedPost = await prisma.post.update({
          where: { id },
          data: { title, content, published, authorId }
        });
        res.status(200).json(updatedPost);
        break;
      case 'DELETE':
        await prisma.post.delete({ where: { id } });
        res.status(204).end();
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