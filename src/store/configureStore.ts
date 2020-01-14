import modules, { StoreState } from './modules';
import { createStore, Store } from 'redux';

const configureStore = (): Store<StoreState> => {
    const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(modules, enhancer);
    
    return store;
};

export default configureStore;