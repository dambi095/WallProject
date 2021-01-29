import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {IUser, ILoginResponse} from '../interfaces/interface';

class API {
	readonly http: AxiosInstance;

	constructor() {
		const http = axios.create({
			baseURL: `/v1/api`,
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			responseType: 'json',
			timeout: 30000,
		});

		http.interceptors.response.use(
			(response: AxiosResponse) => {
				if (response.data.statusCode === 200) {
					return response;
				}

				throw new Error(
					`Internal Server Error (code: ${response.data.statusCode})`,
				);
			},
			(error: AxiosError) => {
				if (error.response) {
					return error.response;
				}

				return Promise.reject(error);
			},
		);

		this.http = http;
	}

	loginApi = (payload: IUser) => {
		return axios.post<ILoginResponse>('');
	};

	loadPostApi = (term: number) => {
		return axios.get('https://jsonplaceholder.typicode.com/posts');
	};
}

export default new API();
