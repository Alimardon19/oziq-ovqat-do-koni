let Products = [
    {
        id: 1,
        productName: "Vegie Muffen",
        price: 20,
        description: "There are many things are needed to start the Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png",
    },
    {
        id: 2,
        productName: "Vegie Muffen",
        price: 30,
        description: "There are many things are needed to start the Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png",
    },
    {
        id: 3,
        productName: "Vegie Muffen",
        price: 40,
        description: "There are many things are needed to start the Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png",
    },
    {
        id: 4,
        productName: "Vegie Muffen",
        price: 50,
        description: "There are many things are needed to start the Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png",
    },
    {
        id: 5,
        productName: "Vegie Muffen",
        price: 60,
        description: "There are many things are needed to start the Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png",
    },
    {
        id: 6,
        productName: "Vegie Muffen",
        price: 70,
        description: "There are many things are needed to start the Fast Food Business.",
        reting: "⭐⭐⭐⭐⭐",
        img: "./food/eat-1.png",
    },
]

let selectProduct = [];

function drawProduct() {
    let a = Products.map((item, index)=> `
        <div class="card-menu">
            <img src=${item.img} alt="">
            <div class="pd">
                <div class="food-name">
                    <h4>${item.productName}</h4>
                    <h4>$ ${item.price}</h4>
                </div>
                <p>${item.description}</p>
                <div class="counter">
                    <button class="btn btn-warning" onclick="addCard(${item.id})">+</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${item.id})">-</button>
                    <div class="star">
                        ${item.reting}
                    </div>
                </div>
            </div>
        </div>
    `)
    $(".card-block").html(a);
}


function addCard(id) {
    Products.filter(item => {
        if (item.id === id) {
            selectProduct.push(item);
        }
    })
    $("#count").text(selectProduct.length)
}

function drawSelectProduct() {
    let a = selectProduct.map((item, index)=> `
        <tr>
            <th> ${index + 1} </th>
            <th> 
                <img src=${item.img} width=80 />
                ${item.productName} 
            </th>       
            <th>${item.price}</th>
            <th> 0 </th>
            <th> <button onclick="deleteProduct(${item.id})"> Delete </button> </th>
        </tr>
    `)
    $("#tbody").html(a);
}

function deleteProduct(id) {
    selectProduct.filter((item, index)=> {
        if (item.id === id) {
            selectProduct.splice(index, 1)
        }
    })
    $("#count").text(selectProduct.length);
    drawSelectProduct();
}












function openModal() {
    $(".Modal").toggleClass("d-block");
    drawSelectProduct();
}











drawProduct();