import React from 'react';
import Container from '../Components/Container';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";

const clietn = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

const Index = () => {
  