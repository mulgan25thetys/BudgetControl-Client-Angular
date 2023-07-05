import { Devise } from './devise';
import { Files } from './files';
export class Operation {
    id
	dateOperation? :any;
	amount? :any;
	object? :any;
	slug? :any;
	description? :any;
	category? :any;
	createdAt? :any;
	updatedAt? :any;
    DeviseId?: any;
    Devise?: Devise;
	Files?: Files[];
	formAction?: any;
}