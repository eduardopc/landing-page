const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        alternativeText
        url
      }
      button {
        label
        url
      }
    }
  }

  fragment about on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment techs on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment concepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment modules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricing on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment aboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        photo {
          alternativeText
          url
        }
        name
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  fragment reviews on LandingPage {
    sectionReviews{
      title
      reviews {
        name
        text
        photo {
          alternativeText
          url
        }
      }
    }
  }

  fragment faq on LandingPage {
    sectionFaq{
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...about
      ...techs
      ...concepts
      ...modules
      ...agenda
      ...pricing
      ...aboutUs
      ...reviews
      ...faq
    }
  }
`

export default GET_LANDING_PAGE
