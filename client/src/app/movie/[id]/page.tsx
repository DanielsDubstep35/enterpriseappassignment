"use client";

/*
This file contains a page that gets the id in the current url or file, and displays the information about the movie.
The Image takes up the left of the screen, and editable fields such as the title, year and extract are seen on the right of the screen.
There is a save, update and delete button at the bottom of the screen.
*/
import { getMovie, updateMovie, deleteFromFavorites, addToFavorites } from "../../../../@/components/ApiStuff";
import { useSearchParams } from 'next/navigation'
import { Document } from "mongodb";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'; // Added useEffect and useState import
import { FormInput } from "lucide-react";

export default function MoviePage() {
    const [movieData, setMovieData] = useState<Document | null>(null); // State to hold movie data

    var serverState: string = ""; // Added serverState variable

    var movieDataHolder: Document = {
        title: "",
        year: "",
        thumbnail: "",
        extract: "",
        _id: ""
    }

    // get url
    const url = usePathname()?.split('/').pop() || ''
    const ide = url

    useEffect(() => {
        getMovie(ide).then((res) => {
            setMovieData(res.data); // Update movieData state with retrieved data
        });
        // Refresh when ide or serverState changes
    }, [ide, movieDataHolder, serverState]);

    var thumbnail: string = movieData?.thumbnail || ""; // Added null check
    var title: string = movieData?.title || ""; // Added null check
    var year: string = movieData?.year || ""; // Added null check
    var extract: string = movieData?.extract || ""; // Added null check

    return (
        <div className="w-full p-4">
            <h1>Movie Page</h1>
            <div className="w-full p-4 grid grid-cols-2">
                <div>
                    {movieData && (
                        console.log(thumbnail),
                        console.log(title),
                        <img src={thumbnail} alt={title} />
                    )}
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <h2>Title</h2>
                        <form>
                            <input type="text" className="rounded-lg border-2 border-white outline-none p-2 animate-pulse" onChange={(e) => movieDataHolder.title = e.target.value} />
                        </form>
                    </div>
                    <div className="flex">
                        <h2>Year</h2>
                        <input type="text" inputMode="numeric" className="rounded-lg border-2 border-white outline-none p-2 animate-pulse" onChange={(e) => movieDataHolder.year = e.target.value} />
                    </div>
                    <div className="flex">
                        <button
                            onClick={() => {
                                addToFavorites(movieDataHolder).then((res) => {
                                    // if response is successful, display success message
                                    if (res.status === 200) {
                                        console.log("Saved!")
                                        serverState = "Saved to favorites!";
                                    } else {
                                        // else display error message
                                        console.log("Error saving!")
                                        serverState = "Error saving to favorites!";
                                    }
                                });
                            }}
                            className="rounded-lg border-2 border-white outline-none p-2 animate-pulse">Save</button>
                        <button
                            onClick={() => {
                                updateMovie(ide, movieDataHolder).then((res) => {
                                    if (res.status === 200) {
                                        console.log("Updated!")
                                        serverState = "Updated!";
                                    } else {
                                        console.log("Error updating!")
                                        serverState = "Error updating!";
                                    }
                                });
                            }}
                            className="rounded-lg border-2 border-white outline-none p-2 animate-pulse">Update</button>
                        <button
                            onClick={() => {
                                deleteFromFavorites(ide).then((res) => {
                                    if (res.status === 200) {
                                        console.log("Deleted!")
                                        serverState = "Deleted!";
                                    } else {
                                        console.log("Error deleting!")
                                        serverState = "Error deleting!";
                                    }
                                });
                            }}
                            className="rounded-lg border-2 border-white outline-none p-2 animate-pulse">Delete</button>
                        <h2>Server State</h2>
                        <p>{serverState}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
