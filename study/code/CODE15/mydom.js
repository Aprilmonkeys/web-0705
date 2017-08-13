/**
 * TODO 编写解决DOM节点树结构中的空白节点问题
 * TODO * childNodes
 * TODO * firstChild
 * TODO * lastChild
 * TODO * previousSibling
 * TODO * nextSibling
 */
function childNodes(elem){
    // TODO 用于存储真正的所有的子节点
    var arr = [];

    // TODO 获取指定元素节点的所有子节点（包含空白节点）
    var children = elem.childNodes;
    // TODO 遍历所有的子节点
    for(var i=0;i<children.length;i++){
        // TODO 空白节点一定是空的文本节点
        var child = children[i];
        if(child.nodeType == 1){
            // TODO 表示是真正的子节点
            arr.push(child);
        }
    }
    return arr;
}
function firstChild(elem){
    var firstChild = elem.firstChild;
    if(firstChild.nodeType == 3){
        firstChild = firstChild.nextSibling;
    }
    return firstChild;
}
function lastChild(elem){
    var lastChild = elem.lastChild;
    if(lastChild.nodeType == 3){
        lastChild = lastChild.previousSibling;
    }
    return lastChild;
}
function previousSibling(elem){
    var prev = elem.previousSibling;
    if(prev.nodeType == 3){
        prev = prev.previousSibling;
    }
    return prev;
}
function nextSibling(elem){
    var next = elem.nextSibling;
    if(next.nodeType == 3){
        next = next.nextSibling;
    }
    return next;
}