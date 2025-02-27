<nav class="bg-white border border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6">
        <a href="http://awa-kg/admin" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/assets/images/logo.svg" class="h-8" alt="Logo" />
        </a>
        <div class="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="relative flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
<!--                <span class="sr-only">Open user menu</span>-->
                <img class="w-8 h-8 rounded-full" src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg" alt="user photo">
                <span class="top-0 start-6 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white  rounded-full"></span>
            </button>
            <!-- Dropdown menu -->
            <div class="z-50 hidden absolute top-8 right-0 text-base list-none bg-white rounded-lg shadow" id="user-dropdown">
                <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900">Bonnie Green</span>
                    <span class="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
                </div>
                <ul class="" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Настройки</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Выйти</a>
                    </li>
                </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
        <!-- <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0">Contact</a>
              </li>
            </ul>
          </div> -->
    </div>
</nav>

<script>
    // Переключение выпадающего меню пользователя
    const userDropdown = document.querySelector('#user-dropdown');
    const userMenuButton = document.querySelector('#user-menu-button');

    userMenuButton?.addEventListener('click', () => {
        userDropdown?.classList.toggle('hidden');
    });
</script>