import '../css/styles.css';
import filesOfSemesters from '../config/documents.json';

function viewSemesterRecords(semesterRecords) {
  const files = filesOfSemesters[semesterRecords.getAttribute('semester')];

  const saveImg = document.createElement('img');
  saveImg.setAttribute('src', '/src/images/save.png');
  saveImg.classList.add('img-save');
  for (const file of files) {
    const record = document.createElement('span');
    record.classList.add('flex', 'justify-center');
    const recordText = document.createElement('p');
    recordText.innerHTML += file.name;
    recordText.classList.add('text-blue', 'font-roboto', 'text-2xl', 'font-bold', 'w-[170px]');
    record.appendChild(recordText.cloneNode(true));
    const recordLink = document.createElement('a');
    recordLink.setAttribute('href', file.src);
    recordLink.setAttribute('target', '_blank');
    recordLink.appendChild(saveImg.cloneNode(true));
    record.appendChild(recordLink.cloneNode(true));
    semesterRecords.appendChild(record);
  }
}

function onSemesterClick(event) {
  const semesterWrapper = event.currentTarget;
  const semesterTitle = semesterWrapper.querySelector('.semesterTitle');
  const semesterArrow = semesterWrapper.querySelector('.semesterArrow');

  semesterTitle.classList.toggle('text-purple');
  semesterArrow.classList.toggle('icon-purple');
  semesterArrow.classList.toggle('rotate-180');

  const semesterRecords = semesterWrapper.parentNode.querySelector('.semesterRecords');

  if (semesterWrapper.hasAttribute('clicked')) {
    semesterWrapper.removeAttribute('clicked');
    semesterRecords.innerHTML = '';
  } else {
    semesterWrapper.setAttribute('clicked', '');
    viewSemesterRecords(semesterRecords);
  }
}

document.getElementById('firstSemesterWrapper').addEventListener('click', onSemesterClick);
document.getElementById('secondSemesterWrapper').addEventListener('click', onSemesterClick);
