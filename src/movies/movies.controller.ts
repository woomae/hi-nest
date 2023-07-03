import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieid: number): Movie {
    return this.moviesService.getOne(movieid);
  }

  @Post()
  create(@Body() moviedata: CreateMovieDto) {
    return this.moviesService.create(moviedata);
  }

  @Delete('/:id')
  remove(@Param('id') movieid: number) {
    return this.moviesService.deleteOne(movieid);
  }

  @Patch('/:id')
  patch(@Param('id') movieid: number, @Body() updatedata: UpdateMovieDto) {
    return this.moviesService.update(movieid, updatedata);
  }
}
