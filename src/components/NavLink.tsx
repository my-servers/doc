export function NavLink(link){
    return (
        <a class="mr-5 hover:bg-gray-200 p-3 rounded-md" href={link.url}>{link.name}</a>
    )
}