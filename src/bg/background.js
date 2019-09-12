// for each browser tab
chrome.windows.getAll({populate: true}, browserWindows => {
  browserWindows.forEach(browserWindow => {
    browserWindow.tabs.forEach(tab => {
      // set the badge text to 'text'
      chrome.browserAction.setBadgeText({tabId: tab.id, text: 'text'})
      // the next line should unset the text, but it throws
      chrome.browserAction.setBadgeText({tabId: tab.id, text: null})
    })
  })
})
