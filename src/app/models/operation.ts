import { Capital } from './capital';
import { Files } from './files';
export class Operation {
    id
	amount? :any;
	object? :any;
	description? :any;
	category? :any;
	createdAt? :any;
	updatedAt? :any;
    CapitalId?: any;
    Capital?: Capital
    Files?: Files[]
}