import axios from "axios";

const baseUrl = 'http://localhost:8080';
// const baseUrl = 'http://localhost:5050';


const getSuggestions = async () => {
    try {
        const response = await axios.get(`${baseUrl}/suggestions`);
        return response.data;
    } catch (error) {
        console.error(`${error.status}: GET request for suggestions failed`);
    }
};

const postVote = async (vote) => {
    try {
        const response = await axios.post(`${baseUrl}/votes`, vote);
        return response.data;
    } catch (error) {
        console.error(`${error.status}: Post request for vote failed`);
    }
};

export { getSuggestions, postVote };