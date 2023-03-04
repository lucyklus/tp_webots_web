import '../css/styles.css';
import filesOfSemesters from '../config/documents.json';

function viewSemesterRecords(semester) {
  const recordsDiv = document.getElementById(`${semester}Records`);
  const files = filesOfSemesters[semester];

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
    recordsDiv.appendChild(record);
  }
}

function onSemesterClick(semester) {
  const semesterTitle = document.getElementById(`${semester}Title`);
  const semesterArrow = document.getElementById(`${semester}Arrow`);
  const semesterDiv = document.getElementById(semester);

  if (semesterDiv.hasAttribute('clicked')) {
    semesterDiv.removeAttribute('clicked');
    semesterTitle.classList.remove('text-purple');
    semesterArrow.classList.remove('icon-purple');
    semesterArrow.classList.remove('rotate-180');
    document.getElementById(`${semester}Records`).innerHTML = '';
  } else {
    semesterDiv.setAttribute('clicked', '');
    semesterTitle.classList.add('text-purple');
    semesterArrow.classList.add('icon-purple');
    semesterArrow.classList.add('rotate-180');
    viewSemesterRecords(semester);
  }
}

document.getElementById('firstSemester').addEventListener('click', () => onSemesterClick('firstSemester'));
document.getElementById('secondSemester').addEventListener('click', () => onSemesterClick('secondSemester'));
