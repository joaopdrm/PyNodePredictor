document.getElementById('predict-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('input').value;
    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feature: parseFloat(input) })
    });
    const result = await response.json();
    document.getElementById('result').innerText = `Previsão: ${result.prediction[0]}`;
});
