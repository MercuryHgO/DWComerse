import { createStore } from 'vuex'
import state from "@/store/state/state";
import getters from "@/store/getters/getters";
import mutations from "@/store/mutations/mutations";
import commonActions from "@/store/actions/actions";
import apiRequests from "@/store/actions/api-requests";
import modules from "@/store/modules/modules";

const actions = {...commonActions, ...apiRequests}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules
})
