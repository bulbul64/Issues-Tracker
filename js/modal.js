export const openModal = (issue) => {
  console.log(issue);
     const risk =
       issue.priority === 'high'
         ? 'bg-red-400 text-white'
         : issue.priority === 'medium'
           ? 'bg-yellow-100 text-yellow-600'
           : 'bg-green-100 text-green-600';

  return `
    <div class="modal-box max-w-md">
      
      <!-- Modal Header -->
      <h3 class="text-lg font-bold mb-2">${issue.title}</h3>
      
      <!-- Meta Info -->
     <div class="flex flex-wrap items-center mb-4 gap-2">
  <button class="btn btn-sm px-2 ${issue.status === 'open' ? 'btn-success' : 'btn-error'}">
    ${issue.status}
  </button>
  <p class="text-sm text-gray-500 mb-0">
    Opened by <span class="font-medium">${issue.author}</span> • ${new Date(issue.createdAt).toLocaleDateString('en-GB')}
  </p>
</div>

      <!-- Labels -->
      <div class="flex flex-wrap gap-2 mb-3">
        ${issue.labels
          .map((label) => {
            // simple label color logic
            const labelStyles = {
              bug: { color: 'btn-error', icon: 'fa-bug' },
              'help wanted': { color: 'btn-warning', icon: 'fa-handshake' },
              enhancement: { color: 'btn-success', icon: 'fa-sparkles' },
            };
            const style = labelStyles[label] || { color: 'btn-outline', icon: 'fa-tag' };
            return `
              <button class="btn btn-outline ${style.color} whitespace-nowrap px-3 flex items-center gap-2">
                <i class="fa-solid ${style.icon}"></i> ${label.toUpperCase()}
              </button>
            `;
          })
          .join('')}
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-600 mb-4 leading-relaxed">
        ${issue.description}
      </p>

      <!-- Assignee & Priority -->
      <div class="flex justify-between mb-4 text-sm text-gray-700">
        <div><span class="font-medium">Assignee:</span> ${issue.assignee}</div>
        <div><span class="font-medium ">Priority:</span> <span class="${risk} px-4 py-1 rounded-full">${issue.priority}</span> </div>
      </div>

      <!-- Modal Action -->
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>

    </div>
  `;
};

// {
//     "id": 5,
//     "title": "Add user authentication system",
//     "description": "Implement JWT-based authentication with login, registration, and password reset functionality.",
//     "status": "open",
//     "labels": [
//         "enhancement"
//     ],
//     "priority": "high",
//     "author": "security_sam",
//     "assignee": "john_doe",
//     "createdAt": "2024-01-20T09:00:00Z",
//     "updatedAt": "2024-01-20T09:00:00Z"
// }

// www.linkedin.com/in/
// shafiulla-bulbul
