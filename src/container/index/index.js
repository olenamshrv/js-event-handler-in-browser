class Slider {
  static #content = null
  static #left = null
  static #right = null

  static #count = 1
  static #max = null

  static init() {
    this.#content = document.querySelector(
      '.slider__content',
    )

    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )

    this.#max = this.#content.childElementCount

    console.log(
      this.#content,
      this.#left,
      this.#right,
      this.#count,
      this.#max,
    )

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidth = this.#content.scrollWidth

    let scroll = 0

    if (side === 'right') {
      if (this.#count < this.#max) {
        this.#count += 1
      } else if (
        this.#count === this.#max ||
        scrollLeft === scrollWidth - offsetWidth
      ) {
        this.#count = 1
      }
    }

    if (side === 'left') {
      if (this.#count > 1) {
        this.#count -= 1
      } else if (this.#count === 1 || scrollLeft === 0) {
        this.#count = this.#max
      }
    }

    scroll = offsetWidth * (this.#count - 1)

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })

    // console.log('scroll', scroll)
    // console.log('count', this.#count)
  }
}

Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static init() {
    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )

    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#button = document.querySelector('.header__button')

    console.log(this.#wrapper, this.#height, this.#button)

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    this.#button.classList.toggle('header__button--open')
    this.#button.classList.toggle('header__button--close')

    if (
      this.#button.classList.contains(
        'header__button--close',
      )
    ) {
      this.#wrapper.style.setProperty(
        'height',
        this.#height,
      )
    } else {
      this.#wrapper.style.setProperty('height', 0)
    }
  }

  //   static #isOpen = false

  //   static #toggle = () => {
  //     if (this.#isOpen) {
  //       this.#button.classList.replace(
  //         'header__button--close',
  //         'header__button--open',
  //       )

  //       this.#wrapper.style.height = 0
  //     } else {
  //       this.#button.classList.replace(
  //         'header__button--open',
  //         'header__button--close',
  //       )
  //       this.#wrapper.style.height = `${this.#height}px`
  //     }

  //     this.#isOpen = !this.#isOpen
  //   }
}

Header.init()
