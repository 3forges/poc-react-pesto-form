export interface PestoTwTreeProps {
    name: string;
}

export default function PestoTwTree (props: PestoTwTreeProps) {
    return (
        <>
        <h3>{`PestoContentType: ${props.name}`}</h3>
        <ul class="list-disc">
          <li>Now this is a story all about how, my life got flipped-turned upside down</li>
          <li>Now this is a story all about how, my life got flipped-turned upside down</li>
          <li>
            <ul class="list-disc">
                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
            </ul>
          </li>
        </ul>

            <ol class="list-decimal">
            <li>Now this is a story all about how, my life got flipped-turned upside down</li>

            </ol>

            <ul class="list-none">
            <li>Now this is a story all about how, my life got flipped-turned upside down</li>

            </ul>


            {// other one 
            }

<div class="px-8">
    <h5 class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">On this page</h5>
    <ul class="text-slate-700 text-sm leading-6">
        <li>
            <a href="#class-reference"
                class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Quick
                reference
            </a>
        </li>
        <li>
            <a href="#basic-usage" class="block py-1 font-medium font-medium text-sky-500 dark:text-sky-400">Basic
                usage
            </a>
        </li>
        <li class="ml-4">
            <a href="#adding-an-outer-shadow" class="group flex items-start py-1 text-sky-500 dark:text-sky-400">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Adding an outer shadow
            </a>
        </li>
        <li class="ml-4">
            <a href="#adding-an-inner-shadow"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Adding an inner shadow
            </a>
        </li>
        <li class="ml-4">
            <a href="#removing-the-shadow"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Removing the shadow
            </a>
        </li>
        <li>
            <a href="#applying-conditionally"
                class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Applying
                conditionally
            </a>
        </li>
        <li class="ml-4">
            <a href="#hover-focus-and-other-states"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Hover, focus, and other states
            </a>
        </li>
        <li class="ml-4">
            <a href="#breakpoints-and-media-queries"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Breakpoints and media queries
            </a>
        </li>
        <li>
            <a href="#using-custom-values"
                class="block py-1 font-medium hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">Using
                custom values
            </a>
        </li>
        <li class="ml-4">
            <a href="#customizing-your-theme"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Customizing your theme
            </a>
        </li>
        <li class="ml-4">
            <a href="#arbitrary-values"
                class="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                <svg width="3" height="24" viewBox="0 -9 3 24"
                    class="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>Arbitrary values
            </a>
        </li>
    </ul>
</div>





<ul class="divide-y divide-gray-300 max-w-sm mt-16 mx-auto px-4 border">

    <li class="py-4">

        <div class="flex items-center space-x-4">
            <span class="text-lg font-bold">Item 1</span>
        </div>

        <ul class="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-4">
            <li class="py-2">
                <div class="flex items-center space-x-4">
                    <span class="text-md font-medium">Subitem 1</span>
                </div>
            </li>

            <li class="py-2">
                <div class="flex items-center space-x-4">
                    <span class="text-md font-medium">Subitem 2</span>
                </div>

                <ul class="divide-y divide-gray-300 bg-gray-100 rounded-md px-4 py-2 mt-2">
                    <li class="py-2">
                        <div class="flex items-center space-x-4">
                            <span class="text-sm font-medium">Sub-subitem 1</span>
                        </div>
                    </li>
                    <li class="py-2">
                        <div class="flex items-center space-x-4">
                            <span class="text-sm font-medium">Sub-subitem 2</span>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="py-2">
                <div class="flex items-center space-x-4">
                    <span class="text-md font-medium">Subitem 3</span>
                </div>
            </li>
        </ul>

    </li>

</ul>


      </>     
      )
}