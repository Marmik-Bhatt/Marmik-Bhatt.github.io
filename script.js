/* Add any JavaScript you need to this file. */

//Function for creating form through DOM
function formcreation() {

  var createLabel = document.createElement('label');
  createLabel.setAttribute('for', 'Email');
  let form = document.getElementById('form');
   createLabel.classList.add("nicely-spaced");
  createLabel.innerHTML = 'Email: ';
  form.appendChild(createLabel);
  var input1 = document.createElement('input');
  input1.classList.add("nicely-spaced");
  input1.type = 'text';

  input1.name = 'Email';
  input1.id = 'Email';
  form.appendChild(input1);



  var createLabel2 = document.createElement('label');
  createLabel2.classList.add("nicely-spaced");
  createLabel2.setAttribute('for', ' Name');
  createLabel2.innerHTML = ' Name: ';

  form.appendChild(createLabel2);

  var input2 = document.createElement('input');
  input2.classList.add("nicely-spaced");
  input2.type = 'text';

  input2.name = ' Name';
  input2.id = 'Fname';
  form.appendChild(input2);

 

  var createLabel4 = document.createElement('label');
  createLabel4.classList.add("nicely-spaced");
  createLabel4.innerHTML = "City: ";
  form.appendChild(createLabel4);

  var input9 = document.createElement('input');
 input9.classList.add("nicely-spaced");
  input9.type = 'text';
  input9.id = "cities";
  input9.setAttribute('list' , 'City');
 

  createLabel4.appendChild(input9);

  var datalist = document.createElement('datalist');
  datalist.id = 'City';
  datalist.name = "checking";

  createLabel4.appendChild(datalist);
     
  var option1 = document.createElement('option');
  option1.value = "Toronto";
 

  datalist.appendChild(option1);

  var option2 = document.createElement('option');
  option2.value = "Brampton";


  datalist.appendChild(option2);

  var option3 = document.createElement('option');
  option3.value = "Mississauga";


datalist.appendChild(option3);

var option4 = document.createElement('option');
  option4.value = "Hamilton";


datalist.appendChild(option4);



  var postal = document.createElement('label');
postal.classList.add("nicely-spaced");
  postal.innerHTML = " Postal Code: ";

  form.appendChild(postal);

  var postalcode = document.createElement("input");
  postalcode.classList.add("nicely-spaced");
  postalcode.type = 'text';
postalcode.id = "pcode";
postalcode.name =" Postalcode";

form.appendChild(postalcode);

var postalbr = document.createElement('br');

form.appendChild(postalbr);

  var input4 = document.createElement('input');
  input4.type = 'radio';
  input4.name = 'radios';
  input4.id = 'Question';
  input4.value = " customer question";

  let radioLabel = document.createElement('label');
  radioLabel.setAttribute('for', 'Question');
  radioLabel.innerHTML = 'Question: ';
  form.appendChild(radioLabel);
  form.appendChild(input4);

  var input5 = document.createElement('input');
  input5.type = 'radio';
  input5.name = "radios";
  input5.id = 'Comment';
input5.value = 'user comment';

  let radioLabel1 = document.createElement('label');
  radioLabel1.setAttribute('for', 'comment');
  radioLabel1.innerHTML = ' Comment ';
  form.appendChild(radioLabel1);
  form.appendChild(input5);

  var radiobr = document.createElement("br");

  form.appendChild(radiobr);


  var input10 = document.createElement('input');
  input10.type = 'radio';
  input10.name = 'radios';
  input10.id = 'Order';
  input10.value = 'Customer orders';

  let radioLabel2 = document.createElement('label');
  radioLabel2.setAttribute('for', 'Order');
  radioLabel2.innerHTML = ' Order Problem ';
  form.appendChild(radioLabel2);
  form.appendChild(input10);

  var br6 = document.createElement('br');
  form.appendChild(br6);

  var ordernum = document.createElement('label');
  ordernum.innerHTML = " Order Number: ";
  ordernum.style.display = "none";
 ordernum.id = "Olabel";
  form.appendChild(ordernum);

  var ordernuminp = document.createElement("input");
  ordernuminp.type = 'text';
ordernuminp.id = "ordernum";
ordernuminp.name =" ordernum";
ordernuminp.style.display = "none";
form.appendChild(ordernuminp);

var orderbr = document.createElement('br');

form.appendChild(orderbr);


  var input6 = document.createElement('textarea');
  input6.rows = '4';
  input6.cols = '30';
  input6.name = 'usrcomment';
  input6.form = 'userform';
  input6.placeholder = 'Enter text here...';
  input6.id = "text";

  form.appendChild(input6);

  var br7 = document.createElement('br');
  form.appendChild(br7);


  var hiddeninput = document.createElement('input');
  hiddeninput.type = "hidden";
  hiddeninput.name = "name: ";
  hiddeninput.value = "Marmik";
hiddeninput.id = "hiddeninp";
  form.appendChild(hiddeninput);

  var input7 = document.createElement('input');
  input7.type = 'submit';
 
  form.appendChild(input7);


}


