import { fetchIssues } from './api.js';
import { createIssuesHTML } from './issues.js';

const issuesContainer = document.getElementById('issues-container');
const loadIssues = async () => {
  const issues = await fetchIssues();

  const issuesHTML = createIssuesHTML(issues);
  issuesContainer.innerHTML = issuesHTML;
};

loadIssues();

const openBtn = document.getElementById('open-btn');
const closedBtn = document.getElementById('closed-btn');

openBtn.addEventListener('click', async () => {
  const issues = await fetchIssues();
  const openIssues = issues.filter((issue) => issue.status === 'open');
  const issuesHTML = createIssuesHTML(openIssues);
  issuesContainer.innerHTML = issuesHTML;
});

closedBtn.addEventListener('click', async () => {
  const issues = await fetchIssues();
  const closedIssues = issues.filter((issue) => issue.status === 'closed');
  const issuesHTML = createIssuesHTML(closedIssues);
  issuesContainer.innerHTML = issuesHTML;
});
