const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/index");
const { nanoid } = require("nanoid");
const users = [{ id: "1plP-epULu", username: "Vova", age: 212 }];

const app = express();
app.use(cors());

const getAllUsers = () => users;

const createUser = (input) => {
  return { id: nanoid(10), ...input };
};

const resolver = {
  getAllUsers, // аналогичная запись getAllUsers: () => {return users},
  getUser: ({ id }) => {
    return users.find((user) => user.id == id);
  },
  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({ graphiql: true, schema, rootValue: resolver })
);

const port = 3666;
app.listen(port, console.log(`Сервер запущен на ${port} порту`));

/**
 * Мутация данных, в примере, добовление пользователя
 * mutation{
    createUser(input: {
        username: "VI"
        age: 222
    }) {
        id, username
    }
}
 * Запрос очереди на получение данных
 * query{
    getAllUsers{
      username, id, age
    }
    getUser(id:1){
      username, age
    }
  }
 * Создаем пользователя с постами
 * mutation {
    createUser(input: {username: "VVV", age: 166, posts: [{id: 1, title: "first message", content: "hello graphql"}]}) {
      id
    }
  }
 *Получаем пользователей и их посты
 * query{
    getAllUsers{
      id, username, posts {
        id, title, content
      }
    }
  }
*/


