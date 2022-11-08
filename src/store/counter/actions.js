import getRandomInt from '@/helpers/getRandomInt';

export const incrementRandomInt = async( { commit } ) => {
    commit('setLoading', true)
    const randomInt = await getRandomInt();
    if(randomInt){
        commit('incrementBy', randomInt);
        commit('setLoading', false)
    }
}