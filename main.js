jQuery.ajax({
    url: '/server.php',
    method: 'GET',
    data: {},
    success: function (response) {
        var element = $(response); // Az elemet jQuery objektummá kell alakítani
        $("body").append(element); // Helyesen kell hozzáadni az elemet a body elemhez
    },
    error: function (xhr, status, error) {
        console.log(error);
    }
});
