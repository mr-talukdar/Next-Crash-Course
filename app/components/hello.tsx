export default async function Hello() {
    const response= await fetch("http://localhost:3001/api/books");
    const books= await response.json();

    return (
        <div><h1>
            {books.map((book:{id:number, name:string})=>(
                <p key={book.id}>{book.name}</p>
            ))}
        </h1></div>
    );
}