import axios from 'axios'



export const fetchTrending = async () => {
    try {
        const {data:{data}} = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=4A40i9pS4hOK6N3f77WYflnhZe93UIB4&limit=14&rating=g')
        return data;

    } catch (err) {
        console.log(err);
    }
}

export const fetchSports = async () => {
    try {
        const {data:{data}} = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=4A40i9pS4hOK6N3f77WYflnhZe93UIB4&q=sports&limit=14&offset=0&rating=g&lang=en');
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchEntertaintment = async () => {
    try {
        const { data:{data} } = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=4A40i9pS4hOK6N3f77WYflnhZe93UIB4&q=entertaintment&limit=14&offset=0&rating=g&lang=en')
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchMovies = async () =>{
    try {
        const { data:{data} } = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=4A40i9pS4hOK6N3f77WYflnhZe93UIB4&q=movies&limit=14&offset=0&rating=g&lang=en')
        return data;
    } catch (err) {
        console.log(err);
    }
}