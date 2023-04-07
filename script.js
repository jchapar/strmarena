const accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    header.classList.toggle('active')
    const accordionContent = header.nextElementSibling
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none'
    } else {
      accordionContent.style.display = 'block'
    }
  })
})
