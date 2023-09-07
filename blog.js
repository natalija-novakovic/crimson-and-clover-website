//Blog List

const blog_1 = {
    Photo: "assets/images/blogs/blog_1.jpg",
    Title: "The Fascinating World of Wildflowers",
    Date: "August 4, 2023",
    Author: "Christine Sawyer",
    Src: "blog-post-1.html",
    Text: "When most people think of flowers, they usually picture the cultivated varieties that are grown in gardens or sold in flower shops. However, there is an entire world of wildflowers that grow naturally in the wild, each with its own unique characteristics and needs..."    
}

const blog_2 = {
    Photo: "assets/images/blogs/blog_2.jpg",
    Title: "How to Grow and Care for Orchids",
    Date: "July 12, 2023",
    Author: "Mary Davis",
    Src: "blog-post-2.html",
    Text: "Orchids are a popular and exotic type of flower that can be challenging to grow and care for, but also very rewarding. In this post, we will provide a step-by-step guide on how to grow and care for different types of orchids, including information about the different..."
}

const blog_3 = {
    Photo: "assets/images/blogs/blog_3.jpg",
    Title: "The Art of Flower Arranging",
    Date: "June 5, 2022",
    Author: "Anne Atkins",
    Src: "blog-post-3.html",
    Text: "From simple and rustic arrangements made with wildflowers picked from the garden to elaborate and sophisticated creations using exotic and rare blooms, the possibilities for flower arranging are endless, and we will share some tips and tricks to make the process fun and easy."
}

let blogs = [blog_1, blog_2, blog_3];

//Generate Blog List

const blogList = document.getElementById("blog-list");

function generateBlogCard(blog){
    //container
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card col-lg-4 col-md-6 col-sm-12';

    //photo div
    const photoDiv = document.createElement('div');
    photoDiv.className = 'blog-photo';

    const photo = document.createElement('img');
    photo.src = blog.Photo;
    photo.alt = blog.Title;

    photoDiv.appendChild(photo);

    //info div
    const blogInfoDiv = document.createElement('div');
    blogInfoDiv.className = "blog-info";

    const blogTitle = document.createElement('h4');
    blogTitle.className = 'blog-title';
    blogTitle.textContent = blog.Title;
      
    //excerpt div

    const excerpt = document.createElement('div');
    excerpt.className = 'excerpt';

    const excerptText = document.createElement('p');
    excerptText.textContent = blog.Text;

    //read more
    const readMore = document.createElement('a');
    readMore.className = "read-more";
    readMore.href = blog.Src;
    readMore.textContent = "Read More ";

    const arrow = document.createElement('i');
    arrow.className = "fa-solid fa-arrow-right";


    //appending elements

    photoDiv.appendChild(photo);

    blogInfoDiv.appendChild(blogTitle);

    excerpt.appendChild(excerptText);

    readMore.appendChild(arrow);

    blogCard.appendChild(photoDiv);
    blogCard.appendChild(blogTitle);
    blogCard.appendChild(excerptText);
    blogCard.appendChild(readMore);

    return blogCard;
}

for (const blog of blogs) {
    const blogCard = generateBlogCard(blog);
    blogList.appendChild(blogCard);
}