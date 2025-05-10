type EmailService = {
    name: string
    title: string
    email: string
}


export const sendEmail = async (data: EmailService) => {
    const params = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
            name: data.name,
            title: data.title,
            email: data.email
        },
        accessToken: process.env.EMAILJS_PRIVATE_KEY
    }
    return await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
  }