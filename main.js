const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const fakeStoreData = await response.json()
    console.log(fakeStoreData)
    fakeStoreData.forEach((item) => displayItem(item))
}

const displayItem = (item) => {
    const displayWindow = document.querySelector("#display");
    const newItem = document.createElement("div")
    newItem.className = "col p-3"
    newItem.append(createImage(item))
    displayWindow.append(newItem);
}

const createImage = (item) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = item.image;
    const caption = document.createElement("figcaption");
    const name = item.title;
    caption.innerHTML = name;
    figure.append(img, caption)
    return figure
}

// function that calls getData() when the window has loaded
window.onload = () => {
    getData();
  };