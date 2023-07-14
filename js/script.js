let start_margin_degree = 100;
margin_degree_counter.innerText = start_margin_degree;
margin_degree.value = start_margin_degree;

margin_degree.addEventListener("input", (e) => {
   margin_degree_counter.innerText = e.srcElement.value;
});