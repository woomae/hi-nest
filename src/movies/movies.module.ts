import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DatabaseModule } from 'src/database/database.module';
import { movieRepository } from './movies.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [MoviesController],
    providers: [...movieRepository, MoviesService],
})
export class MoviesModule {}
