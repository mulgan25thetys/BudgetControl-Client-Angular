import { Devise } from './devise';
import { Files } from './files';
export class Operation {
    id
	amount? :any;
	object? :any;
	description? :any;
	category? :any;
	createdAt? :any;
	updatedAt? :any;
    DeviseId?: any;
    Devise?: Devise;
    Files?: Files[]
}