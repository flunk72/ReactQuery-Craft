import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...(process.env?.NODE_ENV === 'development' ? { retry: 0, refetchOnWindowFocus: false } : {}),
      staleTime: Infinity,
      queryFn: () => {},
    },
  },
});

export default queryClient;