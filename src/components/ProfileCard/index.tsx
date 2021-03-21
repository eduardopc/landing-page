import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

type SocialLink = [{
  title: string
  url: string
}]

type Photo = {
  alternativeText: string
  url: string
}

type Props = {
  name: string
  role: string
  image: Photo
  socialLinks: SocialLink
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <source
        srcSet={`${getImageUrl(image.url)}?webp`}
        type="image/webp"
      />
      <source srcSet={getImageUrl(image.url)} type="image/png" />
      <img
        src={getImageUrl(image.url)}
        loading="lazy"
        alt={image.alternativeText}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
