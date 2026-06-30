fetch('https://akkale-nakliyat.vercel.app/')
  .then(r => r.text())
  .then(html => {
    const images = Array.from(new Set(html.match(/src="[^"]+"/g)));
    console.log("IMAGES:");
    console.log(images.join("\n"));
    
    const colors = Array.from(new Set(html.match(/(#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3})/g)));
    console.log("COLORS:");
    console.log(colors.join("\n"));
  })
  .catch(console.error);
