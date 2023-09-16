import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileController } from './file/file.controller'
import { FileService } from './file/file.service'
import { FileModule } from './file/file.module'
import { UserModule } from './user/user.module'
import { CatModule } from './cat/cat.module'
import { LoggerMiddleware } from './logger/logger.middleware'
import { UserController } from './user/user.controller'
import { DoubanModule } from './douban/douban.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: '127.0.0.1',
      username: 'root',
      password: 'lh123456',
      database: 'nest',
      retryDelay: 500,
      retryAttempts: 10,
      synchronize: true,
      autoLoadEntities: true,
    }),
    FileModule,
    UserModule,
    CatModule,
    DoubanModule,
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude({ path: '(.*)/(.*)', method: RequestMethod.GET }).forRoutes(UserController)
  }
}
