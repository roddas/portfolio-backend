function postData(formElement) {
    let header = new Headers();
    let form = new FormData(formElement);
    let data = {};

    form.forEach((value, key) => { data[key] = value });
    header.append('Content-Type', 'application/json');

    (async () => {
        const URL = formElement.getAttribute('action');
        let response = await fetch(URL, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(data)
        });
        let mensagem = JSON.parse(await response.text());
        alert(mensagem.message);
    })();
}
