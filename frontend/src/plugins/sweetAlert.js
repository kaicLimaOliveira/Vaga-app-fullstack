import Swal from 'sweetalert2'

export function sweetAlert(icon, title, text) {
    const Toast = Swal.mixin({
        
    })

    Toast.fire(icon, title, text)
}