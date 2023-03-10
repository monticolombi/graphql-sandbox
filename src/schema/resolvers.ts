interface Books {
    title: string,
    author: string
}

const books: Array<Books> = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

export const resolvers = {
    Query: {
        books: () => books,
    },
};