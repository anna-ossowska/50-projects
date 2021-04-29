const testimonialsContainer = document.querySelector('testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImg = document.querySelector('.user-img');
const userName = document.querySelector('.user-name');
const role = document.querySelector('.role');

const testimonialsStorage = [
  {
    name: 'Saarah Iles',
    position: 'Marketing Manager',
    photo:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    text:
      'Accusamus veritatis quia sapiente hic quidem quam dolores culpa? Beatae dignissimos adipisci voluptas odit laborum dicta, architecto ratione tempora placeat quis, maxime atque inventore numquam fugiat. Beatae voluptatum perferendis animi possimus sequi consequatur autem tempore quam, doloribus excepturi molestias numquam eius dignissimos.',
  },
  {
    name: 'Todd Holmes',
    position: 'Teacher',
    photo:
      'https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    text:
      'In dolores laudantium expedita molestiae magnam, repellendus pariatur eaque id ex obcaecati amet reiciendis doloribus voluptatum itaque praesentium totam. Temporibus, ea repellat sapiente, eveniet fugit, expedita velit corporis delectus quod dicta quos eos facere deleniti dolorem aut amet et? Tempora, nostrum. Quod illo quas fuga, quis earum similique dolore.',
  },
  {
    name: 'Dominic Knowles',
    position: 'Programmer',
    photo:
      'https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80',
    text:
      'Mollitia esse dolorum incidunt fuga, magni nemo ex, modi earum hic maiores a unde debitis! Rem in debitis, quidem voluptatibus dolorum voluptate repudiandae rerum animi aliquid earum, dicta molestiae? Quos debitis quo libero quia asperiores animi numquam deleniti laudantium enim soluta vero dignissimos eos necessitatibus deserunt dolore, hic accusantium nesciunt. Cumque ex non excepturi impedit voluptatum quo a alias.',
  },
];

let indx = 1;

function updateTestimonial() {
  // Pulling data from the testimonialsStorage, depending on current index
  const { name, position, photo, text } = testimonialsStorage[indx];

  userName.innerHTML = name;
  role.innerHTML = position;
  userImg.src = photo;
  testimonial.innerHTML = text;

  indx++;

  if (indx > testimonialsStorage.length - 1) {
    indx = 0;
  }
}

setInterval(updateTestimonial, 10000);
