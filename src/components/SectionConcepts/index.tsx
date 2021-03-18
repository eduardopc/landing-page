import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { ConceptsProps } from 'types/api'

const SectionConcepts = ({ concepts, title }: ConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map(({ title }, index) => (
          <S.Item key={index}>{title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
