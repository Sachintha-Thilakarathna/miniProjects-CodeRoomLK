const todoForm = document.getElementById("todoForm");
const todoListUl = document.getElementById("todoListUl");
const todoInput = document.getElementById("todoInput");

todoForm.addEventListener("submit",function(event){
    event.preventDefault();

    const todoInputValue = document.getElementById("todoInput").value;
   
    
    const newLiEl =
    `<li class="list-group-item d-flex justify-content-around align-items-center">
            <div class="flex-grow-1 me-4">
                <input type="text" class="form-control" id="text" aria-describedby="text" value="${todoInputValue}" disabled>
                </div>
                <div>
                <i class="fa-solid fa-pen-to-square pointer m-2" onclick='edit(event)'></i>
                <i class="fa-solid fa-trash pointer" onclick='remove(event)'></i>
                </div>
            </li>`
            
            todoListUl.innerHTML += newLiEl;  
            todoForm.reset();
        })

        function remove(event){
            event.target.closest("li").remove();
        }

        function edit(event){
        const inputEl= event.target.closest('li').querySelector('input');
       
         
        inputEl.disabled = false;
        }

        
    
                  
