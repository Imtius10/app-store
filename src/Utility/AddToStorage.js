const getStoreApp = () => {
    
    const storedApp = localStorage.getItem("installapp");

    if (storedApp) {
        const storeAppData = JSON.parse(storedApp)
        return storeAppData;
    }
    else {
        return [];
    }
}
const addToStore = (id)=> {
    const storeAppData = getStoreApp();
    if (storeAppData.includes(id)) {
        alert("added")
    }
    else {
        storeAppData.push(id)
        const data = JSON.stringify(storeAppData)
        localStorage.setItem("installapp",data)
        console.log(storeAppData)
    }
}
export { addToStore, getStoreApp }