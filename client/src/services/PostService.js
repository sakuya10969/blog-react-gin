import axios from 'axios';

const apiUrl = 'http://server:8080';

export const createPost = async (post) => {
        try {
            const response = await axios.post(`${apiUrl}/post/create`, post, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log(response.data.message);
        } catch (error) {
            console.log(error.message);
        }
};


export const fetchPost = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/post/${id}`);
        return { post: response.data };
    } catch (error) {
        console.log(error.message);
        return { post: null };
    }
};


export const updatePost = async (id, updatedPost) => {
    try {
        const response = await axios.patch(`${apiUrl}/post/update/${id}`, updatedPost);
        console.log(response.data.message);
    } catch (error) {
        console.log(error.message);
    }
};


export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/post/delete/${id}`);
        console.log(response.data.message);
    } catch (error) {
        console.log(error.message)
    }
}