"use server";

import { uiLink } from '../../types/nav'
import { MovieButton } from './button-creator'
import { getAll } from './ApiStuff'
import { Document } from 'mongodb'

export async function MovieButtons() {
    var listOfMovieButtons: uiLink[] = []

    // new document

    const data = await getAll();
    if (data && data.data) {
        data.data.forEach((movie: Document) => {
            listOfMovieButtons.push(MovieButton(movie._id, movie.title, movie.year, movie.thumbnail));
        });
    }

    return (
        listOfMovieButtons.map((button) => button.link())
    )
}
