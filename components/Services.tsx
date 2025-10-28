export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Elevate Your Fitness Journey
      </h2>
      <p className="text-lg text-slate-600">
        Experience world-class training, cutting-edge facilities, and a supportive community designed to help you achieve your wellness goals.
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
      
      {/* Large Feature - Top Left (spans 4 columns, 2 rows) */}
      <div className="md:col-span-4 md:row-span-2 bg-white border border-gray-200 shadow-sm rounded-2xl p-10 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-6">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              50+ Weekly Classes
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              From high-intensity interval training to restorative yoga, our diverse class schedule accommodates all fitness levels and preferences. Whether you're a beginner or advanced athlete, find the perfect workout to match your goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Class Types</p>
              <p className="text-slate-900 font-semibold">HIIT, Yoga, Spin, Boxing</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Schedule</p>
              <p className="text-slate-900 font-semibold">5 AM - 10 PM Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tall Feature - Top Right (spans 2 columns, 2 rows) */}
      <div className="md:col-span-2 md:row-span-2 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-xl mb-6">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Certified Expert Trainers
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our team brings an average of 10+ years of professional experience, holding certifications from leading fitness organizations.
          </p>
          <div className="mt-auto pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-slate-700">Personalized Training Plans</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-slate-700">Nutrition Guidance</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-slate-700">Progress Tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Feature - Bottom Left (spans 3 columns, 1 row) */}
      <div className="md:col-span-3 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl flex-shrink-0">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Flexible Membership Plans
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              No long-term contracts or hidden fees. Choose from monthly, quarterly, or annual plans with the freedom to pause or cancel anytime.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">Month-to-Month</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">Family Plans</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">Student Discounts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Feature - Bottom Right (spans 3 columns, 1 row) */}
      <div className="md:col-span-3 bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-start gap-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-xl flex-shrink-0">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              State-of-the-Art Facilities
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Train with premium equipment in our climate-controlled studios. Enjoy luxury amenities including spa-quality locker rooms, towel service, and complimentary refreshments.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">Premium Equipment</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">Spa Amenities</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">Free WiFi</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <p className="text-slate-600 mb-6">Ready to transform your fitness routine?</p>
      <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 shadow-sm">
        Start Your Free Trial
      </button>
    </div>
  </div>
</section>
  );
}