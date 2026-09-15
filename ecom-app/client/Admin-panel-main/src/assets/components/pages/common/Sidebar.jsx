import { NavLink } from 'react-router'
import {
  FaBagShopping,
  FaBars,
  FaChartPie,
  FaChevronDown,
  FaCircleDot,
  FaClockRotateLeft,
  FaDroplet,
  FaMessage,
  FaUpDownLeftRight,
  FaUser
} from 'react-icons/fa6'

const linkClass = ({ isActive }) => `sidebar-sub-link ${isActive ? 'sidebar-sub-active' : ''}`

export default function Sidebar() {
  const closeOtherMenus = (event) => {
    if (event.currentTarget.open) {
      document.querySelectorAll('.sidebar details').forEach((menu) => {
        if (menu !== event.currentTarget) {
          menu.removeAttribute('open')
        }
      })
    }
  }

  return (
    <aside className='sidebar'>
      <div className='sidebar-logo'>
        <img
          src='https://www.wscubetech.com/images/wscube-tech-logo-2.svg'
          alt='WsCube Tech'
          className='sidebar-logo-image'
        />
      </div>

      <div className='sidebar-divider' />

      <div className='sidebar-menu'>
        <NavLink to='/dashboard' className='sidebar-main-link'>
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <details onToggle={closeOtherMenus} id='users-menu'>
          <summary><FaUser /><span>Users</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/users/add'><FaCircleDot /> Add User</NavLink><NavLink className={linkClass} to='/users/view'><FaCircleDot /> View Users</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='enquiries-menu'>
          <summary><FaMessage /><span>Enquirys</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/enquiries/add'><FaCircleDot /> Add Enquiry</NavLink><NavLink className={linkClass} to='/enquiries/view'><FaCircleDot /> View Enquirys</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='colors-menu'>
          <summary><FaDroplet /><span>Colors</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/color/add'><FaCircleDot /> Add Color</NavLink><NavLink className={linkClass} to='/color/view'><FaCircleDot /> View Colors</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='materials-menu'>
          <summary><FaUpDownLeftRight /><span>Materials</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/material/add'><FaCircleDot /> Add Material</NavLink><NavLink className={linkClass} to='/material/view'><FaCircleDot /> View Materials</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='parent-categories-menu'>
          <summary><FaBars /><span>Parent Categorys</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/category/add'><FaCircleDot /> Add Parent Category</NavLink><NavLink className={linkClass} to='/category/view'><FaCircleDot /> View Parent Categorys</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='sub-categories-menu'>
          <summary><FaBars /><span>Sub Categorys</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/sub-category/add'><FaCircleDot /> Add Sub Category</NavLink><NavLink className={linkClass} to='/sub-category/view'><FaCircleDot /> View Sub Categorys</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='sub-sub-categories-menu'>
          <summary><FaBars /><span>Sub Sub Categorys</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/sub-sub-category/add'><FaCircleDot /> Add Sub Sub Category</NavLink><NavLink className={linkClass} to='/sub-sub-category/view'><FaCircleDot /> View Sub Sub Categorys</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='products-menu'>
          <summary><FaBagShopping /><span>Products</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/product/add'><FaCircleDot /> Add Product</NavLink><NavLink className={linkClass} to='/product/view'><FaCircleDot /> View Products</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='why-choose-us-menu'>
          <summary><FaClockRotateLeft /><span>Why Choose Us</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/why-choose-us/add'><FaCircleDot /> Add Why Choose Us</NavLink><NavLink className={linkClass} to='/why-choose-us/view'><FaCircleDot /> View Why Choose Us</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='orders-menu'>
          <summary><FaBagShopping /><span>Orders</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/orders/add'><FaCircleDot /> Add Order</NavLink><NavLink className={linkClass} to='/orders/view'><FaCircleDot /> View Orders</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='sliders-menu'>
          <summary><FaBars /><span>Sliders</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/sliders/add'><FaCircleDot /> Add Slider</NavLink><NavLink className={linkClass} to='/sliders/view'><FaCircleDot /> View Sliders</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='country-menu'>
          <summary><FaBars /><span>Country</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/country/add'><FaCircleDot /> Add Country</NavLink><NavLink className={linkClass} to='/country/view'><FaCircleDot /> View Country</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='testimonials-menu'>
          <summary><FaMessage /><span>Testimonials</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/testimonial/add'><FaCircleDot /> Add Testimonial</NavLink><NavLink className={linkClass} to='/testimonial/view'><FaCircleDot /> View Testimonials</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='faqs-menu'>
          <summary><FaCircleDot /><span>Faqs</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/faqs/add'><FaCircleDot /> Add Faq</NavLink><NavLink className={linkClass} to='/faqs/view'><FaCircleDot /> View Faqs</NavLink></div>
        </details>

        <details onToggle={closeOtherMenus} id='terms-menu'>
          <summary><FaBars /><span>Terms &amp; Conditions</span><FaChevronDown className='sidebar-arrow' /></summary>
          <div><NavLink className={linkClass} to='/terms/add'><FaCircleDot /> Add Terms</NavLink><NavLink className={linkClass} to='/terms/view'><FaCircleDot /> View Terms</NavLink></div>
        </details>
      </div>
    </aside>
  )
}
