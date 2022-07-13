import React from "react"

import { 
  Header, 
  VnwNav, 
  Nav, 
  Ul, 
  Li 
} from "./styles/header"

import { 
  Footer, 
  FooterTitle, 
  LinksFooter,
  FooterText, 
  MediaSocial
} from "./styles/footer"

import {
  BoxStart,
  StartTitleBox,
  StartTitle,
  TitleColor,
  WindowVnw,
  Win,
  Circle,
  HrWin,
  TitleWin,
  TextWin,
  TextStart
} from "./styles/boxStart"

import {
  vnwIcon,
  facebook, 
  instagram,
  linkedin,
  medium,
  youtube
} from "./assets/index"

import sobreC from "./components/sobre"
import formacaoC from "./components/formacao"
import equipeC from "./components/equipe"

export default function VnwApp() {

  const vnwHeader = () => {
    return(
      <Header>
        <VnwNav
        src={vnwIcon}
        alt="Logo do VaiNaWeb"
        >
        </VnwNav>
        <Nav>
          <Ul>
            <Li>Sobre</Li>
            <Li>Formação</Li>
            <Li>Equipe</Li>
            <Li>Eventos</Li>
            <Li>Contatos</Li>
          </Ul>
        </Nav>
      </Header>
    )
  }
  
  const vnwFooter = () => {
    return(
      <Footer>
        <FooterTitle>
          Contato
        </FooterTitle>
        <LinksFooter>
        <FooterText>
          Siga nossas redes sociais e fique conectado com todas 
          as novidades.
        </FooterText>
          <MediaSocial
          src={facebook}
          alt="Icone do Facebook com linkado a conta do VNW"
          >
          </MediaSocial>
          <MediaSocial
          src={instagram}
          alt="Icone do Instagram com linkado a conta do VNW"
          >
          </MediaSocial>
          <MediaSocial
          src={linkedin}
          alt="Icone do Linkedin com linkado a conta do VNW"
          >
          </MediaSocial>
          <MediaSocial
          src={medium}
          alt="Icone do Medium com linkado a conta do VNW"
          >
          </MediaSocial>
          <MediaSocial
          src={youtube}
          alt="Icone do Youtube com linkado a conta do VNW"
          >
          </MediaSocial>
        </LinksFooter>
      </Footer>
    )
  }
  
  const boxStart = () => {
    return(
      <BoxStart>
        <StartTitleBox>
          <TitleColor>//</TitleColor>
          <StartTitle>
            Quer construi uma carreira de sucesso como 
            Desenvolvedor(a) Front-end?
          </StartTitle>
        </StartTitleBox>
        <WindowVnw>
          <Win>
            <Circle/>
            <Circle/>
            <Circle/>
          </Win>
          <HrWin/>
          <TitleWin>
            Inscreva-se no Vai na Web!
          </TitleWin>
          <TextWin>
            Inscrições 02 a 21 de Agosto
          </TextWin>
        </WindowVnw>
        <TextStart>
          Link para o formulário: bit.ly/CarreiraVaiNaWeb
        </TextStart>
      </BoxStart>
    )
  }
  

  return(
    <div className="divGlobal">
      {vnwHeader()}
      {boxStart()}
      {sobreC()}
      {formacaoC()}
      {equipeC()}
      {vnwFooter()}
    </div>
  )
}
