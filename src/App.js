import { Sidebar } from "./components/sidebar/Sidebar";
import Messages from "./components/Messages/Messages";
import "./App.css";
import Drawer from 'react-modern-drawer'
import ChatImage from "./images/chat.svg"
import 'react-modern-drawer/dist/index.css'
import React from "react";
import SidebarContent from "./components/sidebar/SidebarContent";
import { Menu } from "semantic-ui-react";


function App() {
  // const [opened, { open, close }] = useDisclosure(false);
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='mobileDrawer'
      >
        <Menu vertical fixed="left" borderless size="large" className="side_bar">
          <SidebarContent />
        </Menu>
      </Drawer>
      <Sidebar />
      <Messages />
      <button onClick={toggleDrawer} className="toggleButton"><img src={ChatImage} alt="chatIcon" /></button>

    </>

  );
}

export default App;
