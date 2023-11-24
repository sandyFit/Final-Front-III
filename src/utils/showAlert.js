import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const showAlert = (message, icon) => {
  const mySwal = withReactContent(Swal)
  mySwal.fire({
    text: message,
    icon: icon
  })
}

