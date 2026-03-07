//  Function to create HTML for issues
export const createIssuesHTML = (issues) => {
  const count = document.getElementById('count');
  count.textContent = issues.length;
  // console.log(issues)
  return issues
    .map((issue) => {
      // Calculate the risk level
      const risk =
        issue.priority === 'high'
          ? 'bg-red-100 text-red-600'
          : issue.priority === 'medium'
            ? 'bg-yellow-100 text-yellow-600'
            : 'bg-green-100 text-green-600';

      const imgUrl =
        issue.priority === 'low' ? 'assets/Closed- Status .png' : 'assets/Open-Status.png';

      const border = issue.status === 'open' ? 'border-[#00A96E]' : 'border-[#A855F7] ';

      return ` 
          <div data-id="${issue.id}" class="max-w-sm border-t-4 ${border} rounded-lg shadow-lg">
              <!-- Issue Card header -->
              <div class="flex items-center justify-between mb-3 px-4 mt-3">
                <div class="img ">
                <img class="w-8" src="${imgUrl}" alt="" />
                </div>
                <div class="${risk} w-20 flex justify-center items-center rounded-full p-1">
                  <h4 class="font-medium text-sm ">${issue.priority}</h4>
                </div>
              </div>

              <!-- Issue Card Body -->
              <div class="px-4">
                <h2 class="font-semibold text-lg line-clamp-1">${issue.title}</h2>
                <p class="text-sm text-gray-500 my-2 leading-relaxed line-clamp-2">
                  ${issue.description}...
                </p>
                <div class="mt-3 gap-2 flex ">
                
    
                ${issue.labels
                  .map((label) => {
                    const labelStyles = {
                      bug: {
                        color: 'btn-error',
                        icon: 'fa-bug',
                      },
                      'help wanted': {
                        color: 'btn-warning',
                        icon: 'fa-handshake',
                      },
                      enhancement: {
                        color: 'btn-success',
                        icon: 'fa-sparkles',
                      },
                    };

                    const style = labelStyles[label] || {
                      color: 'btn-outline',
                      icon: 'fa-tag',
                    };

                    return `
      <button class="btn btn-outline ${style.color} whitespace-nowrap px-3">
        <i class="fa-solid ${style.icon}"></i> ${label}
      </button>
    `;
                  })
                  .join('')}
                
                 
                </div>
              </div>

              <!-- Issue Card Footer -->
              <div class="flex justify-between items-center pt-3 border-t mt-5 px-4">
                <p>${issue.id}/${issue.author}</p>
              </div>
              <div class="flex justify-between items-center pt-3  px-4">
              <p>created At:</p>
              <p>${new Date(issue.createdAt).toLocaleDateString('en-GB')}</p>
              </div>
              <div class="flex justify-between items-center px-4 pb-4">
                <p>updated At:</p>
                <p>${new Date(issue.updatedAt).toLocaleDateString('en-GB')}</p>
              </div>
            </div>
        `;
    })
    .join('');
};
