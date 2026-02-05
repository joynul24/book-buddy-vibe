
import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  return storedListStr ? JSON.parse(storedListStr) : [];
};

const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  return storedListStr ? JSON.parse(storedListStr) : [];
};

const addStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    toast.error("Already exists in the wishlist!");
  } else {
    storedList.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedList));
    toast.success("Book added to wishlist!");
  }
};

const addToStoredList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast.error("Already exists in the read list!");
  } else {
    storedList.push(id);
    localStorage.setItem("read-list", JSON.stringify(storedList));
    toast.success("Book marked as read!");
  }
};

const removeFromStoredReadList = (id) => {
  const storedList = getStoredReadList();
  const updatedList = storedList.filter(bookId => bookId !== id);
  localStorage.setItem("read-list", JSON.stringify(updatedList));
  toast.info("Book removed from read list!");
};

const removeFromStoredWishList = (id) => {
  const storedList = getStoredWishList();
  const updatedList = storedList.filter(bookId => bookId !== id);
  localStorage.setItem("wish-list", JSON.stringify(updatedList));
  toast.info("Book removed from wishlist!");
};

export { addToStoredList, addStoredWishList, getStoredReadList, getStoredWishList, removeFromStoredReadList, removeFromStoredWishList };
