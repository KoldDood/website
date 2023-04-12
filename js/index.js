const btn = document.querySelector('.tab')
const container = document.querySelector('.container')

btn.addEventListener("click", () => (
    
    function trans() {
        if (container.style.ocpacity === 0) {
            for (let i = 0; i < 100; i++) {
                container.style.ocpacity = i + 1;
            }
        }
        else if (container.style.ocpacity === 100) {
            for (let i = 0; i < 100; i++) {
                container.style.ocpacity = i - 1;
            }
        }
        else if (container.style.ocpacity < 100 && container.style.ocpacity > 0) {
            container.style.ocpacity = 100;
        }
        else if (container.style.ocpacity < 0) {
            container.style.ocpacity = 0;
        }
        else if (container.style.ocpacity > 100) {
            container.style.ocpacity = 100;
        }
        else {
            console.log("Failed to set ocpacity: " + container.style.ocpacity)
        }}
))