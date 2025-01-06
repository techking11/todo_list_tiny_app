import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import store from './redux/store';
import TodoApp from './components/TodoApp';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
