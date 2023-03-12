import '../css/styles.css';

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

document.getElementById('firstSemesterWrapper').addEventListener('click', onSemesterClick);
document.getElementById('secondSemesterWrapper').addEventListener('click', onSemesterClick);
