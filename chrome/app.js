const navyURL = "https://www.mynavyexchange.com/s?Ntt=";
const afURL = "https://www.shopmyexchange.com/s?Ntt=";
const urlList = [navyURL, afURL];
chrome.omnibox.onInputEntered.addListener((text) => {
  const searchURLS = urlList.map((url) => url + encodeURIComponent(text));
  searchURLS.forEach((url) => chrome.tabs.create({ url: url }));
});
