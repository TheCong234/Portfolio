export default function PortfolioSection() {
  return (
    <div
      // className="min-h-screen md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      className="min-h-screen pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="Portfolio"
    >
      <div className="text-center pb-10 aos-init" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "rgb(99, 102, 241)",
              backgroundImage: "linear-gradient(45deg, rgb(99, 102, 241) 10%, rgb(168, 85, 247) 93%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a
          milestone in my continuous learning path.
        </p>
      </div>
      <div>
        <header
          className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic md:px-4 css-9ghz71"
          style={
            {
              // CSS custom properties must be in quotes
              "--Paper-shadow": "none",
            } as React.CSSProperties
          }
        >
          <div className="MuiTabs-root css-s0quzf">
            <div
              className="MuiTabs-scroller MuiTabs-fixed css-w94xpu"
              style={{
                overflow: "hidden",
                marginBottom: "0px",
              }}
            >
              <div className="MuiTabs-flexContainer css-162tvoi" role="tablist">
                <button
                  className="MuiButtonBase-root MuiTab-root MuiTab-labelIcon MuiTab-textColorSecondary MuiTab-fullWidth Mui-selected css-1y6lfzr"
                  tabIndex={0}
                  type="button"
                  role="tab"
                  aria-selected="true"
                  id="full-width-tab-0"
                  aria-controls="full-width-tabpanel-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code MuiTab-iconWrapper MuiTab-icon mb-2 w-5 h-5 transition-all duration-300"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Projects<span className="MuiTouchRipple-root css-4mb1j7"></span>
                </button>
                <button
                  className="MuiButtonBase-root MuiTab-root MuiTab-labelIcon MuiTab-textColorSecondary MuiTab-fullWidth css-1y6lfzr"
                  tabIndex={-1}
                  type="button"
                  role="tab"
                  aria-selected="false"
                  id="full-width-tab-1"
                  aria-controls="full-width-tabpanel-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award MuiTab-iconWrapper MuiTab-icon mb-2 w-5 h-5 transition-all duration-300"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                  Certificates<span className="MuiTouchRipple-root css-4mb1j7"></span>
                </button>
                <button
                  className="MuiButtonBase-root MuiTab-root MuiTab-labelIcon MuiTab-textColorSecondary MuiTab-fullWidth css-1y6lfzr"
                  tabIndex={-1}
                  type="button"
                  role="tab"
                  aria-selected="false"
                  id="full-width-tab-2"
                  aria-controls="full-width-tabpanel-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-boxes MuiTab-iconWrapper MuiTab-icon mb-2 w-5 h-5 transition-all duration-300"
                  >
                    <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                    <path d="m7 16.5-4.74-2.85"></path>
                    <path d="m7 16.5 5-3"></path>
                    <path d="M7 16.5v5.17"></path>
                    <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                    <path d="m17 16.5-5-3"></path>
                    <path d="m17 16.5 4.74-2.85"></path>
                    <path d="M17 16.5v5.17"></path>
                    <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                    <path d="M12 8 7.26 5.15"></path>
                    <path d="m12 8 4.74-2.85"></path>
                    <path d="M12 13.5V8"></path>
                  </svg>
                  Tech Stack<span className="MuiTouchRipple-root css-4mb1j7"></span>
                </button>
              </div>
              <span
                className="MuiTabs-indicator css-pnbvwb"
                style={{
                  left: "8px",
                  width: "647.328px",
                }}
              ></span>
            </div>
          </div>
        </header>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          <div
            className="react-swipeable-view-container"
            style={{
              flexDirection: "row",
              transition: "all",
              direction: "ltr",
              display: "flex",
              willChange: "transform",
              transform: "translate(0%, 0px)",
            }}
          >
            <div
              aria-hidden="false"
              data-swipeable="true"
              style={{
                width: "100%",
                flexShrink: 0,
                overflow: "auto",
              }}
            >
              <div role="tabpanel" id="full-width-tabpanel-0" aria-labelledby="full-width-tab-0" dir="ltr">
                <div className="MuiBox-root css-1mlnkln">
                  <div className="MuiTypography-root MuiTypography-body1 css-fyswvn">
                    <div className="container mx-auto flex justify-center items-center overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                        <div data-aos="fade-up-right" data-aos-duration="1000" className="aos-init ">
                          <div className="group relative w-full">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                              <div className="relative p-5 z-10">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src="https://lh3.googleusercontent.com/pw/AP1GczN8nCgz3uDAYTz959bL9wjcgXhPsT2-czigri6o-HkkyyIJ2uEagCkxFUsJtdcFFKoSblBWf0VUi_UY2bgrcHCmgG-cFxBz8zH7CM9AM0B6YpxmkMJ1gmL6dGSzzb0efVgKBcnDg_4eWmhmv0TSypNx=w1326-h679-s-no-gm?authuser=0"
                                    alt="Aritmatika Solver"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="mt-4 space-y-3">
                                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    Aritmatika Solver
                                  </h3>
                                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                    Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal
                                    Aritmatika secara otomatis dengan menggunakan bahasa pemrograman Python. Tujuan
                                    utama dari program ini adalah untuk membantu pengguna, terutama pelajar, dalam
                                    menyelesaikan soal-soal Aritmatika dengan lebih cepat dan mudah
                                  </p>
                                  <div className="pt-4 flex items-center justify-between">
                                    <a
                                      href="https://replit.com/@EkiZR/Aritmatika-Project"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                      <span className="text-sm font-medium">Live Demo</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link w-4 h-4"
                                      >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      </svg>
                                    </a>
                                    <a
                                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                      href="/project/28"
                                    >
                                      <span className="text-sm font-medium">Details</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right w-4 h-4"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="aos-init ">
                          <div className="group relative w-full">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                              <div className="relative p-5 z-10">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src="https://lh3.googleusercontent.com/pw/AP1GczO_D4RyZJmuV6r6cm1-gD4VURTIzUUvBa5JAbV7On4tJ60rL5KCvn-5QWIlZ2McjdcJ75QaZJdgM79d2_5XfEVQC_D1XCJZkh7pKX4aPLHzRnI2SsywyzU7NaapNLcCwrMjuHO3CD899cIgQGtizeQj=w1920-h983-s-no-gm"
                                    alt="AutoChat-Discord"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="mt-4 space-y-3">
                                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    AutoChat-Discord
                                  </h3>
                                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                    AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara
                                    terjadwal. Pengguna dapat menentukan saluran tujuan, isi pesan, dan interval
                                    penundaan pengiriman pesan. Program ini berjalan 24/7, memungkinkan pengiriman pesan
                                    otomatis tanpa intervensi manual, sehingga memudahkan promosi atau komunikasi di
                                    Discord secara efisien.
                                  </p>
                                  <div className="pt-4 flex items-center justify-between">
                                    <a
                                      href="https://autochat.my.id/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                      <span className="text-sm font-medium">Live Demo</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link w-4 h-4"
                                      >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      </svg>
                                    </a>
                                    <a
                                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                      href="/project/29"
                                    >
                                      <span className="text-sm font-medium">Details</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right w-4 h-4"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="aos-init ">
                          <div className="group relative w-full">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                              <div className="relative p-5 z-10">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src="https://lh3.googleusercontent.com/pw/AP1GczM9nypDGzHROBamkpFL4a4H0w9LDD4FEvC1rPTRcUPunmWp6VTHwxrh88soMRZkTClx1bEEH7e9GZvjzltP5Pij4P4ou2e3wTvgIbggRxxdghrLfb5xuJnUiio_aZ6EHM5oF70Rv6ZbfsgXwPibBgrM=w1326-h679-s-no-gm?authuser=0"
                                    alt="Buku Catatan"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="mt-4 space-y-3">
                                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    Buku Catatan
                                  </h3>
                                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                    Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan
                                    mengelola catatan secara digital. Dengan antarmuka yang sederhana, pengguna dapat
                                    menulis, mengedit, dan mengakses catatan mereka kapan saja. Fitur pencarian juga
                                    memudahkan dalam menemukan catatan dengan cepat, menjadikannya solusi praktis untuk
                                    menyimpan ide dan informasi penting.
                                  </p>
                                  <div className="pt-4 flex items-center justify-between">
                                    <a
                                      href="https://github.com/EkiZR/Buku-Catatan"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                      <span className="text-sm font-medium">Live Demo</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link w-4 h-4"
                                      >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      </svg>
                                    </a>
                                    <a
                                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                      href="/project/30"
                                    >
                                      <span className="text-sm font-medium">Details</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right w-4 h-4"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-aos="fade-up-right" data-aos-duration="1000" className="aos-init">
                          <div className="group relative w-full">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                              <div className="relative p-5 z-10">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src="https://lh3.googleusercontent.com/pw/AP1GczNqjVfSWMu1M2XRNLeL3KM7soqBzsarT1lhi3rQWyKx6yp5YfK-nJhcdrsy2e-Dim1YtF0qwltbhY8y8RxZAADymL7Tjd2vtmI8gQIDBdrfcxkXf07Y00sCs-8c4Gq-Oq4l_HgiQk2vkmCk9nTP9_IM=w1920-h983-s-no-gm?authuser=0"
                                    alt="Growtopia-Calculator"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="mt-4 space-y-3">
                                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    Growtopia-Calculator
                                  </h3>
                                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                    Growotopia Surgery Shop Calculator membantu pemain Growtopia menghitung keuntungan
                                    dari penjualan tools di vending shop surgery. Cukup masukkan jumlah pack dan harga
                                    per pack untuk menghitung modal, profit kotor, dan profit bersih, sehingga
                                    memudahkan perencanaan dan strategi penjualan.
                                  </p>
                                  <div className="pt-4 flex items-center justify-between">
                                    <a
                                      href="https://growtopiacalculator.vercel.app/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                      <span className="text-sm font-medium">Live Demo</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link w-4 h-4"
                                      >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      </svg>
                                    </a>
                                    <a
                                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                      href="/project/31"
                                    >
                                      <span className="text-sm font-medium">Details</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right w-4 h-4"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1200" className="aos-init">
                          <div className="group relative w-full">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                              <div className="relative p-5 z-10">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src="https://lh3.googleusercontent.com/pw/AP1GczMtrTVZHpOJtTEMxAnbQ_pD9QEQxt2maTjN8i1-AtvZgXJMwoccsf_oT-GHNu4WXtLivzu7I_otrvoGWdMRhCeuHIQIJ-nVWuU4aU2UJvRpztUL44_ffHthI8lkoHGI_xSo5XXKtVKOHpTd_pRXnSP3=w1723-h882-s-no-gm?authuser=0"
                                    alt="IT Support Bekasi"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="mt-4 space-y-3">
                                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    IT Support Bekasi
                                  </h3>
                                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                    Website IT Support Bekasi adalah proyek yang saya buat atas permintaan guru di
                                    sekolah, untuk menyediakan layanan IT di Bekasi. IT Support Bekasi adalah penyedia
                                    layanan terpercaya di bidang teknologi informasi, yang menawarkan service,
                                    maintenance, dan instalasi CCTV, serta pembuatan website yang menarik dan
                                    fungsional.
                                  </p>
                                  <div className="pt-4 flex items-center justify-between">
                                    <a
                                      href="https://itsupportbekasi.vercel.app/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                      <span className="text-sm font-medium">Live Demo</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link w-4 h-4"
                                      >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      </svg>
                                    </a>
                                    <a
                                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                      href="/project/32"
                                    >
                                      <span className="text-sm font-medium">Details</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right w-4 h-4"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-aos="fade-up-left" data-aos-duration="1000" className="aos-init">
                          <div className="group relative w-full">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                              <div className="relative p-5 z-10">
                                <div className="relative overflow-hidden rounded-lg">
                                  <img
                                    src="https://lh3.googleusercontent.com/pw/AP1GczOQqAUVVH_v0AG6o0zggVyrfhh4mhB6gLwxocCZSVQz7WmLZnT5TNJp1Sqav7FUqAGT_BuiXNcCrmchTqvxVRVMy2i1XcT2s7qf0UmFiKwrTPdiDS6vkZ-2wg6W9BBGVH1nEM7_Zdsv5nzuG82LgP8y=w1920-h983-s-no-gm?authuser=0"
                                    alt="Oprec 24"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <div className="mt-4 space-y-3">
                                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    Oprec 24
                                  </h3>
                                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                                    Sebuah project pembuatan website organisasi yang mencakup deskripsi, galeri foto,
                                    dan profil anggota. Website ini berfungsi sebagai dokumentasi digital untuk
                                    menyimpan dan membagikan kenangan berharga yang pernah ada, agar tetap bisa dikenang
                                    dan diakses kapan saja.
                                  </p>
                                  <div className="pt-4 flex items-center justify-between">
                                    <a
                                      href="https://oprec24.my.id/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                    >
                                      <span className="text-sm font-medium">Live Demo</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-external-link w-4 h-4"
                                      >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                      </svg>
                                    </a>
                                    <a
                                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                      href="/project/33"
                                    >
                                      <span className="text-sm font-medium">Details</span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right w-4 h-4"
                                      >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 w-full flex justify-start">
                      <button
                        className="
      px-3 py-1.5
      text-slate-300  
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          See More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="
          transition-transform 
          duration-300 
          group-hover:translate-y-0.5
        "
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              data-swipeable="true"
              style={{
                width: "100%",
                flexShrink: 0,
                overflow: "auto",
              }}
            >
              <div role="tabpanel" id="full-width-tabpanel-1" aria-labelledby="full-width-tab-1" dir="ltr"></div>
            </div>
            <div
              aria-hidden="true"
              data-swipeable="true"
              style={{
                width: "100%",
                flexShrink: 0,
                overflow: "auto",
              }}
            >
              <div role="tabpanel" id="full-width-tabpanel-2" aria-labelledby="full-width-tab-2" dir="ltr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
