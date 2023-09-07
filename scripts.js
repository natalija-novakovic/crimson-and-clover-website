//Hamburger menu

window.onload = function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

// Product list

const product_1 = {
    Title: "Elysian Meadow",
    Price: "$29.99",
    Photo: "assets/images/products/bouquet-elysian-meadow.jpg",
    Category: "bouquets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

const product_2 = {
    Title: "Eternal Elegance",
    Price: "$45.99",
    Photo: "assets/images/products/bouquet-enchanted-elegance.jpg",
    Category: "bouquets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

const product_3 = {
    Title: "Everlasting Love",
    Price: "$31.99",
    Photo: "assets/images/products/bouquet-eternal-love.jpg",
    Category: "bouquets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

const product_4 = {
    Title: "Sunset Serenade",
    Price: "$20.99",
    Photo: "assets/images/products/bouquet-sunset-serenade.jpg",
    Category: "bouquets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

const product_5 = {
    Title: "Vintage Charm",
    Price: "$25.99",
    Photo: "assets/images/products/bouquet-vintage-charm.jpg",
    Category: "bouquets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

const product_6 = {
    Title: "Whimsical Dream",
    Price: "$29.99",
    Photo: "assets/images/products/bouquet-whimsical-meadow.jpg",
    Category: "bouquets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

const product_7 = {
    Title: "Artisanal Soap",
    Price: "$11.00",
    Photo: "assets/images/products/gift-artisanal-soap.jpg",
    Category: "gifts",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_8 = {
    Title: "Bath Bomb",
    Price: "$15.99",
    Photo: "assets/images/products/gift-bath-bomb.jpg",
    Category: "gifts",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_9 = {
    Title: "Gourmet Chocolate",
    Price: "$8.99",
    Photo: "assets/images/products/gift-gourmet-chocolate.jpg",
    Category: "gifts",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_10 = {
    Title: "Scented Candle",
    Price: "$9.00",
    Photo: "assets/images/products/gift-scented-candle.jpg",
    Category: "gifts",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_11 = {
    Title: "Home Decor",
    Price: "$10.99",
    Photo: "assets/images/products/gift-scented-candle-2.jpg",
    Category: "gifts",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_12 = {
    Title: "Tea Set",
    Price: "$35.00",
    Photo: "assets/images/products/gift-tea-set.jpg",
    Category: "gifts",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_13 = {
    Title: "Gerbera",
    Price: "$10.00",
    Photo: "assets/images/products/single-gerbera.jpg",
    Category: "single-flower",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_14 = {
    Title: "Gladiolys",
    Price: "$9.99",
    Photo: "assets/images/products/single-gladiolus.jpg",
    Category: "single-flower",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_15 = {
    Title: "Lily",
    Price: "$12.00",
    Photo: "assets/images/products/single-lily.jpg",
    Category: "single-flower",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_16 = {
    Title: "Peony",
    Price: "$13.00",
    Photo: "assets/images/products/single-peony.jpg",
    Category: "single-flower",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_17 = {
    Title: "Pink Rose",
    Price: "$9.00",
    Photo: "assets/images/products/single-rose.jpg",
    Category: "single-flower",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_18 = {
    Title: "Yellow Tulip",
    Price: "$8.99",
    Photo: "assets/images/products/single-tulip.jpg",
    Category: "single-flower",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_19 = {
    Title: "French Kiss",
    Price: "$50.00",
    Photo: "assets/images/products/baskets-french-kiss.jpg",
    Category: "baskets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}
const product_20 = {
    Title: "Fine Wine",
    Price: "$70.00",
    Photo: "assets/images/products/baskets-fine-wine.jpg",
    Category: "baskets",
    Description: "Lorem ipsum dolor sit amet, et consectetur adipiscing elit."
}

let productList = [product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9, product_10, product_11, product_12, product_13, product_14, product_15, product_16, product_17, product_18, product_19, product_20];

//randomize array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        
        const j = Math.floor(Math.random() * (i + 1));
                
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffleArray(productList);
console.log(productList);


//console.log(productList);

//GENERATE PRODUCT LIST
const productSection = document.getElementById('product-list');

function generateProductCard(product) {
    //container
    const card = document.createElement('div');
    card.className = 'product-card col-lg-2 col-md-4 col-sm-6';

    //image div
    const imageDiv = document.createElement('div');
    imageDiv.className = 'product-image';

    const image = document.createElement('img');
    image.src = product.Photo;
    image.alt = product.Title;

    imageDiv.appendChild(image);

    //info div
    const infoDiv = document.createElement('div');
    infoDiv.className = 'product-info';

    const title = document.createElement('h3');
    title.className = 'product-title';
    title.textContent = product.Title;

    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = product.Price;

    //description div
    const descDiv = document.createElement('div');
    descDiv.className = 'description-container';
    
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.Description;

    //appending elements
    infoDiv.appendChild(title);
    infoDiv.appendChild(price);

    descDiv.appendChild(description);

    card.appendChild(imageDiv);
    card.appendChild(infoDiv);
    card.appendChild(descDiv);

    return card;
}

for (const product of productList) {
    const productCard = generateProductCard(product);
    productSection.appendChild(productCard);
}

//CATEGORY BUTTONS
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // removing active class from all buttons
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // adding active class
        button.classList.add('active');

        // get the selected category
        const selectedCategory = button.getAttribute('data-category');

        // clear existing products in the product list
        productSection.innerHTML = '';

        // filter products based on the selected category
        if (selectedCategory === 'all') {
            for (const product of productList) {
                const productCard = generateProductCard(product);
                productSection.appendChild(productCard);
            }
        } else {
            const filteredProducts = productList.filter(product => product.Category === selectedCategory);
            for (const product of filteredProducts) {
                const productCard = generateProductCard(product);
                productSection.appendChild(productCard);
            }
        }
    });
});



  
  


