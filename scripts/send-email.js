(function () {
  emailjs.init("user_bgjfpfAYAiGlQLRNsfPDv");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_jdqexnu", "template_tkqgrii", this).then(
        function () {
          appendAlert("Aguarde o retorno :)", "primary");
        },
        function (error) {
          console.log("FAILED SEND EMAIL...", error);
          appendAlert("Algo de errado não está certo :S", "danger");
        }
      );
    });
};

// NOTIFICATION
const alertPlaceholder = document.getElementById("notification");
const appendAlert = (message, type) => {
  const result = type === "danger" ? "AZEDOU!" : "DEU BOM!";
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "notification-alert");
  wrapper.innerHTML = [
    `<div
        class="alert alert-${type} alert-dismissible fade show"
        role="alert"
      >
        <strong>${result}</strong> ${message}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>`,
  ].join("");

  alertPlaceholder.append(wrapper);

  setTimeout(() => {
    document.getElementById("notification-alert").remove();
  }, 3000);
};
