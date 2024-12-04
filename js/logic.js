// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const savedMode = localStorage.getItem('mode') || 'light';
  
    if (savedMode === 'dark') {
      body.classList.add('dark-mode');
    }
  
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
      const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
      const newMode = currentMode === 'dark' ? 'light' : 'dark';
  
      body.classList.toggle('dark-mode');
      localStorage.setItem('mode', newMode);
    });
  });
  
  // TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
  function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  
  // TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
  function storeLocalStorage(key, newData) {
    const existingData = readLocalStorage(key);
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
  }
  
  // ! Use the following function whenever you need to redirect to a different page
  
  let redirectURL = '';
  
  const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };
  