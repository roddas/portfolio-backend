var date = new Date();
document.getElementById("ano").innerText = date.getFullYear();
let tabsWithContent = (function () {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');
    let deactvateAllTabs = function () {
        tabs.forEach(function (tab) {
            tab.classList.remove('is-active');
        });
    };

    let hideTabsContent = function () {
        tabsContent.forEach(function (tabContent) {
            tabContent.classList.remove('is-active');
        });
    };

    let activateTabsContent = function (tab) {
        tabsContent[getIndex(tab)].classList.add('is-active');
    };

    let getIndex = function (el) {
        return [...el.parentElement.children].indexOf(el);
    };

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            deactvateAllTabs();
            hideTabsContent();
            tab.classList.add('is-active');
            activateTabsContent(tab);
        });
    })
    tabs[0].click();
})();

let flag = true;
let editButton = document.querySelector('.edit');
let deleteButton = document.querySelector('.delet');
let sendButton = document.createElement('a');
sendButton.href = '#';
sendButton.setAttribute('class','send');
sendButton.textContent = 'Salvar';
let textoElemento = document.querySelector('.texto');
let textBox = document.createElement('input');
textBox.type = 'text';
textBox.required = true;
textBox.name = 'descricao';
textBox.className = 'text-edit input';
let texto = textoElemento.textContent;
textBox.setAttribute('name', 'texto');

editButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (flag)
    {
        editButton.textContent = 'Cancelar';
        textoElemento.replaceWith(textBox);
        deleteButton.replaceWith(sendButton);
        textBox.value = textoElemento.textContent;
        flag = false;
    }else
    {
        editButton.textContent = 'Editar';
        textBox.replaceWith(textoElemento);
        sendButton.replaceWith(deleteButton);
        textoElemento.textContent = texto;
        flag = true;
    }
});
sendButton.addEventListener('click', e =>
{
    e.preventDefault();
   (async ()=>{
       var header = new Headers();
       header.append('Content-Type','application/json');
       let hidden = document.querySelector('.hidden').getAttribute('value');
       let id = document.querySelector('.id').textContent;
       var metaData = {
           method: 'POST',
           headers: header,
           body: JSON.stringify({ descricao: textBox.value, table : hidden,idElement : id})
       }
       try
       {
           let result = await fetch('/admin/edit', metaData);
           let response = await result.json();
           alert(response.message);
           location.reload();
       }
       catch(e)
       {
           console.error(e);
       }

   })();
});

deleteButton.addEventListener('click', e => {
    e.preventDefault();
    (async () => {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        let hidden = document.querySelector('.hidden').getAttribute('value');
        let id = document.querySelector('.id').textContent;
        var metaData = {
            method: 'POST',
            headers: header,
            body: JSON.stringify({table: hidden, idElement: id })
        }
        try
        {
            let result = await fetch('/admin/delete', metaData);
            let response = await result.json();
            alert(response.message);
            location.reload();
        }
        catch (e)
        {
            console.error(e);
        }

    })();
});