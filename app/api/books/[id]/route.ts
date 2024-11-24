import books from "@/app/api/db";

export async function PUT( request:Request, context:{params:{id: string}}){
    const id= +context.params.id;
    const book= await request.json();
    console.log(book);
    const index= books.findIndex( (book) => book.id === id);
    books[index]=book;
    console.log(books);
    if (index === -1) {
        return new Response("Book not found", {status: 404});
    }
    return Response.json(books);
}

export async function DELETE( request: Request, context:{params:{id: number}}){
    const id= +context.params.id;
    const index= books.findIndex( (book) => book.id === id);
    console.log(index);
    books.splice(index,1);
    return Response.json(books);
}