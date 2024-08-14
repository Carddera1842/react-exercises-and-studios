export default function BookList() {
   let pageTitle = "Best Books Ever!";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVtu6EtpHF5Mi7J3oPH7MR9eg6onKkX7pCQ&usqp=CAU";
   let book2 = "https://miro.medium.com/v2/resize:fit:1400/1*JtyfxsUD8JHmoYWKy5HkiA.jpeg";
   let book3 = "https://www.realsimple.com/thmb/ooTP7EjFIn71l-gJS6d0-gLBGKM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9780593440315-77d2af3362f74f4f8f9730b136fab06e.png";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Steven King!" />
         <img src={book2} alt="Not Enough Books!" />
         <img src={book3} alt="That One About A Boat!" />
      </div>      
   );
}