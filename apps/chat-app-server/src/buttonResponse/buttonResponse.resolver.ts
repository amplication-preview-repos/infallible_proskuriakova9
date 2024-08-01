import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ButtonResponseResolverBase } from "./base/buttonResponse.resolver.base";
import { ButtonResponse } from "./base/ButtonResponse";
import { ButtonResponseService } from "./buttonResponse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ButtonResponse)
export class ButtonResponseResolver extends ButtonResponseResolverBase {
  constructor(
    protected readonly service: ButtonResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
