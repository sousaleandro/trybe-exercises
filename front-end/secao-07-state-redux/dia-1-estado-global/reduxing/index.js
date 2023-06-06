import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// 1. CRIAR O REDUCER
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT': 
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// 2. CRIAR O ESTADO GLOBAL
const store = createStore(reducer, composeWithDevTools());

// 3. CRIAR UMA AÇÃO
const action = { type: 'INCREMENT_COUNT' }

// 4. DISPARAR A AÇÃO
const incrementBtn = document.querySelector('button');
incrementBtn.addEventListener('click', () => {
  console.log('click');
  store.dispatch(action)
})

// 5. LEITURA DAS ALTERAÇÕES
store.subscribe(() => {
  const { count } = store.getState();
  const counter = document.querySelector('h2');
  counter.innerHTML = count;
  console.log('Alteração de estado');
})