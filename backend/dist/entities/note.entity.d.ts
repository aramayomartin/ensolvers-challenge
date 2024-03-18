import { Category } from './category.entity';
export declare class Note {
    id: number;
    title: string;
    content: string;
    archived: boolean;
    completed: boolean;
    category: Category;
}
