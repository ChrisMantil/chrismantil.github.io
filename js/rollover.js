var rollover = document.querySelector('.rollover');

document.querySelector('.mobile-portfolio').addEventListener('mouseover', function (e) {
e.preventDefault();
if (rollover.getAttribute('data-state') == 'expanded') {
    rollover.setAttribute('data-state', 'collapsed');
    this.setAttribute('data-state', 'inactive');
  } else {
    rollover.setAttribute('data-state', 'expanded');
    this.setAttribute('data-state', 'active');
  }
});
