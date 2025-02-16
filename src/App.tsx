import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === '/privacy' && <Privacy />}
      {path === '/terms' && <Terms />}
      {path === '/' && (
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <main className="flex-1 py-6">
            <TodoList />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;