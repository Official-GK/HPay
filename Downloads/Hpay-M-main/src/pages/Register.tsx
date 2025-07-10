import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Register attempt:', formData);
    // TODO: Implement actual registration logic
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hpay-bg via-white to-hpay-sky/10 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">H</span>
            </div>
            <span className="text-3xl font-bold text-hpay-blue">Pay</span>
          </Link>
          <h1 className="text-3xl font-bold text-hpay-black mb-2">Create Account</h1>
          <p className="text-gray-600 text-lg">Join HPay and start your financial journey</p>
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-hpay-gray-blue/10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-hpay-black font-medium text-sm">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-hpay-black font-medium text-sm">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-hpay-black font-medium text-sm">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-11 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-hpay-black font-medium text-sm">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="h-11 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-hpay-black font-medium text-sm">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-hpay-blue transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-hpay-black font-medium text-sm">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="h-11 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-hpay-blue transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <input 
                type="checkbox" 
                className="rounded border-2 border-hpay-gray-blue/30 text-hpay-blue focus:ring-hpay-blue/20 mt-1" 
                required 
              />
              <span className="text-sm text-gray-600 leading-relaxed">
                I agree to the{' '}
                <Link to="/terms" className="text-hpay-blue hover:underline font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-hpay-blue hover:underline font-medium">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button type="submit" className="w-full h-12 btn-primary text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Create Account
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-hpay-blue hover:underline font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link to="/" className="text-hpay-blue hover:underline font-medium">
            0 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 