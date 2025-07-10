import request, { gql } from "graphql-request"

export const getCarsList = async () => {
    const query = gql`
    query CarLists {
        carLists {
            carAvg
            createdAt
            id
            name
            price
            publishedAt
            seat
            updatedAt
            image{
                url
            }
            carType
        }
    }
    `

    const result = await request('https://eu-west-2.cdn.hygraph.com/content/cmcu3ka3o008b07w5tx6qzewe/master', query)
    return result;
}