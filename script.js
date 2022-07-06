
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
    userPic : `img/05.jpg`,
    birthDate : `04-02-1988`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/01.jpg`,
    likes:85,

},
{
    id : 2,
    nome: `Enrico Campani`,
    userPic : `img/04.jpg`,
    birthDate : `02-03-1990`,
    text:`lorem ipsum ecc`,
    image:`img/02.jpg`,
    likes:75,

},
{
    id : 3,
    nome: `Fabrizio Mastrobattista`,
    userPic : `img/03.jpg`,
    birthDate : `02-05-1994`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/03.jpg`,
    likes:85,

},
{
    id : 1,
    nome: `Simone Di Prima`,
    userPic : `img/02.jpg`,
    birthDate : `17-03-1992`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/04.jpg`,
    likes:85,

},
{
    id : 1,
    nome: `Matilde Paparatto`,
    userPic : `img/01.jpg`,
    birthDate : `07-02-1995`,
    text:`lorem ipsum not laborem success ecc`,
    image:`img/05.jpg`,
    likes:85,

}
]
// console.log(postArray);

// ora prendo gli elementi del dom dove devo stampare i miei post

const container = document.getElementById(`container`);

let posts = ` `;

for(let i=0;i<postArray.length;i++){
    const currentPost = postArray[i];
   
    for(let key in currentPost){
        posts += `<div>${currentPost.nome}`
        if(key === `userPic`){
            posts += `<img src="${currentPost[key]}" alt="foto user"/>`;
        }
        else if(key === `image`){
            posts += `<img src="${currentPost[key]}" alt="foto paesaggio"/>`; 
        }
    }
    posts += `</div>`;
    
}
container.innerHTML = posts;
