import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class Products {
  campo1: string;
  campo2: string;
  campo3: number;
}
