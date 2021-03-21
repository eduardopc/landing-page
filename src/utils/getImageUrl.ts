export const getImageUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`

export const getImageReviewerDefault = () =>
  `${process.env.NEXT_PUBLIC_IMAGE_HOST}/uploads/reviewer_17f000c1cd.jpeg`
