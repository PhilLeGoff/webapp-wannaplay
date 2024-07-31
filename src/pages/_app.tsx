import modalsReducer from '@/reducers/modals';
import userSignupReducer from '@/reducers/user_signup';
import '@/styles/globals.css';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from '../reducers/storage'; // Assuming this is set up correctly
import userReducer from '../reducers/user';

const userPersistConfig = {
  key: 'user',
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  modals: modalsReducer,
  user_signup: userSignupReducer,
});

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor for the store
const persistor = persistStore(store);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
