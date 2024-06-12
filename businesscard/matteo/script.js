function downloadVCard() {  
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Matteo Baraldi
N:Baraldi;Matteo;;;
ORG:TNTC
TITLE:Co-founder, Senior Software Developer
EMAIL;TYPE=work:info@tntc.it
TEL;TYPE=work:+393496991261
URL:http://www.tntc.it
NOTE:TNTC STUDIO is composed of a team of highly specialized experts capable of crafting custom apps that bring your ideas to life. Our expertise spans various domains, including Virtual & Augmented Reality (XR), Videogames, 3D Visualization, 3D Websites, and beyond. In four words: We love real-time 3D! Feel free to contact us to learn more about our services or request a complimentary quotation.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'matteo_baraldi.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}