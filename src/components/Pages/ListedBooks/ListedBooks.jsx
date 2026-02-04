import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { getStoredReadList, getStoredWishList } from "../../../utility/addToDb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBookTab from "../../ReadBookTab/ReadBookTab";
import WishLIstTab from "../../WishLIstTab/WishLIstTab";

export default function ListedBooks() {
  const allBooks = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList()
    const storedReadListInt = storedReadList.map(id => parseInt(id))
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
    setReadBooks(readBookList)
  }, [])

  useEffect(() => {
    const storedWishList = getStoredWishList()
    const storedWishListInt = storedWishList.map(id => parseInt(id))
    const readWishList = allBooks.filter(book => storedWishListInt.includes(book.bookId))
    setWishList(readWishList)
  }, [])

  return (
    <div>
      <h1 className="
      text-xl sm:text-2xl md:text-3xl lg:text-4xl 
      font-bold text-center 
      py-4 sm:py-6 md:py-8 
    bg-gray-100 my-4 sm:my-6 md:my-8 
     rounded-2xl font-1">
        Books
      </h1>
      {/* sort button */}
      <div className="flex justify-center mb-5">
        <button className="btn color-primary text-white">Sort By</button>
      </div>
      {/* Book Tabs */}
      <div>
        <Tabs>
          <TabList className="font-1">
            <Tab>Read Book</Tab>
            <Tab>Wishlist Book</Tab>
          </TabList>

          <TabPanel>
            <div>
              {
                readBooks.map(book => (
                  <ReadBookTab key={book.bookId} book={book}></ReadBookTab>
                ))
              }
            </div>
          </TabPanel>
          <TabPanel>
           <div>
            {
              wishList.map(book => (
                <WishLIstTab key={book.bookId} book={book}></WishLIstTab>
              ))
            }
           </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
