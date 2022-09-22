function scrollTo(element){
  document.querySelector(element).scrollIntoView({ behavior: 'smooth' })
}

const sectionList = document.querySelectorAll('li a')

sectionList.forEach((sectionSelected) => [
  sectionSelected.addEventListener('click', (e) => {
    e.preventDefault()
    const element = sectionSelected.getAttribute("href")
    scrollTo(element)
  })
])