import React, { useContext } from 'react'
import { Context } from '../index'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SHOP_ROUTE } from '../utils/consts'
import { NavLink } from 'react-router-dom'
import {observer} from 'mobx-react-lite'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigation = [
        { name: 'Shop', to: SHOP_ROUTE, current: true },
      ]
  return (
    
    <nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
          {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {user.isAuth ?
               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

               {/* Profile dropdown */}
               <Menu as="div" className="relative ml-3">
                 <div>
                   <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                     <span className="absolute -inset-1.5" />
                     <span className="sr-only">Open user menu</span>
                     <img
                       className="h-8 w-8 rounded-full"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""
                     />
                   </Menu.Button>
                 </div>
                 <Transition
                   as={Fragment}
                   enter="transition ease-out duration-100"
                   enterFrom="transform opacity-0 scale-95"
                   enterTo="transform opacity-100 scale-100"
                   leave="transition ease-in duration-75"
                   leaveFrom="transform opacity-100 scale-100"
                   leaveTo="transform opacity-0 scale-95"
                 >
                   <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                     <Menu.Item>
                       {({ active }) => (
                         <a
                           href="#"
                           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                         >
                           Your Profile
                         </a>
                       )}
                     </Menu.Item>
                     <Menu.Item>
                       {({ active }) => (
                         <a
                           href="#"
                           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                         >
                           Settings
                         </a>
                       )}
                     </Menu.Item>
                     <Menu.Item>
                       {({ active }) => (
                         <a
                           href="#"
                           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                         >
                           Sign out
                         </a>
                       )}
                     </Menu.Item>
                   </Menu.Items>
                 </Transition>
               </Menu>
             </div>  
               :
               <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'> 
               
               <button className="ml-6 text-white outline outline-offset-4 outline-white rounded-md" onClick={() => user.setIsAuth(true)}>Auth</button>
               
               <button className="ml-6 text-white outline outline-offset-4 outline-white rounded-md">Registration</button>
               </div>
               }

        {/* <!-- Profile dropdown --> */}
        
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
  )
});

export default NavBar



