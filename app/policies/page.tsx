import { Metadata } from 'next'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'

export const metadata: Metadata = {
    title: 'Policies - Ligero',
    description: 'Our privacy policy, shipping policy, return policy, and terms of service',
}

export default function PoliciesPage() {
    return (
        <div className="min-h-screen py-24 px-12">
            <div className="page-fade-in">
                <ThemeSwitcher />

                <div className="max-w-[800px] mx-auto leading-relaxed">
                    <h1 className="text-5xl mb-12 font-light text-center">OUR POLICY</h1>

                    <div className="mb-10">
                        <h3 className="text-2xl mb-5 opacity-90">Privacy Policy</h3>
                        <p className="opacity-80 mb-4">
                            We collect and process your personal information in accordance with applicable data protection laws.
                            Your privacy is important to us, and we are committed to protecting your personal information.
                        </p>
                        <p className="opacity-80 mb-4">
                            Information we collect includes contact details, payment information, and browsing data to enhance
                            your shopping experience.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-2xl mb-5 opacity-90">Shipping Policy</h3>
                        <p className="opacity-80 mb-4">
                            All orders are processed within <span className="number">1</span>-<span className="number">2</span> business days.
                            Shipping times vary based on location and selected shipping method.
                        </p>
                        <p className="opacity-80 mb-4">
                            Free shipping is available on orders over $<span className="number">150</span>.
                            Express shipping options are available at checkout.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-2xl mb-5 opacity-90">Return Policy</h3>
                        <p className="opacity-80 mb-4">
                            We accept returns within <span className="number">30</span> days of purchase.
                            Items must be in original condition with tags attached.
                        </p>
                        <p className="opacity-80 mb-4">
                            Refunds will be processed to the original payment method within <span className="number">5</span>-<span className="number">10</span> business
                            days after we receive your return.
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-2xl mb-5 opacity-90">Terms of Service</h3>
                        <p className="opacity-80 mb-4">
                            By using our website and purchasing our products, you agree to comply with our terms and conditions.
                        </p>
                        <p className="opacity-80 mb-4">
                            All content on this website is protected by copyright and intellectual property laws.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}