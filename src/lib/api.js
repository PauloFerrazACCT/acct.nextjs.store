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
