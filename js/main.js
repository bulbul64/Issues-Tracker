import { fetchIssues } from './api.js';
import { createIssuesHTML } from './issues.js';
import { loading } from './loading.js';
import { openModal } from './modal.js';

// Function to load issues
const issuesContainer = document.getElementById('issues-container');
const loadIssues = async () => {
  loading(true);
  const issues = await fetchIssues();

  const issuesHTML = createIssuesHTML(issues);
  issuesContainer.innerHTML = issuesHTML;
  loading(false);
};

loadIssues();

// get DOM elements

const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');
const allBtn = document.getElementById('all-btn');

allBtn.addEventListener('click', async () => {
  openBtn.classList.remove('btn-primary');
  closedBtn.classList.remove('btn-primary');
  allBtn.classList.add('btn-primary');

  loading(true);
  const issues = await fetchIssues();
  const issuesHTML = createIssuesHTML(issues);
  issuesContainer.innerHTML = issuesHTML;
  loading(false);
});

// Event Listeners and Functions to filter open issues
openBtn.addEventListener('click', async () => {
  openBtn.classList.add('btn-primary');
  closedBtn.classList.remove('btn-primary');
  allBtn.classList.remove('btn-primary');

  loading(true);
  const issues = await fetchIssues();
  const openIssues = issues.filter((issue) => issue.status === 'open');
  const issuesHTML = createIssuesHTML(openIssues);
  issuesContainer.innerHTML = issuesHTML;
  loading(false);
});

// Event Listeners and Functions to filter closed issues
closedBtn.addEventListener('click', async () => {
  closedBtn.classList.add('btn-primary');
  openBtn.classList.remove('btn-primary');
  allBtn.classList.remove('btn-primary');

  loading(true);
  const issues = await fetchIssues();
  const closedIssues = issues.filter((issue) => issue.status === 'closed');
  const issuesHTML = createIssuesHTML(closedIssues);
  issuesContainer.innerHTML = issuesHTML;
  loading(false);
});

// Event Listeners and Functions to search issues
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchInput.addEventListener('input', async () => {
  loading(true);
  const issues = await fetchIssues();
  const searchTerm = searchInput.value.toLowerCase();
  const filteredIssues = await issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchTerm),
  );

  issuesContainer.innerHTML = createIssuesHTML(filteredIssues);
  loading(false);
});



// Event Listeners and Functions to open modal add
const myModal = document.getElementById('my_modal_5');

issuesContainer.addEventListener('click', async (e) => {
  const div = e.target.closest('div[data-id]');
  const id = div.dataset.id;
  const issues = await fetchIssues();

  const issue = issues.find((issue) => issue.id == id);
  console.log(issue);
 
  const returnedHTML = openModal(issue);
  if (div) {
    myModal.innerHTML = returnedHTML;
    
    myModal.showModal();
  
  }
});
