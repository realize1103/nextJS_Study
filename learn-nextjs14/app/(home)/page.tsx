"use client"
import { useEffect, useState } from "react";

// export const metadata = {
//   title: 'Home',
// };

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState();
    const getMovies = async () => {
        const res = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const movies = await res.json();
        setMovies(movies);
        setIsLoading(false);
    };
    useEffect(() => { getMovies(); }, []);

    return <div>
        {isLoading ? "Loading...": JSON.stringify(movies)}
    </div>;
}

// root segment