const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.querySelectorAll('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;

const isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;

const lightbox = document.querySelector('.youtubelightbox');
lightbox.addEventListener('click', (e) => {
  if (e.target.classList.contains('youtubelightbox')) {
    lightbox.style.display = 'none';
    player.stopVideo();
  }
})

const getVideoID = (link) => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
  return regExp.exec(link)[1];
}

export const createLightbox = (videoPlayBtn) => {
  const videoID = getVideoID(videoPlayBtn.href);

  videoPlayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    lightbox.style.display = 'block';

    if (typeof player === 'undefined') {
      player = new YT.Player('player', {
        videoId: videoID,
        playerVars: {
          playsinline: 1,
          autoplay: 1
        },
      });
    } else {
      isiOS ? player.cueVideoById(videoID) : player.loadVideoById(videoID);
    }
  })
}
