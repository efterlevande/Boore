window.resizeTo(10, 10);
onload = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let audio = new Audio(urlParams.get('src'));
  audio.volume = 0.5;
  audio.play();
  setTimeout(()=>{
    close();
  }, 1500);
};