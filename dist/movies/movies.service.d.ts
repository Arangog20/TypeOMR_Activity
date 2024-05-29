import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movies } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from './dto/dto_pagination ';
export declare class MoviesService {
    private readonly moviesRepository;
    constructor(moviesRepository: Repository<Movies>);
    create(createMovieDto: CreateMovieDto): Promise<Movies>;
    findBySearch({ limit, order, page, search, sortBy }: PaginationDto): Promise<{
        currentPage: number;
        totalPages: number;
        dataFound: number;
        results: Movies[];
    }>;
    findOne(id: number): string;
    update(id: number, updateMovieDto: UpdateMovieDto): string;
    remove(id: number): string;
}
