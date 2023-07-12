import Swal from "sweetalert2";
export default {
    AlertNotice(msg) {
        Swal.fire({
            title: "Oops",
            text: msg,
            icon: "error",
            showCancelButton: false,
            allowOutsideClick: false,
            confirmButtonText: "Ok!",
            background: "#171a21",
            confirmButtonColor: "#f5cb78",
            color: "#fff",
        });
    },
    AlertWithCancel(title,msg,icon) {
        Swal.fire({
            title: title,
            text: msg,
            icon: icon,
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonText: "确定",
            background: "#171a21",
            confirmButtonColor: "#f5cb78",
            color: "#fff",
        });
    },
    Message(msg,icon) {
        setTimeout(() => {
            Swal.fire({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: icon,
                grow: false,
                background: "#fffff",
                color: "#000",
                title: msg,
                customClass: {
                    timerProgressBar: 'my-progress-bar',
                  }
            })
        }, 1000);
    }
}