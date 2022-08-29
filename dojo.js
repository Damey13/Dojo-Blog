const arr = [];

let get_fname = document.getElementById("fname");
let get_fbody = document.getElementById("fbody");
let get_author = document.getElementById("blogauthor");

let get_fname1 = document.getElementById("fname1");
let get_fbody1 = document.getElementById("fbody1");
let get_author1 = document.getElementById("blogauthor1");

let get_ul = document.getElementById("blogs-list");
let get_cmain = document.getElementById("cmain");
let get_main = document.getElementById("main");
let get_home = document.getElementById("home");
let get_nb = document.getElementById("nb");

let get_editButton = document.getElementById("editButton");
let get_deleteButton = document.getElementById("deleteButton");

function toggle(input) {
  if (input == "Home") {
    get_cmain.style.display = "none";
    get_main.style.display = "block";
    get_nb.classList.remove("nb");
    get_home.classList.add("nb");

    {
      document.getElementById("main").style.display = "block";
      document.getElementById("cmain").style.display = "none";
      document.getElementById("dblog").style.display = "none";
      document.getElementById("newmain").style.display = "none";
    }
    displayBlog();
  } else if (input == "Blog") {
    get_cmain.style.display = "block";
    get_main.style.display = "none";
    get_nb.classList.add("nb");
    get_home.classList.remove("nb");
    {
      document.getElementById("cmain").style.display = "block";
      document.getElementById("main").style.display = "none";
      document.getElementById("dblog").style.display = "none";
      document.getElementById("newmain").style.display = "none";
    }
  }
}

// function home() {}
// function newB() {}
function disapr() {
  if (document.getElementById("wrapper").style.display == "none") {
    document.getElementById("wrapper").style.display = "flex";
  } else {
    document.getElementById("wrapper").style.display = "none";
  }
}

function addDetail() {
  //   let get_cmain = document.getElementById("cmain");
  //   let get_main = document.getElementById("main");
  //   let get_home = document.getElementById("home");
  //   let get_nb = document.getElementById("nb");

  let title = get_fname.value;
  let body = get_fbody.value;
  let author = get_author.value;

  let formdetail = {
    ffname: title,
    fbody: body,
    fauthor: author,
  };
  arr.push(formdetail);
  console.log(arr);
}

function displayBlog() {
  while (get_ul.firstChild) {
    get_ul.removeChild(get_ul.firstChild);
  }

  for (let i = 0; i < arr.length; i++) {
    const newli = document.createElement("li");
    const newp1 = document.createElement("p");
    const newp2 = document.createElement("p");

    const inside1 = document.createTextNode(arr[i].ffname);
    const inside2 = document.createTextNode("written by " + arr[i].fauthor);
    newp1.appendChild(inside1);
    newp2.appendChild(inside2);
    newli.appendChild(newp1);
    newli.appendChild(newp2);
    get_ul.appendChild(newli);
    newp1.className = "listt";
    newli.id = i;
    newli.setAttribute("onclick", "editBlog(id)");
  }
}

function editBlog(input) {
  document.getElementById("main").style.display = "none";
  document.getElementById("newmain").style.display = "block";
  document.getElementById("dblog").style.display = "none";
  document.getElementById("cmain").style.display = "none";

  get_fname1.value = arr[input].ffname;
  get_author1.value = arr[input].fauthor;
  get_fbody1.value = arr[input].fbody;

  get_editButton.onclick = function () {
    editDetail(input);
  };
  get_deleteButton.onclick = function () {
    deleteDetail(input);
  };
}

function editDetail(j) {
  arr[j].ffname = get_fname1.value;
  arr[j].fauthor = get_author1.value;
  arr[j].fbody = get_fbody1.value;
}

function deleteDetail(k) {
  arr.splice(k, 1);
  console.log("deleted");
}
