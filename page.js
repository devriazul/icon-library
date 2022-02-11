

const pageMain = document.getElementById('page')
let page = 1;
function pageCount(perPage){
    let totalImage = 1000;
    let countPage = Math.round(totalImage/perPage);
    let page = 1;
    pageMain.innerHTML = ''
    while (page <= countPage){
        let pageDiv = `<button class="bg-fuchsia-300 w-fit p-1 rounded-full hover:bg-fuchsia-400 border-solid border-2 hover:border-indigo-600 hover:bg-green" value="${page}" id='page-${page}' onclick='showIcon(this)'>
        ${page}
        </button>`
        pageMain.innerHTML += pageDiv;
        page++
    }
}

document.getElementById('perPage').addEventListener('keyup',function(){
    showIcon(1)
})

document.getElementById('perPage').addEventListener('change',function(){
    showIcon(1)
})