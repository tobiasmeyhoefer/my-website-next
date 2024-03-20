"use client"
import { useState } from "react"
import Navbar from "./NavBar"
import SideBar from "./SideBar"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const deactivate = () => {
    setIsOpen(false)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} deactivate={deactivate}/>
    </>
  )
}
