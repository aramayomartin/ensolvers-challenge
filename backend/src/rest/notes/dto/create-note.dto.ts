import { IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  categoriesIds?: number[];
  userId: number;
}
