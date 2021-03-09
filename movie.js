let movieList = [];
let idx = 0;

// creating a new movie object 

// Q: why does the .on() have to be on the form and not the button? 
$('#add-movie-form').on('submit', function(evt){
    evt.preventDefault();
    // console.log("Button was clicked!");
    let title = $('#movie-title').val();
    let rating = $('#movie-rating').val();

    let movie = {
        title,
        rating,
        idx
    };

    const appendHTML = createRow(movie);
    $('#tbl-body').append(appendHTML);

    movieList.push(movie);
    idx++
    // let $tdTitle = $('<td>').text($title);
    // let $tdRating = $('<td>').text($rating);
    // let $row = $('<tr>').append($tdTitle);

    // $('#tbl-body').append($row);
});

$('#tbl-body').on('click', '.delete-btn', function(evt){
    let idxToDelete = movieList.findIndex(movie => movie.idx === +$(evt.target).data("deleteId"));

    movieList.splice(idxToDelete, 1);

    $(evt.target).closest('tr').remove();
})

// creating tr and appending to table

function createRow(movieInfo) {
   return `
    <tr>
        <td>${movieInfo.title}</td>
        <td>${movieInfo.rating}</td>
        <td>
            <button class="delete-btn" data-deleteId=${movieInfo.idx}>Delete</button>
        </td>
    </tr>
    `;
}
// when delete button is clicked, tr is removed

