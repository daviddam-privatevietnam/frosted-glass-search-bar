let selectedService = 'exclusiveTours';

const pillButtons = document.querySelectorAll('#serviceTabs .nav-link');
pillButtons.forEach((btn) => {
  btn.addEventListener('click', function() {
    pillButtons.forEach((b) => b.classList.remove('active'));
    this.classList.add('active');
    selectedService = this.getAttribute('data-value');
  });
});

document.getElementById('searchBtn').addEventListener('click', function() {
  const originVal = document.getElementById('origin').value;
  const destVal = document.getElementById('destination').value;
  const startVal = document.getElementById('startDate').value;
  const endVal = document.getElementById('endDate').value;

  let query = {
    service: selectedService,
    origin: originVal,
    destination: destVal,
    startDate: startVal,
    endDate: endVal
  };
  alert("Your Search:\n" + JSON.stringify(query, null, 2));
});
