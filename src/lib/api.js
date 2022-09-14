const POST_GRAPHQL_FIELDS = `
    carouselBannerHomeCollection {
        items {
            title
            subtitle
            description
            imgDesktop {
                url
            }
            imgMobile {
                url
            }
            labelBtn
            linkBtn
        }
    }
    bubbleLinksCategoriesTitleCollection{
      items{
        title
      }
    }
    bubbleLinksCategoriesImgCollection{
      items{
        name
        link
        image{
          url
        }
      }
    }
    blockOurColectionsCollection(where: { name: "Home"}){
      items {
        title
        description
        seeAllText
        seeAllLink
      }
    }
    infoCardOurColectionsCollection(where: { name: "Home"}){
      items {
      title
      description
      image {
       url
       title
       width
       height
       description
     }
      labelBtn
      linkBtn
      order
     }
    }
    productShelfCollection(
      where: { name: "Home" }
    ) {
      items {
        title
        itemsQuantifyOnMobile
        itemsQuantifyOnDesktop
        first
        categoryCode
      }
    }
    categoryTilesHomeCollection {
      items {
        image {
          url
          title
          width
          height
          description
        }
        description
        title
        linkBtn
        labelBtn
      }
    }
    blockCollectionVerticalHomeCollection {
      items {
        title
        description
        seeAllText
        seeAllLink
      }
    }
    infoCardCollectionVerticalHomeCollection {
      items {
        title
        description
        image {
          url
          title
          width
          height
          description
        }
        labelBtn
        linkBtn
      }
    }
    blocoMarcasCollection {
      items {
        title
        seeAllLink
        linkText
      }
    }
    dadosDasMarcasCollection {
      items {
        name
        link
        img {
          url
          title
          width
          height
          description
        }
      }
    }
  `

const POST_GRAPHQL_FIELDS_INSTITUTIONAL_PAGE = `
  bannerCollection(where: { name: "Institutional banner" }) {
    items {
      title
      subtitle
      description
      imgDesktop {
        url
        title
        width
        height
        description
      }
      imgMobile {
        url
        title
        width
        height
        description
      }
      labelBtn
      linkBtn
    }
  }
  siteSeoCollection(where: { page: "Institutional" }) {
    items {
      title
      description
      canonicalLink
      keyWords
      ogType
      ogTitle
      ogUrl
      ogDescription
      ogImage
      jsonLd
    }
  }
  staticPagesContentCollection(where: { name: "Institutional" }) {
      items {
      content {
        json
      }
    }
  }
`

const POST_GRAPHQL_FIELDS_CATEGORY_MEN = `
dadosDasMarcasCollection {
  items {
    name
    link
    img {
      url
      title
      width
      height
      description
    }
  }
}
blocoMarcasCollection {
  items {
    title
    seeAllLink
    linkText
  }
}
blockOurColectionsCollection(where: { name: "Men Departament Our Collection" }) {
  items {
    title
    description
    seeAllText
    seeAllLink
  }
}
infoCardOurColectionsCollection(where: { name: "Men Departament Our Collection Cards" }
) {
  items {
    title
    description
    image {
      url
      title
      width
      height
      description
    }
    labelBtn
    linkBtn
    order
  }
}
blockCardCollectionVerticalCollection(
  where: { name: "Men Departament Vertical Our Collection"  }
) {
  items {
    title
    description
    seeAllText
    seeAllLink
  }
}
infoCardCollectionVerticalCollection(where: { name: "Men Departament Vertical Our Collection Cards" }
) {
  items {
    title
    description
    image {
      url
      title
      width
      height
      description
    }
    labelBtn
    linkBtn
    order
  }
}
bubbleLinksCategoriesTitleCollection {
  items {
    title
  }
}
bubbleLinksCategoriesImgCollection {
  items {
    link
    name
    image {
      url
      title
      width
      height
      description
    }
  }
}
mosaicoCollection(where: { name:  "Men Departament Mosaic" }) {
  items {
    image {
      url
      title
      width
      height
      description
    }
    description
    title
    linkBtn
    labelBtn
    order
  }
}
productShelfCollection(where: { name: "Men Departament Shelf" }
) {
  items {
    title
    itemsQuantifyOnMobile
    itemsQuantifyOnDesktop
    first
    categoryCode
    order
  }
}
bannerCollection(where: { name: "Men Departament Banner" }) {
  items {
    title
    subtitle
    description
    imgDesktop {
      url
      title
      width
      height
      description
    }
    imgMobile {
      url
      title
      width
      height
      description
    }
    labelBtn
    linkBtn
  }
}
siteSeoCollection(where: { page: "Men" }) {
  items {
    title
    description
    canonicalLink
    keyWords
    ogType
    ogTitle
    ogUrl
    ogDescription
    ogImage
    jsonLd
  }
}
`

