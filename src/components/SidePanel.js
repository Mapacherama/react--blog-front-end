import React, { useState, useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faFileInvoice, faUsersCog, faUsers } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faTachometerAlt, faFileInvoice, faUsersCog, faUsers);

function SidePanel() {
  const [visible, setVisible] = useState(false);

  const navigateTo = (path) => {
    window.location.href = path;
    setVisible(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setVisible(false);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

      return (
        <div className="flex">
          <Button
            icon="pi pi-bars"
            className="p-button-text"
            onClick={setVisible}
            style={{ display: '/login' !== window.location.pathname ? 'block' : 'none' }}
          />
          <Sidebar visible={visible} onHide={() => setVisible(false)} position="left">
            <div className="flex-sidebar pt-4">
              <button
                onClick={() => navigateTo('/')}
                className="p-link layout-topbar-button mt-2 side-panel-button"
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="bigger-size" />
                <span> Dashboard</span>
              </button>
    
              <button
                onClick={() => navigateTo('/customeroverview')}
                className="p-link mt-2 layout-topbar-button side-panel-button"
              >
                <FontAwesomeIcon icon="users" className="bigger-size" />
                <span className="ml-2">Customers</span>
              </button>
    
              <button
                onClick={() => navigateTo('/invoiceoverview')}
                className="p-link layout-topbar-button mt-2 side-panel-button"
              >
                <FontAwesomeIcon icon={faFileInvoice} className="bigger-size" />
                <span>Invoices</span>
              </button>
              <button
                onClick={() => navigateTo('/teamoverview')}
                className="p-link layout-topbar-button mt-2 mb-4 side-panel-button"
              >
                <FontAwesomeIcon icon={faUsersCog} className="bigger-size" />
                <span>Teams</span>
              </button>
              <div className="border-t-4 border-blue-900 mt-11">
                <button
                  onClick={() => navigateTo('/login')}
                  className="mt-4 w-64 h-20 text-lg bg-blue-900 bg-opacity-75 hover:bg-green-500 border border-blue-900 hover:text-white hover:border-green-500 font-semibold rounded-md text-green-500 !important"
                  type="submit"
                >
                  Log out
                </button>
              </div>
            </div>
          </Sidebar>
        </div>
      );
    }
    
    export { SidePanel }; 