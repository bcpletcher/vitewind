import { createStore } from 'vuex'
import SampleModule from './modules/sample';

export default createStore({
  modules: {
    SampleModule
  }
})
