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

export async function getAllPostsForHome() {
  const { data } = await fetchGraphQL(
    `query HomePageQuery{
            ${POST_GRAPHQL_FIELDS}          
        }`
  )

  return data
}
