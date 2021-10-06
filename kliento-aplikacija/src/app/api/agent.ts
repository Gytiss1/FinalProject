import axios, { AxiosResponse } from 'axios';
import { Renginys } from '../layout/models/renginys';

const sleep = (delay: number) => {
    return new Promise((resolve) =>{
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (klaida) {
        console.log(klaida);
        return await Promise.reject(klaida);
    }
})

// type safety pridejimas
const atsakymoTurinys = <T> (atsakymas: AxiosResponse<T>) => atsakymas.data;

const uzklausos = {
    get: <T> (url: string) => axios.get<T>(url).then(atsakymoTurinys),
    post: <T> (url: string, turinys: {}) => axios.post<T>(url, turinys).then(atsakymoTurinys),
    put: <T> (url: string, turinys: {}) => axios.put<T>(url, turinys).then(atsakymoTurinys),
    del: <T> (url: string) => axios.delete<T>(url).then(atsakymoTurinys)
}

const Renginiai = {
    sarasas: () => uzklausos.get<Renginys[]>('/renginiai'),
    detales: (id:string) => uzklausos.get<Renginys>(`/renginiai/${id}`),
    sukurti: (renginys: Renginys) => axios.post<void>('/renginiai',renginys),
    atnaujinti: (renginys: Renginys) => axios.put<void>(`/renginiai/${renginys.id}`, renginys),
    istrinti: (id: string) => axios.delete<void>(`/renginiai/${id}`)
}

const agent = {
    Renginiai
}

export default agent;