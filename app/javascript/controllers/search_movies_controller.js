import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["input", "form", "list"];
  connect() {
    console.log(this.inputTarget);
  }

  update() {
    // console.log(this.inputTarget.value);
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    // console.log(url);
    fetch(url, { headers: { Accept: "text/plain" } })
      .then((response) => response.text())
      .then((data) => {
        // the data is the text version of the HTML from our movies#index
        // how do we put the data on our page??
        // this.listTarget.insertAdjacentHTML("afterbegin", data);
        this.listTarget.innerHTML = data;
      });
  }
}
