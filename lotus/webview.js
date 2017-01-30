module.exports = (Franz, options) => {
  function getMessages() {
    let doc = document.getElementById('s_MainFrame').contentDocument
    let count = doc.getElementById('e-mailoutline-content').firstChild.firstChild.firstChild.firstChild.childNodes[2].innerHTML;
    count = count.length > 5 ? count.substring(7, eval(count.length - 1)) : 0;
    Franz.setBadge(count);
  }
  Franz.loop(getMessages);
}
