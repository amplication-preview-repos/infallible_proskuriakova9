import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ButtonResponseService } from "./buttonResponse.service";
import { ButtonResponseControllerBase } from "./base/buttonResponse.controller.base";

@swagger.ApiTags("buttonResponses")
@common.Controller("buttonResponses")
export class ButtonResponseController extends ButtonResponseControllerBase {
  constructor(
    protected readonly service: ButtonResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
