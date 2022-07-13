import React from "react"

import { 
    EquipeTitle,
    Equipe,
    BarSearch,
    Search,
    SearchIcon,
    ContentEquipe,
    BoxEquipe,
    ImgPessoa
} from "../styles/equipe"

import { 
    searchIcon 
} from "../assets"

export default function equipeC() {
    return(
        <Equipe>
            <EquipeTitle>Equipe</EquipeTitle>
            <BarSearch>
                <Search
                placeholder="Pesquisar..."
                >
                </Search>
                <SearchIcon src={searchIcon}/>
            </BarSearch>
            <ContentEquipe>
                <BoxEquipe>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                </BoxEquipe>
                <BoxEquipe>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                </BoxEquipe>
                <BoxEquipe>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                </BoxEquipe>
                <BoxEquipe>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                    <ImgPessoa src="{}"/>
                </BoxEquipe>
            </ContentEquipe>
        </Equipe>
    )
}
