async function askQuestion() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    const question = questionElement.value;
    const response = await fetchGPT4Response(question);

    answerElement.textContent = response ? response : "Error fetching response.";
}

async function fetchGPT4Response(question) {
    try {
        const response = await fetch('YOUR_GPT4_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                prompt: question,
                max_tokens: 50
            })
        });

        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
