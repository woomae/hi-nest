import { Movie } from './entities/Movie.entity';
import { DataSource } from 'typeorm';

export const movieRepository = [
    {
        provide: 'MOVIE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Movie),
        inject: ['DATA_SOURCE'],
    },
];
