import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ totalPrice, benefits, button, numberInstallments, priceInstallment }: PricingProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>{totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button
      href={button.url}
      onClick={onClick}
      withPrice
    >
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R${numberInstallments * priceInstallment}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
