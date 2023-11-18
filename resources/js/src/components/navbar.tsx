
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[60] bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between w-full mx-auto py-2.5 px-4">
      <div className="mx-auto flex flex-wrap justify-between items-center w-full">
        <div className="flex items-center">
          <button
            type="button"
            className="-ml-3 mr-1 p-2 lg:ml-0 lg:mr-0 lg:hidden"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 20 20"
              aria-hidden="true"
              aria-label="Open sidebar"
              className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <a className="sr-only" href="/">
            Flowbite React
          </a>
          <a
            aria-hidden="true"
            className="flex items-center gap-3 text-2xl font-semibold text-gray-900 dark:text-white"
            href="/"
          >
            <img
              alt=""
              loading="lazy"
              width={32}
              height={32}
              decoding="async"
              data-nimg={1}
              className="h-8 w-8"
              style={{ color: "transparent" }}
              src="/favicon.svg"
            />
            <span>Flowbite React</span>
          </a>
          <div className="ml-4 hidden lg:flex">
            <button
              type="button"
              className="DocSearch DocSearch-Button"
              aria-label="Search"
            >
              <span className="DocSearch-Button-Container">
                <svg
                  width={20}
                  height={20}
                  className="DocSearch-Search-Icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                    stroke="currentColor"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="DocSearch-Button-Placeholder">Search</span>
              </span>
              <span className="DocSearch-Button-Keys">
                <kbd className="DocSearch-Button-Key">
                  <svg
                    width={15}
                    height={15}
                    className="DocSearch-Control-Key-Icon"
                  >
                    <path
                      d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                      strokeWidth="1.2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="square"
                    />
                  </svg>
                </kbd>
                <kbd className="DocSearch-Button-Key">K</kbd>
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden items-center gap-1 lg:flex">
            <a
              className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
              href="/docs/getting-started/introduction"
            >
              Docs
            </a>
            <a
              href="/docs/getting-started/quickstart"
              className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
            >
              Quickstart
            </a>
            <a
              href="https://flowbite.com/figma/"
              className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
            >
              Figma
            </a>
            <a
              href="https://flowbite.com"
              className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
            >
              Flowbite
            </a>
          </div>
          <div className="flex items-center gap-1">
            <div className="lg:hidden">
              <button
                type="button"
                className="DocSearch DocSearch-Button"
                aria-label="Search"
              >
                <span className="DocSearch-Button-Container">
                  <svg
                    width={20}
                    height={20}
                    className="DocSearch-Search-Icon"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                      stroke="currentColor"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="DocSearch-Button-Placeholder">Search</span>
                </span>
                <span className="DocSearch-Button-Keys">
                  <kbd className="DocSearch-Button-Key">
                    <svg
                      width={15}
                      height={15}
                      className="DocSearch-Control-Key-Icon"
                    >
                      <path
                        d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                        strokeWidth="1.2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="square"
                      />
                    </svg>
                  </kbd>
                  <kbd className="DocSearch-Button-Key">K</kbd>
                </span>
              </button>
            </div>
            <a
              href="https://storybook.flowbite-react.com/"
              className="hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:block"
            >
              <div className="w-fit" data-testid="flowbite-tooltip-target">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z" />
                </svg>
              </div>
              <div
                data-testid="flowbite-tooltip"
                tabIndex={-1}
                className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700"
                style={{ position: "absolute", top: "-24px", left: "796.063px" }}
                id=":R2lbpla:"
                role="tooltip"
              >
                <div className="relative z-20">View Storybook</div>
                <div
                  className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"
                  data-testid="flowbite-tooltip-arrow"
                  style={{ left: 61, bottom: "-4px" }}
                >
                  &nbsp;
                </div>
              </div>
            </a>
            <a
              href="https://discord.gg/4eeurUVvTy"
              className="hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:block"
            >
              <div className="w-fit" data-testid="flowbite-tooltip-target">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  role="img"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
              <div
                data-testid="flowbite-tooltip"
                tabIndex={-1}
                className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700"
                style={{ position: "absolute", top: "-24px", left: "811.438px" }}
                id=":R3lbpla:"
                role="tooltip"
              >
                <div className="relative z-20">Join Discord Community</div>
                <div
                  className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"
                  data-testid="flowbite-tooltip-arrow"
                  style={{ left: 90, bottom: "-4px" }}
                >
                  &nbsp;
                </div>
              </div>
            </a>
            <a
              href="https://github.com/themesberg/flowbite-react"
              className="hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:block"
            >
              <div className="w-fit" data-testid="flowbite-tooltip-target">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <div
                data-testid="flowbite-tooltip"
                tabIndex={-1}
                className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700"
                style={{ position: "absolute", top: "-24px", left: "884.93px" }}
                id=":R4lbpla:"
                role="tooltip"
              >
                <div className="relative z-20">View on GitHub</div>
                <div
                  className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"
                  data-testid="flowbite-tooltip-arrow"
                  style={{ left: "60.5px", bottom: "-4px" }}
                >
                  &nbsp;
                </div>
              </div>
            </a>
            <div className="w-fit" data-testid="flowbite-tooltip-target">
              <button
                type="button"
                aria-label="Toggle dark mode"
                data-testid="dark-theme-toggle"
                className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  aria-label="Currently dark mode"
                  data-active="false"
                  className="h-5 w-5 hidden dark:block"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  aria-label="Currently light mode"
                  data-active="true"
                  className="h-5 w-5 dark:hidden"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            </div>
            <div
              data-testid="flowbite-tooltip"
              tabIndex={-1}
              className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700"
              style={{ position: "absolute", top: "-34px", left: "920.938px" }}
              id=":R5lbpla:"
              role="tooltip"
            >
              <div className="relative z-20">Toggle dark mode</div>
              <div
                className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"
                data-testid="flowbite-tooltip-arrow"
                style={{ left: "68.5px", bottom: "-4px" }}
              >
                &nbsp;
              </div>
            </div>
            <a
              href="https://npmjs.com/package/flowbite-react"
              className="ml-2 hidden lg:block"
            >
              <span
                className="flex h-fit items-center gap-1 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300 p-1 rounded py-0.5 border-primary-700 bg-primary-50 px-2 text-sm font-normal text-primary-700 hover:bg-primary-600 hover:text-white dark:border-primary-700 dark:bg-gray-700 dark:text-primary-700 dark:hover:bg-primary-800 dark:hover:text-white lg:block"
                data-testid="flowbite-badge"
              >
                <span>v{/* */}0.6.4</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>

  )
}
