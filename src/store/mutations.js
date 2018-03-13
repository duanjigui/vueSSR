import Vue from 'vue'

export default {
    SET_SERVER_LIST:(state, { playload })=>{
        state.serverList=playload
    }
}