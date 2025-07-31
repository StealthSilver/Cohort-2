// type inference in zod

import express from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json());

// 1. Define Zod schema for the request body
const createUserSchema = z.object({
  name: z.string().min(1),
  age: z.number().int().positive(),
});

// 2. Infer TypeScript type from the schema
type CreateUserInput = z.infer<typeof createUserSchema>;

// 3. Express route using the inferred type
app.post('/user', (req, res) => {
  const result = createUserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error.issues });
  }

  const user: CreateUserInput = result.data;

  // TypeScript now knows `user` has `name: string` and `age: number`
  res.json({ message: `User ${user.name} is ${user.age} years old.` });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
