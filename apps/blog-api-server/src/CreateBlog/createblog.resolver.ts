import * as graphql from "@nestjs/graphql";
import { CreateBlogService } from "./createblog.service";

export class CreateBlogResolver {
  constructor(protected readonly service: CreateBlogService) {}
}
