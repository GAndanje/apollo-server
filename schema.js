export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  },

  type Animal {
      name: String
      legs: Float
    }

  type Nutrition {
    cholestoral: String
    energy: String
  }

  type Fruit {
    name: String
    nutrition: Nutrition}
  
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(author:String): [Book],
    book(author:String): Book
  }, 
  type Query {
    fruits(cholestoral:String): [Fruit],
    fruit(nutritionMatch:String): Fruit
  },

  type Query {
    animals: [Animal]
  },
`;
const books = [
  {
    title: 'anthologies of africa',
    author: 'Ngugi Wathiongo'
  },
  {
    title: 'Things Fall Apart',
    author: 'Chinua Chebe'
  }
]

const animals = [
  {
    name: 'dog',
    legs: 4
  },
  {
    name: 'chicken',
    legs: 2
  }
]

const fruits = [
  {
    name: 'banana',
    nutrition: {
      cholestoral: '2%',
      energy: '100calories'
    }
  },
  {
    name: 'avocado',
    nutrition: {
      cholestoral: '24%',
      energy: '10calories'
    }
  }
]
export const resolvers = {
  Query: {
    books: (_, { author }) => books.filter((book) => book.author === author),
    book: (_, { author }) => books.find((book) => book.author === author),
    animals: () => animals,
    fruits: () => fruits,
    fruit: (_, { nutritionMatch }) => fruits.find((fruit) => fruit.nutrition.energy === nutritionMatch)
  },
};
