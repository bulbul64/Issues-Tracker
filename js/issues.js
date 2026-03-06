export const createIssuesHTML = (issues) => {
 
  return issues
    .map((issue) => {
      return (` 
          <div class="max-w-xs border-t-4 border-[#00A96E] rounded-lg shadow-lg">
              <!-- Issue Card header -->
              <div class="flex items-center justify-between mb-3 px-4 mt-3">
                <div class="img">
                  <img class="w-8" src="assets/Open-Status.png" alt="" />
                </div>
                <div class="bg-[#FEECEC] w-20 flex justify-center items-center rounded-full p-1">
                  <h4 class="font-medium text-sm text-red-500">High</h4>
                </div>
              </div>

              <!-- Issue Card Body -->
              <div class="px-4">
                <h2 class="font-semibold text-lg">Fix navigation menu on mobile devices</h2>
                <p class="text-sm text-gray-500 my-2 leading-relaxed">
                  The navigation menu doesn't collapse properly on mobile devices...
                </p>
                <div class="mt-3 gap-2">
                  <button class="btn btn-outline btn-error">
                    <i class="fa-solid fa-bug"></i> Bug
                  </button>
                  <button class="btn btn-outline btn-warning">
                    <i class="fa-solid fa-life-ring"></i> Help Wanted
                  </button>
                </div>
              </div>

              <!-- Issue Card Footer -->
              <div class="flex justify-between items-center pt-3 border-t mt-5 px-4">
                <p>created At:</p>
                <p>1/15/2024</p>
              </div>
              <div class="flex justify-between items-center px-4 pb-4">
                <p>updated At:</p>
                <p>1/15/2024</p>
              </div>
            </div>
        `);
    }).join('');
};
