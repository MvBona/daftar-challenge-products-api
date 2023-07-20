// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Products} from './products/products.module';

@Module({
  imports: [Products],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
