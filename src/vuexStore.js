import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state:{
        kategoriler:[]
    },
    mutations:{
        addCategory(state,kategoriler){
            state.kategoriler = kategoriler
        }
    },
    actions:{
        categoryAdd(context){
            axios.get('http://localhost:3000/categories').then(categories => {
                context.commit('addCategory', categories?.data)
            })
        }
    },
    getters:{
        _saltKategori : state => state.kategoriler
    }
})

export default store