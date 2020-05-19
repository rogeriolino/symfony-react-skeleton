import Axios, { AxiosInstance } from "axios";

type Method = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE';

export type HttpError = {
    statusCode: number
    message: string
    data: any
}

export type RequestOptions = {
    method: Method
    path: string
    data?: any
    params?: any
    headers?: any
}

export class Client {

    private http: AxiosInstance
    private headers: {}

    constructor(baseURL: string, headers={}) {
        this.http = Axios.create({
            baseURL,
        })
        this.headers = headers
    }

    public getHeaders() {
        return this.headers
    }

    public setHeader(name: string, value: string): Client {
        this.headers[name] = value
        return this
    }

    public async request({method, path, data, params, headers}: RequestOptions) {
        const response = await this.http.request({
            method,
            url: path,
            params,
            data,
            headers: { ...this.headers, ...headers },
        })
        return response.data
    }

    public async get(path: string, params={}, headers={}) {
        return await this.request({
            method: 'GET',
            path,
            params,
            headers,
        })
    }

    public async post(path: string, data: object, headers={}) {
        return await this.request({
            method: 'POST',
            path,
            data,
            headers,
        })
    }

    public async put(path: string, data: object, headers={}) {
        return await this.request({
            method: 'PUT',
            path,
            data,
            headers,
        })
    }

    public async delete(path: string, params={}, headers={}) {
        return await this.request({
            method: 'DELETE',
            path,
            params,
            headers,
        })
    }
}