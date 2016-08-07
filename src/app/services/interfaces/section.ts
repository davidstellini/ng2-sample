import { Content } from './content';

export interface Section {
    order: number;
    name: string;
    icon: string;
    content: Array<Content>;
}
