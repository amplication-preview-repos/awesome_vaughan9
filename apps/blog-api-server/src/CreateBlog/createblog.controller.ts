import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CreateBlogService } from "./createblog.service";

@swagger.ApiTags("createBlogs")
@common.Controller("createBlogs")
export class CreateBlogController {
  constructor(protected readonly service: CreateBlogService) {}
}
