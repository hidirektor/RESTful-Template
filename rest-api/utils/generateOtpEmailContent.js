const generateOtpEmailContent = (otpCode) => {
    return `
        <div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2">
            <div style="margin: 50px auto; width: 70%; padding: 20px 0">
                <div style="border-bottom: 1px solid #eee">
                    <a href="" style="font-size: 1.4em; color: #00466a; text-decoration: none; font-weight: 600">
                        <img src="cid:hidirektor" alt="hidirektor" style="display: block; margin: 0 auto; width: 230px; height: 150px" />
                    </a>
                </div>
                <p style="font-size: 1.1em">Merhabalar,</p>
                <p>hidirektor'u seçtiğiniz için teşekkür ederiz. Aşağıdaki tek seferlik kodu kullanarak şifrenizi sıfırlayabilirsiniz. Unutmayın bu kod yalnızca <strong style="font-size: 18px">1 dakika</strong> boyunca geçerlidir!</p>
                <h2 style="background: #00466a; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;">
                    ${otpCode}
                </h2>
                <p style="font-size: 0.9em;">Saygılarımızla,<br/>hidirektor</p>
                <hr style="border: none; border-top: 1px solid #eee" />
                <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300">
                    <p><a href="https://hidirektor.com.tr">hidirektor</a></p>
                    <p><a href="https://www.google.com/maps/place/Turgutlu,+Manisa/@38.4923132,27.674261,14z/data=!3m1!4b1!4m6!3m5!1s0x14b9a7bd7c6104a9:0x5dab35ef99b66f28!8m2!3d38.500161!4d27.70841!16zL20vMGJqX25u?entry=ttu">Turgutlu Manisa / Turkey</a></p>
                </div>
            </div>
        </div>
    `;
};

module.exports = generateOtpEmailContent;