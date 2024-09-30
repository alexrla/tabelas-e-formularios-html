const tableRow = document.querySelectorAll("tr");

tableRow.forEach((tr) => {
    const td = tr.children;

    if(td.length > 4) {
        const average = Number((td[5].textContent).replace(",", "."));

        const span = document.createElement("span");

        if(average >= 7) 
        {
            const text = document.createTextNode("Aprovado");
            span.appendChild(text);
            span.classList.add("approved");
            td[6].appendChild(span);
        }
        else if(average >= 5 && average < 7) 
        {
            const text = document.createTextNode("Recuperação");
            span.appendChild(text);
            span.classList.add("recovery");
            td[6].appendChild(span);
        }
        else
        {
            const text = document.createTextNode("Reprovado");
            span.appendChild(text);
            span.classList.add("disapproved");
            td[6].appendChild(span); 
        }
    }
});
