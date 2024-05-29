"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("./entities/movie.entity");
const typeorm_2 = require("typeorm");
let MoviesService = class MoviesService {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    async create(createMovieDto) {
        const movie = this.moviesRepository.create(createMovieDto);
        return await this.moviesRepository.save(movie);
    }
    async findBySearch({ limit, order, page, search, sortBy }) {
        const [results, total] = await this.moviesRepository.findAndCount({
            where: {
                title: (0, typeorm_2.ILike)(`%${search}%`),
            },
            order: {
                [sortBy]: order,
            },
            skip: (page - 1) * limit,
            take: limit,
        });
        return { currentPage: page, totalPages: Math.ceil(total / limit), dataFound: total, results };
    }
    findOne(id) {
        return `This action returns a #${id} movie`;
    }
    update(id, updateMovieDto) {
        return `This action updates a #${id} movie`;
    }
    remove(id) {
        return `This action removes a #${id} movie`;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movies)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoviesService);
//# sourceMappingURL=movies.service.js.map