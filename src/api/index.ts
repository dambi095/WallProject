import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {ILoginResponse, IKakaoAuth} from '../interfaces/interface';

class API {
	readonly http: AxiosInstance;

	constructor() {
		const http = axios.create({
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
				'Content-type': 'application/json; charset=UTF-8',
        		'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, OPTIONS, DELETE'
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

	loginApi = (payload: IKakaoAuth) => {
		return this.http.post<ILoginResponse>('user/oauth', payload);
	};

	loadPostApi = (term: number) => {
		return axios.get('https://jsonplaceholder.typicode.com/posts');
	};
}

export default new API();
