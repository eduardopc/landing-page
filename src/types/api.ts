export type LogoProps = {
  alternativeText: string,
  url: string
}

export type HeaderProps = {
  title: string,
  description: string
  image: {
    alternativeText: string
    url: string
  }
  button: {
    label: string
    url: string
  }
}

export type AboutProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProps
}
