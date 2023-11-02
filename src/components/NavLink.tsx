export function NavLink(link){
    return (
        <a class="mr-5  hover:bg-gray-900 hover:text-white hover:shadow-xl ease-in-out transition p-3 rounded-md" href={link.url}>{link.name}</a>
    )
}