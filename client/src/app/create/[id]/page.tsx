"use client"

import React, { useEffect, useState } from "react";
import { WithId, Document } from "mongodb";
import axios from "axios";

// "http://localhost:3001/api/662fb01f968e0932ed390be1"

export default function index() {

    useEffect(() => {
        axios.get("http://localhost:3001/api").then((res) => {
            res.data.map((data: any) => {
                return (
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-bold justify-center">API Data</h1>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                {
                                    data?.map((data: Document) => {
                                        return (
                                            <div key={data._id}>
                                                <h2>{data.title}</h2>
                                                <p>{data.year}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }).catch((err) => {
            return (
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold justify-center">API Data</h1>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h2>Error</h2>
                            <p>{err}</p>
                        </div>
                    </div>
                </div>
            )
        });
    })

}
