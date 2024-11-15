import React from 'react';
import { Linkedin, Mail, MessageSquare } from 'lucide-react';
import { ProfileImage } from './ProfileImage';

export const Header = () => {
  return (
    <div className="text-center mb-12">
      <ProfileImage />
      <h1 className="text-4xl font-bold mb-2">Maurício Oliveira</h1>
      <p className="text-xl text-purple-300 mb-4">Consultor Tecnológico Digital</p>
      <div className="flex justify-center gap-4 mb-8">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
           className="p-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://wa.me/351936255330" target="_blank" rel="noopener noreferrer"
           className="p-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors">
          <MessageSquare size={24} />
        </a>
        <a href="mailto:mauricio_vaz97@hotmail.com"
           className="p-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};