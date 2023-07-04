import { Capital } from './capital';
import { Economie } from './economie';
import { Operation } from './operation';
export class Devise {
    id? :any;
    currency? :any;
	region	? :any;
	iso2	? :any;
	default	? :any;
	createdAt? :any;
    updatedAt?: any;	
    Capitals?: Capital[]
    Economies?: Economie[]
    Operations?: Operation[]
}