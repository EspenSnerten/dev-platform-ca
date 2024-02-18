## Development platforms – Espen Henriksen Snerten

This will serve as my CA Project Report & Rationale, throughout the document I will detail my coding choices and the work process.

I decided to go with Next.js for my routing and endpoints and Vercel storage and a PostgreSQL database using Prisma as my ORM.

The reason I went with Next.js was to challenge myself; this is the first time I'm touching that framework, and I wanted to work with it because the team at Vercel developed it, and that suited me since I was going to use Vercel's storage solution. The code itself is simple. Since we had to demonstrate that the endpoints work, I had to set it up with CORS so that different domains can request the data from the API.

For the database, I went with Vercel and a PostgreSQL database. I did this because it's fairly straightforward and user-friendly to set up. I used Prisma as my ORM because it offers a highly useful UI using Prisma Studio to check that my tables and their contents look correct, and the template for the database (schema.prisma) was easy and intuitive to understand. It even has a relation set up between the two tables, but I opted to not work on that too much since it was not a requirement for the CA, only optional. I have demonstrated this in my earlier work, i.e., last year's exam.

I did encounter some problems, mainly that I couldn't connect to the API using my frontend. I worked on it for several hours and went kind of mad, but I got the idea to test if the endpoints worked locally. I thought that it was a code issue, but when the endpoints worked locally, I had my solution: it was Vercel authentication protection and how I had set up the build file. Once I changed that, things worked as they should.

In conclusion, I have built a backend that has GET, POST, and DELETE endpoints, and I have a boilerplate frontend that demonstrates that it works.

Link to the frontend repo: https://github.com/EspenSnerten/dev-platform-frontend-ca

### Resources
https://vercel.com/docs/storage/vercel-postgres/using-an-orm
