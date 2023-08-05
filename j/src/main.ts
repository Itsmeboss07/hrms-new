import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: ['null', 'file://']
  }));
//   app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Replace * with your specific domain
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });


  await app.listen(3000);
}
bootstrap();
