import { useEffect, useReducer, useRef, useState } from "react";
import { Bar, Bottom, BottomContent, Container, Content, Logo, Menu } from "./style"
import { reducerPage } from "./reducer";
import { LogoIcon, MenuIcon, UserIcon } from "../Icons";
import { Outlet } from "react-router-dom";
import contextPage from "./context"

function BasePage() {
  const [title, dispatch] = useReducer(reducerPage, "title not set");
  const [showLogoText, setShowLogoText] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    checkSize();

    return () => {
      window.removeEventListener("resize", checkSize);
    }
  }, [])

  function checkSize() {
    if ((ref.current?.clientWidth ?? 0) > 247)
      setShowLogoText(true)
    else setShowLogoText(false)
  }

  return (
    <contextPage.Provider value={{ dispatch, title }}>
      <Container>
        <Bar>
          <Logo ref={ref}>
            <LogoIcon height="50" />
            {showLogoText ? <h2>Waśko ogrody</h2> : ""}
          </Logo>
          <div><h3>{title?.toUpperCase()}</h3></div>
          <Menu><MenuIcon height="50" /></Menu>
        </Bar>
        <Content><Outlet /></Content>
        <Bottom>
          <BottomContent>
            <LogoIcon height="30" />
            <span>Godziny</span>
          </BottomContent>
          <BottomContent>
            <UserIcon height="30" />
            <span>Profil</span>
          </BottomContent>
          <BottomContent>
            <LogoIcon height="30" />
            <span>Zakupy</span>
          </BottomContent>
        </Bottom>
      </Container>
    </contextPage.Provider>
  )
}

export default BasePage