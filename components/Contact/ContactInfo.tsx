import React, { ReactNode } from 'react';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  content: string;
  link?: string;
}

export default function ContactInfo({ icon, title, content, link }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        {link ? (
          <a href={link} className="text-blue-600 hover:text-blue-800 transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
}