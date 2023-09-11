import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as serveStatic from 'serve-static'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  /* Swagger文档引入 */
  const options = new DocumentBuilder()
    .setTitle('API文档')
    .setDescription('外卖小程序API文档')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  /* Swagger文档结束 */

  app.setGlobalPrefix('api')
  app.use(
    '/public',
    serveStatic(join(__dirname, '../public'), {
      extensions: ['jpg', 'jpeg', 'png'],
    }),
  )
  await app.listen(3000)
}

bootstrap()
