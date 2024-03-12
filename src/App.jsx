import { useState } from "react";
import "./App.css";
import Blogs from "./Componenets/Blogs/Blogs";
import Bookmarks from "./Componenets/Bookmarks/Bookmarks";
import Header from "./Componenets/Header/Header";

function App() {

  const [bookmarks, setBookmarks ] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id,time) =>{
    time = parseInt(time);
    setReadingTime(readingTime+time);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }
  return (
    <>
      <Header></Header>
      <main className="container mx-auto  md:flex">
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
