export default async function Todo({params}:{params:any}) {
    return(
        <div>
        {((await params).todoid)+JSON.stringify((await params).todoids)}
        </div>
    )
}