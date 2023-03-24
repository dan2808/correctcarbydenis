﻿window.Delete = function Delete(url) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    if (data.success = true) {
                        toastr.success(data.message)
                        //location.reload();

                        // Store session data
                        sessionStorage.setItem('mySessionData', JSON.stringify(data.sessionData));

                        // Reload the page
                        location.reload();
                    }
                    else {
                        toastr.error(data.message)
                    }
                }
            })

        }
    })

}