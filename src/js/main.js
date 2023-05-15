import '../css/styles.scss';

function onSemesterClick(event) {
  const semesterWrapper = event.currentTarget;
  const semesterRecords = semesterWrapper.parentNode.querySelector('.semesterRecords');
  const semesterTitle = semesterWrapper.querySelector('.semesterTitle');
  const semesterArrow = semesterWrapper.querySelector('.semesterArrow');

  semesterRecords.classList.toggle('hidden');
  semesterTitle.classList.toggle('text-webotsGreen');
  semesterArrow.classList.toggle('icon-webotsGreen');
  semesterArrow.classList.toggle('rotate-180');
}
document.getElementById('firstSemesterWrapper').addEventListener('click', onSemesterClick);
document.getElementById('secondSemesterWrapper').addEventListener('click', onSemesterClick);

window.onload = () => { // highlight active section in navbar
  const sections = [
    document.getElementById('domov'),
    document.getElementById('projekt'),
    document.getElementById('tim'),
    document.getElementById('simulacia'),
    document.getElementById('dokumenty'),
  ];
  
  const observer = new IntersectionObserver((entries) => {
    for(const entry of entries)
      if(entry.isIntersecting) {
        var active = document.querySelector(".nav-a-active");
        if(active != null) active.classList.remove("nav-a-active");
        document.getElementById("nav-" + entry.target.id).classList.add("nav-a-active");
      }
    },{
    rootMargin: "-50% 0px"
  });
  for (let i = 0; i < sections.length; i++)
   observer.observe(sections[i]);
};

window.onscroll = function () { // Add nav bckg on scroll
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
