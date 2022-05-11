document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.trim().length === 0) {
        alert('Adj meg egy teendőt!')
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
          <button class="delete">
                    <i class="far fa-trash-alt"></i>
          </button>
        </div>
        `;
        let currentTasks = document.querySelectorAll('.delete');
        for(let i = 0; i <currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}
