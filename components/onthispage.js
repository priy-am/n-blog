"use client"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings safely when the component mounts
    const extractHeadings = (html) => {
      if (typeof window === 'undefined' || !html) return []; // Handle SSR and empty content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      return Array.from(doc.querySelectorAll('h2')).map((heading) => ({
        text: heading.textContent.trim(),
        id: heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, '-')
      }));
    };

    setHeadings(extractHeadings(htmlContent));
  }, [htmlContent]);

  return (
    <div className="on-this-page fixed top-24 right-72">
      <h3 className="text-xl font-bold mb-2 ">On This Page</h3>
      <ul className="text-sm space-y-1 text-gray-500">
        {headings.map((heading, index) => (
          <li key={index} className="on-this-page__item cursor-pointer">
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

OnThisPage.propTypes = {
  htmlContent: PropTypes.string.isRequired, // Ensure htmlContent is a string and required
};

export default OnThisPage;