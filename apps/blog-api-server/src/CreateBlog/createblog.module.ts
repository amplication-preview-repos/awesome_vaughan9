import { Module } from "@nestjs/common";
import { CreateBlogService } from "./createblog.service";
import { CreateBlogController } from "./createblog.controller";
import { CreateBlogResolver } from "./createblog.resolver";

@Module({
  controllers: [CreateBlogController],
  providers: [CreateBlogService, CreateBlogResolver],
  exports: [CreateBlogService],
})
export class CreateBlogModule {}
