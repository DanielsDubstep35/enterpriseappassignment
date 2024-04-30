import axios from "axios";
import { MongoClient, ServerApiVersion } from "mongodb";
import { WithId, Document } from "mongodb";
import clientPromise from "../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { AxiosResponse } from "axios";

// axios client
const api = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiIsConnected = async () => {
    try {
        const response = await api.get("/");
        return { isConnected: response.status === 200 };
    } catch (error) {
        console.error(error);
        return { isConnected: false };
    }
}

export async function getAll(): Promise<AxiosResponse> {
    // axios.get("http://localhost:3001/api").then((res) => {
    //     return res;
    // }).catch((err) => {
    //     return err;
    return api.get("/").then((res) => {
        return res;
    }).catch((err) => {
        return err;
    });
}

// single document json object
export async function getMovie(id: string): Promise<AxiosResponse> {
    return await api.get(`/${id}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    });
}

export async function updateMovie(id: string, data: Document) {
    return await api.put(`/${id}`, (req: NextApiRequest, res: NextApiResponse) => {
        res.send(data);
        return res;
    }).catch((err) => {
        return err;
    });
}

// delete object by id from favorites collection
export async function deleteFromFavorites(id: string) {
    return await api.delete(`/${id}`).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    });
}

export async function addToFavorites(data: Document) {
    return await api.post("/", data).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    });
}
