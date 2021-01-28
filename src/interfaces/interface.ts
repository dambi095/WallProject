export interface ILoginResponse {
	token: string;
}

export interface IPaginationProps {
	itemsCount: number;
	pageSize: number;
}

export interface IType {
	body: string;
	id: number;
	title: string;
	userId: number;
}

export interface IUser {
	name: string;
	password: string;
}

export interface IPostListProps {
	list: Array<IType>;
}
