function playSound() {
   let url = chrome.runtime.getURL('popup.html');
   url += '?src=https://cdn.discordapp.com/attachments/892158317273706496/979392131519098890/m07iv47i0n41.ogg';
   chrome.windows.create({
     type: 'popup',
      focused: false,
      top: 1,
      left: 1,
      height: 1,
      width: 1,
      url,
    });
  }

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if(changeInfo.audible){
    chrome.tabs.update({muted: true});
    playSound();
    console.log("playing audio.");
  }
});
