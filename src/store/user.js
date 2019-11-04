import * as fb from 'firebase';

class User {
    constructor(id) {
        this.id = id;
    }
}

const doRequestMethod = async (method, commit, email, password) => {
    commit('clearError');
    commit('setLoading', true);

    try {
        const user = await fb.auth()[method](email, password);
        commit('setUser', new User(user.uid));
    } catch (error) {
        commit('setError', error.message);
        throw error;
    } finally {
        commit('setLoading', false);
    }
};

export default {
    state: {
        user: null
    },
    mutation: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async registerUser({ commit }, { email, password }) {
            await doRequestMethod('createUserWithEmailAndPassword', commit, email, password);
        },
        async loginUser({ commit }, { email, password }) {
            await doRequestMethod('signInWithEmailAndPassword', commit, email, password);
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
};