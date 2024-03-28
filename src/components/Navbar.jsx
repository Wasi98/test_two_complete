import PropTypes from 'prop-types';

const menuItems = [
  {
    name: 'Home',
    href: '',
  },
  {
    name: 'About',
    href: '',
  },
  {
    name: 'Contact',
    href: '',
  },
]

export function Navbar({updateActivePage}) {

  return (
    <>
  <div className="">
    <div className="bg-zinc-500">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 ">
            <ul className="inline-flex space-x-10 ">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    onClick={
                      (e) => {
                        e.preventDefault();  //prevent default navigation behavior

                        updateActivePage(item.name) //passes the components via states
                      }
                    }
                    href={"#"}
                    className="text-md font-semibold text-white hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

        </div>
    </div>
  </div>
    </>
  )
}

Navbar.propTypes = {
  updateActivePage: PropTypes.func.isRequired,
};
