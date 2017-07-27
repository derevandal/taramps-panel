// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

/* eslint-disable no-shadow */

export const state = {
  menuActived: false || window.localStorage.getItem('menuActived')
  , authenticated: false || window.localStorage.getItem('authenticated')
}

export const mutations = {
  TOGGLEMENU() {
    state.menuActived = !state.menuActived
  }
  , SHOWMENU(){
    state.authenticated = !state.authenticated
  }
}

export const actions = {
  toggleMenu({ commit }) {
    commit('TOGGLEMENU')
  }
  , showMenu({ commit }) {
    commit('SHOWMENU')
  }
}
