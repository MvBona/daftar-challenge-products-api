import { Products } from './products.module';
export declare class ProductsService {
    private readonly dataFilePath;
    private products;
    constructor();
    private saveDataToFile;
    private loadDataFromFile;
    getAllProducts(): Products[];
    createProduct(product: Products): Products;
}
