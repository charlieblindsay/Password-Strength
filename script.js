const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progress');

passwordInput.addEventListener('keyup', function(){
    strength(passwordInput);
})

// List containing regular expressions
// When each is matched, the value of the strength progress bar is incremented

// (index: what it will match)
// 0: lowercase letters
// 1: uppercase letters
// 2: numbers
// 3: characters other than the 3 above (and underscores)
// 4: password is greater than 8 characters

const regexList = [/[a-z_]+/, /[A-Z_]+/, /[0-9_]+/, /[^\w]+/, /.{8,}/];

const strength = function(input){
    let score = 0;
    const increment = 100 / regexList.length;
    regexList.forEach((regex) => {
        if (input.value.match(regex)){
            score += increment;
        }
    });
    progressBar.value = score;
}
