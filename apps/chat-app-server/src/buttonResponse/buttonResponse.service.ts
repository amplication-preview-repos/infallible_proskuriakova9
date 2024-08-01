import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ButtonResponseServiceBase } from "./base/buttonResponse.service.base";

@Injectable()
export class ButtonResponseService extends ButtonResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
