const animItems = document.querySelectorAll("._anim-item");


if (animItems.length > 0) {
  window.addEventListener("scroll", ()=>animOnScroll(animItems));
  animOnScroll(animItems);
}

function animOnScroll(animElements) {
  for (let i = 0; i < animElements.length; i++) {
    const animItem = animElements[i];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffsetTop = offset(animItem).top;
    const animStart = animItem.classList.contains('guide-block')? 2.5 : 4;
      
    const animItemPoint =
      animItemHeight > window.innerHeight
        ? window.innerHeight - window.innerHeight / animStart
        : window.innerHeight - animItemHeight / animStart;

    if (
      scrollY > animItemOffsetTop - animItemPoint &&
      scrollY < animItemOffsetTop + animItemHeight
    ) {
        animItem.classList.add("_active");
    } else {
        if (!animItem.classList.contains("_anim-once")) {
            animItem.classList.remove("_active");
        }
        
    }
  }
}
function offset(element) {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
