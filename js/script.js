function openModal() {
  TweenMax.to(".modal", 0, {display: 'block'});
  TweenMax.to(".close", 0, {display: 'block'});
  TweenMax.to(".open", 0, {display: 'none'});
}

function closeModal() {
  TweenMax.to(".modal", 0, {display: 'none'});
  TweenMax.to(".close", 0, {display: 'none'});
  TweenMax.to(".open", 0, {display: 'block'});
}
