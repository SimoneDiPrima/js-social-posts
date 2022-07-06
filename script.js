
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
    userPic : `https://unsplash.it/300/300?image=15`,
    birthDate : `04-02-1988`,
    text:`lorem ipsum not laborem success ecc`,
    src:`https://unsplash.it/600/300?image=171`,
    likes:85,

},
{
    id : 2,
    nome: `Enrico Campani`,
    userPic : `https://unsplash.it/300/300?image=16`,
    birthDate : `02-03-1990`,
    text:`lorem ipsum ecc`,
    src:`https://unsplash.it/600/300?image=172`,
    likes:75,

},
{
    id : 3,
    nome: `Fabrizio Mastrobattista`,
    userPic : `https://unsplash.it/300/300?image=17`,
    birthDate : `02-05-1994`,
    text:`lorem ipsum not laborem success ecc`,
    src:`https://unsplash.it/600/300?image=173`,
    likes:85,

},
{
    id : 1,
    nome: `Simone Di Prima`,
    userPic : `https://unsplash.it/300/300?image=18`,
    birthDate : `17-03-1992`,
    text:`lorem ipsum not laborem success ecc`,
    src:`https://unsplash.it/600/300?image=174`,
    likes:85,

},
{
    id : 1,
    nome: `Matilde Paparatto`,
    userPic : `https://unsplash.it/300/300?image=19`,
    birthDate : `07-02-1995`,
    text:`lorem ipsum not laborem success ecc`,
    src:`https://unsplash.it/600/300?image=175`,
    likes:85,

}
]
console.log(postArray);