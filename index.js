function generateOTP() {
    const otpLength = 6; // Length of the OTP
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 10); // Random digit between 0-9
    }
    document.getElementById('otp').textContent = otp;
}