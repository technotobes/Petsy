﻿import {apiRoute} from "../../utils/apiRoute";
import {gql} from "@apollo/client";
import getGqlString from "../../utils/graphql_utils";

export default async function getHost(userId) {
    let query = gql`query Query($userId: ID!) {
        getHost(userId: $userId) {
            success
            message
            host {
                cancellationPolicy
                canHostMultiplePets
                canHostUnspayedFemales
                daysAvailable
                doesBoarding
                doesHouseSitting
                doesDropInVisits
                doesDayCare
                doesDogWalking
                experience
                hasChildren
                hasOtherPets
                id
                isHomeFullTime
                isSmoking
                range
                schedule
                sizeCanHost
                totalCanHost
                typeOfHome
                typeOfYard
                userId
            }
        }
    }`
    query = getGqlString(query);

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({
            query,
            variables: {
                userId
            }
        })
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    return await request.json();
};