export default {
    namespaced: true,
    state: {
        posts: [],
    },
    getters: {
        getPosts: state => state.posts,
        getPostById: state => id => state.posts.find(post => post.id === id),
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload
        },
        addPost(state, payload) {
            state.posts.push(payload)
        }
    },
    actions: {
        fetchPosts({ commit }) {
            const posts = [
                { id: 1, title: 'Título do post 1', content: 'Conteúdo bacana do post 1!' },
                { id: 2, title: 'Título do post 2', content: 'Conteúdo bacana do post 2!' },
                { id: 3, title: 'Título do post 3', content: 'Conteúdo bacana do post 3!' },
            ]

            commit('setPosts', posts)
        },
        addPost({ commit }, post) {
            commit('addPost', post)
        }
    },
}


