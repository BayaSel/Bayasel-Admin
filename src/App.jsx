import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Header from "./component/Header";
import SideNav from "./component/SideNav";
import Overview from "./pages/Overview";
import Product from './pages/Product';
import Order from './pages/Order';
import Customer from './pages/Customer';
import Analytics from './pages/Analytics';
import Promotions from './pages/Promotions';
import SubAdmin from './pages/SubAdmin';
import ContentManagement from './pages/ContentManagement';
import Settings from './pages/Settings'
import './transitions.css';
import Chat from './pages/Chat';


function App() {
  const location = useLocation();
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <Header />
      <div className="flex bg-[#F6F6F6]">
        {/* Sidebar */}
        <div
          className={`lg:block basis-full lg:basis-1/4 -mt-20 transition-all duration-300 ease-in-out ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          <SideNav onLinkClick={toggleSidebar} />
        </div>

        {/* Main Content with Transitions */}
        <div className={`lg:block basis-full lg:basis-3/4 px-4 py-4`}>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <div>
                <Routes location={location}>
                  <Route path="overview" element={<Overview />} />
                  <Route path="product" element={<Product />} />
                  <Route path="order" element={<Order />} />
                  <Route path="customer" element={<Customer />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="promotions" element={<Promotions />} />
                  <Route path="sub-admin" element={<SubAdmin />} />
                  <Route path="content-manage" element={<ContentManagement />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="chat" element={<Chat />} />
                  <Route index element={<Overview />} />
                </Routes>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
