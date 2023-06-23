'use client'

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect, useRef } from 'react';



export default function Home() {
  const [showDiv, setShowDiv] = useState(false);
  const divRef = useRef<HTMLDivElement>(null); // Adjust the type of divRef

  const handleButtonClick = () => {
    setShowDiv(prevState => !prevState); // Toggle the showDiv state
  };

  const handleClickOutside = (event: MouseEvent) => { // Adjust the type of event
    if (divRef.current && !divRef.current.contains(event.target as Node)) { // Type assertion for event.target
      setShowDiv(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showDiv) {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setShowDiv(false);
        }
      };
      document.addEventListener("keydown", handleEscapeKey);
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [showDiv]);
  return (
    <main className="main-inbx">
      <Navbar />
      <div className="inbox__container">
        <div className="header__content_">
          <div>
            <h1 className="inbox_text">Inbox</h1>
            <div className="border_inbox-text"/>
              <div ref={divRef} className="menu_popup" style={{ display: showDiv ? 'block' : 'none' }}>
              </div>
            <div className="inbox_filters"  onClick={handleButtonClick}>
              <MoreHorizIcon></MoreHorizIcon>
            </div>
          </div>
        <div className="addtask-inbx">
          <h1 className="inb-add-text">Add task</h1>
        </div>
        </div>
      </div>
    </main>
  );
}
