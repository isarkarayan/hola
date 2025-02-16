import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We only store your todos locally in your browser's storage. We do not collect or store any personal information on our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                Your todo items are stored locally and are only accessible from your browser. This data persists until you clear your browser data or local storage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                Since all data is stored locally on your device, you have complete control over your information. We recommend regularly backing up important todos and clearing your browser data if using a shared device.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}