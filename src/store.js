const { v4: uuid} = require('uuid');

const bookmarks = [
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Decent search engine',
    rating: 3 
  },
  { id: uuid(),
    title: 'Ecosia',
    url: 'https://www.ecosia.org',
    description: 'Plants trees with every search',
    rating: 5 
  },
  { id: uuid(),
    title: 'Yahho',
    url: 'https://www.yahoo.com',
    description: 'The other one',
    rating: 3 
  }
];

module.exports = { bookmarks };