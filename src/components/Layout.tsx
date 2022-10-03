import { Container } from '@mui/material';
import { HeaderAppBar } from './HeaderAppBar';

export function Layout({children}: any) {
  return (
    <>
      <HeaderAppBar />
      <Container>
        {children}
      </Container> 
      </>
  );
}
