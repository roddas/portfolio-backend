var date = new Date();
document.getElementById("ano").innerText = date.getFullYear();
var header = new Headers();
header.append('Content-Type', 'application/json');
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
/*

let flag = true;

function submit(element)
{
    var element = document.getElementById(element);
    element.addEventListener('submit',e =>{
        e.preventDefault();
        let form = new FormData(element);
        let data = {};
        form.forEach((value, key) =>{ data[key] = value });
       (async ()=>{

           await fetch('/admin/add/addFormacaoAcademica', {
               method: 'POST',
               headers: header,
               body: JSON.stringify(data)
           });
           let inputs = document.querySelectorAll('input');
           for (i of inputs)
           {
               i.value = '';
           }
           location.reload();
       })();
    });
}
submit('formacaoAcademicaForm');
*/