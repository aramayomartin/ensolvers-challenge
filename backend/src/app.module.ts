import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './rest/users/users.module';
import { NotesModule } from './rest/notes/notes.module';
import { CategoriesModule } from './rest/categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'dbname',
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'], // Ruta absoluta a las entidades
      migrations: [__dirname + '/**/orm/*{.ts,.js}'],
    }),
    UsersModule,
    NotesModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
