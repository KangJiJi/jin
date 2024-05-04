'use client';

import Button from '@mui/material/Button';

export default function Home() {
  const routeToMainPage = () => {
    console.log('Hello world');
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div>
        <div>logo</div>
        <Button variant="contained" onClick={routeToMainPage}>
          Start one choice
        </Button>
      </div>
    </main>
  );
}
