export const loading = (show) => {
  const loadingElement = document.getElementById('loading');
  if (show) {
    loadingElement.innerHTML = `<div><span class="loading loading-ring loading-xl"></span></div>`;
  } else {
    loadingElement.innerHTML = '';
  }
};
