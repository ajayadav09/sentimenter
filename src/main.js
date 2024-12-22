import { pipeline } from '@xenova/transformers';

async function initializeApp() {
    const sentimentPipeline = await pipeline('sentiment-analysis');
  
    document.getElementById('analyze-btn').addEventListener('click', async () => {
      const text = document.getElementById('input-text').value;
      const resultDiv = document.getElementById('result');
  
      if (!text) {
        resultDiv.textContent = 'Please enter some text!';
        return;
      }
  
      resultDiv.textContent = 'Analyzing...';
  
      try {
        const result = await sentimentPipeline(text);
        resultDiv.textContent = `Sentiment: ${result[0].label} (Confidence: ${result[0].score.toFixed(2)})`;
      } catch (error) {
        resultDiv.textContent = 'Error analyzing sentiment.';
        console.error(error);
      }
    });
  }
  
  initializeApp(); // Call the function
  