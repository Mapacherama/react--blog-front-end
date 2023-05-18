export const errorHandler = (error) => {
    let errorMessage = 'An error occurred';
  
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
  
    return errorMessage;
  };
  