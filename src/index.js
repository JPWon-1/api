const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const db = require('./db');
const models = require('./models');

//.env 파일에 명시된 포트 또는 포트 4000에서 서버를 실행
const port = process.env.PORT || 4000;
//DB_HOST값을 변수로 저장
const DB_HOST = process.env.DB_HOST;

//note data
let notes = [
	{ id: '1', content: 'This is a note', author: 'Adam Scott' },
	{ id: '2', content: 'This is a another note', author: 'Adam Silver' },
	{ id: '3', content: 'oh hey look . another note!', author: 'Adam Green' }
];

//그래프 QL 스키마 언어로 스키마를 구성
const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Query {
    hello: String!
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
  }
`;

//스키마 필드를 위한 리졸버 함수 제공
const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		notes: async () => {
			return await models.Note.find();
		},
		note: (parent, args) => {
			return notes.find(note => note.id === args.id);
		}
	},
	Mutation: {
		newNote: (parent, args) => {
			let noteValue = {
				id: String(notes.length + 1),
				content: args.content,
				author: 'Adam Scott'
			};
			notes.push(noteValue);
			return noteValue;
		}
	}
};

const app = express();
//DB에 연결
db.connect(DB_HOST);

//아폴로 서버 설정
const server = new ApolloServer({ typeDefs, resolvers });

//아폴로 그래프QL 미들웨어를 적용하고 경로를 /api로 설정
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
	console.log(
		`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
	)
);
