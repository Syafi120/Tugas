let isi = document.querySelector("#isi");
isi.innerHTML = "<h1>soto</h1>" + "<p>deskripsi soto</p>" + "<img src='logo.png'>";
isi.innerHTML = "<h1>rawon</h1>";
isi.innerHTML = "<p>isi rawon</p>";
isi.innerHTML = "<img src='logo.png'>";

for (let i = 0; i < 10; i++) {
    document.querySelector("#paragraf").innerHTML = "<h1>" + i + "</h1>";
}

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table>" 
                    + "<thead>nomor</thead>" 
                    + "<tbody>"
                        + "<tr>"
                            + "<td>1</td>"
                            + "<td>2</td>"
                            + "<td>3</td>"
                            + "<td>4</td>"
                            + "<td>5</td>"
                        + "</tr>"
                    + "</tbody>"
                + "</table>";