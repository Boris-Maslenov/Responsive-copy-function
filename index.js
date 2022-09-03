const copyHtmlElement = function(breakpoint, copyElementSelector, copyFromSelector, copyWhereSelector) {
    const copyElement = document.querySelector(copyElementSelector),
        copyFromElement = document.querySelector(copyFromSelector),
        pastElement = document.querySelector(copyWhereSelector);
    let copyEnable = true;

    if (document.documentElement.clientWidth < breakpoint) {
    pastElement.append(copyElement);
    copyEnable = false;
    }
}