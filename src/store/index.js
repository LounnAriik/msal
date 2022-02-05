import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: 'f034fede-6795-41e5-ada3-8bb043375d39',
          authority:
            'https://login.microsoftonline.com/29ecf84e-930b-4bba-b1ea-0b2715ca3852',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken: ''
    };
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;