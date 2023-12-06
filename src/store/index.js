import {createStore} from "vuex";
import posts from './posts'

const store = createStore({
    modules: {
        posts: posts
    }
})

export default store
