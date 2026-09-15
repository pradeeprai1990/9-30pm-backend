import { FaPenToSquare } from 'react-icons/fa6'

const inputClass = 'w-full rounded border border-gray-300 px-3 py-2.5 outline-none focus:border-violet-500'

export function AddUser() {
  return <div className='admin-page'><div className='admin-title'>Add User</div><div className='admin-form'>
    <div id='user-name'><label>Name</label><input className={inputClass} type='text' placeholder='Enter name' /></div>
    <div id='user-email'><label>Email</label><input className={inputClass} type='email' placeholder='Enter email' /></div>
    <div id='user-mobile'><label>Mobile Number</label><input className={inputClass} type='text' placeholder='Enter mobile number' /></div>
    <div id='user-password'><label>Password</label><input className={inputClass} type='password' placeholder='Enter password' /></div>
    <button className='admin-submit'>Add User</button>
  </div></div>
}

export function ViewUsers() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Users</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Name</div><div>Email</div><div>Mobile</div><div>Status</div><div>Action</div></div>
    <div id='user-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>John Doe</div><div>john@gmail.com</div><div>9876543210</div><div className='active'>Active</div><div><FaPenToSquare /></div></div>
    <div id='user-row-2' className='admin-row'><div><input type='checkbox' /></div><div>2</div><div>Sarah Khan</div><div>sarah@gmail.com</div><div>9876501234</div><div className='active'>Active</div><div><FaPenToSquare /></div></div>
  </div></div>
}

export function AddEnquiry() {
  return <div className='admin-page'><div className='admin-title'>Add Enquiry</div><div className='admin-form'>
    <div id='enquiry-name'><label>Name</label><input className={inputClass} type='text' placeholder='Enter name' /></div>
    <div id='enquiry-email'><label>Email</label><input className={inputClass} type='email' placeholder='Enter email' /></div>
    <div id='enquiry-mobile'><label>Mobile</label><input className={inputClass} type='text' placeholder='Enter mobile' /></div>
    <div id='enquiry-message'><label>Message</label><textarea className={inputClass} placeholder='Enter message' /></div>
    <button className='admin-submit'>Add Enquiry</button>
  </div></div>
}

export function ViewEnquiries() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Enquiries</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Name</div><div>Email</div><div>Mobile</div><div>Message</div><div>Action</div></div>
    <div id='enquiry-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>Rahul Sharma</div><div>rahul@gmail.com</div><div>9876543210</div><div>Product enquiry</div><div className='active'>Active</div></div>
  </div></div>
}

export function AddOrder() {
  return <div className='admin-page'><div className='admin-title'>Add Order</div><div className='admin-form'>
    <div id='order-user'><label>User Name</label><input className={inputClass} type='text' placeholder='Enter user name' /></div>
    <div id='order-product'><label>Product</label><input className={inputClass} type='text' placeholder='Enter product name' /></div>
    <div id='order-amount'><label>Amount</label><input className={inputClass} type='number' placeholder='Enter amount' /></div>
    <div id='order-status'><label>Status</label><select className={inputClass}><option>Pending</option><option>Processing</option><option>Delivered</option></select></div>
    <button className='admin-submit'>Add Order</button>
  </div></div>
}

export function ViewOrders() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Orders</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Order ID</div><div>User</div><div>Amount</div><div>Status</div><div>Action</div></div>
    <div id='order-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>#ORD1001</div><div>Rahul Sharma</div><div>₹12,500</div><div className='active'>Delivered</div><div><FaPenToSquare /></div></div>
  </div></div>
}

export function AddSlider() {
  return <div className='admin-page'><div className='admin-title'>Add Slider</div><div className='admin-form'>
    <div id='slider-title'><label>Slider Title</label><input className={inputClass} type='text' placeholder='Enter slider title' /></div>
    <div id='slider-image'><label>Slider Image</label><input className={inputClass} type='file' /></div>
    <div id='slider-link'><label>Slider Link</label><input className={inputClass} type='text' placeholder='Enter slider link' /></div>
    <div id='slider-order'><label>Order</label><input className={inputClass} type='number' placeholder='Enter order' /></div>
    <button className='admin-submit'>Add Slider</button>
  </div></div>
}

export function ViewSliders() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Sliders</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Title</div><div>Image</div><div>Order</div><div>Status</div><div>Action</div></div>
    <div id='slider-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>Summer Collection</div><div>slider-1.jpg</div><div>1</div><div className='active'>Active</div><div><FaPenToSquare /></div></div>
  </div></div>
}

export function AddCountry() {
  return <div className='admin-page'><div className='admin-title'>Add Country</div><div className='admin-form'>
    <div id='country-name'><label>Country Name</label><input className={inputClass} type='text' placeholder='Enter country name' /></div>
    <div id='country-code'><label>Country Code</label><input className={inputClass} type='text' placeholder='Enter country code' /></div>
    <div id='country-order'><label>Order</label><input className={inputClass} type='number' placeholder='Enter order' /></div>
    <button className='admin-submit'>Add Country</button>
  </div></div>
}

export function ViewCountries() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Countries</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Country</div><div>Code</div><div>Order</div><div>Status</div><div>Action</div></div>
    <div id='country-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>India</div><div>IN</div><div>1</div><div className='active'>Active</div><div><FaPenToSquare /></div></div>
  </div></div>
}

export function AddFaq() {
  return <div className='admin-page'><div className='admin-title'>Add Faq</div><div className='admin-form'>
    <div id='faq-question'><label>Question</label><input className={inputClass} type='text' placeholder='Enter question' /></div>
    <div id='faq-answer'><label>Answer</label><textarea className={inputClass} placeholder='Enter answer' /></div>
    <div id='faq-order'><label>Order</label><input className={inputClass} type='number' placeholder='Enter order' /></div>
    <button className='admin-submit'>Add Faq</button>
  </div></div>
}

export function ViewFaqs() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Faqs</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Question</div><div>Answer</div><div>Order</div><div>Status</div><div>Action</div></div>
    <div id='faq-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>How can I order?</div><div>Select a product and add it to cart.</div><div>1</div><div className='active'>Active</div><div><FaPenToSquare /></div></div>
  </div></div>
}

export function AddTerms() {
  return <div className='admin-page'><div className='admin-title'>Add Terms &amp; Conditions</div><div className='admin-form'>
    <div id='terms-title'><label>Title</label><input className={inputClass} type='text' placeholder='Enter title' /></div>
    <div id='terms-description'><label>Description</label><textarea className={`${inputClass} min-h-48`} placeholder='Enter terms and conditions' /></div>
    <button className='admin-submit'>Add Terms</button>
  </div></div>
}

export function ViewTerms() {
  return <div className='admin-page'><div className='admin-list-title'><span>View Terms &amp; Conditions</span><div><button>Filter</button><button>Delete All</button><button>Change Status</button></div></div><div className='admin-table'>
    <div className='admin-row admin-head'><div>Select</div><div>S. No.</div><div>Title</div><div>Description</div><div>Order</div><div>Status</div><div>Action</div></div>
    <div id='terms-row-1' className='admin-row'><div><input type='checkbox' /></div><div>1</div><div>Website Terms</div><div>Terms and conditions for customers.</div><div>1</div><div className='active'>Active</div><div><FaPenToSquare /></div></div>
  </div></div>
}
