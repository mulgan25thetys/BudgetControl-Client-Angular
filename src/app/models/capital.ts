import { Devise } from "./devise";
import { Operation } from './operation';
import { Economie } from './economie';

export class Capital {
    id ? :any;
    amount	? :any;
    createdAt? :any;	
    updatedAt? :any;
    DeviseId?: any;
    Devise?: Devise
    Operations?: Operation[]
    Economies?: Economie[]
}