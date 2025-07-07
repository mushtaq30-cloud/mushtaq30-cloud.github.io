// Count site visits
const visitCountKey = 'siteVisitCount';
let visitCount = localStorage.getItem(visitCountKey) || 0;
visitCount++;
localStorage.setItem(visitCountKey, visitCount);

// Display visit count
const visitDisplay = document.createElement('div');
visitDisplay.textContent = `Site Visits: ${visitCount}`;
visitDisplay.style.position = 'fixed';
visitDisplay.style.bottom = '10px';
visitDisplay.style.right = '10px';
visitDisplay.style.backgroundColor = '#fff';
visitDisplay.style.padding = '5px';
visitDisplay.style.border = '1px solid #ccc';
document.body.appendChild(visitDisplay);

// Count downloads
const downloadCountKey = 'resumeDownloadCount';
let downloadCount = localStorage.getItem(downloadCountKey) || 0;

document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.querySelector('.resume-btn');
    resumeButton.addEventListener('click', () => {
        downloadCount++;
        localStorage.setItem(downloadCountKey, downloadCount);
        alert(`Resume downloaded ${downloadCount} times.`);
    });
});