import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from './entities/movie.entity';
import { ILike, Repository } from 'typeorm';
import { PaginationDto } from './dto/dto_pagination ';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private readonly moviesRepository: Repository<Movies>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movies> {
    const movie = this.moviesRepository.create(createMovieDto);
    return await this.moviesRepository.save(movie);
  }

  async findBySearch({limit,order,page,search,sortBy} :PaginationDto) {
    const [results,total] = await this.moviesRepository.findAndCount({
      where: {
        title: ILike(`%${search}%`),
      },
      order: {
        [sortBy]: order,
      },
      skip: (page - 1) * limit,
      take: limit,
    })
    return {currentPage: page,totalPages: Math.ceil(total/limit),dataFound: total, results};
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
