import { ProductsService } from './products.service';
import { Products } from './products.module';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Products[];
    createProduct(product: Products): Products;
}
