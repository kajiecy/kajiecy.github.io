// 获取案例类型
var baseURL = 'http://118.25.73.220/index.php';

function httpGet(url,backFuc) {
    $.get(baseURL+url,function(data,status){
        if(data.code===1){
            backFuc(data.data);
        }else {
            alert(data.msg);
        }
    });
}

function getCaseType(successFuc) {
    httpGet("/api/cases/project",function (data) {
        successFuc(data)
    });
}
function getCasesList({projectId,page},successFuc) {
    httpGet('/api/cases/casesList?project_id='+projectId+'&page='+page,function (data) {
        successFuc(data);
    });
}
//获取案例详情
function getCasesDetail({id},successFuc) {
    httpGet('/api/cases/casesDetail?id='+id,function (data) {
        successFuc(data);
    });
}


// 获取网站配置
function getIndexConfig(successFuc){
    httpGet('/api/index/config',function (data) {
        successFuc(data);
    });
}
// 获取首页banner
function getIndexBanner(pageId,successFuc) {
    httpGet('/api/index/banner?page='+pageId,function (data) {
        successFuc(data);
    });
}