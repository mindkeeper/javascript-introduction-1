const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const additionData = {
  name: "Nur Cholis Majid",
  email: "fcb.nyak@gmail.com",
  hobbies: ["Gaming", "Badminton", "coding"],
};

const newData = { ...data, ...additionData };
const { street, city } = newData.address;
console.log(newData);
console.log(street, city);
