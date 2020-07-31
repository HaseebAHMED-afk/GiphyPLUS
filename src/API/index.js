import axios from 'axios'



export const fetchTrending = async () => {
    try {
        const {data:{data:data}} = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=4A40i9pS4hOK6N3f77WYflnhZe93UIB4&limit=25&rating=g')
        return {data};

    } catch (err) {
        console.log(err);
    }
}