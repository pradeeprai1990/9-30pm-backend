import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './assets/components/pages/Login'
import Layout from './assets/components/pages/common/Layout'
import Dashboard from './assets/components/pages/Dashboard'
import AddTestimonial from './assets/components/pages/testimonial/AddTestimonial'
import ViewTestimonials from './assets/components/pages/testimonial/ViewTestimonials'
import AddWhyChooseUs from './assets/components/pages/whyChooseUs/AddWhyChooseUs'
import ViewWhyChooseUs from './assets/components/pages/whyChooseUs/ViewWhyChooseUs'
import AddColor from './assets/components/pages/color/AddColor'
import ViewColors from './assets/components/pages/color/ViewColors'
import AddMaterial from './assets/components/pages/material/AddMaterial'
import ViewMaterials from './assets/components/pages/material/ViewMaterials'
import AddCategory from './assets/components/pages/category/AddCategory'
import ViewCategories from './assets/components/pages/category/ViewCategories'
import AddSubCategory from './assets/components/pages/subCategory/AddSubCategory'
import ViewSubCategories from './assets/components/pages/subCategory/ViewSubCategories'
import AddSubSubCategory from './assets/components/pages/subSubCategory/AddSubSubCategory'
import ViewSubSubCategories from './assets/components/pages/subSubCategory/ViewSubSubCategories'
import AddProduct from './assets/components/pages/product/AddProduct'
import ViewProducts from './assets/components/pages/product/ViewProducts'
import {
  AddCountry, AddEnquiry, AddFaq, AddOrder, AddSlider, AddTerms, AddUser,
  ViewCountries, ViewEnquiries, ViewFaqs, ViewOrders, ViewSliders, ViewTerms, ViewUsers
} from './assets/components/pages/StaticPages'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/testimonial/add' element={<AddTestimonial />} />
                    <Route path='/testimonial/view' element={<ViewTestimonials />} />
                    <Route path='/why-choose-us/add' element={<AddWhyChooseUs />} />
                    <Route path='/why-choose-us/view' element={<ViewWhyChooseUs />} />

                    <Route path='/color/add' element={<AddColor />} />
                    <Route path='/color/edit/:id' element={<AddColor />} />
                    <Route path='/color/view' element={<ViewColors />} />



                    <Route path='/material/add' element={<AddMaterial />} />
                    <Route path='/material/view' element={<ViewMaterials />} />
                    <Route path='/category/add' element={<AddCategory />} />
                    <Route path='/category/view' element={<ViewCategories />} />
                    <Route path='/sub-category/add' element={<AddSubCategory />} />
                    <Route path='/sub-category/view' element={<ViewSubCategories />} />
                    <Route path='/sub-sub-category/add' element={<AddSubSubCategory />} />
                    <Route path='/sub-sub-category/view' element={<ViewSubSubCategories />} />
                    <Route path='/product/add' element={<AddProduct />} />
                    <Route path='/product/view' element={<ViewProducts />} />
                    <Route path='/users/add' element={<AddUser />} />
                    <Route path='/users/view' element={<ViewUsers />} />
                    <Route path='/enquiries/add' element={<AddEnquiry />} />
                    <Route path='/enquiries/view' element={<ViewEnquiries />} />
                    <Route path='/orders/add' element={<AddOrder />} />
                    <Route path='/orders/view' element={<ViewOrders />} />
                    <Route path='/sliders/add' element={<AddSlider />} />
                    <Route path='/sliders/view' element={<ViewSliders />} />
                    <Route path='/country/add' element={<AddCountry />} />
                    <Route path='/country/view' element={<ViewCountries />} />
                    <Route path='/faqs/add' element={<AddFaq />} />
                    <Route path='/faqs/view' element={<ViewFaqs />} />
                    <Route path='/terms/add' element={<AddTerms />} />
                    <Route path='/terms/view' element={<ViewTerms />} />
                </Route>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
