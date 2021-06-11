function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id)
}

function findBookById(books, id) {
  return books.find((book) => book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows.some((borrow) => ! borrow.returned))
  let returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned))
  console.log(borrowed, returned)
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  let ans = []
  for (let borrow = 0; borrow < book.borrows.length; borrow++) {
    if (ans.length >= 10) break
    let acc = accounts.find(account => book.borrows[borrow].id == account.id)
    acc.returned = book.borrows[borrow].returned
    ans.push(acc)
  }
  return ans
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
