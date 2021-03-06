const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const html = document.querySelector("html");
const distance = banner.getBoundingClientRect().height/3;

window.addEventListener('scroll', ()=> {
  if(html.scrollTop > distance){
      header.classList.add("header--dark");
  }
  else {
    header.classList.remove("header--dark");
  }
})

// $(function() {
//   function abrir() {
//     $("#dialog").dialog();
//   }

//   $( "#showPopup" ).click(function(){
//     abrir();
//     console.log("Soy Rody")
//   })

// } );


$( function() {
  $( "#dialog" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
} );

