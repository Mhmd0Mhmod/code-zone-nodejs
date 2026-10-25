(async function () {
  const response = await fetch("/api/courses");
  const data = await response.json();
  const courses = data.data.courses;
  const rootElement = document.getElementById("root");
  courses.forEach((course) => {
    const node = document.createElement("code");
    node.innerText = JSON.stringify(course);
    rootElement.appendChild(node);
    rootElement.appendChild(document.createElement("br"));
  });
})();
