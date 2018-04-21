function students() {
    const URL = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e';
    const USERNAME = "guest";
    const PASSWORD = "guest";
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};
    const TABLE = $('#results');
    const BTN_Add = $('.add');
    const ID = $('#id');
    const FIRST_NAME = $('#firstName');
    const LAST_NAME = $('#lastName');
    const FACULTY_NUMBER = $('#facultyNumber');
    const GRADE = $('#grade');

    $(BTN_Add).on('click', add);

    function add() {
        let student = JSON.stringify({
            id: ID.val(),
            firstName: FIRST_NAME.val(),
            lastName: LAST_NAME.val(),
            facultyNumber: FACULTY_NUMBER.val(),
            grade: GRADE.val()
        });
        $.ajax({
            type: "POST",
            url: URL + '/students',
            data: student,
            contentType : "application/json",
            headers: AUTH
        }).then(function () {
            list();
            ID.val('');
            FIRST_NAME.val('');
            LAST_NAME.val('');
            FACULTY_NUMBER.val('');
            GRADE.val('')
        }).catch(error)
    }

    function list() {
        $.ajax({
            type: "GET",
            url: URL + '/students',
            headers: AUTH
        }).then(function (students) {
            students = students.sort((a, b) => {
                return a.ID - b.ID
            });
            students.forEach(function (student) {
                if (student.ID > 1) {
                    return false
                }
                generate(student.ID, student.FirstName, student.LastName, student.FacultyNumber, student.Grade)
            })
        }).catch(error)
    }

    function generate(ID, FirstName, LastName, FacultyNumber, Grade) {
        let row = $($('<tr>')
            .append($(`<td>${ID}</td>`))
            .append($(`<td>${FirstName}</td>`))
            .append($(`<td>${LastName}</td>`))
            .append($(`<td>${FacultyNumber}</td>`))
            .append($(`<td>${Grade}</td>`)));

        $(TABLE).append(row);
    }

    window.onload = list();

    function properType() {
        if (ID.val() === '' || typeof ID.val() !== 'number') {
            console.log('Invalid input type!')
        }
    }

    function error(err) {
        console.log(err.status + err.statusText);
    }
}