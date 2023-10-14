let bojackHorsemanImages = [
    "https://cdn.vox-cdn.com/thumbor/WrQOgZGsiOLI6Fp4LiSkorOfFNY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9231501/1351058_1419981_zoomed.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/3/2016/07/113027.jpg?quality=90&resize=620,414",
    "https://www.goldderby.com/wp-content/uploads/2017/08/That-Went-Well-1.jpg?w=640",
    "https://www.asifa-hollywood.org/wp-content/uploads/2015/11/bojack-horseman-asifa-hollywood-1024x555.jpg",
    "https://images.ladepeche.fr/api/v1/images/view/5c378a798fe56f3e8205abc1/large/image.jpg",
    "https://www.lavoz.com.ar/resizer/fVqDv0U8Ljs4FfzBBbloutQtq9g=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FOULXEQ7IVAITOTVLRB5Z4ADYU.jpg",
    "https://cdn.vox-cdn.com/thumbor/WTxSqadqw5gniaLlwdPJ3IG3YEY=/0x0:2516x1424/2000x1333/filters:focal(1258x712:1259x713)/cdn.vox-cdn.com/uploads/chorus_asset/file/15880814/Screen_Shot_2015-06-30_at_10.12.12_AM.0.0.1470511529.png",
    "https://images.entertainment.ie/storage/images_content/rectangle/620x372/bojack20166301222705.jpg?w=640&h=384&q=high",
    "https://cdn.vox-cdn.com/thumbor/Dmz7-cFg2pkzJU88RWwOxoyYGNU=/0x0:1200x800/1200x800/filters:focal(499x296:691x488)/cdn.vox-cdn.com/uploads/chorus_image/image/66212086/bojack_end_netflix_ringer.0.jpg",
    "https://www.hollywoodreporter.com/wp-content/uploads/2016/07/bojack_horseman_s03e02_still.jpg?w=3000",
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * bojackHorsemanImages.length);
    imgs[i].src = bojackHorsemanImages[randomImg];
}

const headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Bojack Horseman is rad";
}