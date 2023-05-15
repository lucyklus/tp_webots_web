import '../css/styles.scss';

function onSemesterClick(event) {
  const semesterWrapper = event.currentTarget;
  const semesterRecords = semesterWrapper.parentNode.querySelector('.semesterRecords');
  const semesterTitle = semesterWrapper.querySelector('.semesterTitle');
  const semesterArrow = semesterWrapper.querySelector('.semesterArrow');

  semesterRecords.classList.toggle('hidden');
  semesterTitle.classList.toggle('text-purple');
  semesterArrow.classList.toggle('icon-purple');
  semesterArrow.classList.toggle('rotate-180');
}

function activeNav() { 
  console.log(window.scrollY);
  const sections = [
    document.getElementById('domov'),
    document.getElementById('projekt'),
    document.getElementById('tim'),
    document.getElementById('simulacia'),
    document.getElementById('dokumenty'),
  ];

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 400;
    console.log(current)
    console.log(sectionHeight)
    console.log(sectionTop)
    let sectionId = current.getAttribute("id");

    if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
      document.getElementById("nav-" + sectionId).classList.add("nav-a-active");
    } else {
      document.getElementById("nav-" + sectionId).classList.remove("nav-a-active");
    }
  });
}

document.getElementById('firstSemesterWrapper').addEventListener('click', onSemesterClick);
document.getElementById('secondSemesterWrapper').addEventListener('click', onSemesterClick);
document.addEventListener('scroll', activeNav);

window.onscroll = function () {
  let isScrolled = false
  const scrollPoint = 100
  const nav = document.getElementById('navbar')

  function onScroll () {
    if (window.scrollY > scrollPoint && !isScrolled ) {
      nav.classList.add("nav-scrolled");
      isScrolled = true
    } else if (window.scrollY <= scrollPoint && isScrolled) {
      nav.classList.remove("nav-scrolled");
      isScrolled = false
    }
  }
  onScroll()
  return onScroll
}()
