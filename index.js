$(document).ready(function(){
    var getAndDisplayAllTasks = function () {
      $.ajax({
        type: 'GET',
        url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1241',
        dataType: 'json',
        success: function (response, textStatus) {
          $('.task').empty();
          response.tasks.forEach(function (task) {
            $('.task').append('<div class="task-added"><h4>' + task.content + '</h4><button class="delete" data-id="' + task.id + '">Delete</button><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '>');
          });
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });
    }
    
    var createTask = function () {
      $.ajax({
        type: 'POST',
        url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1241',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          task: {
            content: $('#new-task-content').val()
          }
        }),
        success: function (response, textStatus) {
          $('#new-task-content').val('');
          getAndDisplayAllTasks();
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });  
    }
    
    $('#create-task').on('submit', function (e) {
      e.preventDefault();
      createTask();
    });
  
    var deleteTask = function (id) {
      $.ajax({
        type: 'DELETE',
        url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '?api_key=1241',
        success: function (response, textStatus) {
          getAndDisplayAllTasks();
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });
    }
  
    $(document).on('click', '.delete', function () {
      deleteTask($(this).data('id'));
    });
  
    var markTaskComplete = function (id) {
        $.ajax({
       type: 'PUT',
          url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '/mark_complete?api_key=1241',
          dataType: 'json',
          success: function (response, textStatus) {
            getAndDisplayAllTasks();
          },
          error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
          }
        });
      }
      var markTaskActive = function (id) {
        $.ajax({
       type: 'PUT',
          url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '/mark_active?api_key=1241',
          dataType: 'json',
          success: function (response, textStatus) {
            getAndDisplayAllTasks();
          },
          error: function (request, textStatus, errorMessage) {
            console.log(errorMessage);
          }
        });
      }
      $(document).on('change', '.mark-complete', function () {
        if (this.checked) {
            markTaskComplete($(this).data('id'));
          } else {
            markTaskActive($(this).data('id'));
          }
       });
    getAndDisplayAllTasks();
  });








/*$(document).ready(function(){
    var getAndDisplayAllTasks = function () {
      $.ajax({
        type: 'GET',
        url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1238',
        dataType: 'json',
        success: function (response, textStatus) {
          $('#todo-list').empty();
          response.tasks.forEach(function (task) {
            $('#todo-list').append('<div class="row"><p class="col-xs-8">' + task.content + '</p><button class="delete" data-id="' + task.id + '">Delete</button>');
          });
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });
    }
    
    var createTask = function () {
      $.ajax({
        type: 'POST',
        url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1241',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          task: {
            content: $('#new-task-content').val()
          }
        }),
        success: function (response, textStatus) {
          $('#new-task-content').val('');
          getAndDisplayAllTasks();
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });  
    }
    
    $('#create-task').on('submit', function (e) {
      e.preventDefault();
      createTask();
    });
  
    var deleteTask = function (id) {
      $.ajax({
        type: 'DELETE',
        url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '?api_key=1238',
        success: function (response, textStatus) {
          getAndDisplayAllTasks();
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });
    }
  
    $(document).on('click', '.delete', function () {
      deleteTask($(this).data('id'));
    });
  
    getAndDisplayAllTasks();
  });

*/






/*let but = document.querySelector('button');
let add = document.querySelector('.act');
let input = document.querySelector('#ingresar-tarea');
let listaTarea = document.querySelector('#lista-de-tareas')
let value;

function agregarTarea(){
    if(input.value){
        let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
    let texto = document.createElement('p');
    texto.innerHTML = input.value;
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(texto);
    tareaNueva.appendChild(iconos);

    let completar = document.createElement('i');
    completar.classList.add('bi','bi-check-circle-fill','icono-completar');
    let eliminar = document.createElement('i');
    eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');

    iconos.append(completar,eliminar);
    listaTarea.appendChild(tareaNueva)

    }else{
        alert('Ingresa una tarea')
    }
    
}
 but.addEventListener('click',agregarTarea)
 
 function taskCompleted(e){
    let var1 = e.target.parentNode.parentNode;
    var1.classList.toggle('test1');
}

function taskEliminate(e){
    let var1 = e.target.parentNode.parentNode;
    var1.remove();
}

 
 */