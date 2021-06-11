function getTotalBooksCount(books) {
  return books.reduce((acc, book) => acc + 1, 0)
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc + 1, 0)
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => acc + (book.borrows[0].returned ? 0 : 1), 0)
}

function getMostCommonGenres(books) {
  let genres = []
  for (let book = 0; book < books.length; book++) {
    if (!genres.some(genre => genre.name == books[book].genre)) {
      genres.push(numGenre(books, books[book].genre))
    }
  }
  genres.sort((genre1, genre2) => genre2.count - genre1.count)
  while (genres.length > 5) {
    genres.pop()
  }
  return genres
}

function numGenre(books, genre) { //helper
  let ans = 0
  for (let book = 0; book < books.length; book++) {
    ans += books[book].genre == genre ? 1 : 0
  }
  return {name: genre, count: ans}
}

function getMostPopularBooks(books) {
  let popularityList = []
  for (let book=0; book<books.length; book++) {
    popularityList.push({name: books[book].title, count: books[book].borrows.length})
  }
  popularityList.sort((book1, book2) => book2.count - book1.count)
  while(popularityList.length > 5) {
    popularityList.pop()
  }
  return popularityList
}

function getMostPopularAuthors(books, authors) {
  let popList = []
  for (let author = 0; author < authors.length; author++) {
    const authorBooks = getAuthorBooks(books, authors[author].id)
    let count = 0
    for (let book = 0; book < authorBooks.length; book++) {
      count += authorBooks[book].borrows.length
    }
    popList.push({name: `${authors[author].name.first} ${authors[author].name.last}`, count: count})
  }
  popList.sort((author1, author2) => author2.count - author1.count)
  while(popList.length > 5) {
    popList.pop()
  }
  return popList
}
function getAuthorBooks(books, authorId) { //helper
  let ans = []
  for (let book=0; book < books.length; book++) {
    if(books[book].authorId == authorId) {
      ans.push(books[book])
    }
  }
  return ans
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
