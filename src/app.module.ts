import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { Movies } from './movies/entities/movie.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Movies],
      extra: {
        ssl: true,
      },
      ssl: process.env.DB_SSL === 'true',
    }),
    TypeOrmModule.forFeature([Movies]), // Register your entities
    MoviesModule,
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
