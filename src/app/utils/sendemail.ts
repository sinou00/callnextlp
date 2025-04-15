export const sendEmail = async (email: string) => {
    const endpoint = "https://script.google.com/macros/s/AKfycbyOy3ISaaOcC80k-NQavgIiC5u4h9zEXv8iXjSTjCRBDwxZB0OJtNkX6_9o8feqwqgN/exechttps://script.google.com/macros/s/AKfycbxdWw1iWAatsvKInPlSHWd3fZZFFt6FO0OpCv2H4HQFbCyaXcbhpXoXs-qZA4SaWDi0/exechttps://script.google.com/macros/s/AKfycbwLntSlfWaAjS1rcRwjzApWiGWlmtHSqsTMoC1jBejQcgh9XtkwxSMQSCooAESXroki/exec"; // Replace with your script's deployment URL
  
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };