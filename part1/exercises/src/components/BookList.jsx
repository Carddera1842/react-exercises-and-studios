export default function BookList() {
   let pageTitle = "Best Books Ever!";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVtu6EtpHF5Mi7J3oPH7MR9eg6onKkX7pCQ&usqp=CAU";
   let book2 = "https://miro.medium.com/v2/resize:fit:1400/1*JtyfxsUD8JHmoYWKy5HkiA.jpeg";
   let book3 = "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRc3C11pZ-ehVZizH_7H_QPmo9ZiIvsh4346fxtdZ5-0rUi2dU_A1MrBbvZ30tpvk2_63YnxDzmH49gXgpIyLNuashjc3th5bx7feiElqDhOWy30oxUaub0UWk";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} height={200} width={200} alt="Steven King!" />
         <img src={book2} height={200} width={200} alt="Not Enough Books!" />
         <img src={book3} height={200} width={200} alt="That One About A Boat!" />
      </div>      
   );
}