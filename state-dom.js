const array = [

]

const render = (arr) => {
  const list = document.getElementById('list')
  list.innerHTML = '';

  arr.forEach((item, index) => {
    const li = document.createElement('div')
    const button = document.createElement('button')
    const checkbox = document.createElement('input')

    checkbox.type ='checkbox'
    checkbox.classList.add('checkbox')

    button.classList.add('btn')
    button.textContent = 'X'

    li.append(checkbox, item.text, button)
    list.append(li)

    button.addEventListener('click', () => {
      remove(index)
    })

    checkbox.checked = arr[index].done

    checkbox.addEventListener('click', () => {
      if (arr[index].done === true) {
        li.classList.remove('red')
      } else {
        li.classList.add('red')
      }
      checkTodo(index)
    })

    document.body.append(list)
  })
}
render(array)
const remove = (index) => {
  array.splice(index, 1)
  document.getElementById('list').textContent = ''
  render(array)
}

const addTodo = (item) => {
  array.push({ text: item })
  render(array)
  input.value = ''
}
const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', () => {
  if (input.value != '') {
    addTodo(input.value)
  } else {
    input.value = ''
  }
})

const checkTodo = (index) => {
  array[index].done = !array[index].done
}

