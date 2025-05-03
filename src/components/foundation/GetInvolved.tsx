
import React from 'react';

const GetInvolved: React.FC = () => {
  return (
    <div className="bg-lightgray p-8 rounded-lg text-center">
      <h3 className="text-2xl font-bold text-navyblue mb-4">Get Involved</h3>
      <p className="mb-6">
        There are many ways to support the work of the Luthando Maduna Foundation, from financial 
        contributions to volunteering your time and expertise.
      </p>
      <a
        href="/contact"
        className="inline-block px-6 py-3 bg-gold text-white rounded font-medium hover:bg-lightgold transition-colors"
      >
        Support Our Work
      </a>
    </div>
  );
};

export default GetInvolved;
