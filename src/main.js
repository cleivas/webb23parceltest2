const img = document.createElement('img');
document.body.append(img);
// img.src = '../media/placeholder.jpg';

const imgURL = new URL('./media/placeholder.jpg', import.meta.url);

console.log(imgURL.href);
img.src = imgURL.href;



