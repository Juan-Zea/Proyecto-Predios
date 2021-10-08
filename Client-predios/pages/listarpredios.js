import React from 'react';
import Container from '../Components/Container';
import {useQuery,useMutation}from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_PREDIOS =gql`
    query getUsers {
    allUsers {
      nodes {
        id
        name
        createdAt
        email
    