// link constructor
function Link(title, url, description) {
  this.title = title;
  this.url = url;
  this.description = description;
}
function UI() {}
// add link abject to list
UI.prototype.addLinkToList = function (link) {
  const list = document.getElementById("link-list");
  const div1 = document.createElement("div");
  div1.setAttribute("class", "d-flex flex-fill justify-content-between");

  const aLink = document.createElement("a");
  aLink.setAttribute("href", ` "http://"+${link.url}`);
  aLink.setAttribute("data-toggle", "modal");
  aLink.setAttribute("data-target", "#editLink");
  aLink.setAttribute("class", "flex-grow-1 text-reset");

  const div2 = document.createElement("div");
  div2.setAttribute("class", "border px-1 mx-2 pt-2 mb-2 btn-add-link");
  div2.setAttribute("style", "background-color: white; border-radius: 5px;");

  const des = document.createElement("span");
  des.setAttribute("class", "text-muted");
  des.setAttribute("style", "font-size: 12px;");
  des.innerHTML = `${link.description}`;

  const tith6 = document.createElement("h6");
  tith6.innerHTML = `${link.title}`;

  const div3 = document.createElement("div");
  div3.setAttribute("class", "mt-4 px-2");

  const div4 = document.createElement("div");
  div4.setAttribute("class", "custom-control custom-switch");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "custom-control-input");
  input.setAttribute("id", "customSwitch1");
  input.setAttribute("checked");

  const label = document.createElement("label");
  label.setAttribute("class", "custom-control-label");
  label.setAttribute("for", "customSwitch1");

  div2.appendChild(des);
  div2.appendChild(tith6);
  aLink.appendChild(div2);

  div4.appendChild(input);
  div4.appendChild(label);

  div3.appendChild(div4);

  div1.appendChild(aLink);

  div1.appendChild(div3);

  list.appendChild(aLink);
};
document.getElementById("creatLink").addEventListener("click", function (e) {
  // get form values
  const title = document.getElementById("Title").value;
  const url = document.getElementById("URL").value;
  const description = document.getElementById("description").value;
  const formAddLink = document.getElementById("addLink");
  //instantiate a link
  const link = new Link(title, url, description);
  const ui = new UI();
  console.log(ui);
  ui.addLinkToList(link);
  e.preventDefault();
});
