import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: "1",
      nombre: "Smartphone",
      marca: "Samsung",
      precio: "899.99",
      disponible: true,  // Cambiado a tipo booleano
      modelo: "Galaxy S23",
      procesador: "Snapdragon 8 Gen 2",
      almacenamiento: "256GB",
      ram: "12GB",
      color: "Phantom Black",
      peso: "168g",
      pantalla: "6.1\"",
      resolucion: "2340x1080",
      puertos: ["USB-C"],
      bateria: "24 horas",
      sistema_operativo: "Android 13",
      categoria: "Celulares",
    },
    {
      id: "2",
      nombre: "Smartphone",
      marca: "Apple",
      precio: "999.99",
      disponible: true,  // Cambiado a tipo booleano
      modelo: "iPhone 14",
      procesador: "A15 Bionic",
      almacenamiento: "128GB",
      ram: "6GB",
      color: "Midnight",
      peso: "172g",
      pantalla: "6.1\"",
      resolucion: "2532x1170",
      puertos: ["Lightning", "USB-C"],
      bateria: "20 horas",
      sistema_operativo: "iOS 16",
      categoria: "Celulares",
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto) {
    const product: Product = {
      id: createProductDto.id,
      nombre: createProductDto.nombre,
      marca: createProductDto.marca,
      precio: createProductDto.precio,
      disponible: createProductDto.disponible, // Asegúrate de que esto sea booleano
      modelo: createProductDto.modelo,
      procesador: createProductDto.procesador,
      almacenamiento: createProductDto.almacenamiento,
      ram: createProductDto.ram,  // Asegúrate de tener estos campos en tu DTO
      color: createProductDto.color,
      peso: createProductDto.peso,
      pantalla: createProductDto.pantalla,
      resolucion: createProductDto.resolucion,
      puertos: createProductDto.puertos,
      bateria: createProductDto.bateria,
      sistema_operativo: createProductDto.sistema_operativo,
      categoria: createProductDto.categoria,
    };

    this.products.push(product);
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    let productDB = this.findOne(id);

    if (updateProductDto.id && updateProductDto.id !== id) {
      throw new BadRequestException(`El id del producto no es válido`);
    }

    this.products = this.products.map(product => {
      if (product.id === id) {
        productDB = { ...productDB, ...updateProductDto, id };
        return productDB;
      }
      return product;
    });

    return productDB;
  }

  delete(id: string) {
    const product = this.findOne(id);
    this.products = this.products.filter(prod => prod.id !== id);
    console.log({ product });
  }
}
