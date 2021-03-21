import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { getImageReviewerDefault, getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Photo = {
  alternativeText: string
  url?: string
}

type Props = {
  id: number
  name: string
  image: Photo
  description: string
}

const ReviewCard: React.FC<Props> = ({ id, name, image, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <source
            srcSet={image ? `${getImageUrl(image.url)}?webp` : getImageReviewerDefault()}
            type="image/webp"
          />
          <source
            srcSet={image ? getImageUrl(image.url) : getImageReviewerDefault()}
            type="image/jpg"
          />
          <img
            src={image ? getImageUrl(image.url) : getImageReviewerDefault()}
            loading="lazy"
            alt={image ? image.alternativeText: 'usuario sem foto' }
          />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
