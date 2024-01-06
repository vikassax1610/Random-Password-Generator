const passwordBox = document.querySelector('#password');
    const lenght= 12 ;

    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789";
    const symbol="!@#$%^&*()-_+=[]{};:";

    const allchars= upperCase + lowerCase + number + symbol;

    function createPassword(){
      let password="";

      // these below 4 lines are not necessary in this code

      // password += upperCase[Math.floor(Math.random() * upperCase.length)];
      // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      // password += number[Math.floor(Math.random() * number.length)];
      // password += symbol[Math.floor(Math.random() * symbol.length)];

      while(lenght > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
      }
      passwordBox.value=password;
    }

    function copyPassword(){
      passwordBox.select();
      document.execCommand("copy");
    }
