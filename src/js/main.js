import '../css/styles.scss';

function viewSemesterRecords(semester) {
  const recordsDiv = document.getElementById(`${semester}Records`);
  const saveImg = document.createElement('img');
  saveImg.setAttribute('src', '/src/images/save.png');
  saveImg.classList.add('img-save');
  if (semester === 'firstSemester') {
    for (let i = 1; i < 12; i += 1) {
      const record = document.createElement('div');
      record.classList.add('flex', 'justify-center');
      const recordText = document.createElement('p');
      recordText.innerHTML += `Zápisnica č.${i}`;
      recordText.classList.add('text-blue', 'font-roboto', 'text-2xl', 'font-bold', 'w-[170px]');
      record.appendChild(recordText.cloneNode(true));
      record.appendChild(saveImg.cloneNode(true));
      recordsDiv.appendChild(record);
    }
  } else {
    for (let i = 12; i < 20; i += 1) {
      const record = document.createElement('div');
      record.className = 'flex';
      const recordText = document.createElement('p');
      recordText.innerHTML += `Zápisnica č.${i}`;
      recordText.classList.add('text-blue', 'font-roboto', 'text-2xl', 'font-bold', 'w-[170px]');
      record.appendChild(recordText.cloneNode(true));
      record.appendChild(saveImg.cloneNode(true));
      recordsDiv.appendChild(record);
    }
  }
}

function onSemesterClick(semester) {
  const firstSemesterClicked = document.getElementById('firstSemester').hasAttribute('clicked');
  const secondSemesterClicked = document.getElementById('secondSemester').hasAttribute('clicked');
  const semesterTitle = document.getElementById(`${semester}Title`);
  const semesterArrow = document.getElementById(`${semester}Arrow`);
  const semesterDiv = document.getElementById(semester);

  if (semesterDiv.hasAttribute('clicked')) {
    semesterDiv.removeAttribute('clicked');
    semesterTitle.classList.remove('text-purple');
    semesterArrow.classList.remove('text-purple');
    semesterArrow.classList.remove('rotate-180');
    document.getElementById(`${semester}Records`).innerHTML = '';
  } else {
    if (firstSemesterClicked && secondSemesterClicked) {
      document.getElementById('firstSemester').setAttribute('clicked', '');
      document.getElementById('firstSemesterTitle').classList.add('text-purple');
      document.getElementById('firstSemesterArrow').classList.add('text-purple');
      document.getElementById('firstSemesterArrow').classList.add('rotate-180');
      document.getElementById('secondSemester').setAttribute('clicked', '');
      document.getElementById('secondSemesterTitle').classList.add('text-purple');
      document.getElementById('secondSemesterArrow').classList.add('text-purple');
      document.getElementById('secondSemesterArrow').classList.add('rotate-180');
    }
    semesterDiv.setAttribute('clicked', '');
    semesterTitle.classList.add('text-purple');
    semesterArrow.classList.add('text-purple');
    semesterArrow.classList.add('rotate-180');
    viewSemesterRecords(semester);
  }
}

document.getElementById('firstSemester').addEventListener('click', () => onSemesterClick('firstSemester'));
document.getElementById('secondSemester').addEventListener('click', () => onSemesterClick('secondSemester'));
