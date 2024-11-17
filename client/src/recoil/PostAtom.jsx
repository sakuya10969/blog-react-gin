import { atom, selector } from 'recoil';
import { fetchPosts } from '../services/PostService';


export const postsPerPage = 10;


export const postsState = atom({
    key: 'postsState',
    default: [],
});


export const pagesState = atom({
    key: 'pagesState',
    default: 1
})


export const totalPostsState = atom({
    key: 'totalPostsState',
    default: 0
})


export const postsSelector = selector({
    key: 'postsSelector',
    get: async ({ get }) => {
        const page = get(pagesState);

        try {
            const { data, total } = await fetchPosts(page, postsPerPage);

            return { posts: data, totalPosts: total ? parseInt(total, 10) : 0 };
        } catch (error) {
            console.log(error.message);
            return { posts: [], totalPosts: 0 };
        }
    },
});
