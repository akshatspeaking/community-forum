function get(url) {
  return fetch(
    "https://community-forum-api.herokuapp.com/api/" + url
  ).then((res) => res.json());
}

function post(url, data) {
  return fetch("https://community-forum-api.herokuapp.com/api/" + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token") || "",
    },
    mode: "cors",
    body: JSON.stringify(data),
  }).then((res) => {
    // console.log(res);
    return res.json();
  });
}

function del(url) {
  return fetch("https://community-forum-api.herokuapp.com/api/" + url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token") || "",
    },
  }).then((res) => {
    // console.log(res);
    return res.json();
  });
}

export { get, post, del };
