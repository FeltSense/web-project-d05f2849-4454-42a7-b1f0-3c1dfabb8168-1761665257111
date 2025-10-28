export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Real Results from Real Members
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Hear from our community about their transformation journey at PulseFlow Fitness Studio
      </p>
    </div>

    {/* Video Testimonials Grid */}
    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      {/* Featured Video Testimonial */}
      <div className="lg:row-span-2">
        <div className="bg-slate-900 rounded-lg overflow-hidden shadow-md h-full flex flex-col">
          <div className="relative aspect-[9/16] lg:aspect-[4/5] bg-slate-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Click to play video</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured Story
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full mr-4"></div>
              <div>
                <h3 className="text-white font-semibold">Sarah Mitchell</h3>
                <p className="text-slate-400 text-sm">Marketing Director</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              "Lost 35 pounds in 6 months and gained incredible strength. The trainers at PulseFlow created a personalized program that fit my busy schedule. The supportive community kept me accountable every step of the way."
            </p>
            <div className="flex items-center mt-4 text-blue-400 text-sm">
              <span className="font-semibold">6 months</span>
              <span className="mx-2">•</span>
              <span>35 lbs lost</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonial 2 */}
      <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm">
        <div className="relative aspect-video bg-slate-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
            <div>
              <h3 className="text-slate-900 font-semibold">James Rodriguez</h3>
              <p className="text-slate-600 text-sm">Software Engineer</p>
            </div>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            "After years of desk work, I had chronic back pain. The functional training classes and expert guidance helped me build core strength and eliminate pain completely. I'm now training for my first marathon."
          </p>
          <div className="flex items-center mt-3 text-blue-600 text-xs font-medium">
            <span>4 months</span>
            <span className="mx-2">•</span>
            <span>Pain-free</span>
          </div>
        </div>
      </div>

      {/* Video Testimonial 3 */}
      <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm">
        <div className="relative aspect-video bg-slate-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-slate-300 rounded-full mr-3"></div>
            <div>
              <h3 className="text-slate-900 font-semibold">Emily Chen</h3>
              <p className="text-slate-600 text-sm">Small Business Owner</p>
            </div>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            "The early morning HIIT classes fit perfectly into my schedule. I've increased my energy levels dramatically and my productivity at work has improved. The nutrition coaching was a game-changer for sustainable results."
          </p>
          <div className="flex items-center mt-3 text-blue-600 text-xs font-medium">
            <span>8 months</span>
            <span className="mx-2">•</span>
            <span>20 lbs lost</span>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Text Testimonial */}
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start">
          <div className="w-16 h-16 bg-slate-300 rounded-full mr-6 flex-shrink-0"></div>
          <div>
            <div className="flex items-center mb-3">
              <h3 className="text-slate-900 font-semibold text-lg">Michael Thompson</h3>
              <span className="mx-3 text-slate-400">•</span>
              <p className="text-slate-600">Financial Analyst</p>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              "At 45, I thought my best fitness years were behind me. PulseFlow proved me wrong. The age-appropriate strength training program helped me build muscle I didn't have in my 20s. The trainers understand body mechanics and injury prevention, which gave me confidence to push harder safely. I'm in the best shape of my life."
            </p>
            <div className="flex items-center text-sm">
              <div className="flex text-blue-600 mr-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span className="text-slate-600">Member since 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
        <div className="text-slate-600">Active Members</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
        <div className="text-slate-600">Average Rating</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-slate-900 mb-2">95%</div>
        <div className="text-slate-600">Retention Rate</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-slate-900 mb-2">10k+</div>
        <div className="text-slate-600">Classes Completed</div>
      </div>
    </div>
  </div>
</section>
  );
}