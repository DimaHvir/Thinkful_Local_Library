function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) { 
  return accounts.sort((acc1, acc2) => acc1.name.last.toLowerCase() > acc2.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let ans = 0
  for (let book = 0; book < books.length; book++) {
    for (let borrow = 0; borrow < books[book].borrows.length; borrow++) {
      ans += books[book].borrows[borrow].id  == account.id ? 1 : 0
    }
  }
  return ans
}

function getBooksPossessedByAccount(account, books, authors) {
  let ans  = []
  for (let book = 0; book < books.length; book++) {
    for (let borrow = 0; book < books[book].borrows.length; book++) {
      if (books[book].borrows[borrow].id == account.id && ! books[book].borrows[borrow].returned) {
        books[book].author = authors.find(author => author.id == books[book].authorId)
        ans.push(books[book])
      }
    }
  }
  return ans
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
