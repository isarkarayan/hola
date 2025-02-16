import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-white shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <a href="https://github.com/ayansarkar" 
               className="text-gray-400 hover:text-gray-600 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/ayansarkar" 
               className="text-gray-400 hover:text-gray-600 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/ayansarkar" 
               className="text-gray-400 hover:text-gray-600 transition-colors"
               target="_blank"
               rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Ayan Sarkar
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <p className="text-center text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Todo App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}