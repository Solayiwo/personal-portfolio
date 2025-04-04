export default function Location() {
  return (
    <div className="flex justify-center my-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.64601913806!2d7.472392564933027!3d9.090546972275371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a42a5e3f47d%3A0xa5b2f06d94fb9ecb!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1737363537969!5m2!1sen!2sng"
        width="80%"
        // width={50}
        height={350}
        style={{ border: 4 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
      />
    </div>
  );
}
