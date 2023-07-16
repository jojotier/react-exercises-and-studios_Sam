export default function BookList() {
   let pageTitle = "TBR List";
   let book1 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1670014934l/63249718.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91u8Wb5y-TL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://i0.wp.com/inkstonebooks.com/wp-content/uploads/2022/12/The-Adventures-of-Amina-Al-Sirafi.png?fit=1500%2C2288&ssl=1";

   return (
      <div>
         <h3 className="bookHeading">{pageTitle}</h3>
        <img src={book1} width="200" height="250" alt="Silver Nitrate by Silvia Moreno-Garcia. It is a shockingly red cover showing the title in bold font and a monochromatic red and black image of a woman's wide eyes." />
         <img src={book2} width="200" height="250" alt="Babel, or The Necesity of Violence: An Arcane History of the Oxford Translators' Revolution by R. F. Kuang. Whit lines etched into a black background spell out the title over a black and white image of a tower rising into the sky." />
         <img src={book3} width="200" height="250" alt="The Aventures of Amina al-Sirafi by Shannon Chakraborty. A colorful, abstract color showing the title in gold, bordered by waves of blue. There is a compass at the top." />
      </div>      
   );
}