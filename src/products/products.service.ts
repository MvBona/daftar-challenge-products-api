// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { Products } from './products.module';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private readonly dataFilePath = path.resolve(__dirname, '..', '..', 'data', 'data.json');
  private products: Products[] = [];

  constructor() {
    this.loadDataFromFile();
  }

  private saveDataToFile() {
    try {
      // console.log('Data file path:', this.dataFilePath);
      fs.writeFileSync(this.dataFilePath, JSON.stringify(this.products, null, 2), 'utf8');
      console.log('Data saved to file:', this.products);
    } catch (error) {
      console.error('Error saving data to file:', error);
    }
  }

  private loadDataFromFile() {
    try {
      const fileContent = fs.readFileSync(this.dataFilePath, 'utf8');
      this.products = JSON.parse(fileContent);
    } catch (error) {
      this.products = [];
    }
  }

  getAllProducts(): Products[] {
    return this.products;
  }

  createProduct(product: Products): Products {
    this.products.push(product);
    this.saveDataToFile();
    return product;
  }
}
