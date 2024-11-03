import axios from 'axios';

const API_URL = 'http://api:8080';

// 全ての投稿を取得
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

// 新しい投稿を作成
export const createPost = async (post) => {
    try {
        const response = await axios.post(`${API_URL}/posts`, post);
        return response;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};