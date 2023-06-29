 // Function to make the API call and display the access token
 async function getAccessToken() {
    try {
      const response = await fetch('/getAccessToken');
      const accessToken = await response.text();
      document.getElementById('accessToken').textContent = accessToken;
    } catch (error) {
      console.error('Error getting access token:', error);
    }
  }

  async function getcustomerId() {
    const username = document.getElementById('usernameInput').value;
    try {
      const response = await fetch(`/getCustomerId?name=${username}`);
      const custid = await response.text();

      document.getElementById('customerID').textContent = custid;
    } catch (error) {
      console.error('Error getting id:', error);
    }
  }

  async function getLink() {
    

  }
  // Add event listener to the button
  document.getElementById('getTokenBtn').addEventListener('click', getAccessToken);
  document.getElementById('getCustBtn').addEventListener('click', getcustomerId);