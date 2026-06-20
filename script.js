async function shorten() {

    const url = document.getElementById("url").value;

    if (!url) {
        alert("Please enter a URL");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                originalUrl: url
            })
        });

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <a href="${data.shortUrl}" target="_blank">
                ${data.shortUrl}
            </a>
        `;

    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
}