import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export const createPost = async (post) => {
    try {
        const response = await axios.post(`${apiUrl}/post/create`, post, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export const fetchPost = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/post/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export const updatePost = async (id, updatedPost) => {
    try {
        const response = await axios.patch(`${apiUrl}/post/update/${id}`, updatedPost, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response.data);
        console.log(response.data.message);
    } catch (error) {
        console.error(error.message);
    }
};

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/post/delete/${id}`);
        console.log(response.data);
        console.log(response.data.message);
    } catch (error) {
        console.error(error.message);
    }
};

export const fetchPosts = async (page, postsPerPage) => {
    try {
        const response = await axios.get(`${apiUrl}`, {
            params: {
                _page: page,
                _limit: postsPerPage,
            },
        });
        
        console.log(response.data);

        const total = response.headers['x-total-count'];
        return {
            data: response.data,
            total,
        };
    } catch (error) {
        console.error(error.message);
        return {
            data: [],
            total: 0,
        };
    }
};