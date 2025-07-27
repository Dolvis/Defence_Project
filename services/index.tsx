// 
import request, { GraphQLClient, gql } from "graphql-request"

const MASTER_URL = "https://eu-west-2.cdn.hygraph.com/content/cmcu3ka3o008b07w5tx6qzewe/master"
const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NTMzMDM4MDMsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21jdTNrYTNvMDA4YjA3dzV0eDZxemV3ZS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiY2UzOWQ3NTYtMWNmZi00YmNlLWFjZTAtYmI0ZjBkZjYwZTNkIiwianRpIjoiY21kZ2Z0Y3lzMG56ejA3bXE3emQ0ZHF6biJ9.plUzdra6bXUiET9q8QU7IWnO6eJY-4PckE_0f6T17VdW-9kR9q_nCRSxY2lMc72ObeTXwr1aAD7oAqaqeOdcGYl86pxmyOy95Tji02EfCNKY1b200OSQAfBgGce_5vALEyroNyli0ELF2bd3u2v_qSd6HEzgQfSIVznHvYaYAECdZcxLxukjMpWvFN0MRC7F5j9sCjpHlRAsXQuEpUx8LcIS5I88sG_qjsks1JZ63egWPs7Sczgt6aucNFSKCSfTXIkpeibAo1cLaiTBNJ4TGCYliO_IesTBNFEKGAq7MZ30l6Z3tjQgfRBLTA07UO3OliFP406vDrsRzQII7OeMwlDwKgKvKjoomSNhIWXQb85tHisEeSM9fHNhyqaEfmxCGDRsLe80tB7rcipinUzNhvOWgkLfaMZJid8EPIEMvWF1LdcouOFzghWO0Jl4FsJTUxCv_A0CWk7BLzTjHKuNdmtcmVlZ7zowwfjkSSjv7Dsi56z8dwTlbrFgLMjjuyEDbvfBOjumLOMWWQbNVreTIRHMM1wGdmzY8xJf0MsOaRcQo2yBmHbScxI1b4V0KziUDZpnegLv1OdjeCCaPLds3ImUxHUuSOZJVpkP524JQRprWKqDsQf2EjYWmtjm4ZU4K_cIbuzH_5btrQnCr0aTdDhBEoxCh9w_icNq1UTKCiI";

const client = new GraphQLClient(MASTER_URL, {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
});

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

    const result = await request(MASTER_URL, query);
    return result;
}

type BookingResponse = {
    createBooking: {
        id: string;
    };
};

export const createBooking = async (formValue: any): Promise<BookingResponse> => {

    const mutationQuery = gql`
    mutation MyMutation(
        $userName: String!,
        $pickUpDate: String!,
        $dropOffDate: String!,
        $pickUpTime: String!,
        $dropOffTime: String!,
        $contactNumber: String!,
        $carId: ID!
    ) {
        createBooking(
            data: {
                userName: $userName,
                pickUpDate: $pickUpDate,
                dropOffDate: $dropOffDate,
                pickUpTime: $pickUpTime,
                dropOffTime: $dropOffTime,
                contactNumber: $contactNumber,
                carId: { connect: { id: $carId } }
            }
        ) {
            id
        }
    }
    `;

    try {
        const result = await client.request<BookingResponse>(mutationQuery, {
            userName: formValue.userName,
            pickUpDate: formValue.pickUpDate,
            dropOffDate: formValue.dropOffDate,
            pickUpTime: formValue.pickUpTime || "09:00",
            dropOffTime: formValue.dropOffTime || "17:00",
            contactNumber: formValue.contactNumber,
            carId: formValue.carId,
        });
        return result;
    } catch (error) {
        console.error('GraphQL Error:', error);
        throw error;
    }
}