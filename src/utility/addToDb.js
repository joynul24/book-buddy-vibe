
const getStoredReadList = () => {
    const storedListStr = localStorage.getItem("read-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else {
        return [];
    }
}

const addStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        alert("Already exsist in the wish list");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("wish-list", storedListStr)
    }
}


const addToStoredList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        alert(id, "Already exists in the read list")
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list", storedListStr)
    }
}

export { addToStoredList, addStoredWishList, getStoredReadList, getStoredWishList }