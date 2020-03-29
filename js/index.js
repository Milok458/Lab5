function listActions(){
  let list = document.querySelector('.list')

  list.addEventListener('click', (event) =>{
    if(event.target.matches('.checkBtn')){
      event.target.parentElement.querySelector('h4').style.textDecoration = "line-through";
    }
    else{
      if(event.target.matches('.delBtn')){
        list.removeChild(event.target.parentElement);
      }
    }
  });
}

function addElement(){
  let btn = document.querySelector( '.itemBtn' );

  btn.addEventListener( 'click', ( event ) =>{
    console.log("I am entering the event");
    let container = document.querySelector( '.list' );

    let name = document.getElementById("tfName").value;

    container.innerHTML +=
        `
          <li class="listItem">
            <h4 class="itemName">`+ name +`</h4>
            <button class="checkBtn">check</button>
            <button class="delBtn">delete</button>
          </li>
        `;
  });

}

function init(){
  addElement();
  listActions();
}
  
init();