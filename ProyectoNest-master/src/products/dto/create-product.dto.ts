import { IsString, IsArray, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly id: string;

  @IsString()
  readonly marca: string;

  @IsString()
  readonly precio: string;

  @IsBoolean()
  readonly disponible: boolean;  // Cambiado a booleano

  @IsString()
  readonly modelo: string;

  @IsString()
  readonly procesador: string;

  @IsString()
  readonly almacenamiento: string;

  @IsString()
  readonly ram: string;  // Propiedad añadida

  @IsString()
  readonly color: string;  // Propiedad añadida

  @IsString()
  readonly peso: string;  // Propiedad añadida

  @IsString()
  readonly pantalla: string;  // Propiedad añadida

  @IsString()
  readonly resolucion: string;  // Propiedad añadida

  @IsArray()
  readonly puertos: string[];  // Propiedad añadida

  @IsString()
  readonly bateria: string;  // Propiedad añadida

  @IsString()
  readonly sistema_operativo: string;  // Propiedad añadida

  @IsString()
  readonly categoria: string;  // Propiedad añadida
}
