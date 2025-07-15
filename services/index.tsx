import request, { gql } from "graphql-request"

const MASTER_URL="https://eu-west-2.cdn.hygraph.com/content/cmcu3ka3o008b07w5tx6qzewe/master"

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
            carBrand
        }
    }
    `

    const result = await request(MASTER_URL, query);
    return result;
}


export const getStoreLocations = async () => {
    const query = gql`
    query StoresLocations {
        storesLocations {
            addresse
        }
    }
    `

    const result=await request(MASTER_URL,query);
    return result;
}