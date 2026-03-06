import { fetchIssues } from './api.js';
import { createIssuesHTML } from './issues.js';

const issuesContainer = document.getElementById('issues-container');
const loadIssues = async () => {
  const issues = await fetchIssues();

  const issuesHTML = createIssuesHTML(issues);
  issuesContainer.innerHTML = issuesHTML;
};

loadIssues();
