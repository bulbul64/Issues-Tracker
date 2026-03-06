
// Function to fetch issues
export const fetchIssues = async () => {
    const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues`);
    const data = await response.json();
    return data.data;
};

