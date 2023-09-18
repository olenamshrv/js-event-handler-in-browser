document.querySelector('.form__button').onclick = () => {
  const form = document.getElementById('form')

  // if (form.reportValidity()) {
  //   form.onsubmit()
  // } else {
  //   form.reset()
  // }

  //========

  // console.log(form.checkValidity())

  // const username = document.getElementById('username')

  // console.log(username.checkValidity())

  // if (username.checkValidity()) {
  //   form.submit()
  // }

  //========

  // const username = document.getElementById('username')

  // console.log(username.reportValidity())

  // if (username.reportValidity()) {
  //   form.submit()
  // }

  // //========

  // const email = document.getElementById('email')

  // console.log(email.reportValidity())

  // if (email.reportValidity()) {
  //   form.submit()
  // }

  //========

  const email = document.getElementById('email')

  // console.log(email.checkValidity())

  if (!email.checkValidity()) {
    if (email.value.length === 0) {
      email.setCustomValidity(
        'Помилка. Введіть корректне значення.',
      )
    }

    // if (email.value.length > 10) {
    //   email.setCustomValidity('Помилка. Введіть менше 10.')
    // }

    email.reportValidity()
  }
}

// document.querySelector('.form__button--add').onclick =
//   () => {
//     const age = document.getElementById('age')

//     age.stepUp(10)
//   }

document
  .querySelectorAll('.form__button--add')
  .forEach((element) => {
    // console.log(element)

    element.onclick = () => {
      if (element.getAttribute('operator') === '+') {
        return age.stepUp(
          Number(element.getAttribute('value')),
        )
      }

      if (element.getAttribute('operator') === '-') {
        return age.stepDown(
          Number(element.getAttribute('value')),
        )
      }
    }
  })

document.querySelector('.form__button--save').onclick =
  () => {
    const value = document.getElementById('username').value

    if (value.length === 0) alert('Даних немає')

    navigator.clipboard
      .writeText(value)
      .then(() => alert('Дані скопійовано'))
  }

// document
//   .querySelector('.form__button')
//   .addEventListener('click', () => {
//     alert('click')
//   })

// document
//   .querySelector('.form__button')
//   .addEventListener('click', () => {
//     alert('click 2')
//   })

// //=====

// const listener = () => {
//   alert('click')
// }

// document
//   .querySelector('.form__button')
//   .addEventListener('click', listener)

// document
//   .querySelector('.form__button')
//   .removeEventListener('click', listener)

//=====

// const listener = () => {
//   alert('click')
// }

// const listener2 = () => {
//   alert('click 2')
// }

// document
//   .queryselector('.form__button')
//   .addeventlistener('click', listener)

// document
//   .queryselector('.form__button')
//   .addeventlistener('click', listener2)

// document
//   .queryselector('.form__button')
//   .removeeventlistener('click', listener)

// //==================

// const outer = document.getelementbyid('outer')
// const inner = document.getelementbyid('inner')

// outer.addeventlistener(
//   'click',
//   () => alert('capture phase (фаза захоплення) outer'),
//   {
//     capture: true,
//   },
// )

// inner.addeventlistener(
//   'click',
//   () => alert('capture phase (фаза захоплення) inner'),
//   {
//     capture: true,
//   },
// )

// outer.addeventlistener(
//   'click',
//   () => alert('bubble phase (фаза спливання) outer'),
//   {
//     capture: false,
//   },
// )

// inner.addeventlistener(
//   'click',
//   () => alert('bubble phase (фаза спливання) inner'),
//   {
//     capture: false,
//     once: true,
//   },
// )

//============================================

// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     console.log(e)
//   })

// //=================================

// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     // e.preventDefault()

//     alert(e.defaultPrevented)
//   })

// //=================================

// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     e.preventDefault()

//     console.log(e.target)
//     console.log(e.currentTarget)
//   })

//=================================

// document
//   .querySelector('.form__button')
//   .addEventListener('click', (e) => {
//     e.preventDefault()

//     console.log(e.composedPath())
//   })

// // //==================

// const outer = document.getElementById('outer')
// const inner = document.getElementById('inner')

// outer.addEventListener(
//   'click',
//   () => alert('capture phase (фаза захоплення) outer'),
//   {
//     capture: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     e.stopImmediatePropagation()
//     alert('Capture phase (фаз захоплення) inner')
//   },
//   {
//     capture: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     alert('Capture phase (фаз захоплення) inner 2')
//   },
//   {
//     capture: true,
//   },
// )

// outer.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) outer'),
//   {
//     capture: false,
//   },
// )

// inner.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) inner'),
//   {
//     capture: false,
//     once: true,
//   },
// )

//==================

// const outer = document.getElementById('outer')
// const inner = document.getElementById('inner')

// outer.addEventListener(
//   'click',
//   () => alert('capture phase (фаза захоплення) outer'),
//   {
//     capture: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation()
//     alert('Capture phase (фаз захоплення) inner')
//   },
//   {
//     capture: true,
//   },
// )

// inner.addEventListener(
//   'click',
//   (e) => {
//     alert('Capture phase (фаз захоплення) inner 2')
//   },
//   {
//     capture: true,
//   },
// )

// outer.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) outer'),
//   {
//     capture: false,
//   },
// )

// inner.addEventListener(
//   'click',
//   () => alert('Bubble phase (фаза спливання) inner'),
//   {
//     capture: false,
//     once: true,
//   },
// )

//==================

const button = document.querySelector('.form__button')

const myEvent = new CustomEvent('myevent', {
  detail: { id: 100 },
})

button.addEventListener('myevent', (e) => {
  alert(e.detail.id)
  // console.log(e)
})

button.dispatchEvent(myEvent)
