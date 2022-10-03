import { useAuthState } from '../context';
import { Button } from '@mui/material';
import { Layout } from './Layout';

export const ErrorFallback = () => {
  const {errorMessage} = useAuthState();
    return (
        <Layout>
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">{errorMessage} Ooops, something went wrong :( </h2>
            <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
            Refresh
            </Button>
        </div>
      </Layout>
    );
  };