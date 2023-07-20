import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.module';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Products[] {
    return this.productsService.getAllProducts();
  }

  @Post()
  createProduct(@Body() product: Products): Products {
    return this.productsService.createProduct(product);
  }
}
