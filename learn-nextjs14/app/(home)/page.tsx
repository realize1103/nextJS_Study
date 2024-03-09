export const metadata = {
  title: 'Home',
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}

export default async function HomePage() {
    const movies = await getMovies();
    console.log(movies);

    return <div>
        {JSON.stringify(movies)}
    </div>;
}

// root segment