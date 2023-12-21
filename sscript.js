
//API
const btnClickBabyCloth = document.querySelector( '.btn-click-baby-clothes' );
const btnClickMenCloth = document.querySelector( '.btn-click-men-clothes' );
const btnClickWomenCloth = document.querySelector( '.btn-click-women-clothes' );
const btnClickJewelry = document.querySelector( '.btn-click-jewelry' );
const render = document.querySelector( '.render' );
const btnClickSearch = document.querySelector( '.searchs' );
const search = document.querySelector( '#search' );
const categories = document.querySelector( '.categories' );
const navbarMenCloth = document.querySelector( '.navbar-men-cloth' );
const navBarJewelery = document.querySelector( '.navbar-jewelery' );
const navbarElectronics = document.querySelector( '.navbar-electronics' );
const navbarWomenClothes1 = document.querySelector( '.navbar-women-clothes' );
const navbarWomenClothes2 = document.querySelector( '.navbar-women-clothes2' );
const AddToCartButton = document.querySelector( '.add-to-cart' );

document.addEventListener('DOMContentLoaded', function() {
  // Assuming AddToCartButton is a NodeList or an array of elements with the class 'AddToCartButton'
  const AddToCartButton = document.querySelectorAll('.AddToCartButton');

  AddToCartButton.forEach(button => {
      button.addEventListener('click', function() {
          const nav = document.querySelector('.confirmadded');
          const confirmationAdded = document.createElement('div');
          confirmationAdded.classList.add('confirmed');
          confirmationAdded.innerHTML = 'Item successfully added to cart';

          // Clear any existing confirmation messages
          const existingConfirmation = document.querySelector('.confirmed');
          if (existingConfirmation) {
              existingConfirmation.remove();
          }

          // Append the new confirmation message
          nav.prepend(confirmationAdded);
      });
  });
});


btnClickSearch.addEventListener( 'click', function () { 
  categories.innerHTML = '';
  const searchApiCloth = async function () {
    try {
      const searchs = search.value; 
      const response = await fetch( `https://fakestoreapi.com/products` );
      const data = await response.json();
      console.log( data );

      const isMatch = data.filter( obj => searchs === obj.category);
      if ( isMatch.length > 0 ) {
        let html = "";
        isMatch.forEach(obj => {
          // Generate HTML for each matching object and append it to the 'html' string
          const descriptionCloth = obj.description.split( '' );
          const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
          const first10Words2 = first10Words + '...';
          html += `
          <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
      <div class="img mt-2">
          <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
      </div>
      <div class="food-details mt-3">
          <h5 class="descriptions mt-4">${first10Words2}</h5>
          <div class="mt-3">
            <h5 class="price inline-display-1">$${obj.price}</h5>
            <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
          </div>
          <div class="mt-3">
            <button type="btn" class="buttons">Add to cart</button>
          </div>
      </div>            
    </div>
          `;
        });

        render.innerHTML = html;
        } else {
          render.innerHTML = 'Cannot find what you are looking for';
        }
    } catch ( err ) {
      console.log(err)
    }
  } 
  searchApiCloth();
} );

// btnClick.addEventListener( 'click', function () {
const fetchApi = async function () {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
console.log(data);
// Remove the array wrapping here
const loop = data;

let html = "";
for ( let i = 0; i < loop.length; i++ ) {
  const descriptionCloth = loop[i].description.split( '' );
  const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
  const first10Words2 = first10Words + '...';  
    html += `
    <div class="col-md-3 mt-5 text-center border p-2" style="border-radius: 12px;">
        <div class="img mt-2">
            <img src="${loop[i].image}" alt="${loop[i].description}" class='img-fluid store-img'>
        </div>
        <div class="food-details mt-3">
            <h5 class="descriptions mt-4">${first10Words2}</h5>
            <div class="mt-3">
                <h5 class="price inline-display-1">$${loop[i].price}</h5>
                <h5 class="rating inline-display-1"><span>${ loop[i].rating.rate }(${ loop[i].rating.count })</span></h5>
            </div>
            <div class="mt-3">
                <button type="btn" class="buttons add-to-cart">Add to cart</button>
            </div>
        </div>
    </div>
    `;
}

// Set the HTML after the loop
render.innerHTML = html;
  } catch ( err ) {
    console.log( err );
  }
  }
fetchApi();

