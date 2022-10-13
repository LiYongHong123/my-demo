window.onload = function() {
    let box = document.getElementsByClassName("box")[0];
    box.addEventListener("click", () => this.alert("这是测试代码"));

    this.console.log("这是dev分支下的代码,准备合并到master主分支里。");
}