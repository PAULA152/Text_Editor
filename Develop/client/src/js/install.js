const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `before install prompt` event
let Prompt;

window.addEventListener('before install prompt', (event) => {
    Prompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (Prompt !== null) {
        Prompt.prompt();
        const { outcome } = await Prompt.userChoice;
        if (outcome === 'accepted') {
            Prompt = null;
        }
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('app installed', (event) => {
    textHeader.textContent = "Successfully installed"
    console.log("app installed", event)
});