const POST_GRAPHQL_FIELDS_CATEGORY_WOMEN = `
dadosDasMarcasCollection {
  items {
    name
    link
    img {
      url
      title
      width
      height
      description
    }
  }
}
blocoMarcasCollection {
  items {
    title
    seeAllLink
    linkText
  }
}
blockOurColectionsCollection(where: { name: "Women Departament Our Collection" }) {
  items {
    title
    description
    seeAllText
    seeAllLink
  }
}
infoCardOurColectionsCollection(where: { name: "Women Departament Our Collection Cards" }
) {
  items {
    title
    description
    image {
      url
      title
      width
      height
      description
    }
    labelBtn
    linkBtn
    order
  }
}
blockCardCollectionVerticalCollection(
  where: { name: "Women Departament Vertical Our Collection"  }
) {
  items {
    title
    description
    seeAllText
    seeAllLink
  }
}
infoCardCollectionVerticalCollection(where: { name: "Women Departament Vertical Our Collection Cards" }
) {
  items {
    title
    description
    image {
      url
      title
      width
      height
      description
    }
    labelBtn
    linkBtn
    order
  }
}
bubbleLinksCategoriesTitleCollection {
  items {
    title
  }
}
bubbleLinksCategoriesImgCollection {
  items {
    link
    name
    image {
      url
      title
      width
      height
      description
    }
  }
}
mosaicoCollection(where: { name:  "Women Departament Mosaic" }) {
  items {
    image {
      url
      title
      width
      height
      description
    }
    description
    title
    linkBtn
    labelBtn
    order
  }
}
productShelfCollection(where: { name: "Women Departament Shelf" }
) {
  items {
    title
    itemsQuantifyOnMobile
    itemsQuantifyOnDesktop
    first
    categoryCode
    order
  }
}
bannerCollection(where: { name: "Women Departament Banner" }) {
  items {
    title
    subtitle
    description
    imgDesktop {
      url
      title
      width
      height
      description
    }
    imgMobile {
      url
      title
      width
      height
      description
    }
    labelBtn
    linkBtn
  }
}
siteSeoCollection(where: { page: "Women" }) {
  items {
    title
    description
    canonicalLink
    keyWords
    ogType
    ogTitle
    ogUrl
    ogDescription
    ogImage
    jsonLd
  }
}
`

const POST_GRAPHQL_FIELDS_BENEFITS_PAGE = `
  bannerCollection(where: { name: "Benefits banner" }) {
    items {
      title
      subtitle
      description
      imgDesktop {
        url
        title
        width
        height
        description
      }
      imgMobile {
        url
        title
        width
        height
        description
      }
      labelBtn
      linkBtn
    }
  }
  siteSeoCollection(where: { page: "Benefits" }) {
    items {
      title
      description
      canonicalLink
      keyWords
      ogType
      ogTitle
      ogUrl
      ogDescription
      ogImage
      jsonLd
    }
  }
  staticPagesContentCollection(where: { name: "Benefits" }) {
      items {
      content {
        json
      }
    }
  }
`

async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getDataForHome() {
  const { data } = await fetchGraphQL(
    `query HomePageQuery{
            ${POST_GRAPHQL_FIELDS}
        }`
  )

  return data
}

export async function getDataForInstitutionalPage() {
  const { data } = await fetchGraphQL(
    `query InstitutionalPage{
            ${POST_GRAPHQL_FIELDS_INSTITUTIONAL_PAGE}
        }`
  )

  return data
}

export async function getDataForCategoryMen() {
  const { data } = await fetchGraphQL(
    `query CategoryMenPage{
            ${POST_GRAPHQL_FIELDS_CATEGORY_MEN}
        }`
  )

  return data
}

export async function getDataForCategoryWomen() {
  const { data } = await fetchGraphQL(
    `query CategoryWomenPage{
            ${POST_GRAPHQL_FIELDS_CATEGORY_WOMEN}
        }`
  )

  return data
}

export async function getDataForBenefitsPage() {
  const { data } = await fetchGraphQL(
    `query CategoryWomenPage{
            ${POST_GRAPHQL_FIELDS_BENEFITS_PAGE}
        }`
  )

  return data
}