function validationcheck() {

  valid = true;
  
if( validation() == false) {
     valid = false;
} else {

  valid == true;
}
 

if(postalValidation() == false) {

  valid = false;
} else {

  if (valid == false)  {
       
     valid = false;

  } else {
    valid = true;
  }
}

 if(textvalidation()==false) {
  valid = false;

 } else {

  if (valid == false)  {
       
    valid = false;

 } else {
   valid = true;

 }

 }


 if(emailValidation() == false) {
  valid = false;

} else {

 if (valid == false)  {
      
   valid = false;

} else {
  valid = true;

}


}


 if(dropboxValidation() == false) {


  valid = false;

} else {

 if (valid == false)  {
      
   valid = false;

} else {
  valid = true;

 }
}
 return valid;

}


function emailValidation() {
var valid = false;
var email= document.getElementById("Email").value;

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (re.test(email)) {

 valid = true;
  

} else {

  alert('invalid email');
  
}
return valid;
}

function dropboxValidation() {
var dp = true;

   var cities = document.getElementById("cities");

   if(cities.value.trim().length == 0) {

    alert("No city given");
   cities.value= "";
   cities.focus();
   dp = false;
   } else {

    dp = true;
   }
 return dp;

}





function textvalidation() {
  var checktext = true;
 //let forms = document.getElementById('form');
  let comments = document.getElementById('text')
 if(comments.value.trim().length == 0) {

   alert("No input given!");

   comments.value= "";
   comments.focus();

   checktext = false;

 } else {

   checktext = true;
 }
 
 return checktext;
}


function postalValidation() {
var checking = true;
  var regEx = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

  if (regEx.test(document.getElementById('pcode').value )) {

    return checking;
  } else {

    alert('Invalid Postal Code');

    checking = false;
    return checking;
  }

}
function validation() {
 let check = true;
  var allAlpha = true; 
  let name = document.getElementById("Fname");
  
  var inputValue = name.value.trim();
  
  if (inputValue.length == 0) {      /* check the length */
   alert("No input! Please enter a meaningful name with all Alphabet letter.\n");
     check = false;
      // return false;
    }  
    inputValue = inputValue.toUpperCase();  
       for (var i = 0; i < inputValue.length; i++) {
            // check all character are letters
            if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { 
              
             allAlpha = false; }
       }  
      if (!allAlpha){
         alert("Name : Please enter a meaningful name with all alphabet letters.");
       check = false;
       //return false;
      } 
        return check;
  }

  function emailValid() {
    validemail = true;
    var email= document.getElementById("email").value;
    
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(email)) {
    
      valid = true;
    
    } else {
    
      alert('invalid email');
     valid = false;
    }

    return false;
    }
 
    function valid() {
        
      if(emailValid() == false) {

        return false;
      } else {

        return true;
      }

    }

window.onload = function() {
 
  let women = document.querySelector('#menu_3');
  let men = document.querySelector('#menu_2');
  let showall = document.querySelector('#menu_1');
  let hats = document.querySelector('#menu_4');

  let form = document.querySelector('#form');
  let filterby = document.querySelector('#filterby');

  

  if( document.querySelector("#forms") != null ){
    form.innerHTML = '';

    formcreation();

      form.classList.add('active');

      var radio = document.getElementById("Order");

      radio.addEventListener("change", function () {

          document.getElementById("Olabel").style.display = "inline";
          document.getElementById("ordernum").style.display = "inline";


      });

      var radio1 = document.getElementById("Comment");

      radio1.addEventListener("change", function () {


          document.getElementById("Olabel").style.display = "none";
          document.getElementById("ordernum").style.display = "none";

      });


      var radio2 = document.getElementById("Question");


      radio2.addEventListener("change", function () {


          document.getElementById("Olabel").style.display = "none";
          document.getElementById("ordernum").style.display = "none";



      });
  };


  /*clicking on womens clothing utton and filtering clothing */
  if(women != null) {
  women.addEventListener('click', function() {
   
    filterby.innerHTML = 'Showing Womens clothing';
    filter('womens');
  });
}

  /*clicking on mens clothing button and filtering clothing */

  if(men !=null) {
  men.addEventListener('click', function() {
   
    filterby.innerHTML = 'Showing Mens clothing';
    filter('mens');
  });
}

  /*clicking on show all button */
  if( showall != null) {
  showall.addEventListener('click', function() {
   
    filterby.innerHTML = '';
    filter('product');
  });
}
  /*clicking on Hats button and filtering Hats*/
  if( hats != null) {
  hats.addEventListener('click', function() {
   
    filterby.innerHTML = 'Showing Hats';
    filter('hats');
  });
}



  /*filter function for filtering data*/
  function filter(classes) {
    let products = document.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
      if (!products.item(i).classList.contains(classes)) {
        products.item(i).style.display = 'none';
      } else {
        products.item(i).style.display = 'inline-block';
      }
    }
  }
};
