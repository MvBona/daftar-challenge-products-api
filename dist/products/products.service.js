"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let ProductsService = exports.ProductsService = class ProductsService {
    constructor() {
        this.dataFilePath = path.resolve(__dirname, '..', '..', 'data', 'data.json');
        this.products = [];
        this.loadDataFromFile();
    }
    saveDataToFile() {
        try {
            fs.writeFileSync(this.dataFilePath, JSON.stringify(this.products, null, 2), 'utf8');
            console.log('Data saved to file:', this.products);
        }
        catch (error) {
            console.error('Error saving data to file:', error);
        }
    }
    loadDataFromFile() {
        try {
            const fileContent = fs.readFileSync(this.dataFilePath, 'utf8');
            this.products = JSON.parse(fileContent);
        }
        catch (error) {
            this.products = [];
        }
    }
    getAllProducts() {
        return this.products;
    }
    createProduct(product) {
        this.products.push(product);
        this.saveDataToFile();
        return product;
    }
};
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductsService);
//# sourceMappingURL=products.service.js.map