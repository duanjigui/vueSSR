export default {
   FEATCH_SERVER_LIST:({ commit, dispatch, state })=>{
    let list=[1,2,3,4,5,6,7,8,9]
    commit('SET_SERVER_LIST',{playload:list})
   }
}