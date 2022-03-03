export const products = [
    { id: 1,  foto:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159587.jpg' ,categoria: 'Dorian Grey', name: "juan", price: 15 },
    { id: 2,  foto:'https://upload.wikimedia.org/wikipedia/commons/9/9b/Jane_Eyre_title_page.jpg' ,categoria: 'Jane Eyre', name: "carlos", price: 20 },
    { id: 3,  foto:'https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141192475.jpg' ,categoria: 'Emma', name: "ana", price: 10 },
    { id: 4,  foto:'https://images.penguinrandomhouse.com/cover/9780451530998' ,categoria: 'Hard Times', name: "sofia", price: 14 },
    { id: 5,  foto:'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781787557000/persuasion-9781787557000_hr.jpg' ,categoria: 'Persuasion', name: "victoria", price: 18 },
    { id: 6,  foto:'https://kbimages1-a.akamaihd.net/9541dc73-a03c-433d-9e2c-9fba5ff67ea5/1200/1200/False/dracula-173.jpg' ,categoria: 'Dracula', name: "federico", price: 25 },
    { id: 7,  foto:'http://prodimage.images-bn.com/pimages/9781950435098_p0_v2_s1200x630.jpg' ,categoria: 'Little Women', name: "pepe", price: 14 }
  ]
  
 const getFetch = new Promise((resolve, reject)=>{
      let url = 'bookWiki.com'
      
      if (url === 'bookWiki.com') {
        setTimeout(() => {
          resolve(products)        
        }, 2000);
      }else{
        reject('400 not found')
      }
  })

  export default getFetch;
