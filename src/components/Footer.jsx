

function Footer() {
  return (
    <div className="pb-5 text-[16px] text-gray-400 ">
    <div className="underline">
        <div className="mb-10">
            Questions? Contact us.
        </div>
        <div className="flex justify-between">
            <div className="w-50 mb-11 list-none">            
            <li className="mb-2">FAQ</li>
            <li className="mb-2" >Media Center</li>
            <li className="mb-2">Redeem Gift Cards</li>
            <li className="mb-2">Privacy</li>
            <li>Speed Test</li>            
            <li className="mt-8">Ad Choices</li>
            </div>               
            <div className="w-50 list-none">
            <li className="mb-2">Help Center</li>
            <li className="mb-2">Investor Relations</li>
            <li className="mb-2">Buy Gift Cards</li>
            <li className="mb-2">Cookie Preferences</li>
            <li className="mb-2">Legal Notices</li>
            </div>               
            <div className="w-50 list-none">
            <li className="mb-2">Account</li>
            <li className="mb-2">Jobs</li>
            <li className="mb-2">Ways to Watch</li>
            <li className="mb-2">Corporate Information</li>
            <li className="mb-2">Only on Netflix</li>
            </div>               
            <div className="w-50 list-none">
            <li className="mb-2">Netflix House</li>
            <li className="mb-2">Netflix Shop</li>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Do Not Sell or Share My Personal</li>
            <li>Information</li>
            </div>               
        </div>

        <select className="text-white border border-gray-500 py-1 px-2 my-5 pr-2 rounded">
        <option className="text-black" value="English">English</option>
        <option className="text-black" value="French">French</option>
        </select>
            
        <div className="mt-10">
        <div className="mb-1">Netflix Norway</div>
        <div className="text-[12px]">
            This page is protected by Google reCAPTCHA to ensure
            you are not a bot. <span className="text-blue-500 underline">Learn more</span>.
        </div>
        </div>
    </div>    
</div>
  )
}

export default Footer