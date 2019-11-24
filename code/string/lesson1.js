export default (str) => {
    // 字符串按空格分隔 ，保存数组， 数组中元素的顺序就是单词的顺序
    let arr = str.split(" ");

    let resault = arr.map(item => {
        return item.split("").reverse().join("");
    });

    return resault.join(" ");
}