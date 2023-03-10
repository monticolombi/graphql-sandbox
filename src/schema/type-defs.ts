export const typeDefs: string = `#graphql
type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`;