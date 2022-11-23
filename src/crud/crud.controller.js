const UUID = require("uuid").v4;

const database = [
  {
    id: "6328a0a9-7660-4e79-ba84-7db16114b268",
    first_name: "Andres",
    last_name: "Saballea",
    email: "omarsoto@hotmail.com",
    password: "12345678",
    birthday: "1987/07/14",
  },
  {
    id: "69aa4f33-5206-40fd-960e-32a1689cec75",
    first_name: "Franco",
    last_name: "Gomez",
    email: "Gomez13@yahoo.com",
    password: "1456789",
    birthday: "1989/08/12",
  },
  {
    id: "dc10c1c2-d93e-42e2-b26d-30061826b387",
    first_name: "Windy",
    last_name: "Barria",
    email: "barria@une.com",
    password: "gabriela123456",
    birthday: "1959/10/06",
  },
];

const getAllUsers = () => {
  return database;
};

const getUserById = (id) => {
  const data = database.find((user) => user.id === id);
  return data;
};

const createNewUser = (data) => {
  const user = {
    id: UUID(),
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password,
    birthday: data.birthday,
  };

  database.push(user);

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
};
