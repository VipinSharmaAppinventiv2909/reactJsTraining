const obj = [
  {
    one: {
      id: 1,
      firstName: "shawshank",
      lastName: "Redemption",
    },
  },

  {
    two: {
      id: 2,
      firstName: "shawshank",
      lastName: "Redemption",
    },
  },

  {
    three: {
      id: 3,
      firstName: "shawshank",
      lastName: "Redemption",
    },
  },

  {
    four: {
      id: 4,
      firstName: "shawshank",
      lastName: "Redemption",
    },
  },
];
export default obj;

// let users = [
//   {id: 1, firstName: "Susan", lastName: "Steward" },
//   {id: 2, firstName: "Daniel", lastName: "Longbottom" },
//   {id: 3, firstName: "Jacob", lastName: "Black" },
//   {id: 4, firstName: "Yohan", lastName: "Black" },
//   {id: 5, firstName: "NotYohan", lastName: "Black" },
//   {id: 6, firstName: "kdhsdjdk", lastName: "Black" },
// ];
// export default users;

const users = [
  {
    plot: "1",
    Owner: "Devansh",
    neighbour: [
      {
        Owner: "vipin",
      },
      {
        Owner: "Ayush",
      },
    ],
    OwnerDescription: "House Owner Devansh",
  },
  {
    plot: "2",
    Owner: "vipin",
    neighbour: [
      {
        Owner: "devansh",
      },
      {
        Owner: "Ayush",
      },
    ],
    OwnerDescription: "House Owner vipin",
  },
  {
    plot: "3",
    Owner: "Ayush",
    neighbour: [
      {
        Owner: "vipin",
      },
      {
        Owner: "Devansh",
      },
    ],
    OwnerDescription: "House Owner Ayush",
  },
];

export default users;
