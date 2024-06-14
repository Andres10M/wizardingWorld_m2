import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDto {
    @ApiProperty()
    productName: string;

    @ApiProperty()
    price: number;

    @ApiProperty({required: false})
    tamaño?: string;

    @ApiProperty()
    cantidad: string;

    @ApiProperty()
    descuento: string;
}
