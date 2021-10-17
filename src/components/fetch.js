export async function getRequest(request) {
    const response = await fetch(`${request.enteredUrl}`, {
        headers: {
          'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quote.');
    }
  
    const responseData = [];

      for (const key in data) {
        responseData.push({
            userId: data[key].userId,
            id: data[key].id,
            title: data[key].title,
            completed: data[key].completed
        });
      }
    return responseData
  }