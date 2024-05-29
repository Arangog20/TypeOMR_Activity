import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { PaginationDto } from "./dto/dto_pagination ";
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<import("./entities/movie.entity").Movies>;
    findBySearch(paginationDto: PaginationDto): Promise<{
        currentPage: number;
        totalPages: number;
        dataFound: number;
        results: import("./entities/movie.entity").Movies[];
    }>;
    findOne(id: string): string;
    update(id: string, updateMovieDto: UpdateMovieDto): string;
    remove(id: string): string;
}
