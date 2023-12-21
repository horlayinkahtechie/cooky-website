const clickToScrollTo = document.querySelector( '.scroll-to-service' );
const scrollTo = document.querySelector( '.scroll-to' );

clickToScrollTo.addEventListener( 'click', function ( e ) {
    e.preventDefault();
    scrollTo.scrollIntoView( { behavior: 'smooth' } );
} );

const navLink = document.querySelector( '.nav_links' );
  navLink.addEventListener( 'click', function ( e ) {
    e.preventDefault();
  
    if ( e.target.classList.contains( 'nav_links' ) ) {
      const id = e.target.getAttribute( 'href' );
      document.querySelector( id ).scrollIntoView( { behavior: 'smooth' } );
    }
  } );
