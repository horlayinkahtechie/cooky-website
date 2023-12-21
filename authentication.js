const showPasswordCheckBox = document.querySelector( '.show-password' );
const showPasswordInput = document.querySelector( '.show-password-input' );

showPasswordCheckBox.addEventListener( 'change', function () {
    if ( showPasswordCheckBox.checked ) {
        showPasswordInput.type = 'text';
    } else {
        showPasswordInput.type = 'password';
    }
} );