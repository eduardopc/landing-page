export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
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

export type TechsProps = {
  title: string
  techIcons: [
    {
      title: string
      icon: {
        url: string
      }
    }
  ]
}

export type ConceptsProps = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type ModulesProps = {
  title: string
  modules: [
    {
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type AgendaProps = {
  title: string
  description: string
}

export type PricingProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProps
  sectionTech: TechsProps
  sectionConcepts: ConceptsProps
  sectionModules: ModulesProps
  sectionAgenda: AgendaProps
  pricingBox: PricingProps
}
