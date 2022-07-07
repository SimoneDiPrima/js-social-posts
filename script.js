
/*Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*/

// prima di tutto creo il mio array di oggetti


const postArray = [
{
    id : 1,
    nome: `Phil Mangione`,
    userPic : `img/01userimage.jpg`,
    birthDate : `04-02-1988`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/01.jpg`,
    likes:85,

},
{
    id : 2,
    nome: `Enrico Campani`,
    userPic : `img/01userimage.jpg`,
    birthDate : `02-03-1990`,
    text:`lorem ipsum ecc`,
    image:`img/02.jpg`,
    likes:75,

},
{
    id : 3,
    nome: `Fabrizio Mastrobattista`,
    userPic : `img/01userimage.jpg`,
    birthDate : `02-05-1994`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/03.jpg`,
    likes:89,

},
{
    id : 1,
    nome: `Simone Di Prima`,
    userPic : `img/01userimage.jpg`,
    birthDate : `17-03-1992`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/04.jpg`,
    likes:55,

},
{
    id : 1,
    nome: `Matilde Paparatto`,
    userPic : `img/01userimage.jpg`,
    birthDate : `07-02-1995`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/05.jpg`,
    likes:125,

}
]
// console.log(postArray);

// ora prendo gli elementi del dom dove devo stampare i miei post

const container = document.getElementById(`container`);

let posts = ` `;

// for(let i=0;i<postArray.length;i++){
//     const currentPost = postArray[i];
   
//     for(let key in currentPost){
//         if(key === `userPic`){
//             posts += `<div> <img src="${currentPost[key]}" alt="foto user"/>${currentPost.nome}`
//             posts += `<p>${currentPost.text}</p>`
//         }
//         else if(key === `image`){
//             posts += `<img src="${currentPost[key]}" alt="foto paesaggio"/>`; 
//         }
//     }
//     posts += `</div>`;
    
// }
// container.classList.add(`text-white`);
// container.innerHTML = posts;

const card = document.createElement(`div`);
card.classList.add(`post`);
container.append(card);
let counterlike = 0;



for(let i=0;i<postArray.length;i++){
    const currentPost = postArray[i];
    
    posts += `<div class="post">
     <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img class="profile-pic" src="${currentPost.userPic}" alt="Phil Mangione" />
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${currentPost.nome}</div>
        <div class="post-meta__time">${currentPost.birthDate}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
   ${currentPost.text}
  </div>
  <div class="post__image">
  <img src="${currentPost.image}" alt="foto paesaggio"/>
</div>
<div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <button class="like-button js-like-button" href="#" data-postid="${currentPost.id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-${currentPost.id}" class="js-likes-counter">${currentPost.likes}</b> persone</div>
          </div>
        </div>
</div>
</div>
`
}
container.innerHTML = posts;

const likesButton = document.querySelectorAll(`.js-like-button`);

for(let i =0; i< likesButton.length ; i++){
  // creo una costante per usarmela al posto dell array
  const button = likesButton[i];
button.addEventListener(`click`,()=>{
  button.classList.add(`like-button--liked`);
// recupero l id grazie al dataset
  const postId = button.dataset.postid;
  // recupero il numero dei like grazie all id 
  const counterLikes = document.getElementById(`like-counter-${postId}`)
//  creo una variabile da incrementare che mi recuperi il testo di counterLikes
  let likes = parseInt(counterLikes.innerText);
  // stampo incrementando il testo di counterLikes
  counterLikes.innerText = ++likes;
})
}


