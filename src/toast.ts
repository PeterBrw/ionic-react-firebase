export function toast(message: string, duration = 2000) {
    const toast = document.createElement('ion-toast')
    toast.message = message
    toast.duration = duration
    toast.position = 'bottom'
    console.log(message)
    document.body.appendChild(toast)
    return toast.present()
}
