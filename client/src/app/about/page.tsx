import React from 'react';

export default function AboutPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold justify-center">About Page</h1>
            <div className="flex flex-col justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md text-black align-center">
                    <h2 className='text-xl'>About</h2>
                    <p>This is the about page</p>
                    <h2 className='text-xl'>Next.js</h2>
                    <p>Next.js is a React framework that allows you to build server-side rendered applications.</p>
                    <p>This allows you to choose between server-side rendering, static site generation, and client-side rendering.</p>
                    <p>Since next.js handles server and frontend, I struggled to use express and mongodb with next.js.</p>
                    <p>As a result, all the functionality except for update works</p>
                    <h2 className='text-xl'>Weaknesses</h2>
                    <p>My project was very ambitious, but the technologies conflicted with the required technologies</p>
                    <h2 className='text-xl'>Alternatives</h2>
                    <p>Next time I get a project that limits the technologies you can use, I would just use as little extra technologies as possible to avoid conflicts</p>
                </div>
            </div>
        </div>
    )
}
