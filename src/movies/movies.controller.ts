import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { query } from 'express';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieid: string) {
    return `this will return one movie with id: ${movieid}`;
  }

  @Post()
  create(@Body() moviedata) {
    console.log(moviedata);
    return moviedata;
  }

  @Delete('/:id')
  remove(@Param('id') movieid: string) {
    return `This wil delete a movie with the id: ${movieid}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieid: string, @Body() updatedata) {
    return {
      updatedmovie: movieid,
      ...updatedata,
    };
  }
}
