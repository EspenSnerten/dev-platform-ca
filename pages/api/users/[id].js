import initMiddleware from '../../middleware/cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function handler(req, res) {
  const cors = await initMiddleware(req, res); 
  const { id } = req.query;

  try {
    await cors; 

    switch (req.method) {
      case 'PUT':
        const { name, email } = req.body;
        const updatedUser = await prisma.user.update({
          where: { id },
          data: { name, email }
        });
        res.status(200).json(updatedUser);
        break;
      case 'DELETE':
        await prisma.user.delete({ where: { id } });
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