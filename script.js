// Ticket adding and removing section
document.getElementById("addTicketFirstClass").addEventListener("click", function () {
  addTicket("firstClassTicketNumber");
});

document.getElementById("addTicketEconomyClass").addEventListener("click", function () {
  addTicket("economyClassTicketNumber");
});

document.getElementById("removeTicketFirstClass").addEventListener("click", function () {
  removeTicket("firstClassTicketNumber");
});

document.getElementById("removeTicketEconomyClass").addEventListener("click", function () {
  removeTicket("economyClassTicketNumber");
});

// Book now button section
document.getElementById("bookNowButton").addEventListener("click", function () {
  const firstClassTicketNumber = getTicketNumber("firstClassTicketNumber");
  const economyClassTicketNumber = getTicketNumber("economyClassTicketNumber");
  const total = document.getElementById("total").innerText;

  if ((firstClassTicketNumber == 0 && economyClassTicketNumber == 0) || total == "") {
    alert("Please, Book Seat");
  } else {
    if (firstClassTicketNumber > 0) {
      document.getElementById("firstClassSeat").innerText = firstClassTicketNumber;
    } else {
      document.getElementById("firstClassSeat").innerText = "0";
    }
    if (economyClassTicketNumber > 0) {
      document.getElementById("economyClassSeat").innerText = economyClassTicketNumber;
    } else {
      document.getElementById("economyClassSeat").innerText = "0";
    }
    document.getElementById("pricing").innerText = total;
    bookingConfirmation();
  }
});

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function bookingConfirmation() {
  openModal();

  document.getElementById("closeModal").addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal(); // for keypress closing (Escape key)
    }
  });
}

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


// ticket add function
function addTicket(ticketId) {
  let numberOfTicket = getTicketNumber(ticketId);
  numberOfTicket++;
  document.getElementById(ticketId).value = numberOfTicket;

  totalPrice();
}

// ticket remove function
function removeTicket(ticketId) {
  let numberOfTicket = getTicketNumber(ticketId);

  if (numberOfTicket > 0) {
    numberOfTicket--;
    document.getElementById(ticketId).value = numberOfTicket;
  }

  totalPrice();
}

// calculate total price function 
function totalPrice() {
  const firstClassTicketPrice = getTicketNumber("firstClassTicketNumber") * 150;
  const economyClassTicketPrice = getTicketNumber("economyClassTicketNumber") * 100;

  const subTotalPrice = firstClassTicketPrice + economyClassTicketPrice;
  const vat = subTotalPrice * 0.1;
  const totalPrice = subTotalPrice + vat;

  document.getElementById("subtotal").innerText = subTotalPrice;
  document.getElementById("vat").innerText = vat;
  document.getElementById("total").innerText = totalPrice;
}

function getTicketNumber(ticketId) {
  return document.getElementById(ticketId).value
}