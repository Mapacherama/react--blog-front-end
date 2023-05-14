import React, { useState } from 'react';
import { SidePanel } from './SidePanel';

function Header() {

    const [showSidePanel, setShowSidePanel] = useState(false);
    const toggleSidePanel = () => {
        setShowSidePanel(!showSidePanel);
      };

  return (
    <header
    className='bg-blue-700 shadow-lg text-white shadow-gray-900 flex justify-between py-4'
    >
        <div className="flex-shrink-0 px-4 flex items-center">
            <SidePanel visible={showSidePanel} />
        </div>
    </header>
  );
}

export { Header };