navbarMenCloth.addEventListener( 'click', function () {
  const searchApiCloth = async function () {
    try {
      const response = await fetch( `https://fakestoreapi.com/products` );
      const data = await response.json();
      console.log( data );
      
      const clothCategory = { category: "men's clothing" };
      const isMatch = data.filter( obj => clothCategory.category === obj.category );
      
      
      if (isMatch.length > 0) {
        let html = ""; // Create an empty string to accumulate the HTML content
        isMatch.forEach( obj => {
          const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
          // Generate HTML for each matching object and append it to the 'html' string
          html += `
          <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
      <div class="img mt-2">
          <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
      </div>
      <div class="food-details mt-3">
          <h5 class="descriptions mt-4">${first10Words2}</h5>
          <div class="mt-3">
            <h5 class="price inline-display-1">$${obj.price}</h5>
            <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
          </div>
          <div class="mt-3">
            <button type="btn" class="buttons">Add to cart</button>
          </div>
      </div>            
    </div>
          `;
        });
      
        // Set the 'html' string as the content of the 'render' element
        render.innerHTML = `<div class="row">${html}</div>`;
      }
       else {
        render.innerHTML = 'Cannot find what you are looking for';
      }
    } catch ( err ) {
      console.log( err )
    }
  }
  searchApiCloth();
} );

    btnClickMenCloth.addEventListener( 'click', function () {
        const searchApiCloth = async function () {
          try {
            const response = await fetch( `https://fakestoreapi.com/products` );
            const data = await response.json();
            console.log( data );
            const clothCategory = { category: "men's clothing" };
            const isMatch = data.filter( obj => clothCategory.category === obj.category );
            
            if ( isMatch.length > 0 ) {
              let html = "";
              isMatch.forEach( obj => {
                const descriptionCloth = obj.description.split( '' );
                const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
                const first10Words2 = first10Words + '...';
                // Generate HTML for each matching object and append it to the 'html' string
                html += `
                <div class="col-md-3 mt-5 text-center media p-2" style="border-radius: 12px;">
      <div class="img mt-2">
          <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
      </div>
      <div class="food-details mt-3">
          <h5 class="descriptions mt-4">${first10Words2}</h5>
          <div class="mt-3">
            <h5 class="price inline-display-1">$${obj.price}</h5>
            <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
          </div>
          <div class="mt-3">
            <button type="btn" class="buttons">Add to cart</button>
          </div>
      </div>            
    </div>
                `;
              } );
      
              render.innerHTML = html;
            } else {
              render.innerHTML = 'Cannot find what you are looking for';
            }
          } catch ( err ) {
            console.log( err )
          }
        }
        searchApiCloth();
    } );

    btnClickJewelry.addEventListener( 'click', function () {
      const searchApiCloth = async function () {
        try {
          const response = await fetch( `https://fakestoreapi.com/products` );
          const data = await response.json();
          console.log( data );
          const clothCategory = { category: "jewelery" };
          const isMatch = data.filter( obj => clothCategory.category === obj.category );
              
          if ( isMatch.length > 0 ) {
            let html = "";
            isMatch.forEach( obj => {
              const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
              // Generate HTML for each matching object and append it to the 'html' string
              html += `
              <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
              <div class="img mt-2">
                  <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
              </div>
              <div class="food-details mt-3">
                  <h5 class="descriptions mt-4">${first10Words2}</h5>
                  <div class="mt-3">
                    <h5 class="price inline-display-1">$${obj.price}</h5>
                    <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
                  </div>
                  <div class="mt-3">
                    <button type="btn" class="buttons">Add to cart</button>
                  </div>
              </div>            
            </div>
                  `;
            } );
        
            render.innerHTML = html;
          } else {
            render.innerHTML = 'Cannot find what you are looking for';
          }
        } catch ( err ) {
          console.log( err )
        }
            
      }

      searchApiCloth();
    } );

    navBarJewelery.addEventListener( 'click', function () {
      const searchApiCloth = async function () {
        try {
          const response = await fetch( `https://fakestoreapi.com/products` );
          const data = await response.json();
          console.log( data );
          const clothCategory = { category: "jewelery" };
          const isMatch = data.filter( obj => clothCategory.category === obj.category );
              
          if ( isMatch.length > 0 ) {
            let html = "";
            isMatch.forEach( obj => {
              const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
              // Generate HTML for each matching object and append it to the 'html' string
              html += `
              <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
              <div class="img mt-2">
                  <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
              </div>
              <div class="food-details mt-3">
                  <h5 class="descriptions mt-4">${first10Words2}</h5>
                  <div class="mt-3">
                    <h5 class="price inline-display-1">$${obj.price}</h5>
                    <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
                  </div>
                  <div class="mt-3">
                    <button type="btn" class="buttons">Add to cart</button>
                  </div>
              </div>            
            </div>
                  `;
            } );
        
            render.innerHTML = html;
          } else {
            render.innerHTML = 'Cannot find what you are looking for';
          }
        } catch ( err ) {
          console.log( err )
        }
            
      }

      searchApiCloth();
    } );

    navbarElectronics.addEventListener( 'click', function () {
      const searchApiCloth = async function () {
        try {
          const response = await fetch( `https://fakestoreapi.com/products` );
          const data = await response.json();
          console.log( data );
          const clothCategory = { category: "electronics" };
          const isMatch = data.filter( obj => clothCategory.category === obj.category );
              
          if ( isMatch.length > 0 ) {
            let html = "";
            isMatch.forEach( obj => {
              const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
              // Generate HTML for each matching object and append it to the 'html' string
              html += `
              <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
              <div class="img mt-2">
                  <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
              </div>
              <div class="food-details mt-3">
                  <h5 class="descriptions mt-4">${first10Words2}</h5>
                  <div class="mt-3">
                    <h5 class="price inline-display-1">$${obj.price}</h5>
                    <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
                  </div>
                  <div class="mt-3">
                    <button type="btn" class="buttons">Add to cart</button>
                  </div>
              </div>            
            </div>
                  `;
            } );
        
            render.innerHTML = html;
          } else {
            render.innerHTML = 'Cannot find what you are looking for';
          }
        } catch ( err ) {
          console.log( err )
        }
            
      }

      searchApiCloth();
    } );

   navbarWomenClothes1.addEventListener( 'click', function () {
      const searchApiCloth = async function () {
        try {
          const response = await fetch( `https://fakestoreapi.com/products` );
          const data = await response.json();
          console.log( data );
          const clothCategory = { category: "women's clothing" };
          const isMatch = data.filter( obj => clothCategory.category === obj.category );
              
          if ( isMatch.length > 0 ) {
            let html = "";
            isMatch.forEach( obj => {
              const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
              // Generate HTML for each matching object and append it to the 'html' string
              html += `
              <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
              <div class="img mt-2">
                  <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
              </div>
              <div class="food-details mt-3">
                  <h5 class="descriptions mt-4">${first10Words2}</h5>
                  <div class="mt-3">
                    <h5 class="price inline-display-1">$${obj.price}</h5>
                    <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
                  </div>
                  <div class="mt-3">
                    <button type="btn" class="buttons">Add to cart</button>
                  </div>
              </div>            
            </div>
                  `;
            } );
        
            render.innerHTML = html;
          } else {
            render.innerHTML = 'Cannot find what you are looking for';
          }
        } catch ( err ) {
          console.log( err )
        }
            
      }

      searchApiCloth();
    } );

    navbarWomenClothes2.addEventListener( 'click', function () {
      const searchApiCloth = async function () {
        try {
          const response = await fetch( `https://fakestoreapi.com/products` );
          const data = await response.json();
          console.log( data );
          const clothCategory = { category: "women's clothing" };
          const isMatch = data.filter( obj => clothCategory.category === obj.category );
              
          if ( isMatch.length > 0 ) {
            let html = "";
            isMatch.forEach( obj => {
              const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
              // Generate HTML for each matching object and append it to the 'html' string
              html += `
              <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
              <div class="img mt-2">
                  <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
              </div>
              <div class="food-details mt-3">
                  <h5 class="descriptions mt-4">${first10Words2}</h5>
                  <div class="mt-3">
                    <h5 class="price inline-display-1">$${obj.price}</h5>
                    <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
                  </div>
                  <div class="mt-3">
                    <button type="btn" class="buttons">Add to cart</button>
                  </div>
              </div>            
            </div>
                  `;
            } );
        
            render.innerHTML = html;
          } else {
            render.innerHTML = 'Cannot find what you are looking for';
          }
        } catch ( err ) {
          console.log( err )
        }
            
      }

      searchApiCloth();
    } );


    btnClickWomenCloth.addEventListener( 'click', function () {
      const searchApiCloth = async function () {
        try {
          const response = await fetch( `https://fakestoreapi.com/products` );
          const data = await response.json();
          console.log( data );
          const clothCategory = { category: "women's clothing" };
          const isMatch = data.filter( obj => clothCategory.category === obj.category );
              
          if ( isMatch.length > 0 ) {
            let html = "";
            isMatch.forEach( obj => {
              const descriptionCloth = obj.description.split( '' );
      const first10Words = descriptionCloth.slice( 0, 85 ).join( '' );
      const first10Words2 = first10Words + '...';
              // Generate HTML for each matching object and append it to the 'html' string
              html += `
              <div class="col-md-3 mt-5 text-center media border p-2" style="border-radius: 12px;">
              <div class="img mt-2">
                  <img src="${obj.image}" alt="${obj.description}" class='img-fluid store-img'>
              </div>
              <div class="food-details mt-3">
                  <h5 class="descriptions mt-4">${first10Words2}</h5>
                  <div class="mt-3">
                    <h5 class="price inline-display-1">$${obj.price}</h5>
                    <h5 class="rating inline-display-1"><span>${ obj.rating.rate }(${ obj.rating.count })</span></h5> 
                  </div>
                  <div class="mt-3">
                    <button type="btn" class="buttons">Add to cart</button>
                  </div>
              </div>            
            </div>
                  `;
            } );
        
            render.innerHTML = html;
          } else {
            render.innerHTML = 'Cannot find what you are looking for';
          }
        } catch ( err ) {
          console.log( err )
        }
            
      }

      searchApiCloth();
    } );

    