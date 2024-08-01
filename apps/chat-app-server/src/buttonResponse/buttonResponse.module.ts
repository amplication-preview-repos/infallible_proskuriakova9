import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ButtonResponseModuleBase } from "./base/buttonResponse.module.base";
import { ButtonResponseService } from "./buttonResponse.service";
import { ButtonResponseController } from "./buttonResponse.controller";
import { ButtonResponseResolver } from "./buttonResponse.resolver";

@Module({
  imports: [ButtonResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [ButtonResponseController],
  providers: [ButtonResponseService, ButtonResponseResolver],
  exports: [ButtonResponseService],
})
export class ButtonResponseModule {}
