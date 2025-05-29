// Toggle class name for all tags of specified type
const toggleClass = (className, tag="img") => {
  console.log("Everyday I'm toggling...")
  const tags = document.getElementsByTagName(tag)
  for (tag of tags) {
      tag.classList.toggle(className)
  }
}

// Default settings go here
const setDefault = () => {
  toggleClass("blackout")
}


// Add default settings classes
const observer = new MutationObserver(() => {
  setDefault()
})

observer.observe(document.body, {
  childList: true,
  subtree: true
})