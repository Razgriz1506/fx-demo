import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FxModule } from './fx/fx.module';

@Module({
  imports: [AuthModule, FxModule],
})
export class AppModule {}