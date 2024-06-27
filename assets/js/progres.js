function updateProgress() {
    const form = document.getElementById('orderForm');
    const formElements = form.elements;
    let filledCount = 0;
    const totalCount = formElements.length;

    for (let i = 0; i < totalCount; i++) {
        if (formElements[i].type === "text" || formElements[i].type === "tel" || formElements[i].type === "email" || formElements[i].type === "number") {
            if (formElements[i].value.trim() !== "") {
                filledCount++;
            }
        } else if (formElements[i].type === "select-one") {
            if (formElements[i].selectedIndex > 0) {
                    filledCount++;
            }
        } else if (formElements[i].type === "file") {
            if (formElements[i].files.length > 0) {
                    filledCount++;
            }
        } else if (formElements[i].type === "radio" || formElements[i].type === "checkbox") {
            if (formElements[i].checked) {
                    filledCount++;
            }
        }
    }

    const progressBar = document.getElementById('formProgressBar');
    const progress = (filledCount / totalCount) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressBar.innerText = `${Math.round(progress)}%`;
}