import React from "react"

import { 
    Formacao,
    FormacaoTitle,
    FormacaoBox,
    FormacaoMiniBox,
    FormacaoMiniTitle,
    FormacaoIcon,
    FormacaoText,
    FormacaoImage,
} from "../styles/formacao"

import { 
    codeIcon,
    formacaoImg
} from "../assets/index"

export default function formacaoC() {
    return(
        <Formacao>
            <FormacaoBox>
                <FormacaoTitle>
                    Formação
                </FormacaoTitle>
                <FormacaoMiniBox>
                    <FormacaoBox>
                        <FormacaoIcon src={codeIcon}/>
                    </FormacaoBox>
                    <FormacaoBox>
                        <FormacaoMiniTitle>
                            FRONT-END
                        </FormacaoMiniTitle>
                        <FormacaoText>
                            Quem trabalha com Front End é responsável por 
                            desenvolver por meio do código uma interface gráfica 
                            e, normalmente, com as tecnologias base 
                            da Web: HTML, CSS e JavaScript.
                        </FormacaoText>
                    </FormacaoBox>
                </FormacaoMiniBox>
                <FormacaoMiniBox>
                    <FormacaoBox>
                        <FormacaoIcon src={codeIcon}/>
                    </FormacaoBox>
                    <FormacaoBox>
                        <FormacaoMiniTitle>
                            BACK-END
                        </FormacaoMiniTitle>
                        <FormacaoText>
                            O Back-End trabalha em boa parte dos casos 
                            fazendo a ponte entre os dados que vem do navegador 
                            rumo ao banco de dados e vice-versa, sempre 
                            aplicando as devidas regras de negócio, validações 
                            e garantias num ambiente restrito ao usuário 
                            final (ou seja, onde ele não consegue acessar ou manipular algo).
                        </FormacaoText>
                    </FormacaoBox>
                </FormacaoMiniBox>
            </FormacaoBox>
            <FormacaoImage src={formacaoImg}/>
        </Formacao>
    )
}
