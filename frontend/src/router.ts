{
    const loadPage = (path) => {
        fetch(path)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    document.addEventListener("DOMContentLoaded", () => {
        const url = new URL(String(window.location));
        switch (url.pathname) {
            case "/":
                loadPage("src/pages/home.html");
                break;
        }
    });
}